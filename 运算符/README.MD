## 运算符


## 算术运算符

| One     | Two        | Three   | Four          | 
| ------------- |-------------| ---------| ------------- |
| One                | Two               | Three          | Four                |

| One     | Two        | Three   | Four          | 
| ------------- |-------------| ---------| ------------- |
| Span Across ||||

运算符 |描述  |例子  |y 值 |x 值 
------------ | ------------- | ------------- | ------------- | -------------

+ |加法  |x = y + 2 |y = 5 |x = 7 
- |减法  |x = y - 2 |y = 5 |x = 3 
* |乘法  |x = y * 2 |y = 5 |x = 10 
/ |除法  |x = y / 2 |y = 5 |x = 2.5 
% |余数  |x = y % 2 |y = 5 |x = 1 
++  |自增  |x = ++y |y = 6 |x = 6 
x = y++ y = 6 |x = 5 
--  |自减  |x = --y |y = 4 |x = 4 
x = y-- |y = 4 |x = 5

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

