function Search() {
    const bod = document.getElementsByTagName("tbody")[0];
    const int = document.getElementById("search_input").value;
    let data = bod.children;
    for (let e = 0; e < data.length; e++) {
        let cont = data[e].children;
        let ifi = false;
        for (let i = 2; i < cont.length; i++) {
            if (cont[i].innerText.toLowerCase().includes(int.toLowerCase())) {
                ifi = true;
                break;
            }
        }
        if (!ifi) {
            data[e].style.visibility = "collapse";;
        } else {
            data[e].style.visibility = "initial";;

        }
    }
}

var sorted = true;

function SortHead(columna) {
    const bod = document.getElementById("tbody");
    let incont = document.getElementsByClassName("icongira")[columna - 1];
    incont.style.transform = sorted ? "rotate(180deg)" : "rotate(0deg)";
    let rows = Array.from(bod.children);
    if (columna == 2) {
        rows.sort(compareNum);

    } else {
        rows.sort(compare);

    }
    for (let i = 0; i < rows.length; i++) {
        bod.insertAdjacentElement("beforeend", rows[i]);
    }

    function compare(a, b) {

        if (a.children[columna].innerText > b.children[columna].innerText) {
            return sorted ? 1 : -1;
        }
        if (a.children[columna].innerText < b.children[columna].innerText) {
            return sorted ? -1 : 1;
        }
        return 0;
    }

    function compareNum(a, b) {
        return sorted ? b.children[columna].innerText - a.children[columna].innerText : a.children[columna].innerText - b.children[columna].innerText;
    }
    sorted = !sorted;

}

window.addEventListener("load", function() {
    document.getElementById("search_input").addEventListener("input", Search);
}, false);