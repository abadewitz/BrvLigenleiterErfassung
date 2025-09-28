console.log("BRV Ligenleiter Erfassung - Erweiterung erfolgreich geladen.");
korrigiereLayout();

function korrigiereLayout() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    markierePassNummerNamePasstNicht();
    markiereKeineLizenz();
    markiereLizenzNichtEingegeben();
    breitesKommentarfeld();

    const editParam = urlParams.get('xo');
    if (editParam != null && editParam == 'ec') {
        var infoMessage = document.createElement("p");
        infoMessage.className = "alert alert-info";
        infoMessage.innerHTML = "Layout wurde durch Browser-Erweiterung verändert. Bei fehlerhafter Anzeige, Erweiterung deaktivieren.";

        document.getElementById('jm-content').prepend(infoMessage);

        document.getElementById('jm-left').style.display = 'none';
        document.getElementById('jm-content').style.width = '100%';
        document.getElementById('jm-content').style.marginLeft = '0%';

        ersetzeDurchTextarea("rdb_editorComment");
    }
}

function breitesKommentarfeld() {
    var input = document.getElementById("rdb_controllerComment");
    if(input != null) {
        input.setAttribute("style", "width: 100%;");
    }
}

function markiereLizenzNichtEingegeben() {
    var xpath = "//li[contains(text(), 'Lizenz nicht eingegeben')]";
    var matchingElements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = matchingElements.snapshotLength; i < length; ++i) {
        var elem = matchingElements.snapshotItem(i);
        elem.setAttribute("style", "background-color: yellow;");
        console.log(matchingElements.snapshotItem(i).textContent)
    }
}

function markiereKeineLizenz() {
    var xpath = "//li[contains(text(), 'hat keine Saison Lizenz.')]";
    var matchingElements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = matchingElements.snapshotLength; i < length; ++i) {
        var elem = matchingElements.snapshotItem(i);
        elem.setAttribute("style", "background-color: yellow;");
        console.log(matchingElements.snapshotItem(i).textContent)
    }
}


function markierePassNummerNamePasstNicht() {

    var xpath = "//a[contains(text(), 'Den Namen aus Pass übernehmen')]";
    var matchingElements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = matchingElements.snapshotLength; i < length; ++i) {
        var elem = matchingElements.snapshotItem(i);
        elem.setAttribute("style", "background-color: yellow;");
        console.log(matchingElements.snapshotItem(i).textContent)
    }
}

function ersetzeDurchTextarea(elId) {
    var input = document.getElementById(elId);

    var text = document.createElement('textarea');
    text.setAttribute('name', input.getAttribute('name'));
    text.setAttribute('id', input.getAttribute('id'));
    text.value = input.value;

    input.parentNode.replaceChild(text, input);
}