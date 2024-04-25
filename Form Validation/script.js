function login() {
    var user = document.getElementById("name").value
    var pass = document.getElementById("password").value

    var userLength = user.length 
    var passLength = pass.length 

    if (userLength == 0 || passLength == 0) {
        document.getElementById("result").textContent="Fill the empty fields"

        document.getElementById("name").style.borderStyle = "solid"
        document.getElementById("name").style.borderColor = "red"
        document.getElementById("name").style.borderRadius = "2px"

        document.getElementById("password").style.borderStyle = "solid"
        document.getElementById("password").style.borderColor = "red"
        document.getElementById("password").style.borderRadius = "2px"

        document.getElementById("result").style.color = "red"
    }

    else if (userLength < 4) {
        document.getElementById("result").textContent="Username must contain atleast 4 characters"

        document.getElementById("name").style.borderStyle = "solid"
        document.getElementById("name").style.borderColor = "red"
        document.getElementById("name").style.borderRadius = "2px"

        document.getElementById("result").style.color = "red"
    }

    else if (passLength < 6 || passLength > 12) {
        document.getElementById("result").textContent="Password must contain minimum 6 characters and maximum 12 characters"
        
        document.getElementById("password").style.borderStyle = "solid"
        document.getElementById("password").style.borderColor = "red"
        document.getElementById("password").style.borderRadius = "2px"

        document.getElementById("result").style.color = "red"
    }

    else {
        document.getElementById("result").textContent="Login Successful"
        document.getElementById("result").style.color = "#069d06"

    }

}