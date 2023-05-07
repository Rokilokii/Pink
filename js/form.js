const surname = document.querySelector('.user-info__input-surname')
const name = document.querySelector('.user-info__input-name')
const form = document.querySelector('.contest-feedback')
let inputObject = {};

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formInputs = form.querySelectorAll('.js-input')
            // console.log(formInputs)

        for (let i = 0; i < formInputs.length; i++) {
            const field = formInputs[i];
            const fieldname = field.name;
            inputObject[fieldname] = field.value
                // console.log(formInputs[i]);
                // console.log(formInputs.name);
        }
        // console.log(inputObject);


        const formCheckboxes = form.querySelectorAll('.js-checkbox:checked')
            // console.log(formCheckboxes)

        for (let i = 0; i < formCheckboxes.length; i++) {
            const field = formCheckboxes[i];
            const fieldname = field.name;
            inputObject[fieldname] = field.value
                // console.log(formInputs[i]);
                // console.log(formInputs.name);
        }
        // console.log(inputObject);


        const formRadios = form.querySelectorAll('.js-radio:checked')
            // console.log(formCheckboxes)

        for (let i = 0; i < formRadios.length; i++) {
            const field = formRadios[i];
            const fieldname = field.name;
            inputObject[fieldname] = field.value
                // console.log(formInputs[i]);
                // console.log(formInputs.name);
        }
        console.log(inputObject);
    })
}