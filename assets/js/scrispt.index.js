function isAnyInputEmpty() {
    let title = document.getElementById("input-title").value;
    let price = document.getElementById("input-price").value;
    let descrition = document.getElementById("input-descrition").value;
    let platform = document.getElementById("input-platform").value;
    let LinkImg = document.getElementById("input-LinkImg").value;

    if (title == "" || price == "" || descrition == "" || platform == "" || LinkImg == "") {
        sendMsg("Preencha todos os campos!", "error")
        return true
    } else {
        sendMsg("Cadastrado com sucesso", "correct")
        return false
    }
}

function InputsClund() {
     document.getElementById("input-title").value = "";
     document.getElementById("input-price").value = "";
    document.getElementById("input-descrition").value = "";
   document.getElementById("input-platform").value = "";
     document.getElementById("input-LinkImg").value = "";

   
}

function sendMsg(msg, type) {
    let msgDiv = document.getElementById("text");
    msgDiv.innerHTML = '';

    let msgToScreen = `<p class="${type}"> ${msg} </p>`

    msgDiv.innerHTML = msgToScreen;
    setTimeout(function () {
        msgDiv.innerHTML = `<p class="${type}"></p>`;
    }, 3000);
    
}

function registerGame() {
    ComposeGame();
    isAnyInputEmpty();
    if (!isAnyInputEmpty() && isURLValid()) {
        InputsClund();
        listHTML();
    } 
    
}

class Game {
    constructor(title, price, descrition, platform, linkImg) {
        this.title = title;
        this.price = price;
        this.descrition = descrition;
        this.platform = platform;
        this.linkImg = linkImg;
    }
    
}

const gameTest = new Game();

function ComposeGame() {
    let title = document.getElementById("input-title").value;
    let price = document.getElementById("input-price").value;
    let descrition = document.getElementById("input-descrition").value;
    let platform = document.getElementById("input-platform").value;
    let linkImg = document.getElementById("input-LinkImg").value;

    const game = new Game(title,price,descrition,platform,linkImg);
    gameLibrary.add(game);
}

class GameList{
    constructor(){
        this.gameListArray = [];
    }
    add(parameter){
        if (!isAnyInputEmpty() && isURLValid()) {
            this.gameListArray.push(parameter)
        }   
    }
}

const gameLibrary = new GameList();

function listHTML() {

    const listHTML = document.getElementById("conteiner-list");
    listHTML.innerHTML = '';
    let array = gameLibrary.gameListArray;

    array.forEach(game => {
        const gameDiv = `<div class="gameDetail">
        <img src="${game.linkImg}" alt="${game.title}">
        <p><b>Título:</b> ${game.title}</p> 
        <p><b>Preço:</b> ${game.price}</p> 
        <p><b>Descrição:</b> ${game.descrition}</p> 
        <p><b>Plataforma:</b> ${game.platform}</p> 
        </div>`;
        console.log(game.linkImg);
        listHTML.innerHTML += gameDiv;
    } )

    
    
}

function isURLValid() {
const url = document.getElementById("input-LinkImg").value;
    
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;       
    } else {
        sendMsg("A url da imagem está errada!", "error")
        return false;
    }
}