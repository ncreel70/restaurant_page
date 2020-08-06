const contactContainer = (() => {
    const container = document.getElementsByClassName('container')[0];

    const containerAppend = (child) => {
        container.appendChild(child)
    };
    
    const contactLoader = () => {
        container.classList.add('contactContainer')
        const firstNameLabel = document.createElement('label');
        const lastNameLabel = document.createElement('label');
        const emailLabel = document.createElement('label');
        const submitBtn = document.createElement('button');

        const firstNameForm = document.createElement('input');
        const lastNameForm = document.createElement('input');
        const emailForm = document.createElement('input');
        
        firstNameLabel.innerText = 'First Name: '
        firstNameLabel.setAttribute('for', 'firstName');
        lastNameLabel.innerText = 'Last Name: ';
        lastNameLabel.setAttribute('for', 'lastName');
        emailLabel.innerText = 'Email: '
        emailLabel.setAttribute('for', 'email');
        submitBtn.innerText = 'Submit';

        
        firstNameForm.id = 'firstName'
        lastNameForm.id = 'lastName'
        emailForm.id = 'email'
        

        containerAppend(firstNameLabel);
        containerAppend(firstNameForm);
        containerAppend(lastNameLabel);
        containerAppend(lastNameForm);
        containerAppend(emailLabel);
        containerAppend(emailForm);
        containerAppend(submitBtn);
        
    };

    return { contactLoader }
})();



export default contactContainer;