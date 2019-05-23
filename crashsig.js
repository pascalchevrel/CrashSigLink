el = document.querySelector("h2 > em");
sig = el.innerText;
el.innerText = '';

link = document.createElement("a");
link.setAttribute("href", "https://crash-stop.herokuapp.com/sumup.html?s=" + sig);
text = document.createTextNode(sig);
link.appendChild(text);
el.appendChild(link);
