function adicionaItem(event){
    let container = document.getElementById("container");
    let newArticle = document.createElement("article");
    let newContent= document.createTextNode("Oi eu sou novo");
    newArticle.appendChild(newContent)
    newArticle.setAttribute("class","itemDiferente")
    container.insertAdjacentElement("beforeend",newArticle)
    newArticle.style.backgroundColor = "rgb( " + (Math.random() * 255) + "," + (Math.random() * 255) + "," + (Math.random() * 255)
    newArticle.style.color = "white"
}

function removeItem(event){
    event.target.remove();
}