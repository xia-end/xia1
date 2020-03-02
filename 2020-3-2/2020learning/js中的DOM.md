## js中的DOM
### getElementsByName()方法
返回带有指定名称的节点对象的集合
 document.getElementsByName("name");

 ### 注意:
 1.  因为文档中的 name 属性可能不唯一，所有 getElementsByName() 方法返回的是元素的数组，而不是一个元素。
2.  和数组类似也有length属性，可以和访问数组一样的方法来访问，从0开始。
### getElementsByTagName()方法
返回带有指定标签名的节点对象的集合。返回元素的顺序是它们在文档中的顺序。
document.getElementsByTagName("Tagname");
### 注意:
1. Tagname是标签的名称，如p、a、img等标签名。
2. 和数组类似也有length属性，可以和访问数组一样的方法来访问，所以从0开始。
### getElementById、getElementsByName、getElementsByTagName的区别
1. getElementById通过指定id获取元素
2. getElementsByName通过元素名称name属性获取元素
3. getElementsByTagName通过标签名称获取元素
## getAttribute()方法
通过元素节点的属性名称获取属性的值
elementNode.getAttribute(name)

### 注意:
1. elementNode：使用getElementById()、getElementsByTagName()等方法，获取到的元素节点。
2. name：要想查询的元素节点的属性名字
## setAttribute()方法
setAttribute() 方法增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。
elementNode.setAttribute(name,value)
###　说明：
1. name: 要设置的属性名。
2. value: 要设置的属性值。
### 注意：
1. 把指定的属性设置为指定的值。如果不存在具有指定名称的属性，该方法将创建一个新属性。
2. 类似于getAttribute()方法，setAttribute()方法只能通过元素节点对象调用的函数。
## 节点属性
在文档对象模型 (DOM) 中，每个节点都是一个对象。DOM 节点有三个重要的属性 ：
1. nodeName : 节点的名称
2. nodeValue ：节点的值
3. nodeType ：节点的类型
### 一、nodeName 属性: 节点的名称，是只读的。
1. 元素节点的 nodeName 与标签名相同
2. 属性节点的 nodeName 是属性的名称
3. 文本节点的 nodeName 永远是 #text
4. 文档节点的 nodeName 永远是 #document
### 二、nodeValue 属性：节点的值
1. 元素节点的 nodeValue 是 undefined 或 null
2. 文本节点的 nodeValue 是文本自身
3. 属性节点的 nodeValue 是属性的值
### 三、nodeType 属性: 节点的类型，是只读的。以下常用的几种结点类型:
元素类型    节点类型
  元素          1
  属性          2
  文本          3
  注释          8
  文档          9
## 访问子节点childNodes
访问选定元素节点下的所有子节点的列表，返回的值可以看作是一个数组，他具有length属性。
### 语法：
elementNode.childNodes
### 注意：
如果选定的节点没有子节点，则该属性返回不包含节点的 NodeList。
## 访问子节点的第一和最后项
一、firstChild 属性返回‘childNodes’数组的第一个子节点。如果选定的节点没有子节点，则该属性返回 NULL。
### 语法：
node.firstChild
### 说明：
与elementNode.childNodes[0]是同样的效果。 
二、 lastChild 属性返回‘childNodes’数组的最后一个子节点。如果选定的节点没有子节点，则该属性返回 NULL。
### 语法：
node.lastChild
### 说明：
与elementNode.childNodes[elementNode.childNodes.length-1]是同样的效果。 
### 注意: 
上一节中，我们知道Internet Explorer 会忽略节点之间生成的空白文本节点，而其它浏览器不会。我们可以通过检测节点类型，过滤子节点
## 访问父节点parentNode
获取指定节点的父节点
### 语法：
elementNode.parentNode
### 注意:
父节点只能有一个。
## 访问祖节点:
elementNode.parentNode.parentNode
### 注意: 
浏览器兼容问题，chrome、firefox等浏览器标签之间的空白也算是一个文本节点。
## 访问兄弟节点
1. nextSibling 属性可返回某个节点之后紧跟的节点（处于同一树层级中）。
### 语法：
nodeObject.nextSibling
### 说明：
如果无此节点，则该属性返回 null。
2. previousSibling 属性可返回某个节点之前紧跟的节点（处于同一树层级中）。
### 语法：
nodeObject.previousSibling  
### 说明：
如果无此节点，则该属性返回 null。
### 注意: 
两个属性获取的是节点。Internet Explorer 会忽略节点间生成的空白文本节点（例如，换行符号），而其它浏览器不会忽略。
### 解决问题方法:
判断节点nodeType是否为1, 如是为元素节点，跳过。
## 插入节点appendChild()
在指定节点的最后一个子节点列表之后添加一个新的子节点。
### 语法:
appendChild(newnode)
### 参数:
newnode：指定追加的节点。
## 插入节点insertBefore()
insertBefore() 方法可在已有的子节点前插入一个新的子节点。
### 语法:
insertBefore(newnode,node);
### 参数:
newnode: 要插入的新节点。
node: 指定此节点前插入节点。
### 注意: 
otest.insertBefore(newnode,node); 也可以改为:  otest.insertBefore(newnode,otest.childNodes[0]); 
## 删除节点removeChild()
removeChild() 方法从子节点列表中删除某个节点。如删除成功，此方法可返回被删除的节点，如失败，则返回 NULL。
### 语法:
nodeObject.removeChild(node)
### 参数:
node ：必需，指定需要删除的节点。
### 注意: 
把删除的子节点赋值给 x，这个子节点不在DOM树中，但是还存在内存中，可通过 x 操作。
## 替换元素节点replaceChild()
replaceChild 实现子节点(对象)的替换。返回被替换对象的引用。 
### 语法：
node.replaceChild (newnode,oldnew ) 
### 参数：
newnode : 必需，用于替换 oldnew 的对象。 
oldnew : 必需，被 newnode 替换的对象。
### 注意: 
1. 当 oldnode 被替换时，所有与之相关的属性内容都将被移除。 
2. newnode 必须先被建立。 
## 创建元素节点createElement
createElement()方法可创建元素节点。此方法可返回一个 Element 对象。
### 语法：
document.createElement(tagName)
### 参数:
tagName：字符串值，这个字符串用来指明创建元素的类型。
### 注意：
要与appendChild() 或 insertBefore()方法联合使用，将元素显示在页面中。