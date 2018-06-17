## Window 对象集合

集合 | 描述
------------ | -------------
frames[]	|
返回窗口中所有命名的框架。

该集合是 Window 对象的数组，每个 Window 对象在窗口中含有一个框架或 <iframe>。属性 frames.length 存放数组 frames[] 中含有的元素个数。注意，frames[] 数组中引用的框架可能还包括框架，它们自己也具有 frames[] 数组。

## Window 对象属性

方法 | 描述
------------ | -------------
closed	|返回窗口是否已被关闭。
defaultStatus	|设置或返回窗口状态栏中的默认文本。
document	|对 Document 对象的只读引用。请参阅 Document 对象。
history	|对 History 对象的只读引用。请参数 History 对象。
innerheight	|返回窗口的文档显示区的高度。
innerwidth	|返回窗口的文档显示区的宽度。
length	|设置或返回窗口中的框架数量。
location	|用于窗口或框架的 Location 对象。请参阅 Location 对象。
name	|设置或返回窗口的名称。
Navigator	|对 Navigator 对象的只读引用。请参数 Navigator 对象。
opener	|返回对创建此窗口的窗口的引用。
outerheight	|返回窗口的外部高度。
outerwidth	|返回窗口的外部宽度。
pageXOffset	|设置或返回当前页面相对于窗口显示区左上角的 X 位置。
pageYOffset	|设置或返回当前页面相对于窗口显示区左上角的 Y 位置。
parent	|返回父窗口。
Screen	|对 Screen 对象的只读引用。请参数 Screen 对象。
self	|返回对当前窗口的引用。等价于 Window 属性。
status	|设置窗口状态栏的文本。
top	|返回最顶层的先辈窗口。
window	|window 属性等价于 self 属性，它包含了对窗口自身的引用。
screenLeft
screenTop
screenX
screenY
|只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari 和 Opera 支持 screenLeft 和 screenTop，而 Firefox 和 Safari 支持 screenX 和 screenY。

## Window 对象方法
方法 | 描述
------------ | -------------
alert()	|显示带有一段消息和一个确认按钮的警告框。
blur()	|把键盘焦点从顶层窗口移开。
clearInterval()	|取消由 setInterval() 设置的 timeout。
clearTimeout()	|取消由 setTimeout() 方法设置的 timeout。
close()	|关闭浏览器窗口。
confirm()	|显示带有一段消息以及确认按钮和取消按钮的对话框。
createPopup()	|创建一个 pop-up 窗口。
focus()	|把键盘焦点给予一个窗口。
moveBy()	|可相对窗口的当前坐标把它移动指定的像素。
moveTo()	|把窗口的左上角移动到一个指定的坐标。
open()	|打开一个新的浏览器窗口或查找一个已命名的窗口。
print()	|打印当前窗口的内容。
prompt()	|显示可提示用户输入的对话框。
resizeBy()	|按照指定的像素调整窗口的大小。
resizeTo()	|把窗口的大小调整到指定的宽度和高度。
scrollBy()	|按照指定的像素值来滚动内容。
scrollTo()	|把内容滚动到指定的坐标。
setInterval()	|按照指定的周期（以毫秒计）来调用函数或计算表达式。
setTimeout()	|在指定的毫秒数后调用函数或计算表达式。

