import {King,Pawn,Queen,Bishop,Knight,Rook} from "/entities/pieces.js"

export class Board {
    constructor(width,height,grid) {
      this.grid = grid;
      this.x = 0;
      this.y = 0;
      this.width = width;
      this.height = height;
      this.squares = [];
      this.pieces = [];
      this.selectedPiece = false;
      this.selectedSquare = false;
      this.turn = "white";
      this.squareSize = width/8
      // this.createSquares();
      // this.addPieces();
      this.refresh()
    }
    draw(context) {
      
      this.squares.forEach((square)=> square.draw(context));
      
      this.pieces.forEach((piece)=> piece.draw(context));
    }
    update(position){
      if (this.selectedPiece){

      }
        this.pieces.forEach((piece)=> piece.update(position));
        if(position.isDown && this.selectedPiece != false && ! this.selectedPiece.detectCollision(position) && this.selectedSquare == false){
            this.selectedSquare = this.squares.find(square => square.detectCollision(position)); 
            if (this.selectedSquare){
                this.grid[this.selectedPiece.square.id.y][this.selectedPiece.square.id.x] = 0
                this.grid[this.selectedSquare.id.y][this.selectedSquare.id.x] = this.selectedPiece.value;
                console.log(this.grid[this.selectedPiece.square.id.x][this.selectedPiece.square.id.y])
                console.log(this.selectedSquare)

                this.refresh();
                this.nextTurn();
            }
            this.selectedSquare = false;
            this.selectedPiece = false;
            position.isDown = false;
            // console.log(this.selectedPiece);
        }
     
    }
    refresh() {
      this.squares.splice(0,this.squares.length -1);
      this.pieces.splice(0,this.pieces.length -1);

      for(let i = 0; i < this.grid.length; i++) {
        for(let j = 0; j < this.grid[i].length; j++) {
          {
            let color;
            if((i%2==0 && j%2!=0)||(i%2!=0 && j%2==0)){
                color = "#739954";
            }
            else{
               color = "#f7ffd6";
            }
        let square = new Square(i*this.squareSize, j*this.squareSize,this.squareSize,this.squareSize,color,{x:i,y:j})
        this.squares.push(square);
        let mapObj = this.grid[j][i];
        switch (mapObj) {
          case 1:
            this.pieces.push(new King(square,"white",this));
            break;
          case 2:
            this.pieces.push(new Queen(square,"white",this));
            break;
          case 3:
            this.pieces.push(new Bishop(square,"white",this));
            break;
          case 4:
            this.pieces.push(new Knight(square,"white",this));
            break;
          case 5:
            this.pieces.push(new Rook(square,"white",this));
            break;
          case 6:
            this.pieces.push(new Pawn(square,"white",this));
            break;
          case 7:
            this.pieces.push(new King(square,"black",this));
            break;
          case 8:
            this.pieces.push(new Queen(square,"black",this));
            break;
          case 9:
            this.pieces.push(new Bishop(square,"black",this));
            break;
          case 10:
            this.pieces.push(new Knight(square,"black",this));
            break;
          case 11:
            this.pieces.push(new Rook(square,"black",this));
            break;
          case 12:
            this.pieces.push(new Pawn(square,"black",this));
            break;
        }
        }
      }
    }
  }
   nextTurn(){
    if(this.turn == "white"){
      this.turn = "black";
    }
    else{
      this.turn = "white";
    }
   }
    
  //   isOccupied(square) {
  //     return square.piece !== false;
  // }

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
    detectCollision(position)
{
    return (position.x >= this.x && position.x <= this.x + this.width && position.y >= this.y && position.y <= this.y + this.height);
}

}