document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("header").innerHTML = `
 <nav class= "menu">
<div class="nav-links" >
<a href="./index.html">Home</a>
<a href="./tiposdepiel.html">Tipos de piel</a>
<a href="./productos.html">Productos</a>
<a href="./registro.html">Registro</a>
</div>
</nav> 
`;



 

    document.querySelector("footer").innerHTML= `

    <p id="pFooter">Nuestras redes sociales</p>
 <nav>
    <a href="https://inquiet.empretienda.com.ar/">
        <img width="36" src="img/instagram.png" alt="">
    </a>
    <a href="https://www.whatsapp.com">
        <img width="36" src="img/whatsapp.png" alt="">
    </a>
    <a href="https://www.facebook.com">
        <img width="36" src="img/facebook.png" alt="">
    </a>  
</nav>
`;

});

let dataSeccionProd = [
    {
        id: 1,
        nombre: "Serum Hialurónico",
        descripcion: "Serum de Acido Hialurónico",
        imagen: "img/serum.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/serum-con-acido-hialuronico-pantenol-dy-vitamina-e"
    },
    {
        id: 2,
        nombre: "Crema Facial",
        descripcion: "Crema hidratante con Acido Hialuronico",
        imagen: "img/crema.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/crema-facial-pieles-secas-o-maduras-con-acido-hialuronico"
    },
    {
        id: 3,
        nombre: "Manteca corporal",
        descripcion: "Manteca corporal de Karite",
        imagen: "img/manteca.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/manteca-batida-corporal"
    },
    {
        id: 4,
        nombre: "Mascarilla Facial",
        descripcion: "Mascarilla facial solida de Arcilla",
        imagen: "img/mascarilla.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/pack-de-mascarillas-faciales-solidas-de-arcilla"
    },
    {
        id: 5,
        nombre: "Limpiador facial",
        descripcion: "Limpiador facial solido",
        imagen: "img/limpiador.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/limpiador-facial-solido"

    },
    {
        id: 6,
        nombre: "Scrub",
        descripcion: "Scrub corporal",
        imagen: "img/scrub.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/scrub-corporal"
    },
    {
        id: 7,
        nombre: "Shampoo solido",
        descripcion: "Shampoo solido todo tipo de cabello",
        imagen: "img/shampoo.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/shampoo-solido-de-romero"
    },
    {
    id: 8,
        nombre: "Kit Serum y Crema Facial",
        descripcion: "Serum y crema con Acido Hialuronico",
        imagen: "img/kitSerumCrema.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/kit-limpieza-y-serum-de-argan-y-acido-hialuronico"
},

{
    id: 9,
        nombre: "Kit Serum, Crema Facial y Limpiador",
        descripcion: "Serum y crema con Acido Hialuronico y limpiador facial",
        imagen: "img/kitCompleto.jpeg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/kit-limpieza-y-serum-de-argan-y-acido-hialuronico"
},
]
var elemento = document.getElementById('foto');
    if (elemento) {
cad = ``
for (let producto of dataSeccionProd) {
    cad = cad + `
    <div class="tarjeta">
        
       <img class= "imgb"
       src=${producto.imagen} alt=${producto.nombre}>
       
      <div class="cuerpo">
        <h2> ${producto.nombre}</h2>
        <h3> ${producto.descripcion}</h3>  
        
      </div>  
      <a id ="comprar" href=${producto.enlase}>Comprar</a>
      </div>
    `

}
document.querySelector("#foto").innerHTML = cad
let currentIndex = 0;

    }

let dataSeccionDest = [
    {
        id: 1,
        nombre: "Serum Hialurónico",
        descripcion: "Serum de Acido Hialurónico",
        imagen: "img/serum.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/serum-con-acido-hialuronico-pantenol-dy-vitamina-e"
    },
    {
        id: 2,
        nombre: "Crema facial",
        descripcion: "Crema hidratante de Acido Hialuronico",
        imagen: "img/crema.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/crema-facial-pieles-secas-o-maduras-con-acido-hialuronico"
    },
    {
        id: 3,
        nombre: "Manteca corporal",
        descripcion: "Manteca corporal de Karite",
        imagen: "img/manteca.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/manteca-batida-corporal"
    },
    {
        id: 4,
        nombre: "Mascarilla Facial",
        descripcion: "Mascarilla facial solida de Arcilla",
        imagen: "img/mascarilla.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/pack-de-mascarillas-faciales-solidas-de-arcilla"
    },
]
var elemento = document.getElementById('fotoDest');
if (elemento) {

cad2 = ``
for (let producto of dataSeccionDest) {
    cad2 = cad2 + `
    <div class="tarjeta">
        
       <img class= "imgb"
       src=${producto.imagen} alt=${producto.nombre}>
       
      <div class="cuerpo">
        <h2> ${producto.nombre}</h2>
        <h3>${producto.descripcion}</h3>  
        
      </div>  
      <a id ="comprar" href=${producto.enlase}>Comprar</a>
      </div>
    `

}

document.querySelector("#fotoDest").innerHTML = cad2


    }

    var elemento = document.getElementById('gallery');
    if (elemento) {
        let currentIndex = 0;
        document.querySelector('.prev-button').addEventListener('click', () => {
    navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
    navigate(1);
});

function navigate(direction) {
    const galleryContainer = document.querySelector('.gallery-container');
    const totalImages = document.querySelectorAll('.gallery-item').length;

    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;

    galleryContainer.style.transform = `translateX(${offset}%)`;
}
    }

//tipos de pieles
//const toggleButton = document.getElementById('button-menu')
//const navWrapper = document.getElementById('nav')

//toggleButton.addEventListener('click',() => {
 // toggleButton.classList.toggle('close')
 // navWrapper.classList.toggle('show')
//})

//navWrapper.addEventListener('click',e => {
 //if(e.target.id === 'nav'){
   // navWrapper.classList.remove('show')
   // toggleButton.classList.remove('close')
 // }
//})//


function getResult() {
    // Obtener las respuestas seleccionadas
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    // Contadores para cada tipo de respuesta
    let countA = 0, countB = 0, countC = 0, countD = 0;

    // Contar respuestas
    answers.forEach(answer => {
        switch(answer.value) {
            case 'A':
                countA++;
                break;
            case 'B':
                countB++;
                break;
            case 'C':
                countC++;
                break;
            case 'D':
                countD++;
                break;
        }
    });

    // Determinar el tipo de piel basado en la mayoría
    let skinType = '';
    if (countA > countB && countA > countC && countA > countD) {
        skinType = "Piel normal";
    } else if (countB > countA && countB > countC && countB > countD) {
        skinType = "Piel seca";
    } else if (countC > countA && countC > countB && countC > countD) {
        skinType = "Piel grasa";
    } else {
        skinType = "Piel mixta";
    }

    // Mostrar resultado
    const resultDiv = document.getElementById('result');
   
    
    // Redirigir a la página correspondiente según el tipo de piel
    switch (skinType) {
  case "Piel seca":
      window.location.href = './Piel_Seca/index.html';
      break;
  case "Piel normal":
      window.location.href = './Piel_Normal/index.html';
      break;
  case "Piel grasa":
      window.location.href = './Piel_Grasa/index.html';
      break;
 case "Piel mixta":
        window.location.href = './Piel_Mixta/index.html';
        break;
  default:
      // En caso de un resultado desconocido, redirigir a una página de error
      window.location.href = 'error.html';
}
}

//registro
function validar(){
    let nombre = document.getElementById("nombres");
    let apellido = document.getElementById("apellidos");
    let mail = document.getElementById("correo");
    let clave = document.getElementById("clave");
    error = false;

    document.getElementById("validar_nombres").innerHTML = "&nbsp; ";
    document.getElementById("validar_apellidos").innerHTML = "&nbsp; ";
    document.getElementById("validar_correo").innerHTML = "&nbsp; ";
    document.getElementById("validar_clave").innerHTML = "&nbsp; ";

    if (nombre.value == ""){
        document.getElementById("validar_nombres").innerHTML = "Nombre Incompleto";
        error = true;
        nombre.focus();
        
    }

    if (apellido.value == ""){
        document.getElementById("validar_apellidos").innerHTML = "Apellido Incompleto";
        error = true;
        apellido.focus();
    }

    if (mail.value == ""){
        document.getElementById("validar_correo").innerHTML = "Mail Incompleto";
        error = true;
        mail.focus();
    }

    if (clave.value.length < 10){
        document.getElementById("validar_clave").innerHTML = "Debe tener como minimo 10 caracteres";
        error = true;
        clave.focus();
    }
    if (error == false){
        document.getElementById("nombres").value = "";
        document.getElementById("validar_nombres").innerHTML = "&nbsp; ";
        document.getElementById("apellidos").value = "";
        document.getElementById("validar_apellidos").innerHTML = "&nbsp; ";
        document.getElementById("correo").value = "";
        document.getElementById("validar_correo").innerHTML = "&nbsp; ";
        document.getElementById("clave").value = "";
        document.getElementById("validar_clave").innerHTML = "&nbsp; ";
        alert("Dato enviado");
    }
    return !error



}

//carrusel automatico comentarios
let slideIndex = 0;
showSlides();

function showSlides() {
    let dots = document.getElementsByClassName("dot");
    let comentarios = document.getElementsByClassName("gallery-item-c");
    let i;
    for (i = 0; i < comentarios.length; i++) {
        comentarios[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > comentarios.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    comentarios[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000);
}
