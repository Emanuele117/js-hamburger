//aprtura tendina menu con il click
var apertura = document.querySelector('.header-right > a');


apertura.addEventListener('click',
    function () {
        document.querySelector(".hamburger-menu").style.display = "block";
    }
)


// chiusura del menu con il click
var chiusura = document.querySelector('.close');

chiusura.addEventListener('click',
    function () {
        document.querySelector(".hamburger-menu").style.display = "none";
    }
)

