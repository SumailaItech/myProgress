
const productList ={
    products:[
        {
            title:'A nice pillow',
            imageUrl:'file:///C:/Users/Huseina/Desktop/amalitech%20projects/myProgress/oop-code/assets/images/pillow.jpg',
            price:5.9,
            description:'A very soft pillow for good sleeping'
        },
        {
            title:'A beutiful Carpet',
            imageUrl:'file:///C:/Users/Huseina/Desktop/amalitech%20projects/myProgress/oop-code/assets/images/carpet.jpg',
            price:89.9,
            description:'A beautiful carpet you may like'
        }
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
                <div class="product-item_content">
                    <h2>${this.title}</h2>
                    <h3>${this.price}</h3>
                    <p>${this.description}</p>
                </div>
            </div>
            `
            prodList.appendChild(prodEl);
        }
        renderHook.appendChild();
    }
}