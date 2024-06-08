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
        for(let i = 0; i < 8; i++){
            for (let j = 0; j < 8; j++){
                let color;
                if((i%2==0 && j%2!=0)||(i%2!=0 && j%2==0)){
                    color = "#739954";
                }
                else{
                   color = "#f7ffd6";
                }
            this.squares.push(new Square(i*100, j*100,100,100,color,{x:i,y:j}));
            }}
    }
    addPieces(){
        this.pieces.push(new King(this.squares.find(square => {
            return square.id.x == 4 && square.id.y == 7
          }), 100,"white"));
        this.pieces.push(new King(this.squares.find(square => {
            return square.id == {x:4,y:0}
          }), 100,"black"));

        this.pieces.push(new Queen(this.squares.find((square) => {
            return square.id.x == 3 && square.id.y == 7
          }), 100,"white"));
        this.pieces.push(new Queen(this.squares.find((square) => {
            return square.id == {x:3,y:0}
          }), 100,"black"));

        this.pieces.push(new Rook(this.squares.find(square => {
            return square.id == {x:0,y:7}
          }), 100,"white"));
        this.pieces.push(new Rook(this.squares.find(square => {
            return square.id == {x:7,y:7}
          }), 100,"white"));

        this.pieces.push(new Rook(this.squares.find(square => {
            return square.id == {x:0,y:0}
          }), 100,"black"));
        this.pieces.push(new Rook(this.squares.find(square => {
            return square.id == {x:7,y:0}
          }), 100,"black"));

        this.pieces.push(new Bishop(this.squares.find(square => {
            return square.id == {x:2,y:0}
          }), 100,"black"));
        this.pieces.push(new Bishop(this.squares.find(square => {
            return square.id == {x:5,y:0}
          }), 100,"black"));

        this.pieces.push(new Bishop(this.squares.find(square => {
            return square.id == {x:2,y:7}
          }), 100,"white"));
        this.pieces.push(new Bishop(this.squares.find(square => {
            return square.id == {x:5,y:7}
          }), 100,"white"));

        this.pieces.push(new Knight(this.squares.find(square => {
            return square.id == {x:1,y:0}
          }), 100,"black"));
        this.pieces.push(new Knight(this.squares.find(square => {
            return square.id == {x:6,y:0}
          }), 100,"black"));

        this.pieces.push(new Knight(this.squares.find(square => {
            return square.id == {x:1,y:7}
          }), 100,"white"));
        this.pieces.push(new Knight(this.squares.find(square => {
            return square.id == {x:6,y:7}
          }), 100,"white"));


        for(let i = 0; i<8;i++){
            this.pieces.push(new Pawn(this.squares.find(square => {
                return square.id == {x:i,y:1}
              }), 100, 100, 100,"black"));
            this.pieces.push(new Pawn(this.squares.find(square => {
                return square.id == {x:i,y:6}
              }), 100, 100,"white"));

        }
    }
    
  }
  class Square{
    constructor(x, y, width, height,color,id) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.id = id;
        this.piece = false;
    }
    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = "black";
    }

}