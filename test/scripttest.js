var tree = document.createDocumentFragment();
var link = document.createElement("a");
var linktext = document.createTextNode("linkText");
link.appendChild(linktext);

var div = document.createElement("div");
div.appendChild(document.createTextNode("divText"));

tree.appendChild(link);
tree.appendChild(div);
document.getElementById("main").appendChild(tree);