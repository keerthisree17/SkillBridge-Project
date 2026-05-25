function sendMessage(){

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const subject =
    document.getElementById("subject").value.trim();

    const message =
    document.getElementById("message").value.trim();

    // RESET

    document.getElementById("nameError").innerText = "";

    document.getElementById("emailError").innerText = "";

    document.getElementById("subjectError").innerText = "";

    document.getElementById("messageError").innerText = "";

    let valid = true;

    // NAME

    if(name === ""){

        document.getElementById("nameError")
        .innerText =
        "Name is required";

        valid = false;
    }

    // EMAIL

    if(email === ""){

        document.getElementById("emailError")
        .innerText =
        "Email is required";

        valid = false;
    }

    // SUBJECT

    if(subject === ""){

        document.getElementById("subjectError")
        .innerText =
        "Subject is required";

        valid = false;
    }

    // MESSAGE

    if(message.length < 10){

        document.getElementById("messageError")
        .innerText =
        "Message should contain minimum 10 characters";

        valid = false;
    }

    // STOP

    if(!valid){

        return;
    }

    // SUCCESS

    document.getElementById("successBox")
    .style.display = "block";

    // RESET FORM

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("subject").value = "";

    document.getElementById("message").value = "";
}