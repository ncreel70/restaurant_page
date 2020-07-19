const container = document.getElementsByClassName('container')[0];

<<<<<<< HEAD
const aboutLoader = () => {
    const aboutText = document.createElement('p1')
    aboutText.innerText = 'Gigi\'s Kitchen is a comfortable southern style breakfast stop. Y\'all stop in for our biscuits and gravy or green chili smothered anything!'
    container.appendChild(aboutText)
};

export default aboutLoader
=======
const aboutLoader = (() => {
    const aboutText = document.createElement('p1')
    aboutText.innerText = 'Gigi\'s Kitchen is a comfortable southern style breakfast stop. Y\'all stop in for our biscuits and gravy or green chili smothered anything!'
    container.appendChild(aboutText)
})();

export default { aboutLoader }
>>>>>>> c0b143a22b0dacc7e4c7ca1acca5482907711ec5
