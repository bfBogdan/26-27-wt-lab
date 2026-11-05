let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+(\d{2})?@e-uvt\.ro$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

    if (!emailRegex.test(email)) {
        alert("Email invalid! Formatul corect este prenume.nume[2 cifre opționale]@e-uvt.ro");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Parola trebuie să aibă minim 7 caractere, cu litere mari și mici, cifre și un caracter special!");
        return;
    }

    alert("Login reușit!");
    window.location.href = "home.html";
});
