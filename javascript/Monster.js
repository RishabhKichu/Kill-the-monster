class Monster {
  constructor(x, y, radius) {
    const options = {
      density: 1,
      frictionAir: 1,
      isStatic: true,
    };
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);

    this.height = radius * 2;
    this.image = loadImage("images/Monster-01.png");
    this.width = radius * 2;
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    imageMode(CENTER);
    fill(200);
    translate(pos.x, pos.y);
    rotate(angle);
    image(this.image, 0, 0, this.height, this.width);
    pop();
  }
}
