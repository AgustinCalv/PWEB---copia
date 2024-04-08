//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//oculto el menu
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let css = document.getElementById("css");
crearBarra(css);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let JAVA = document.getElementById("JAVA");
crearBarra(JAVA);
let REACT = document.getElementById("REACT");
crearBarra(REACT);


let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;


//animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 15, 1, intervalJavascript);
        },100);
        const intervalCSS = setInterval(function(){
            pintarBarra(css, 15, 2, intervalCSS);
        },100);
        const intervalJAVA = setInterval(function(){
            pintarBarra(JAVA, 14, 3, intervalJAVA);
        },100);

        const intervalREACT = setInterval(function(){
            pintarBarra(REACT, 14, 4, intervalREACT);
        },100);
        
    }
}


//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#098266";
    }else{
        clearInterval(interval)
    }
}

//scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}