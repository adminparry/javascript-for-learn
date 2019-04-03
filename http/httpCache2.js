const http = require("http");
const url = require("url");
const path = require("path");
const mime = require("mime");
const fs = require("fs");0
const crypto = require("crypto");
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();


eventEmitter.on('res', function(rs,resp) { 
    rs.pipe(resp); 
}); 



const server = http.createServer((req, resp) => {
 let { pathname } = url.parse(req.url, true);
 pathname = pathname !== "/" ? pathname : "/index.html";

 // 获取读取文件的绝对路径
 let p = path.join(__dirname, pathname);

 // 查看路径是否合法
 fs.stat(p, (err, statObj) => {
  // 路径不合法则直接中断连接
  if (err) return resp.end("Not Found");

  let md5 = crypto.createHash("md5"); // 创建加密的转换流
  let rs = fs.createReadStream(p); // 创建可读流       
  
  
  // 读取文件内容并加密
  rs.on("data", (data) => {
    console.log(data);
    md5.update(data);

  });
  rs.on("end", () => {
    console.log(9);
   
    eventEmitter.emit('res',rs, resp);

   // let ctime = statObj.ctime.toGMTString(); // 获取文件最后修改时间
   // let flag = md5.digest("hex"); // 获取加密后的唯一标识

   // // 获取协商缓存的请求头
   // let ifModifiedSince = req.headers["if-modified-since"];
   // let ifNoneMatch = req.headers["if-none-match"];

   // if (ifModifiedSince === ctime || ifNoneMatch === flag) {
   //  resp.statusCode = 304;
   //  resp.end();
   // } else {
   //  // 设置协商缓存
   //  resp.setHeader("Last-Modified", ctime);
   //  resp.setHeader("Etag", flag);

   //  // 设置文件类型并响应给浏览器
   //  resp.setHeader("Content-Type", `${mime.getType(p)};charset=utf8`);
   //  rs.pipe(resp);
   // }

  });

 });
});

server.listen(3000, () => {
 console.log("server start 3000");
});