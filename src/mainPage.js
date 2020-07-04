const content = document.getElementsByClassName('content')[0];

const mainPageLoader = (() => {
    const aboutText = document.createElement('p1')
    aboutText.innerText = 'Gigi\'s Kitchen is a comfortable southern style breakfast stop. Y\'all stop in for our biscuits and gravy or green chili smothered anything!'
    content.appendChild(aboutText)
})();

export default { mainPageLoader }