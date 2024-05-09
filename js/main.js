document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("header").innerHTML = `
<nav class= "menu">
<a href="./index.html">Home</a>
<a href="./informacion.html">Sobre nosotr@s</a>
<a href="./productos.html">Productos</a>
<a href="./registro.html">Registro</a>
</nav>
`;



 

    document.querySelector("footer").innerHTML= `

    <p>Nuestras redes sociales</p>
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
        nombre: "Crema",
        descripcion: "Crema hidratante",
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
        imagen: "img/kitCompleto.JPEG",
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
        <h3>${producto.descripcion}</h3>  
        
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
        nombre: "Crema",
        descripcion: "Crema hidratante",
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