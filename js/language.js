//"use strict";
if (window.navigator.language) {
    LocalLanguage = window.navigator.language;
} else if (window.navigator.userLanguage) {
    LocalLanguage = window.navigator.userLanguage;
} else {
    LocalLanguage = "en";
}
console.log("Lenguaje: " + LocalLanguage);

var fileref = document.createElement('script');
fileref.setAttribute("type", "text/javascript");

switch (LocalLanguage) {
case "es-ES":
case "es":
    LocalLanguage = "es";
    break;

case "de-DE":
case "de":
    LocalLanguage = "de";
    window.location.href = "index_de.html";
    break;

case "en":
default:
    LocalLanguage = "en";
    window.location.href = "index_en.html";
    break;
}
  
/*
function loadLanguage() {
    "use strict";
    if (window.navigator.language) {
        LocalLanguage = window.navigator.language;
    } else if (window.navigator.userLanguage) {
        LocalLanguage = window.navigator.userLanguage;
    } else {
        LocalLanguage = "en";
    }
    console.log("Lenguaje: " + LocalLanguage);
    console.log("pepepepe");

    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");

    switch (LocalLanguage) {
    case "cs-CZ":
    case "cs":
        LocalLanguage = "cs";
        fileref.setAttribute("src", "Language/cz-CZ.js");
        document.getElementsByTagName("head")[0].appendChild(fileref);
        break;
    default:
        LocalLanguage = "";
        fileref.setAttribute("src", "Language/en-EN.js");
        document.getElementsByTagName("head")[0].appendChild(fileref);
        break;
    }
}
*/