// Внешняя переменная user по ТЗ
let user = null;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Модальное окно
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    
    // Поддержка двух вариантов ID кнопки на всякий случай
    const openBtn = document.getElementById('registerBtn') || document.getElementById('open-modal-btn');
    const closeBtn = document.getElementById('closeModal');
    const registerForm = document.getElementById('registerForm');

    const openModal = () => {
        modal?.classList.add('modal-showed');
        overlay?.classList.add('modal-showed');
    };

    const closeModal = () => {
        modal?.classList.remove('modal-showed');
        overlay?.classList.remove('modal-showed');
        registerForm?.reset();
    };

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    // 2. Валидация и отправка формы регистрации
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Проверка встроенной валидации HTML5
            if (!registerForm.checkValidity()) {
                alert('Регистрация отклонена: Заполните все обязательные поля!');
                return;
            }

            // Сбор данных
            const formData = new FormData(registerForm);
            const formValues = Object.fromEntries(formData.entries());

            // Сравнение паролей
            if (formValues.password !== formValues.confirmPassword) {
                alert('Регистрация отклонена: Пароли не совпадают!');
                return;
            }

            // Добавление даты и сохранение во внешнюю переменную
            formValues.createdOn = new Date();
            user = formValues;

            console.log('Регистрация прошла успешно!', user);
            closeModal();
        });
    }

    // 3. Форма подписки в футере
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = document.getElementById('email');
            
            if (emailInput && emailInput.checkValidity() && emailInput.value.trim() !== '') {
                console.log({ email: emailInput.value.trim() });
                subscribeForm.reset();
            } else {
                alert('Введите корректный Email');
            }
        });
    }
});