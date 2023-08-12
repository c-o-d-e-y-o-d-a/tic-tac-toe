const cell = (valueOfDom) =>{
    let ifCellIsMarked = false;
    let cellContent = " ";
    const changeCellContent = (content)=>{
        cellContent = content;
        ifCellIsMarked = true;
    };

    let indexOfCell = '';
    return{ifCellIsMarked,cellContent,changeCellContent,valueOfDom,indexOfCell};
};
  

const GameBoard = (DomOfGameBoard)=>{
    let isGameOver = false;
    let cellStorage  ={};
    const playerMove = (index,content)=>{
        if(isGameOver===false){
            cellStorage[index].changeCellContent(content);
            render();

        if(cellStorage[0].ifCellIsMarked==true && cellStorage[1].ifCellIsMarked==true && cellStorage[2].ifCellIsMarked==true && cellStorage[3].ifCellIsMarked==true && cellStorage[4].ifCellIsMarked==true && cellStorage[5].ifCellIsMarked==true && cellStorage[6].ifCellIsMarked==true && cellStorage[7].ifCellIsMarked==true ){
            isGameOver=true;
        }
        if(cellStorage[0]==cellStorage[3]==cellStorage[4] || cellStorage[1]==cellStorage[4]==cellStorage[7] || cellStorage[2]==cellStorage[5]==cellStorage[8] || cellStorage[0]==cellStorage[1]==cellStorage[2] || cellStorage[3]==cellStorage[4]==cellStorage[5] || cellStorage[6]==cellStorage[7]==cellStorage[8] || cellStorage[0]==cellStorage[4]==cellStorage[8] || cellStorage[2]==cellStorage[4]==cellStorage[8]){
            isGameOver=true;
            console.log("the game is over");
        }
        
        


    };
    return{isGameOver,cellStorage,playerMove,DomOfGameBoard};

};
};

function render(){
    document.querySelector('.gameContainer').innerHTML='';
    let htmlOfGameBoard=`
    <div class="tic_tac_toe_cell" id="cell1">${GameBoard.cellStorage[0].cellContent}</div>
    <div class="tic_tac_toe_cell" id="cell3">${GameBoard.cellStorage[1].cellContent}</div>
    <div class="tic_tac_toe_cell" id="cell2">${GameBoard.cellStorage[2].cellContent}</div>
    <div class="tic_tac_toe_cell" id="cell4">${GameBoard.cellStorage[3].cellContent}</div>
    <div class="tic_tac_toe_cell" id="cell5">${GameBoard.cellStorage[4].cellContent}</div>
    <div class="tic_tac_toe_cell" id="cell6">${GameBoard.cellStorage[5].cellContent}</div>
    <div class="tic_tac_toe_cell" id="cell7">${GameBoard.cellStorage[6].cellContent}</div>
    <div class="tic_tac_toe_cell" id="cell8">${GameBoard.cellStorage[7].cellContent}</div>
    <div class="tic_tac_toe_cell" id="cell0">${GameBoard.cellStorage[8].cellContent}</div>
    `;
    document.querySelector('.gameContainer').innerHTML=htmlOfGameBoard;
}


