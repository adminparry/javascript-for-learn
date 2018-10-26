## EventTarget

EventTarget 是一个由可以接收事件的对象实现的接口，并且可以为它们创建侦听器。

Element，document 和 window 是最常见的事件目标，但是其他对象也可以是事件目标，比如XMLHttpRequest，AudioNode，AudioContext 等等。

许多事件目标（包括元素，文档和 window）还支持通过 on... 属性和属性设置事件处理程序。


## EventTarget 接口方法

方法 | 描述
------------ | -------------
addEventListener() |	在EventTarget上注册特定事件类型的事件处理程序。
removeEventListener() |	EventTarget中删除事件侦听器。
dispatchEvent() |	将事件分派到此EventTarget。


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

