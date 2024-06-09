const messageDialog = new bootstrap.Modal(document.getElementById('messageDialog'));
const messageDialogText = document.getElementById("messageDialogText");
const image = document.getElementById('image');
const imagePreview = document.getElementById('imagePreview');

image.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) { //перевірка - чи не undifined або ""
        if (file.type.startsWith('image/')) {
            // console.log(`Selected file: `, URL.createObjectURL(file));
            imagePreview.src = URL.createObjectURL(file);
        }
        else {

            messageDialogText.innerHTML = "Оберіть фото. Ви хочете нас обманути :(.";
            // console.log("Оберіть фото");
            image.value = "";
            messageDialog.show();
        }
    } else {
        console.log('No file selected');
    }
});




function formatToPhone(input) {
    // Очищаємо введення, видаляючи всі символи, крім цифр
    const cleaned = ('' + input).replace(/\D/g, '');

    // Витягуємо частини номеру телефону
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    // Якщо є збіг, форматуємо як (XXX) XXX-XXXX
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    // Якщо формат неправильний, повертаємо оригінальний ввід
    return input;
}

const phone = document.getElementById("phone");
phone.addEventListener("blur", function (event) {
    phone.value = formatToPhone(phone.value);
})

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const form = document.getElementById('needs-validation')
form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }
    else {
        const email_v = document.getElementById("email").value;
        const surname_v = document.getElementById("surname").value;
        const name_v = document.getElementById("name").value;
        const inputPass_v = document.getElementById("inputPassword").value;
        const phone_v = phone.value;

        let user = {
            email: email_v,
            surname: surname_v,
            name: name_v,
            password: inputPass_v,
            phone: phone_v
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Реєстрація успішна!");
    }
    form.classList.add('was-validated')
}, false)



