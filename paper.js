class paper
{ 

	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
		}

		this.x=x;
		this.y=y;
     	this.image=loadImage("paper.png")
        this.body = Bodies.circle(this.x,this.y,50,options);
		World.add(world,this.body);
	}
		  

	display()
	{   var pos = this.body.position
		push();
		translate(pos.x,pos.y);
		imageMode(RADIUS);
		image(this.image,0,0,50,50);
		pop();
           
        }
	}
    