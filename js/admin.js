// 4. create an array
let shoes = []

// 1. create object using literals
let object = {
    id: 1,
    name: 'Adidas',
    description: 'Climb mountains and GO higher',
    price: 1200,
    url: 'qwertyuiopojhg'
}

// 2. used to create a template. This constructor function creates objects
function Constructor(id, name, description, price, url) {
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}

// 3. creating an item/object referencing constructor function **DO NOT FORGET THE NEW KEYWORD**
let item = new Constructor(2, 'Yeezy Slides', 'Shoes from the future', 2500, 'https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/7aed0654d6384a06b2f998f82bfe6116_9366/adifom-supernova-shoes.jpg')

// 5. add item to array with push(). Everytime you add something on the array you add HERE
shoes.push(object, item)

// 6. setting the array in local storage
function storage() {
    

localStorage.setItem('shoes', JSON.stringify(shoes))

// 7. setting the array from local storage to array in code
shoes = JSON.parse(localStorage.getItem('shoes'))
}
// create a variable
let product = document.querySelector('#table')

// 8. use map to create a new array
// remember when mapping DONT USE THE ARRAY NAME on the table, instea reference using ITEM.

function display() {
    product = shoes.map((item, index)=>{
        // console.log(index);
        // console.log(item);
        return `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td> R${item.price}</td>
                    <td>${item.description}</td>
                    <td><img src="${item.url}"></td>
                    <td><button value = '${index}'>Edit</button></td>
                    <td><button class='delete' value = '${index}'>Remove</button></td>
                </tr>
        `
    })
}

product.innerHTML = products.join('')

let removeBtn = document.querySelector('#delete')

function removed(position){
    shoes.splice(position,1)
    storage()
}

product.addEventListener('click', function(){
    if(event.target.classList.contains('delete')) {
        removed(event.target.value)
    }
})

