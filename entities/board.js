import {King,Pawn,Queen,Bishop,Knight,Rook} from "/entities/pieces.js"
export class Board {
    constructor(width,height) {
      this.x = 0;
      this.y = 0;
      this.width = width;
      this.height = height;
      this.squares = [];
      this.pieces = [];
      this.createSquares();
      this.addPieces();
    }
    draw(context) {
      
      this.squares.forEach((square)=> square.draw(context));
      context.lineWidth = 10;
      context.strokeRect(this.x, this.y, this.width, this.height);
      this.pieces.forEach((piece)=> piece.draw(context));
    }
    update(position){
        this.pieces.forEach((piece)=> piece.update(position));
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