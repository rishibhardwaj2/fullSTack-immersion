function searchProducts() {
  const query = document.getElementById("searchInput").value.trim();
  const errorDiv = document.getElementById("error");
  const productList = document.getElementById("productList");

  errorDiv.textContent = "";
  productList.innerHTML = "";

  if (!query) {
    errorDiv.textContent = "Please enter a search term.";
    return;
  }

  fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      if (data.products.length === 0) {
        errorDiv.textContent = "No products found.";
      } else {
        displayProducts(data.products);
      }
    })
    .catch(() => {
      errorDiv.textContent = "An error occurred while fetching products.";
    });
}

function displayProducts(products) {
  const productList = document.getElementById("productList");

  productList.innerHTML = ""; // Clear previous results

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <div>
        <h4>${product.title}</h4>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Price:</strong> $${product.price}</p>
      </div>
    `;

    productList.appendChild(div);
  });
}

window.onload = function () {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => displayProducts(data.products));
};