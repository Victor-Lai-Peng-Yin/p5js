//Tab2


// class Particle {
//   constructor(args){
//     let def = {
//       p: createVector(0,0), //位置
//       v: createVector(0,0), //速度
//       a: createVector(0,0), //加速度
//       color: color('red'), //顏色
// 			endColor: color('orange'),
			
//       r: 10, //大小、半徑
//     }
//     Object.assign(def,args)
//     Object.assign(this,def)
//   }
//   draw(){

//     //顯示
//     push()
//       noStroke()
//       translate(this.p) 
//       fill(this.color)
//       // square(0,0,this.r)
//       image(img, objParticle, 100, 40, 40);
		
//     pop()
		
//   }
//   update(){
		
// 	this.p.add(this.v)
//   this.v.add(this.a)
//   this.r*=0.993 
// 	this.color = lerpColor(this.color, this.endColor, 0.03) //每次變換0.05
		
		
//   }
// }

