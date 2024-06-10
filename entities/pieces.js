class Piece{
    constructor(square,color,board) {
        this.board = board;
        this.square = square;
        this.color = color;
        this.x = this.square.x;
        this.y = this.square.y;
        this.width = this.square.width;
        this.height = this.square.height;
    }
    
    update(position) {
        // if(this.puedeMoverse()){
        if ( this.detectCollision(position)&&position.isDown && this.board.turn == this.color) {
            if(this.board.selectedPiece != this){
                this.board.selectedPiece = this;
                this.square.highlight = true;
                console.log(this);

            }
            else{
                this.board.selectedPiece = false;

            }
            position.isDown = false;

                   
        }
        if(this.board.selectedPiece != this){
            this.square.highlight = false;
        }
    // }
    }
    draw(context) {

        if(this.board.selectedPiece == this)
            {
            context.drawImage(this.image, this.x+this.width*.2, this.y-this.height*.1, this.width*.6, this.height*1.1);

            }
        else{

            context.drawImage(this.image, this.x+this.width*.25, this.y, this.width*.5, this.height);
        }
        
    }
    
detectCollision(position)
{
    
    return (position.x >= this.x && position.x <= this.x + this.square.width && position.y >= this.y && position.y <= this.y + this.square.height);
}
}

export class Pawn extends Piece{
    constructor(square,color,board){
        super(square, color,board)
        if(this.color == "white"){
            this.image = whitePawn;
            this.direction = -1;
            this.startRow = 6;
            this.value = 6
        }
        else{
            this.image = blackPawn;
            this.direction = 1;
            this.startRow = 1;
            this.value = 12
        }
        
    }
    draw(context) {
        if(this.board.selectedPiece == this)
            {
            context.drawImage(this.image, this.x-this.width*.05, this.y-this.height*.1, this.width*1.1, this.height*1.1);

            }
        else{

            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        
    }
   
//     puedeMoverse(squareObj){
//         const row = this.square.y;
//         const col = this.square.x;
//         const rowObj = squareObj.y;
//         const colObj = squareObj.x;
//         const colDiff = Math.abs(colObj - col);
        
//         if (colObj === col) {
//             if (rowObj === row + this.direction && !this.board.isOccupied(squareObj)) {
//                 return true;
//             }   
//         if (row === this.startRow && rowObj === row + 2 * this.direction &&
//                 !this.board.isOccupied(squareObj) && !this.board.isOccupied(this.board.getSquare(row + this.direction, col))) {
//                 return true;
//         }
//         }
//         if (colDiff === 1 && rowObj === row + this.direction && this.board.occupiedByOpp(squareObj)) {
          
//         return true;
//     }

//         return false;
//     }
   }



export class King extends Piece{
    constructor(square,color,board){
        super(square, color,board)
        this.moved = false;
        if(this.color == "white"){
            this.image = whiteKing;
            this.value = 1
        }
        else{
            this.image = blackKing;
            this.value = 7
        }
        
    }
   
   
    // puedeMoverse(squareObj){
    //     const row = this.square.y;
    //     const col = this.square.x;
    //     const rowObj = squareObj.y;
    //     const colObj = squareObj.x;

    //     const rowDiff = Math.abs(rowObj - row);
    //     const colDiff = Math.abs(colObj - col);

    //     if (rowDiff <= 1 && colDiff <= 1 && !this.square.threatened(this.color) && (!this.board.isOccupied(squareObj) || this.board.isOccupiedByOpponent(squareObj, this.color))) {
    //         { 
    //             return true;
    //         }   
    //     // falta el enroque, lo hago cuando tenga tiempo
    // }
    //     return false;
    // }
}
export class Queen extends Piece{
    constructor(square,color,board){
        super(square, color,board)
        if(this.color == "white"){
            this.image = whiteQueen;
            this.value = 2
        }
        else{
            this.image = blackQueen;
            this.value = 8
        }
        
    }
   
    puedeMoverse(){
        return true;
    }
}
export class Rook extends Piece{
    constructor(square,color,board){
        super(square, color,board)
        this.moved = false;
        if(this.color == "white"){
            this.image = whiteRook;
            this.value = 5

        }
        else{
            this.image = blackRook;
            this.value = 11

        }
        
    }
 
   puedeMoverse(){
        return true;
    }
}
export class Bishop extends Piece{
    constructor(square,color,board){
        super(square, color,board)
        if(this.color == "white"){
            this.image = whiteBishop;
            this.value = 3

        }
        else{
            this.image = blackBishop;
            this.value = 9

        }
        
    }
   
    puedeMoverse(){
        return false;
    }
}
export class Knight extends Piece{
    constructor(square,color,board){
        super(square, color,board)
        if(this.color == "white"){
            this.image = whiteKnight;
            this.value = 4

        }
        else{
            this.image = blackKnight;
            this.value = 10

        }
        
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