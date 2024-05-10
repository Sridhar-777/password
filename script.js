function checkPasswordStrength(password) {
    var div3 = document.querySelector('.div3');
    var div4 = document.querySelector('.div4');
    var div5 = document.querySelector('.div5');

    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,}$/;
    var mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{4,}$/;

    if (strongRegex.test(password)) {
        div3.style.display = 'block';
        div4.style.display = 'none';
        div5.style.display = 'none';
    } else if (mediumRegex.test(password)) {
        div3.style.display = 'none';
        div4.style.display = 'block';
        div5.style.display = 'none';
    } else {
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.querySelector('input[type="password"]');
    passwordInput.addEventListener('input', function() {
        checkPasswordStrength(this.value);
    });
});




