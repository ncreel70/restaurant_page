const contactContainer = (() => {
    const container = document.getElementsByClassName('container')[0];
    
    const contactLoader = () => {
        const firstNameForm = document.createElement('input');
        const contentForm = document.createElement('div');

        contentForm.appendChild(firstNameForm)
        container.innerHTML = '<form class ="contactForm">' + contentForm + '</form>';
    };

    return { contactLoader }
})();



export default contactContainer;