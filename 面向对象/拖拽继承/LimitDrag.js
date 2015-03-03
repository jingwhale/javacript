// 面向对象的拖拽
// 改写原有拖拽
// 对象的继承
// 什么是继承
// 在原有类的基础上，略作修改，得到一个新的类
// 不影响原有类的功能
// instanceof运算符
// 查看对象是否是某个类的实例

// 限制范围的拖拽类
// 构造函数伪装
// 属性的继承
// 原理：欺骗构造函数
// call的使用
// 原型链
// 方法的继承
// 原理：复制方法
// 覆盖原型和方法复制



function LimitDrag(id)
{
	Drag.call(this, id);	//继承属性
}

for(var i in Drag.prototype)//继承方法
{
	LimitDrag.prototype[i]=Drag.prototype[i];
}

LimitDrag.prototype.fnMove=function (ev)//重写方法
{
	var oEvent=ev||event;
	var l=oEvent.clientX-this.disX;
	var t=oEvent.clientY-this.disY;
	
	if(l<0)
	{
		l=0;
	}
	else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth)
	{
		l=document.documentElement.clientWidth-this.oDiv.offsetWidth;
	}
	
	this.oDiv.style.left=l+'px';
	this.oDiv.style.top=t+'px';
};