function clearSEARCH() {
    search = document.getElementById("Text-Search");
    search.value = "";
}


function handleChange() {
    var key = (window.event) ? event.keyCode : e.keyCode;
    if (key === 13) {
        url = "RES/PAGES/SEARCH-PAGE/search.html"
        window.location.href = url;
    }
}



    

