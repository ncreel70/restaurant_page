const tabContainer = (() => {
    const aboutTab = document.createElement('a');
    const menuTab = document.createElement('a');
    const contactTab = document.createElement('a');
    const headerRight = document.getElementsByClassName('header-right')[0];

    const tabGenerator = (() => { 
        aboutTab.innerText = 'About';
        menuTab.innerText = 'Menu';
        contactTab.innerText = 'Contact Us';

        aboutTab.id = 'about';
        menuTab.id = 'menu';
        contactTab.id = 'contact';

        aboutTab.classList.add('tab')
        menuTab.classList.add('tab')
        contactTab.classList.add('tab')

        headerRight.appendChild(aboutTab);
        headerRight.appendChild(menuTab);
        headerRight.appendChild(contactTab);
    })();

    return { tabGenerator }
})();


export default { tabContainer }