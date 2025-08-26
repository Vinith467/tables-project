
function table(){
    let num = document.getElementById("number").value 
    let tag = document.getElementsByTagName("div")[1]
    for (i = 1;i<=10;i++){
          let element = document.createElement("p")
          tag.append(element)
          let text = document.createTextNode(num + " x " + i + " = " + num*i)
          element.append(text)
    }
}
function resetTable(){
    document.getElementById("number").value = "";
    document.getElementsByTagName("div")[1].innerHTML = "";
}
