const container = document.getElementsByClassName('container')[0];
const contactForm = document.getElementById('contactForm');


const contactLoader = () => {
    const formElement = document.createElement('form');

    formElement.id = 'contactForm';
    

    const firstNameForm = document.createElement("input");


    container.appendChild(formElement)
    formElement.innerHTML = document.createElement('input');
};

export default contactLoader;