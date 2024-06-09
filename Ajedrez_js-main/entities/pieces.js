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
        if(this.puedeMoverse()){
        if ( this.detectCollision(position)&&position.isDown && this.board.selectedPiece != this ) {
            

                   this.board.selectedPiece = this;
                    console.log(this);
            
            
        }
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
            this.direction = -1;
            this.startRow = 6;
        }
        else{
            this.image = blackPawn;
            this.direction = 1;
            this.startRow = 1;
        }
        
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
   
    puedeMoverse(squareObj){
        const row = this.square.y;
        const col = this.square.x;
        const rowObj = squareObj.y;
        const colObj = squareObj.x;
        const colDiff = Math.abs(colObj - col);
        
        if (colObj === col) {
            if (rowObj === row + this.direction && !this.board.isOccupied(squareObj)) {
                return true;
            }   
        if (row === this.startRow && rowObj === row + 2 * this.direction &&
                !this.board.isOccupied(squareObj) && !this.board.isOccupied(this.board.getSquare(row + this.direction, col))) {
                return true;
        }
        }
        if (colDiff === 1 && rowObj === row + this.direction && this.board.occupiedByOpp(squareObj)) {
          
        return true;
    }

        return false;
    }
   }



export class King extends Piece{
    constructor(square, height,color,board){
        super(square, height * 0.5, height, color,board)
        this.moved = false;
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
   
    puedeMoverse(squareObj){
        const row = this.square.y;
        const col = this.square.x;
        const rowObj = squareObj.y;
        const colObj = squareObj.x;

        const rowDiff = Math.abs(rowObj - row);
        const colDiff = Math.abs(colObj - col);

        if (rowDiff <= 1 && colDiff <= 1 && !this.square.threatened(this.color) && (!this.board.isOccupied(squareObj) || this.board.isOccupiedByOpponent(squareObj, this.color))) {
            { 
                return true;
            }   
        // falta el enroque, lo hago cuando tenga tiempo
    }
        return false;
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
   
    puedeMoverse(){
        return true;
    }
}
export class Rook extends Piece{
    constructor(square, height,color,board){
        super(square, height * 0.5, height, color,board)
        this.moved = false;
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
   puedeMoverse(){
        return true;
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
    puedeMoverse(){
        return false;
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
    puedeMoverse(){
        const row = this.square.y;
        const col = this.square.x;
        const rowObj = squareObj.y;
        const colObj = squareObj.x;

        const rowDiff = Math.abs(rowObj - row);
        const colDiff = Math.abs(colObj - col);

        if((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)){
            if (!this.board.isOccupied(squareObj) || this.board.isOccupiedByOpponent(squareObj, this.color)) {
                return true;
        }

        return false;
    }
}
}