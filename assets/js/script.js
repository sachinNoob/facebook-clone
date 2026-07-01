


let form = document.getElementById('myform');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let flag = true;

    let name = document.getElementById('name').value.trim();
    console.log(name)
    let sname = document.getElementById('sname').value.trim();
    let date = document.getElementById('date').value.trim();
    let month = document.getElementById('month').value.trim();
    let year = document.getElementById('year').value.trim();
    let gender = document.getElementById('gender').value.trim();
    let email = document.getElementById('email').value.trim();
    let pass = document.getElementById('password').value.trim();
    let fname = document.getElementById('errorfname');
    let suname = document.getElementById('errorsname');
    let datein = document.getElementById('errordate');
    let genderr = document.getElementById('errorgender');
    let error_email = document.getElementById('errormail');
    let error_password = document.getElementById('errorpass');

    if (name == "") {
        console.log(name)
        fname.innerText = "Fill first name";
        fname.style.color = "red";
        flag = false;
    } else if (sname == "") {
        suname.innerText = "Fill second name";
        suname.style.color = "red";
        flag = false;
    } else if (date === "") {
        datein.innerText = "Fill your DOB";
        datein.style.color = "red";
    } else if (month === "") {
        datein.innerText = "Fill your DOB";
        datein.style.color = "red";
    } else if (year === "") {
        datein.innerText = "Fill your DOB";
        datein.style.color = "red";
    } else if (gender === "") {
        genderr.innerText = "Select your gender";
        genderr.style.color = "red";
    } else if (email === "") {
        error_email.innerText = "Fill your email or number";
        error_email.style.color = "red";
    } else if (pass === "") {
        error_password.innerText = "Fill your email or number";
        error_password.style.color = "red";
    } else {
     
        if (!flag) {

            alert('Form submitted ');
        }
    }
});