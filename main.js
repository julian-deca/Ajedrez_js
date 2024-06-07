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


class Board {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.squares = [];
      this.pieces = [];
      this.createSquares();
      this.addPieces();
    }
    draw(context) {
      
      this.squares.forEach((square)=> square.draw(context));
      this.pieces.forEach((piece)=> piece.draw(context));
      context.lineWidth = 10;
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
    createSquares(){
        for(let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                let color;
                if((i%2==0 && j%2!=0)||(i%2!=0 && j%2==0)){
                    color = "#739954";
                }
                else{
                   color = "#f7ffd6";
                }
            this.squares.push(new Square(i*100, j*100,100,100,color));
            }}
    }
    addPieces(){
        this.pieces.push(new King(400, 700, 100,"white"));
        this.pieces.push(new King(400, 0, 100,"black"));

        this.pieces.push(new Queen(300, 700, 100,"white"));
        this.pieces.push(new Queen(300, 0, 100,"black"));

        this.pieces.push(new Rook(0, 700, 100,"white"));
        this.pieces.push(new Rook(700, 700, 100,"white"));

        this.pieces.push(new Rook(0, 0, 100,"black"));
        this.pieces.push(new Rook(700, 0, 100,"black"));

        this.pieces.push(new Bishop(200, 0, 100,"black"));
        this.pieces.push(new Bishop(500, 0, 100,"black"));

        this.pieces.push(new Bishop(200, 700, 100,"white"));
        this.pieces.push(new Bishop(500, 700, 100,"white"));

        this.pieces.push(new Knight(100, 0, 100,"black"));
        this.pieces.push(new Knight(600, 0, 100,"black"));

        this.pieces.push(new Knight(100, 700, 100,"white"));
        this.pieces.push(new Knight(600, 700, 100,"white"));


        for(let i = 0; i<8;i++){
            this.pieces.push(new Pawn(i*100, 100, 100, 100,"black"));
            this.pieces.push(new Pawn(i*100, 600, 100, 100,"white"));

        }
    }
  }
class Square{
    constructor(x, y, width, height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = "black";
      

    }

}
class Piece{
    constructor(x, y, width, height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
}
class Pawn extends Piece{
    constructor(x, y, width, height,color){
        super(x, y, width, height, color)
        if(this.color == "white"){
            this.image = whitePawn;
        }
        else{
            this.image = blackPawn;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
   
}
class King extends Piece{
    constructor(x, y, height,color){
        super(x+height*.25, y, height * 0.5, height, color)
        if(this.color == "white"){
            this.image = whiteKing;
        }
        else{
            this.image = blackKing;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
   
}
class Queen extends Piece{
    constructor(x, y, height,color){
        super(x+height*.25, y, height * 0.5, height, color)
        if(this.color == "white"){
            this.image = whiteQueen;
        }
        else{
            this.image = blackQueen;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
   
}
class Rook extends Piece{
    constructor(x, y, height,color){
        super(x+height*.25, y, height * 0.5, height, color)
        if(this.color == "white"){
            this.image = whiteRook;
        }
        else{
            this.image = blackRook;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
   
}
class Bishop extends Piece{
    constructor(x, y, height,color){
        super(x+height*.25, y, height * 0.5, height, color)
        if(this.color == "white"){
            this.image = whiteBishop;
        }
        else{
            this.image = blackBishop;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
   
}
class Knight extends Piece{
    constructor(x, y, height,color){
        super(x+height*.25, y, height * 0.5, height, color)
        if(this.color == "white"){
            this.image = whiteKnight;
        }
        else{
            this.image = blackKnight;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
   
}
const mouse = new MouseMovement(0, 0);
const board = new Board();

const arr = [board ];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arr.forEach((obj) => obj.draw(ctx));
  mouse.update();
  requestAnimationFrame(animate);
}
animate();
