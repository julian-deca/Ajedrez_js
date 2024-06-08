import {King,Pawn,Queen,Bishop,Knight,Rook} from "/entities/pieces.js"
import {Board} from "/entities/board.js"

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;


const rectWidth = 200;
const rectHeight = 200;

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
    y: ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
  };
}

class MouseMovement {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isDown = false;
  }
  update() {
    canvas.addEventListener("mousedown", (e) => {
      const pos = getMousePos(canvas, e);
      this.x = pos.x;
      this.y = pos.y;
      this.isDown = true;
    });
    canvas.addEventListener("mouseup", (e) => {
      const pos = getMousePos(canvas, e);
      this.x = pos.x;
      this.y = pos.y;
      this.isDown = false;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (this.isDown) {
        const pos = getMousePos(canvas, e);
        this.x = pos.x;
        this.y = pos.y;
      }
    });
  }
}

class Rect {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = canvas.width * 0.5 - this.width * 0.5;
    this.y = canvas.height - 100 - this.height;
    this.speedY = 0;
    this.weight = 3;
    this.isDragged = false;
    this.onGround = true;
  }
  onGround() {
    return this.y == canvas.height - 100 - this.height;
  }
  notUnder() {
    return !(this.y > canvas.height - 100 - this.height);
  }
  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.strokeRect(this.x, this.y, this.width, this.height);
  }
  update(position) {
    if (!this.notUnder()) {
      this.speedY = 0;
      this.y = canvas.height - 100 - this.height;
    }
    if (position.x >= this.x && position.x <= this.x + this.width) {
      if (position.y >= this.y && position.y <= this.y + this.height) {
        if (position.isDown) {
          this.isDragged = true;
          this.x = position.x - this.width * 0.5;
          this.y = position.y - this.height * 0.5;
        } else if (this.isDragged) {
          this.isDragged = false;
        }
      }
    }
    if (!position.isDown) {
      this.isDragged = false;
    }
    if (!this.isDragged && this.onGround) {
      this.speedY += this.weight;
      this.y += this.speedY;
    }
  }
}


const mouse = new MouseMovement(0, 0);
const board = new Board(canvas.width, canvas.height);

const arr = [board ];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arr.forEach((obj) => obj.draw(ctx));
  
  mouse.update();
  arr.forEach((obj) => obj.update(mouse));
  requestAnimationFrame(animate);
}
animate();
