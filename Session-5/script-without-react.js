function render(child){
    
    const main = document.getElementById("main");
    main.appendChild(child)
}

function  createH1(child){
    const element = document.createElement("h1");
    element.appendChild(child)
    console.log(element)
    return element
}

function text(content){
    return document.createTextNode(content);
}

render(createH1(text("UI Without React")))