import headerLoader from './header.js'
import tabContainer from './tabs.js'
import aboutLoader from './about.js'
import menuContainer from './menu.js';

headerLoader;
tabContainer.tabGenerator;


const tabs = document.querySelectorAll('.tab')
const container = document.getElementsByClassName('container')[0]
    
tabs.forEach(tab => {
    tab.addEventListener("click", event => {
        container.innerHTML = '';
        let targetId = event.target.id;

        if (targetId === 'about') {
            aboutLoader
        } else if (targetId === 'menu') {
            menuContainer.menuLoader(menuContainer.menu)
    }
})
})


