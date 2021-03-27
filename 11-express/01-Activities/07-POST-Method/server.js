const http = require("http");
const fs = require("fs");

const PORT = 8080;

function renderForm(){
    fs.readFile(`(${__dirname}/index.html`),(err) => {
        console.log("There's an error \n" +err);
    })
}

function handleRequest(req,res){
    let requestData = '';

    switch(req.url){
        case "/post":
            break;
        default:
            renderForm();
            return;
    }
}
