
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
    constructor(renderHookId, shouldRender = true){
        this.hookId = renderHookId;
        if(shouldRender){
            this.render();
        }
    }
    render(){}

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
        super(renderHook,false);
        this.orderProducts=()=>{
            console.log("Ordering...")
            console.log(this.items);
        }
        this.render();
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
        const orderProductBtn = cartEl.querySelector('button');
        orderProductBtn.addEventListener('click', this.orderProducts);
       this.totalOutput = cartEl.querySelector('h2');
        
    }
}

// product Item
class ProductItem extends Component{
    constructor(product, renderHookId){
        super(renderHookId, false);
        this.product = product;
        this.render();   
    }

    addToCart(){
        App.addProductToCart(this.product);
    }

    render(){
        const prodEl = this.createRootElement('li','product-item')
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
    }
}

// Product List
class ProductList extends Component{
    products =[];
    constructor(renderHookId){
        super(renderHookId);
        this.fetchPrdoducts();
        //this.render();
    }

    fetchPrdoducts(){
        this. products = [
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

        this.renderProducts();
    }

    renderProducts(){
        for(const prod of this.products){
            new ProductItem(prod,'prod-list');
           // productsItem.render();
          };
}

    render(){
       const prodList = this.createRootElement('ul','product-list',
       [new ElementAttribute('id','prod-list')]);
       
       if(this.products && this.products.length > 0){
           this.renderProducts();
       }
    }

}

class Shop{
    constructor(){
        this.render();
    }
    render(){
        this.cart = new ShoppingCart('app');
        new ProductList('app');
    }
}

class App{
    static init(){
        const shop =new Shop();
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
