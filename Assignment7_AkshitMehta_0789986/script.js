document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 'vertical' for vertical slider
        loop: true, // Loop the slides
        navigation: {          
            nextEl: ".swiper-button-next",          
            prevEl: ".swiper-button-prev",        
        }
    });
});

const validator = new FormValidator('registration-form', [
    {
        name: 'name',
        rules: 'required'
    },
    {
        name: 'dob',
        rules: 'required'
    },
    {
        name: 'email',
        rules: 'required|email'
    },
    {
        name: 'phone',
        rules: 'required|numeric|exact_length[10]'
    },
    {
        name: 'address',
        rules: 'required'
    },
    {
        name: 'credit-card',
        rules: 'required|numeric|exact_length[10]'
    },
    {
        name: 'expiration-date',
        rules: 'required'
    },
    {
        name: 'cvv',
        rules: 'required|numeric|exact_length[3]'
    }
]);

document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var errors = validator.validateForm(this);
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log('Form submitted successfully');
    }
});
