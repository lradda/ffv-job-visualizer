function changeJob(character) {
    var job = document.getElementById(character + "Job").value;
    document.getElementById(character).src = "images/" + character + "/" + job + ".gif";
}

function swapGalufKrile(src) {
    var krile = document.getElementById("KrileBlock");
    var galuf = document.getElementById("GalufBlock");
    var krileImage = document.getElementById("Krile");
    var galufImage = document.getElementById("Galuf");

    if (src.value === "Krile") {
        krile.style.display = "inline";
        krileImage.style.display = "inline";
        galuf.style.display = "none";
        galufImage.style.display = "none";
    } 
    
    else if (src.value == "Galuf") {
        krile.style.display = "none";
        krileImage.style.display = "none";
        galuf.style.display = "inline";
        galufImage.style.display = "inline";
    } 
    
    else {
        krile.style.display = "inline";
        krileImage.style.display = "inline";
        galuf.style.display = "inline";
        galufImage.style.display = "inline";
    }
}
