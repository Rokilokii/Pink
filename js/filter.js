const filterForm = document.querySelector('.photo-filter')
let sliderObject = {};

if (filterForm) {
    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const sliderInputs = filterForm.querySelectorAll('.filter-transform')
        console.log(sliderInputs)

        for (let i = 0; i < sliderInputs.length; i++) {
            const field = sliderInputs[i];
            const fieldname = field.name;
            sliderObject[fieldname] = field.value
                // console.log(formInputs[i]);
                // console.log(formInputs.name);
        }
        // console.log(inputObject);
        console.log(sliderObject);
    })
}