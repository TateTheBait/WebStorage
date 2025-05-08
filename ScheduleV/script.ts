import * as fs from 'fs';
const CryptoJS = require('crypto-js');

// YOU WILL NOT FIND ANY ORIGINAL MINIGAME FILES FOR MY PAYED SCRIPT. 
// THIS IS JUST THE INITIAL FRAMEWORK!!


const ui: object = document.getElementById("UI"); 

function encrypt(text) {
    return CryptoJS.AES.encrypt(text, "WrenchKey1");
}

function decrypt(text) {
    return CryptoJS.AES.decrypt(text, "WrenchKey1");
}





async function switchPage(path: string) {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load ${path}`);

    const fileContent = await response.text();
    ui?.innerHTML = "";
    decryptedfile = decrypt(file);

    ui?.innerHTML = decryptedfile;

    // Developer Note:
    // Further Files need to be started not from body, but all of the stuff that goes IN body.

    // Nonetheless this is pretty simple to read, goodluck!
}

function convertGameToPath(gameName) {
    const prefix: string = "games/";

    return pathinit + gameName + ".html"; // Return the appended string, very basic but easy to use!
}


