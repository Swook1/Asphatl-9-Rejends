const submit = document.getElementById("submit")
form.addEventListener('submit', (e) => {
    e.preventDefault;
    const Firstname = document.getElementById("Firstname")
    // const Lastname = document.getElementById("Lastname")
    const Email = document.getElementById("Email")
    const dob = document.getElementById("dob")
    const date_value = new Date(dob.value)
    const Gender = document.getElementById("Gender")
    const check = document.getElementById("terms")
    

    if (Firstname.value === "") {
        alert("First Name is Empty!");
    } else if (!Email.value.includes("@")) {
        alert("Email must contain @!");
    } else if (!Email.value.endsWith(".com")) {
        alert("Email must ends with .com");
    } else if (dob.value === "") {
        alert("Date of Birth is Empty!");
    } else if (date_value.getFullYear() >= 2005) {
        alert("Year must be before 2005");
    } else if (Gender.value === "") {
        alert("Gender must be selected");
    } else if (!check.checked) {
        alert("You must agree to terms and condition");
    } else {
        alert("Submitted!!");
    }
});



