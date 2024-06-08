class Piece{
    constructor(x, y, width, height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.selected = false;
    }
    update(position) {
        if (position.x >= this.x && position.x <= this.x + this.width) {
            if (position.y >= this.y && position.y <= this.y + this.height) {
              if (position.isDown) {
                this.selected = true;
                this.x = position.x - this.width * 0.5;
                this.y = position.y - this.height * 0.5;
              } else if (this.isDragged) {
                this.selected = false;
              }
            }
          }
          if (!position.isDown) {
            this.selected = false;
          }
    }
    
}
export class Pawn extends Piece{
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
export class King extends Piece{
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
export class Queen extends Piece{
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
export class Rook extends Piece{
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
export class Bishop extends Piece{
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
export class Knight extends Piece{
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