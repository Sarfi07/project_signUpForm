document.addEventListener('DOMContentLoaded', () => {
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    
    password1.addEventListener('input', comparePasswords);
    password2.addEventListener('input', comparePasswords);

    function comparePasswords() {
        const password = password1.value;
        const confirmPassword = password2.value;

        if (password == confirmPassword) {

            if (password == "" || confirmPassword == "") {
                // pass
            }
            else {
                password1.classList.remove("error");
                password2.classList.remove('error');
    
                password1.classList.add('success');
                password2.classList.add('success');
            }

        }
    }

    // submission of the signUp form

    const form = document.getElementById('signUp-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent form from submission
        alert('You are signed In!')
    })
})
