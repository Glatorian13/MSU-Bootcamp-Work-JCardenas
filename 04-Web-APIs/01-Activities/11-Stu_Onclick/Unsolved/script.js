var countEl = document.getElementById("count");
var storedValue = 0;
document.getElementById("decrement").addEventListener("click", devalue);
document.getElementById("increment").addEventListener("click", addvalue);



function devalue() {
    storedValue--;
}
