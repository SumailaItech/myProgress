
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

console.log(new Product());

const productList ={
    products:[
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
    ],

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className ='product-list';
        for(const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML =`
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
            `
            prodList.appendChild(prodEl);
        }
        renderHook.appendChild(prodList);
    }
}

productList.render();