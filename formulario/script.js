const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs()
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue == "") {
        setErrorfor(username, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(username);
    }


    if (emailValue == "") {
        setErrorfor(email, 'O email é obrigatório.');
    } else if (!checkEmail(emailValue)) {
        setErrorfor(email, 'Por favor, insira um email válido.');

    } else {
        setSuccessFor(email)
    }


    if (passwordValue == "") {
        setErrorfor(password, 'A senha é obrigatória.');
    } else if (passwordValue.length < 7) {
        setErrorfor(password, 'A senha precisa ter no mínimo 7 caracteres.');
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmation.value == "") {
        setErrorfor(passwordConfirmation, 'A confirmação de senha é obrigatória.');
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorfor(passwordConfirmation, 'As senhas não conferem');
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formConstrols = form.querySelectorAll('.form-control');

        const formIsValid = [... formConstrols].every(formControl => {
            return formControl.className === 'form-control success'
        });

    if (formIsValid) {
        console.log('o formulário está 100% válido!')
    }
}

function setErrorfor(input, message){
    const formControl = input.parentElement;
    const small= formControl.querySelector('small');

    small.innerText = message;

    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }