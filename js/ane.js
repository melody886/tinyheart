var aneObj = function()
{
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;
}
aneObj.prototype.num = 40;
aneObj.prototype.init = function()
{
		for(var i = 0;i < this.num; i++)
		{
			this.rootx[i] = i * 16 + Math.random() * 20;
			this.headx[i] = this.rootx[i];
			this.heady[i] = canHeight- 250 + Math.random() * 50; 
			this.amp[i] = Math.random() * 50 + 70;
		}
}
aneObj.prototype.draw = function()
{
	
	this.alpha += deltaTime * 0.0007;
	var l = Math.sin(this.alpha);
	ctx2.save();//save方法用于临时保存画布坐标系统的状态
	
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for(var i = 0;i < this.num; i++)
	{
		//beginPath,moveTo,LineTo,stroke,stokestyle,lineWidth,lineCap,globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i] = this.rootx[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i],canHeight - 100,this.headx[i],this.heady[i]);

		ctx2.stroke();	
	}
	ctx2.restore();//restore方法可以用来恢复save之后设置的状态
}