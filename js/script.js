//TODOS LOS PRODUCTOS 

const template = document.querySelector("[prod-template]");
const father = document.querySelector("[section-father]");

fetch("../inventory.json")
    .then(res => res.json())
    .then(data => {
        
        const template = document.querySelector("#template"); 
        const father = document.querySelector("#father"); 

        data.forEach(user => {
            const item = template.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[prod-link]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


//NEW IN

const template3 = document.querySelector("[prod-template3]");
const father3 = document.querySelector("[section-father3]");

fetch("../newIn.json") 
    .then(res => res.json())
    .then(data => {
        
        const template3 = document.querySelector("#template3"); 
        const father3 = document.querySelector("#father3"); 

        data.forEach(user => {
            const item = template3.content.cloneNode(true).firstElementChild;

            const image3 = item.querySelector("[prod-img]");
            const price3 = item.querySelector("[prod-precio]");
            const name3 = item.querySelector("[prod-nom]");
            const desc3 = item.querySelector("[prod-desc]");
            const link3 = item.querySelector("[prod-link3]");

            console.log(image3, price3, name3, desc3, link3);
            console.log(user.productLink); 

            name3.textContent = user.productName;
            price3.textContent = user.productPrice;
            desc3.textContent = user.productDescription;
            image3.src = user.imagesrc;
            link3.href = user.productLink;

            father3.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

//CONTADOR DE PRODUCTOS 

document.addEventListener('DOMContentLoaded', () => {
    const decreaseButton = document.querySelector('.quantity-decrease');
    const increaseButton = document.querySelector('.quantity-increase');
    const quantityDisplay = document.getElementById('quantity');

    let quantity = 1;

    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    increaseButton.addEventListener('click', () => {
        if (quantity < 10) {
            quantity++;
            quantityDisplay.textContent = quantity;
        }
    });
});

//MENU DESPLEGABLE MEDIOS DE PAGO

document.addEventListener('DOMContentLoaded', () => {
    const collapsible = document.querySelector('.collapsible');
    const content = document.querySelector('.collapsible-content');

    collapsible.addEventListener('click', () => {
        if (content.style.display === 'block') {
            content.style.display = 'none';
            collapsible.textContent = 'Medios de pago'; 
        } else {
            content.style.display = 'block';
            collapsible.textContent = 'Menos detalles'; 
        }
    });
});

//MENU DESPLEGABLE CALCULAR CODIGO POSTAL

document.addEventListener('DOMContentLoaded', () => {
    const collapsible2 = document.querySelector('.collapsible2');
    const content2 = document.querySelector('.collapsible-content2');

    collapsible2.addEventListener('click', () => {
        if (content2.style.display === 'block') {
            content2.style.display = 'none';
            collapsible2.textContent = 'Calcular código postal'; 
        } else {
            content2.style.display = 'block';
            collapsible2.textContent = 'Menos detalles'; 
        }
    });
});

// CALCULAR CODIGO POSTAL

document.addEventListener('DOMContentLoaded', () => {

    const collapsible = document.querySelector('.collapsible');
    const content = document.querySelector('.content');

    collapsible.addEventListener('click', () => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });


    const form = document.getElementById('shipping-form');
    const postalCodeInput = document.getElementById('postal-code');
    const shippingCostDisplay = document.getElementById('shipping-cost');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const postalCode = postalCodeInput.value;
        const shippingCost = calculateShippingCost(postalCode); 

        shippingCostDisplay.textContent = `Costo de Envío: $${shippingCost.toFixed(3)}`;
    });
    function calculateShippingCost(postalCode) {
        let cost = 0; 


        if (postalCode.startsWith('17')) {
            cost = 0; 
        } else if (postalCode.startsWith('18') || postalCode.startsWith('16')) {
            cost = 2.000; 
        } else if (postalCode.startsWith('19')) {
            cost = 2.500; 
        } else if (postalCode.startsWith('20')) {
            cost = 3.000; 
        } else {
            cost = 5.000; 
        }

        return cost;
    }
    
});

// CATEGORIAS //

//CATEGORIAS
    
const template2 = document.querySelector("[cat-template]");
const father2= document.querySelector("[section-father2]");

    fetch("categories.json")
    .then(res => res.json())
    .then(data => {
        
        const template2 = document.querySelector("#template2"); 
        const father2 = document.querySelector("#father2"); 

        data.forEach(user => {
            const item = template2.content.cloneNode(true).firstElementChild;

            const image2 = item.querySelector("[cat-img]");
            const name = item.querySelector("[category-name]");
            const linkCat = item.querySelector("[link-cat]")

            console.log(image2, name, linkCat);

            name.textContent = user.catName;
            image2.src = user.image;
            linkCat.href = user.catLink;

            console.log(user.productDescription);

            father2.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


// COCINA 

const template8 = document.querySelector("[prod-template8]");
const father8 = document.querySelector("[section-father8]");

fetch("../inventory_cocina.json")
    .then(res => res.json())
    .then(data => {
        
        const template8 = document.querySelector("#template8"); 
        const father8 = document.querySelector("#father8"); 

        data.forEach(user => {
            const item = template8.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-cocina]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father8.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

//BAÑO 

const template7 = document.querySelector("[prod-template7]");
const father7 = document.querySelector("[section-father7]");

fetch("../inventory_baño.json")
    .then(res => res.json())
    .then(data => {
        
        const template7 = document.querySelector("#template7"); 
        const father7 = document.querySelector("#father7"); 

        data.forEach(user => {
            const item = template7.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-baño]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father7.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// DECORACION 

const template6 = document.querySelector("[prod-template6]");
const father6 = document.querySelector("[section-father6]");

fetch("../inventory_deco.json")
    .then(res => res.json())
    .then(data => {
        
        const template6 = document.querySelector("#template6"); 
        const father6 = document.querySelector("#father6"); 

        data.forEach(user => {
            const item = template6.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-deco]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father6.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// PLATOS

const template9 = document.querySelector("[prod-template9]");
const father9 = document.querySelector("[section-father9]");

fetch("../inventory_platos.json") //aca le pones el nombre del archivo, no le cambies la ruta que es siempre la misma
    .then(res => res.json())
    .then(data => {
        
        const template9 = document.querySelector("#template9"); 
        const father9 = document.querySelector("#father9"); 

        data.forEach(user => {
            const item = template9.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-platos]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father9.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// TAZAS

const template1 = document.querySelector("[prod-template1]");
const father1 = document.querySelector("[section-father1]");

fetch("../inventory_tazas.json")
    .then(res => res.json())
    .then(data => {
        
        const template1 = document.querySelector("#template1"); 
        const father1 = document.querySelector("#father1"); 

        data.forEach(user => {
            const item = template1.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-tazas]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father1.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// SETS 

const template5 = document.querySelector("[prod-template5]");
const father5 = document.querySelector("[section-father5]");

fetch("../inventory_sets.json")
    .then(res => res.json())
    .then(data => {
        
        const template5 = document.querySelector("#template5"); 
        const father5 = document.querySelector("#father5"); 

        data.forEach(user => {
            const item = template5.content.cloneNode(true).firstElementChild;

            const image = item.querySelector("[prod-img]");
            const price = item.querySelector("[prod-precio]");
            const name = item.querySelector("[prod-nom]");
            const desc = item.querySelector("[prod-desc]");
            const link = item.querySelector("[link-sets]");

            console.log(image, price, name, desc, link);

            name.textContent = user.productName;
            price.textContent = user.productPrice;
            desc.textContent = user.productDescription;
            image.src = user.imagesrc;
            link.href = user.productLink;

            console.log(user.productDescription);

            father5.append(item);

            console.log(item);
        });
    })
    .catch(error => console.error('Error fetching data:', error));



 // JavaScript para manejar el modal
 document.getElementById("contactLink").onclick = function(event) {
    event.preventDefault();
    const modal = document.getElementById("modal");
    modal.classList.add("show");
};
document.getElementsByClassName("close")[0].onclick = function() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
};

document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    alert("Formulario enviado!");
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
};

// Funciones para el modal de "Sobre Nosotros"
function openAboutModal() {
    const aboutModal = document.getElementById('aboutModal');
    aboutModal.classList.add('show');
}

function closeAboutModal() {
    const aboutModal = document.getElementById('aboutModal');
    aboutModal.classList.remove('show');
}


let currentIndex = 0;

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (index + totalItems) % totalItems;

    const offset = -currentIndex * 100; // Cambia a negativo para deslizamiento correcto
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
    currentIndex++;
    showSlide(currentIndex);
}


setInterval(autoSlide, 5000); 

showSlide(currentIndex);


// LOGIN //

function openAlertFormLogin() {
    document.getElementById('modalLogin').classList.add('show');
}

function closeModal() {
    document.getElementById('modalLogin').classList.remove('show');
}

function handleSubmit(event) {
    event.preventDefault(); // Evitar el envío del formulario
    alert("Formulario enviado con éxito"); // Mensaje de éxito
    closeModal(); // Cerrar el modal
}

//BUSCADOR//

//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}


//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}