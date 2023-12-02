let main = document.querySelector('main')
let bought = []

let shoes = JSON.parse(localStorage.getItem('shoes'))

let see = shoes.map((item, index)=>{
    return `
        <div>
            <h2>${item.name}</h2>
            <h2>${item.description}</h2>
            <h2>${item.price}</h2>
            <button data-add class='add' value = '${index}'>Add</button>
        </div>
    `
})

main.innerHTML = see.join('')

let add = (index) => {
    bought.push(shoes[index])
    localStorage.setItem('bought', JSON.stringify(bought))
}

main.addEventListener('click', ()=>{
    if (event.target.hasAttribute('data-add')) {
        // alert('clicked')
        add(event.target.value)
    }
})