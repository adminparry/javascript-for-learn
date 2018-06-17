## 运算符


## 算术运算符

<table class="reference">
<tbody><tr>
<th style="width:10%">运算符</th>
<th style="width:25%">描述</th>
<th>例子</th>
<th>y 值</th>
<th>x 值</th>
<th style="width:10%">在线实例</th>
</tr>
<tr>
<td>+</td>
<td>加法</td>
<td>x = y + 2</td>
<td>y = 5</td>
<td>x = 7</td>
<td><a target="_blank" class="tryitbtn" style="float:right;width:55px;padding-top:0px;padding-bottom:1px" href="/try/try.php?filename=tryjsref_oper_add">实例 »</a></td>
</tr>
<tr>
<td>-</td>
<td>减法</td>
<td>x = y - 2</td>
<td>y = 5</td>
<td>x = 3</td>
<td><a target="_blank" class="tryitbtn" style="float:right;width:55px;padding-top:0px;padding-bottom:1px" href="/try/try.php?filename=tryjsref_oper_sub">实例 »</a></td>
</tr>
<tr>
<td>*</td>
<td>乘法</td>
<td>x = y * 2</td>
<td>y = 5</td>
<td>x = 10</td>
<td><a target="_blank" class="tryitbtn" style="float:right;width:55px;padding-top:0px;padding-bottom:1px" href="/try/try.php?filename=tryjsref_oper_mult">实例 »</a></td>
</tr>
<tr>
<td>/</td>
<td>除法
</td>
<td>x = y / 2</td>
<td>y = 5</td>
<td>x = 2.5</td>
<td><a target="_blank" class="tryitbtn" style="float:right;width:55px;padding-top:0px;padding-bottom:1px" href="/try/try.php?filename=tryjsref_oper_div">实例 »</a></td>
</tr>
<tr>
<td>%</td>
<td>余数</td>
<td>x = y % 2</td>
<td>y = 5</td>
<td>x = 1</td>
<td><a target="_blank" class="tryitbtn" style="float:right;width:55px;padding-top:0px;padding-bottom:1px" href="/try/try.php?filename=tryjsref_oper_mod">实例 »</a></td>
</tr>
<tr>
<td rowspan="2">++</td>
<td rowspan="2">自增</td>
<td>x = ++y</td>
<td>y = 6</td>
<td>x = 6</td>
<td><a target="_blank" class="tryitbtn" style="float:right;width:55px;padding-top:0px;padding-bottom:1px" href="/try/try.php?filename=tryjsref_oper_incr">实例 »</a></td>
</tr>
<tr class="fixzebra">
<td>x = y++</td>
<td>y = 6</td>
<td>x = 5</td>
<td><a target="_blank" class="tryitbtn" style="float:right;width:55px;padding-top:0px;padding-bottom:1px" href="/try/try.php?filename=tryjsref_oper_incr2">实例 »</a></td>
</tr>
<tr style="background-color:#ffffff">
<td rowspan="2">--</td>
<td rowspan="2">自减</td>
<td>x = --y</td>
<td>y = 4</td>
<td>x = 4</td>
<td><a target="_blank" class="tryitbtn" style="float:right;width:55px;padding-top:0px;padding-bottom:1px" href="/try/try.php?filename=tryjsref_oper_decr">实例 »</a></td>
</tr>
<tr style="background-color:#ffffff">
<td>x = y--</td>
<td>y = 4</td>
<td>x = 5</td>
<td><a target="_blank" class="tryitbtn" style="float:right;width:55px;padding-top:0px;padding-bottom:1px" href="/try/try.php?filename=tryjsref_oper_decr2">实例 »</a></td>
</tr>
</tbody></table>

## 实现
```javascript
var EventTarget = function() {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function(type, callback) {
  if(!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function(type, callback) {
  if(!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for(var i = 0, l = stack.length; i < l; i++) {
    if(stack[i] === callback){
      stack.splice(i, 1);
      return this.removeEventListener(type, callback);
    }
  }
};

EventTarget.prototype.dispatchEvent = function(event) {
  if(!(event.type in this.listeners)) {
    return;
  }
  var stack = this.listeners[event.type];
  event.target = this;
  for(var i = 0, l = stack.length; i < l; i++) {
      stack[i].call(this, event);
  }
};
```

