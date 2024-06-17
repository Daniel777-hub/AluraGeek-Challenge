
const addProductForm = document.getElementById('addProductForm');
const productsContainer = document.getElementById('products');

function addProduct(event) {
    event.preventDefault();

    const productName = document.getElementById('name').value;
    const productPrice = document.getElementById('price').value;
    const productImage = document.getElementById('imagem').value;

    const productBlock = document.createElement('div');
    productBlock.classList.add('products_block');

    const productImg = document.createElement('img');
    productImg.classList.add('products_image');
    productImg.src = productImage;
    productImg.alt = productName;

    const productDescription = document.createElement('h3');
    productDescription.classList.add('products_description');
    productDescription.textContent = productName;

    const productBar = document.createElement('div');
    productBar.classList.add('products_bar');

    const productPriceElem = document.createElement('p');
    productPriceElem.classList.add('products_price');
    productPriceElem.textContent = `$${parseFloat(productPrice).toFixed(2)}`;

    const productDiscardButton = document.createElement('button');
    productDiscardButton.classList.add('products_discard');
    productDiscardButton.innerHTML = '<img src="assets/images/trash-2-24.png" alt="Ícone de lixeira">';
    productDiscardButton.addEventListener('click', () => {
        productsContainer.removeChild(productBlock);
    });

    productBar.appendChild(productPriceElem);
    productBar.appendChild(productDiscardButton);
    productBlock.appendChild(productImg);
    productBlock.appendChild(productDescription);
    productBlock.appendChild(productBar);

    productsContainer.appendChild(productBlock);

    addProductForm.reset();
}

addProductForm.addEventListener('submit', addProduct);

function limparForm() {
    addProductForm.reset();
}
