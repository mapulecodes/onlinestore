function fetchData() {
    let container = document.querySelector('[data-container]')
    fetch("https://mapulecodes.github.io/onlinestore/data/")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            data.results.forEach((product) => {
                container.innerHTML += `
                    <div class='card'>
                        <h2>${product.productName}</h2>
                        <h4>
                            ${product.category}
                        </h4>
                        <img src='${product.img_url}' loading='lazy'>
                        <p>
                            <span>Description: ${product.description}
                            </span>
                        </p>
                        <p>
                            <span>Price: R${product.amount}
                            </span>
                        </p>
                        <div class='button-wrapper'>
                            <button>Add to cart</button>
                        </div>
                    </div>
                `
            })
        })
        .catch((err) => {
            console.log(err);
        })
}
fetchData()






