// Cargar carrito desde el localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Añade producto al carrito
function addToCart() {
    // Obtener el nombre y el precio del producto del HTML
    const productName = document.getElementById('product-name').innerText;
    const priceText = document.getElementById('product-price').innerText;

    // Obtener el precio como un número entero eliminando el símbolo de dólar
    const price = parseInt(priceText.replace(/[^0-9]+/g, ""), 10);
    const quantity = parseInt(document.getElementById('quantity').value);

    // Validar cantidad
    if (isNaN(quantity) || quantity <= 0) {
        alert('Por favor, ingresa una cantidad válida.');
        return;
    }

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex > -1) {
        // Si existe, incrementar la cantidad
        cart[existingProductIndex].quantity += quantity;
    } else {
        // Si no existe, agregar nuevo producto
        const product = {
            name: productName,
            price: price,
            quantity: quantity
        };
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

// Muestra los productos del carrito
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Comprueba si el carrito está vacío
    if (cart.length === 0) {
        document.getElementById('empty-cart-message').style.display = 'block';
        cartItemsDiv.innerHTML = ''; // Limpiar el div de artículos del carrito
        totalPriceElement.style.display = 'none';
    } else {
        document.getElementById('empty-cart-message').style.display = 'none';
        let totalPrice = 0;
        cartItemsDiv.innerHTML = ''; // Limpiar el div antes de llenarlo

        // Iterar sobre los artículos del carrito
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item'); // Clase para estilizar
            itemDiv.innerHTML = `
                <strong class="cart-item-name">${item.name}</strong>
                - Cantidad: <span class="cart-item-quantity">${item.quantity}</span>
                - Precio: <span class="cart-item-price">$${item.price * item.quantity}</span>
                <button class="remove-button" onclick="removeFromCart(${index})">Eliminar</button>
            `;
            cartItemsDiv.appendChild(itemDiv);
            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.style.display = 'block';
        totalPriceElement.innerText = `Precio total: $${totalPrice}`;
        totalPriceElement.classList.add('total-price');
    }
}

// Elimina productos del carrito
function removeFromCart(index) {
    cart.splice(index, 1); // Elimina el artículo del carrito
    localStorage.setItem('cart', JSON.stringify(cart)); // Actualiza el localStorage
    displayCartItems(); // Vuelve a mostrar los artículos del carrito
}

// Muestra productos del carrito si estamos en la página del carrito
if (window.location.pathname.includes('carrito.html')) {
    displayCartItems();
}
