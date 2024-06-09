class Piece{
    constructor(square, width, height,color,board) {
        this.board = board;
        this.square = square;
        this.x = this.square.x;
        this.y = this.square.y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    update(position) {
        if ( this.detectCollision(position)&&position.isDown && this.board.selectedPiece != this ) {
            

                   this.board.selectedPiece = this;
                    console.log(this);
            
            
        }
    }
    
detectCollision(position)
{
    
    return (position.x >= this.x && position.x <= this.x + this.square.width && position.y >= this.y && position.y <= this.y + this.square.height);
}
}
export class Pawn extends Piece{
    constructor(square, width, height,color,board){
        super(square, width, height, color,board)
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
    constructor(square, height,color,board){
        super(square, height * 0.5, height, color,board)
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
    constructor(square, height,color,board){
        super(square, height * 0.5, height, color,board)
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
    constructor(square, height,color,board){
        super(square, height * 0.5, height, color,board)
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
    constructor(square, height,color,board){
        super(square, height * 0.5, height, color,board)
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
    constructor(square, height,color,board){
        super(square, height * 0.5, height, color,board)
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