import Modal from "./modal.js";
import Form from "./Form.js";

let user = null;

const modal = new Modal("modal");
const registerForm = new Form("registerForm");

const openButton = document.getElementById("registerBtn");

openButton.addEventListener("click", () => {
    modal.open();
});

registerForm.form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!registerForm.isValid()) {
        alert("Заполните все обязательные поля!");
        return;
    }

    const values = registerForm.getValues();

    if (values.password !== values.confirmPassword) {
        alert("Пароли не совпадают!");
        return;
    }

    user = values;

    console.log(user);

    registerForm.reset();
    modal.close();
});