const http = require("http");
const url = require("url");
const path = require("path");
const mime = require("mime");
const fs = require("fs");

const server = http.createServer((req, res) => {
 let { pathname } = url.parse(req.url, true);
 pathname = pathname !== "/" ? pathname : "/index.html";

 // 获取读取文件的绝对路径
 let p = path.join(__dirname, pathname);

 // 查看路径是否合法
 fs.access(p, err => {
  // 路径不合法则直接中断连接
  if (err) return res.end("Not Found");

  // 设置强制缓存
  res.setHeader("Expires", new Date(Date.now() + 315360000000).toGMTString());
  res.setHeader("Cache-Control", "max-age=315360000");

  // 设置文件类型并响应给浏览器
  res.setHeader("Content-Type", `${mime.getType(p)};charset=utf8`);
  fs.createReadStream(p).pipe(res);
 });
});

server.listen(3000, () => {
 console.log("server start 3000");
});