## HTMLElement

HTMLElement 接口表示所有的 HTML 元素。一些HTML元素直接实现了HTMLElement接口，其它的间接实现HTMLElement接口.

## HTMLElement 接口属性

属性 | 描述
------------ | -------------

属性名称  属性类型  Description
HTMLElement.accessKey DOMString 获取/设置元素访问的快捷键
HTMLElement.accessKeyLabel  DOMString 返回一个包含元素访问的快捷键的字符串（只读）
HTMLElement.contentEditable DOMString 获取/设置元素的可编辑状态
HTMLElement.isContentEditable 只读  Boolean 表明元素的内容是否可编辑（只读）
HTMLElement.contextMenu HTMLMenuElement 设置/获取元素的右键菜单
HTMLElement.dataset 只读  DOMStringMap  
获取元素的自定义属性，是一个对象（key-value，只读）

HTMLElement.dir DOMString 
获取/设置元素的方向，可选的值有：ltr，rtl，auto

HTMLElement.draggable Boolean 设置/获取元素是否可以拖拽
HTMLElement.dropzone 只读 DOMSettableTokenList   
HTMLElement.hidden  Boolean 获取/设置元素是否隐藏
HTMLElement.itemScope   Boolean  
HTMLElement.itemType 只读 DOMSettableTokenList   
HTMLElement.itemId  DOMString  
HTMLElement.itemRef 只读  DOMSettableTokenList   
HTMLElement.itemProp 只读 DOMSettableTokenList   
HTMLElement.itemValue   object   
HTMLElement.lang  DOMString 获取/设置元素属性、文本、内容的语言
HTMLElement.offsetHeight 只读 double  元素自身可视高度加上上下border的宽度
HTMLElement.offsetLeft只读  double  元素自己border左边距离父元素border左边或者body元素border左边的距离
HTMLElement.offsetParent只读  Element 元素的父元素，如果没有就是body元素
HTMLElement.offsetTop只读 double  元素自己border顶部距离父元素顶部或者body元素border顶部的距离
HTMLElement.offsetWidth只读 double  元素自身可视宽度加上左右border的宽度
HTMLElement.properties 只读 HTMLPropertiesCollection   
HTMLElement.spellcheck  Boolean  
HTMLElement.style CSSStyleDeclaration 获取/设置元素的style属性
HTMLElement.tabIndex  long  获取/设置元素的tab键控制次序
HTMLElement.title DOMString 获取/设置元素的title属性
HTMLElement.translate   Boolean 获取/设置元素是否可以被翻译

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

