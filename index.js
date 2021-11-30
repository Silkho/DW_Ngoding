const emailReceived = "silkho@gmail.com";

let nameSender = document.getElementById("input-name");
let email = document.getElementById("input-email");
let phone = document.getElementById("input-phone");
let subject = document.getElementById("input-subject");
let message = document.getElementById("input-message");

function submitForm() {
    let nameData = nameSender.value;
    let emailData = email.value;
    let phoneData = phone.value;
    let subjectData = subject.value;
    let messageData = message.value;

    // alert(`
    //     name : ${nameData}
    //     email : ${emailData}
    //     phone : ${phoneData}
    //     subject : ${subjectData}
    //     message : ${messageData}
    // `);
    if (nameData == "") {
        return alert("Please input name field must be not empty");
    } else if (emailData == "") {
        return alert("Please input email field must be not empty");
    } else if (phoneData == "") {
        return alert("Please input phone number field must be not empty");
    } else if (subjectData == "") {
        return alert("Please select subject field must be not empty");
    } else if (messageData == "") {
        return alert("Please input message field must be not empty");
    }
    
    const a = document.createElement("a");
    a.href = `mailto:${emailReceived}?subject=${subjectData}&body=Hello my name ${nameData}, ${phoneData} ${messageData}`;
    a.target = "_blank";
    a.click();
}