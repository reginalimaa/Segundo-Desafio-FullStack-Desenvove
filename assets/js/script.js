

function sendForms() { 
    
    var userNome = document.getElementById("nameid");

    if (userNome.value != "") {
        alert('Obrigada sr(a)' + userNome.value + 'os seus dados foram caminhados com sucesso');
    }
}

function isEmailCorrect(email){
    var emailPattern = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    return emailPattern.test(email);
}

function sendForms(){
    
    var userEmail = document.getElementById("email").value;
    console.log($("#email"));
    console.log(document.getElementById("email"));
    
    var userMessage = document.getElementById("message").value;

    if (isEmailCorrect(userEmail)){
        var send_message = {
            "email": userEmail,
            "message": userMessage
        }

        console.log(send_message)
    } else {
        alert("email está incorreto");
    }
}


