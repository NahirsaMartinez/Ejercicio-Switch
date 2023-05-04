const cuerpo = document.querySelector("body");
const selectOpcionColor = document.querySelector("select");
const imagenes = document.querySelector("#imagen");

const IMG_1= "https://thumbs.dreamstime.com/b/fondo-de-pantalla-flores-blanco-y-negro-para-la-foto-stock-m%C3%B3viles-palo-m%C3%B3vil-220936381.jpg";
const IMG_2= "https://viajes.nationalgeographic.com.es/medio/2021/04/30/provenza-en-ruinas_bb8797fb_1200x630.jpg";
const IMG_3="https://media.istockphoto.com/id/1184094799/es/foto/fondo-floral-azul-y-rosa-de-rosas-flores-y-p%C3%A9talos-de-rosas-azules-y-rosas-coloque-el-texto.jpg?s=1024x1024&w=is&k=20&c=M-W95FPNO5XLBMBFGd_EpbLWlj_8GGOyCf5qajuyNkc=";

function cambioColor() {
    //console.log(parseInt(selectOpcionColor.value + "es de tipo" typeof(parseInt(selectOpcionColor.value))));
    switch (parseInt(selectOpcionColor.value)) {
        case 1:
            cuerpo.style.color = "white";
            cuerpo.style.backgroundColor = "black";
            selectOpcionColor.style.color = "white";
            imagenes.src = IMG_1;
            break;

        case 2:
            cuerpo.style.color = "violet";
            cuerpo.style.backgroundColor = "lavender";
            selectOpcionColor.style.color = "violet";
            imagenes.src = IMG_2;
            break;
        case 3:
            cuerpo.style.color = "pink";
            cuerpo.style.backgroundColor = "LightSteelBlue";
            selectOpcionColor.style.color = "pink";
            imagenes.src= IMG_3;

            break;
        default:
            alert("ERROR");
    }
    ;

}