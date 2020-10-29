
class Product{
    title;
    imageUrl;
    description;
    price;

    constructor(title,image,desc,price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
   
}

class ProductItem{
    product;

    constructor(product){
        this.product = product;
    }

    addToCart(){
        console.log('adding product');
        console.log(this.product)
    }

    render(){
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML =`
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to cart</button>
            </div>
        </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click',this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList{
    products = [
        new Product(
            'A nice pillow',
            'file:///C:/Users/Huseina/Desktop/amalitech%20projects/myProgress/oop-code/assets/images/pillow.jpg',
            'A very soft pillow for good sleeping',
            19.9
        ),
        new Product(
            'A beutiful Carpet',
            'file:///C:/Users/Huseina/Desktop/amalitech%20projects/myProgress/oop-code/assets/images/carpet.jpg',
            'A beautiful carpet you may like',
            89.9,
        )
    ];

    constructor(){}

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className ='product-list';
        for(const prod of this.products){
          const productsItem = new ProductItem(prod);
          const prodEl =productsItem.render();
            prodList.appendChild(prodEl);
        }
        renderHook.appendChild(prodList);
    }

}

//const productList ={
    // products:[
    //     new Product(
    //         'A nice pillow',
    //         'file:///C:/Users/Huseina/Desktop/amalitech%20projects/myProgress/oop-code/assets/images/pillow.jpg',
    //         'A very soft pillow for good sleeping',
    //         19.9
    //     ),
    //     new Product(
    //         'A beutiful Carpet',
    //         'file:///C:/Users/Huseina/Desktop/amalitech%20projects/myProgress/oop-code/assets/images/carpet.jpg',
    //         'A beautiful carpet you may like',
    //         89.9,
    //     )
        // {
        //     title:'A nice pillow',
        //     imageUrl:'file:///C:/Users/Huseina/Desktop/amalitech%20projects/myProgress/oop-code/assets/images/pillow.jpg',
        //     price:5.9,
        //     description:'A very soft pillow for good sleeping'
        // },
        // {
        //     title:'A beutiful Carpet',
        //     imageUrl:'file:///C:/Users/Huseina/Desktop/amalitech%20projects/myProgress/oop-code/assets/images/carpet.jpg',
        //     price:89.9,
        //     description:'A beautiful carpet you may like'
        // }
   // ],

//     render(){
       
//     }
// }
const productList = new ProductList();
productList.render();