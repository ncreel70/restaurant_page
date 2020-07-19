const headerLoader = (() => {
    const container = document.getElementsByClassName('container')[0];
    const titleText = document.createElement('a');
    const header = document.createElement('div');
    const headerRight = document.createElement('div');

    titleText.innerText = 'Gigi\'s Kitchen'
    titleText.classList.add('header-left');
    header.classList.add('header');
    headerRight.classList.add('header-right');

    container.before(header);
    header.appendChild(titleText);
    header.appendChild(headerRight);

    return { headerRight }
})();

export default { headerLoader }