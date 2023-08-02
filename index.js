const cell = (domIndex)=>{

    
    const changeContent = (newContent)=>document.getElementById(domIndex).innerText=newContent;
    return {domIndex,changeContent,};

}

//making objects of each cell


const gameBoardObject =()=>{
    const gridElement0 = cell("cell0");
    const gridElement1 = cell("cell1");
    const gridElement2 = cell("cell2");
    const gridElement3 = cell("cell3");
    const gridElement4 = cell("cell4");
    const gridElement5 = cell("cell5");
    const gridElement6 = cell("cell6");
    const gridElement7 = cell("cell7");
    let gameBoardCellList = [gridElement0,gridElement1,gridElement2,gridElement3,gridElement4,gridElement5,gridElement5,gridElement6,gridElement7];
    

}
let player = 1;


const elem = document.getElementsByClassName('tic_tac_toe_cell');
for(let i=0;i<elem.length;i++){
    elem[i].addEventListener('click',()=>{
        if(player==1){
            elem[i].innerText='X';
            player=2;
            console.log('X');
            // add a function here to check if at certainindexes the elements are same or not (to finish the game)
            
            
        }
        else if(player==2){
            elem[i].innerText='O';
            player=1;
            console.log('O');
        }
    })
}











 


function render(){
    let gameboardhtml = `

    
    
    
`;
    

}
