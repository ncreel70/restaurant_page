const container = document.getElementsByClassName('container')[0];

const aboutLoader = () => {
    container.classList = container.classList[0];
    const aboutText = document.createElement('p1')
    aboutText.innerText = 'Gigi\'s Kitchen is a comfortable southern style breakfast stop. Y\'all stop in for our biscuits and gravy or green chili smothered anything!'
    container.appendChild(aboutText)
};

export default aboutLoader
