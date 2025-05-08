import * as fs from 'fs';


const ui = document.getElementById("UI");


function switchPage(path) {
    const file: string = fs.readFileSync(path, 'utf-8');
    ui?.innerHTML = "";
    ui?.innerHTML = file;
}