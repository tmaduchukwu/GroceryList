function fs() {
    var boy = document.getElementById("match").value;
    if (!boy.trim().length) {
        alert("Please enter some text!");
        document.getElementById("match").value = "";
    }
    else {
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(boy);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("myList").appendChild(node);
        document.getElementById("match").value = "";
    
    }
    

}