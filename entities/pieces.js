class Piece{
    constructor(square, width, height,color) {
        this.square = square;
        this.x = this.square.x;
        this.y = this.square.y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.selected = false;
    }
    update(position) {
        if (position.x >= this.x && position.x <= this.x + this.square.width) {
            if (position.y >= this.y && position.y <= this.y + this.square.height) {
              if (position.isDown && this.selected == false) {
                this.selected = true;
                console.log(this);
            }
          }
        //   if (!position.isDown) {
        //     this.selected = false;
        //   }
    }
    
}
}
export class Pawn extends Piece{
    constructor(square, width, height,color){
        super(square, width, height, color)
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
    constructor(square, height,color){
        super(square, height * 0.5, height, color)
        if(this.color == "white"){
            this.image = whiteKing;
        }
        else{
            this.image = blackKing;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x+this.width*.5, this.y, this.width, this.height);
    }
   
}
export class Queen extends Piece{
    constructor(square, height,color){
        super(square, height * 0.5, height, color)
        if(this.color == "white"){
            this.image = whiteQueen;
        }
        else{
            this.image = blackQueen;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x+this.width*.5, this.y, this.width, this.height);
    }
   
}
export class Rook extends Piece{
    constructor(square, height,color){
        super(square, height * 0.5, height, color)
        if(this.color == "white"){
            this.image = whiteRook;
        }
        else{
            this.image = blackRook;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x+this.width*.5, this.y, this.width, this.height);
    }
   
}
export class Bishop extends Piece{
    constructor(square, height,color){
        super(square, height * 0.5, height, color)
        if(this.color == "white"){
            this.image = whiteBishop;
        }
        else{
            this.image = blackBishop;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x+this.width*.5, this.y, this.width, this.height);
    }
   
}
export class Knight extends Piece{
    constructor(square, height,color){
        super(square, height * 0.5, height, color)
        if(this.color == "white"){
            this.image = whiteKnight;
        }
        else{
            this.image = blackKnight;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x+this.width*.5, this.y, this.width, this.height);
    }
   
}