// Step-1: Add event handler in submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step-2: get input texts
    const userEmail = document.getElementById('user-email')
    const emailField = userEmail.value

    const userPassword = document.getElementById('user-password')
    const passwordField = userPassword.value

    // We will not verify email and password like this normally, but for now we will do it. In the future we will operate these on server side for security purpose.
// (/\S+@\S+\.\S+/ regular expression checks whether mail contains:Alphabets, Digits, Special Character, @Gmail.com)
    
    const emailValidationRegularExpression = /\S+@\S+\.\S+/ 

    const validation = emailValidationRegularExpression.test(emailField)


    if (!validation){
        
        alert('Your gmail is required ')
    }

    else if (userPassword.value == "") {
        
        alert('Your password is required ')
    }

    else {
        // opening another html page in different tab after entering email id password and pressing the submit button.
        window.open('bank.html')
    }
})

// Getting that Reset Button to work

document.getElementById('btn-reset').addEventListener('click', function () {
    
    const userEmail = document.getElementById('user-email')
    userEmail.value = ''

    const userPassword = document.getElementById('user-password')
    userPassword.value = ''

    
})
// s@gmail.com