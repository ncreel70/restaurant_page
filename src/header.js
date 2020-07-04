const headerLoader = (() => {
    const content = document.getElementsByClassName('content')[0];
    const titleText = document.createElement('a');
    const header = document.createElement('div');
    const headerRight = document.createElement('div');
    const aboutTab = document.createElement('a');
    const menuTab = document.createElement('a');
    const contactTab = document.createElement('a');

    titleText.innerText = 'Gigi\'s Kitchen'
    titleText.classList.add('header-left');
    aboutTab.innerText = 'About';
    menuTab.innerText = 'Menu';
    contactTab.innerText = 'Contact Us';
    header.classList.add('header');
    headerRight.classList.add('header-right');

    content.before(header);
    header.appendChild(titleText);
    header.appendChild(headerRight);
    headerRight.appendChild(aboutTab);
    headerRight.appendChild(menuTab);
    headerRight.appendChild(contactTab);


})();

export default { headerLoader }