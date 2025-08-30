

const form = document.getElementById("formEjercicio03");
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const pwdInput = form.querySelector('#pwd');
const confirmPwdInput = form.querySelector('#confirmPwd');
const submitBtn = form.querySelector('#submitBtn');

const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function validationOk (input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return true;
}

function validationError (input) {
    input.classList.add("is-invalid");
    return false;
}

function validateName() {
    return (nameInput.value.trim().length >= 3) ? validationOk(nameInput) : validationError(nameInput);
}

function validateEmail() {
    return (emailInput.checkValidity()) ? validationOk(emailInput) : validationError(emailInput);
}

function validatePassword() {
    return (pwdRegex.test(pwdInput.value)) ? validationOk(pwdInput) : validationError(pwdInput);
}

function validateConfirmPassword() {
    return (pwdInput.value === confirmPwdInput.value && confirmPwdInput.value !== "") ? validationOk(confirmPwdInput) : validationError(confirmPwdInput);
}

function checkForm() {
    const isValid = validateName() && validateEmail() && validatePassword() && validateConfirmPassword();
    submitBtn.disabled = !isValid;
}

[nameInput, emailInput, pwdInput, confirmPwdInput].forEach(input => {
    input.addEventListener("input", checkForm);
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!submitBtn.disabled) {
        alert("Formulario enviado con éxito");
        form.reset();
        [nameInput, emailInput, pwdInput, confirmPwdInput].forEach(input => {
            input.classList.remove("is-valid", "is-invalid");
        });
        submitBtn.disabled = true;
    }
});