// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'



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


    const inputImg = document.getElementById("image");
    inputImg.addEventListener('change', event =>{
        const file = event.target.files[0];
        if(file){

            const reader = new FileReader();
            reader.onload = function(e){
                const img = document.getElementById("imageDisplay");
                //console.log(img.src);
                //console.log(e.target.result);
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    })


    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })

})()


