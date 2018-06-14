## 创建 Number 对象的语法：
```javascript
new Boolean(value);	//构造函数
Boolean(value);		//转换函数
```
## Number 对象属性

属性 |	描述
------------ | -------------
constructor |	返回对创建此对象的 Number 函数的引用。
MAX_VALUE |	可表示的最大的数。
MIN_VALUE	|可表示的最小的数。
NaN |	非数字值。
NEGATIVE_INFINITY |	负无穷大，溢出时返回该值。
POSITIVE_INFINITY |	正无穷大，溢出时返回该值。
prototype |	使您有能力向对象添加属性和方法。

## Number 对象方法

方法	 | 描述
------------ | -------------
toString |	把数字转换为字符串，使用指定的基数。
toLocaleString |	把数字转换为字符串，使用本地数字格式顺序。
toFixed |	把数字转换为字符串，结果的小数点后有指定位数的数字。
toExponential |	把对象的值转换为指数计数法。
toPrecision |	把数字格式化为指定的长度。
valueOf |	返回一个 Number 对象的基本数字值。