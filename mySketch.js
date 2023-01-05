let particles = []
let img;
let img2;
let img3;
let img4;
let img5;
let ran;
let bg;

function firework({ p }) {
  push()
  let baseHue = random(300)

  colorMode(HSB)
  for (let i = 0; i < 11; i++) {

    let hue = random(0, 120)
    let objParticle = new Particle({
      p: (p && p.copy()) || createVector(width / 2, height / 2), //複製新的位置給當下的粒子，讓它重複100遍
      v: p5.Vector.random2D().mult(random(1, 10)),
      a: createVector(0, 0.2),
      r: random(20),
      color: color((baseHue + hue) % 360, 360, 360)


    })
    particles.push(objParticle)
  }
  //pop();
}

let images = []
function setup() {
  createCanvas(1000, 1000);
  background(100);
  fill(0)
  rect(0, 0, width, height)
  firework({});

  // img = loadImage('https://th.bing.com/th/id/OIP.i6H062IPx9pSFfhNEYGvLAHaHa?pid=ImgDet&rs=1');
  img = loadImage('/Color Balance 1.png');
  img2 = loadImage('/Layer 6.png');
  img3 = loadImage('/Layer 8.png');
  img4 = loadImage('/Layer 10.png');
  img5 = loadImage('/Brightness_Contrast 1.png');
  bg = loadImage('/Black & White 1.jpg')
  images = [img, img2, img3, img4];
  ranimage = random(images);
  console.log(images.length)


}

function draw() {
  
  fill(0, 5) //留下煙火軌跡
  rect(0, 0, width, height)
  background(bg);
  for (let objParticle of particles) {
    objParticle.update()
    if (ran == 0) {
      objParticle.draw()
    }
    else if (ran == 1) {
      objParticle.draw2()
    }
    else if (ran == 2) {
      objParticle.draw3()
    }
    else if (ran == 3) {
      objParticle.draw4()
    }
    else if (ran == 4)
    {
      objParticle.draw5()
    }
    //image(img, objParticle, 100, 40, 40);
  }
  // if (frameCount%100==0){
  // firework()
  //}
  particles = particles.filter(obj => obj.p.y < height) //留下小於畫面的物件

  //fill(0)
  //rect(0, 0, 100, 50)
  //計算畫面中粒子數
  //fill(255)
  //textSize(20)
  //text(particles.length, 50, 50)
  
}
function mousePressed() {
  firework({
    p: createVector(mouseX, mouseY),
    fireR: random(1, 100), //煙火的大小
    particleR: random(1, 10) //粒子的大小
  })
  ran = int(random(0, 5))
  console.log(ran)
}

class Particle {
  constructor(args) {
    let def = {
      p: createVector(0, 0), //位置
      v: createVector(0, 0), //速度
      a: createVector(0, 0), //加速度
      color: color('red'), //顏色
      endColor: color('orange'),

      r: 10, //大小、半徑
    }
    Object.assign(def, args)
    Object.assign(this, def)
  }
  draw() {

    //顯示
    push()
    noStroke()
    translate(this.p)
    fill(this.color)
    // square(0,0,this.r)

    image(img, 0, 0, 120, 120);
    pop()

  }
  draw2() {

    //顯示
    push()
    noStroke()
    translate(this.p)
    fill(this.color)
    // square(0,0,this.r)

    image(img2, 0, 0, 120, 120);
    pop()

  }
  draw3() {

    //顯示
    push()
    noStroke()
    translate(this.p)
    fill(this.color)
    // square(0,0,this.r)

    image(img3, 0, 0, 120, 120);
    pop()

  }
  draw4() {

    //顯示
    push()
    noStroke()
    translate(this.p)
    fill(this.color)
    // square(0,0,this.r)

    image(img4, 0, 0, 120, 120);
    pop()

  }
  draw5() {

    //顯示
    push()
    noStroke()
    translate(this.p)
    fill(this.color)
    // square(0,0,this.r)

    image(img5, 0, 0, 120, 120);
    pop()

  }
  update() {

    this.p.add(this.v)
    this.v.add(this.a)
    this.r *= 0.993
    this.color = lerpColor(this.color, this.endColor, 0.03) //每次變換0.05


  }
}