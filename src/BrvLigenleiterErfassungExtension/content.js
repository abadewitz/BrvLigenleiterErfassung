console.log("BRV Ligenleiter Erfassung - Erweiterung erfolgreich geladen.");
korrigiereLayout();

function korrigiereLayout() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

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

function ersetzeDurchTextarea(elId) {
    var input = document.getElementById(elId);

    var text = document.createElement('textarea');
    text.setAttribute('name', input.getAttribute('name'));
    text.setAttribute('id', input.getAttribute('id'));
    text.value = input.value;

    input.parentNode.replaceChild(text, input);
}