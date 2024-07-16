document.addEventListener('DOMContentLoaded', () => {
    const agregarProductoButton = document.querySelector("#addProduct");
    const productosContainer = document.querySelector(".products");

    agregarProductoButton.addEventListener("click", (e) => {
        e.preventDefault();
        // Obteniendo valores
        const name = document.querySelector("#name").value;
        const price = document.querySelector("#price").value;
        const img = document.querySelector("#img").value;

        // Creando bloque
        const productHTML = `
        <div class="producto">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5JEaxq3q4bvK5NJVm-M7UAHaHa%26pid%3DApi&f=1&ipt=1169420bc0a9b99cab79cae6a8781d5e37ce7a84b652a22827f97c7f47430af5&ipo=images" alt="Producto">
            <p>${name}</p>
            <div class="product_info">
                <span>$${price}</span>
                <button class="eliminar"><i class="fa-solid fa-trash"></i></button>
            </div> 
        </div>
        `;
        
        if (name !== "" && price !== "" && img !== "") {
            productosContainer.innerHTML += productHTML;
        } else {
            alert("Complete los campos");
        }
    });

    // Delegación de eventos para eliminar productos
    productosContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("eliminar") || e.target.closest(".eliminar")) {
            const product = e.target.closest(".product");
            if (product) {
                productosContainer.removeChild(product);
            }
        }
    });
});



