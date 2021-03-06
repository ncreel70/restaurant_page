const menuContainer = (() => {

    const container = document.getElementsByClassName('container')[0];
    
    

    const menu = {
        hamburger: {
            price: '$4.00',
            img: ''
        },
        cheeseburger: {
            price: '$4.50',
            img: ''
        },
        taco: {
            price: '$3.00',
            img: ''
        },
        soup: {
            price: '$2.00',
            img: ''
        },
        cheesecake: {
            price: '$1.00',
            img: ''
        },
        "Hot Dog": {
            price: '$1.50',
            img:''
        }
    }
    const menuLoader = (menuObj) => { 
        container.classList = container.classList[0];
        for(let food in menuObj) {
            
            if(menuObj.hasOwnProperty(food)) {
                let currentElement = document.createElement('div');
                currentElement.setAttribute('id',`${food}`)
                currentElement.setAttribute('class', 'menuItem')
                currentElement.innerText = `${food.charAt(0).toUpperCase() + food.slice(1) + ' ' + menu[food].price }`
                container.appendChild(currentElement)

            }
        }
    }
    
    return { menu, menuLoader };
})();

export default menuContainer;
