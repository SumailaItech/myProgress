
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

class ElementAttribute{
    constructor(attrName, attrValue){
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component{
    constructor(renderHookId){
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClasses, attributes){
        const rootElement = document.createElement(tag);
        if(cssClasses){
            rootElement.className = cssClasses;
        }

        if(attributes && attributes.length > 0){
            for(const attr of attributes){
                rootElement.setAttribute(attr.name,attr.value);
            }
        }

        document.getElementById(this.hookId).appendChild(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component{
    items = [];
   set cartItems(value){
       this.items =value;
       this.totalOutput.innerHTML =`<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
   }
    get totalAmount(){
        const sum =this.items.reduce((preV, curV)=> preV + curV.price ,0);
        return sum;
    }

    constructor(renderHook){
        super(renderHook);
    }

    addProduct(product){
        const updatedItems =[...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    render(){
        const cartEl = this.createRootElement('section','cart');
        cartEl.innerHTML =`
         <h2>Total: \$${0}</h2>
         <button>Order Now</button>
        `;
       this.totalOutput = cartEl.querySelector('h2');
        
    }
}

// product Item
class ProductItem{

    constructor(product){
        this.product = product;
    }

    addToCart(){
        App.addProductToCart(this.product);
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

// Product List
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
      
        const prodList = document.createElement('ul');
        prodList.className ='product-list';
        for(const prod of this.products){
          const productsItem = new ProductItem(prod);
          const prodEl =productsItem.render();
            prodList.appendChild(prodEl);
        }
       return prodList;
    }

}

class Shop{

    render(){
        const renderHook = document.getElementById('app');

        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProductList();
       const prodListEl = productList.render();
       
       renderHook.appendChild(prodListEl);
    }
}

class App{
    static init(){
        const shop =new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}

App.init();

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
