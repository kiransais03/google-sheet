// Table properties
const theadRow = document.getElementById("table-heading-row");
const tbody = document.getElementById("table-body");
let currentCell;
// constants
const columns = 26;
const rows = 100;

for (let col = 0; col < columns; col++) {
    let th = document.createElement('th');
    th.innerText= String.fromCharCode(col+65);
    theadRow.append(th);
}
// A B C D E -> 26 times
//     100*26

for(let row=1;row<=rows;row++){
    // I create TR;
    let tr=document.createElement('tr');
    // table heading
    let th=document.createElement('th');
    // I made innerText = row number
    th.innerText = row;
    tr.append(th);
    // looping from A to Z;
    for(let col=0;col<columns;col++){
        let td= document.createElement('td');
        td.setAttribute('contenteditable','true');
        td.setAttribute('id',`${String.fromCharCode(col+65)}${row}`)
        td.addEventListener('focus',(event)=> onFocusFn(event));
        tr.append(td);
    }
    tbody.append(tr);
}

function onFocusFn(event){
    currentCell=event.target;
    document.getElementById('current-cell').innerText=currentCell.id;
}
