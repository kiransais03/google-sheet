// Table properties
const theadRow = document.getElementById("table-heading-row");
const tbody = document.getElementById("table-body");
//style buttons
const boldButton = document.getElementById('bold-btn');
const italicsButton = document.getElementById('italics-btn');
const underlineButton = document.getElementById('underline-btn');
// align buttons
const leftAlign = document.getElementById('left-align');
const centerAlign = document.getElementById('center-align');
const rightAlign = document.getElementById('right-align');

// Dropdown
const fontSizeDropDown = document.getElementById('font-size');
const fontFamilyDropDown = document.getElementById('font-family');

// cut-copy/ paste button
const cutButton = document.getElementById('cut-button');
const copyButton = document.getElementById('copy-button');
const pasteButton = document.getElementById('paste-button');

let currentCell;
let cutCell = {};
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
        // this event listener will triger when any cell comes in focus;
        td.addEventListener('focus',(event)=> onFocusFn(event));
        tr.append(td);
    }
    tbody.append(tr);
}

// BOLD BUTTON
boldButton.addEventListener("click", () => {
  if (currentCell.style.fontWeight === "bold") {
    currentCell.style.fontWeight = "normal";
  } else currentCell.style.fontWeight = "bold";
});

// ITALICS
italicsButton.addEventListener('click',()=>{
    if(currentCell.style.fontStyle === 'italic'){
        currentCell.style.fontStyle = 'normal';
    }
    else currentCell.style.fontStyle = 'italic';
})

// underline
underlineButton.addEventListener("click", () => {
  if (currentCell.style.textDecoration === "underline") {
    currentCell.style.textDecoration = "none";
  } else currentCell.style.textDecoration = "underline";
});

// Left align button
leftAlign.addEventListener('click',()=>{
    currentCell.style.textAlign='left';
})
// Center align button
centerAlign.addEventListener('click',()=>{
    currentCell.style.textAlign='center';
})
// Right align button
rightAlign.addEventListener('click',()=>{
    currentCell.style.textAlign='right';
})
// font Size
fontSizeDropDown.addEventListener('change',()=>{
    currentCell.style.fontSize=fontSizeDropDown.value;
})
// Font Family
fontFamilyDropDown.addEventListener('change',()=>{
    currentCell.style.fontFamily=fontFamilyDropDown.value;
})

cutButton.addEventListener("click", () => {
  cutCell = {
    style: currentCell.style.cssText,
    text: currentCell.innerText,
  };
  currentCell.innerText = "";
  currentCell.style = null;
});

copyButton.addEventListener("click", () => {
  cutCell = {
    style: currentCell.style.cssText,
    text: currentCell.innerText,
  };
});

pasteButton.addEventListener("click", () => {
  if (cutCell.text) {
    currentCell.style = cutCell.style;
    currentCell.innerText = cutCell.text;
  }
});

function onFocusFn(event){
    // console.log(event);
    currentCell=event.target;
    document.getElementById('current-cell').innerText=currentCell.id;
}
