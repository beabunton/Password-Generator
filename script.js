// Assignment code here
function generatePassword() {

	let password_length
	
  document.querySelector("#overlay").classList.add("active")
  document.querySelector("#overlay").style.zIndex = "1"


  document.querySelector("#prompt-1").style.display = "block"
  document.querySelector("#prompt-1 .next").addEventListener('click', function() {
		password_length = document.querySelector("#prompt-1 .length").value		
		password_length = parseInt(password_length)

		if (isNaN(password_length) || password_length < 8  || password_length > 128) {
			document.querySelector("#prompt-1 .length").style.borderColor = "red"
		} else {
      document.querySelector("#prompt-1 .length").style.borderColor = "black"
			document.querySelector("#prompt-1").style.display = "none"
    	document.querySelector("#prompt-2").style.display = "block"
		}
  })

  document.querySelector("#prompt-2 .next").addEventListener('click', function() {
    document.querySelector("#prompt-2").style.display = "none"
    document.querySelector("#overlay").classList.remove("active")
    document.querySelector("#overlay").style.zIndex = "-1"

    let is_lowercase = document.querySelector("#prompt-2 #lowercase").checked
    let is_uppercase = document.querySelector("#prompt-2 #uppercase").checked
    let is_numeric = document.querySelector("#prompt-2 #numeric").checked
    let is_special = document.querySelector("#prompt-2 #special").checked

		if (is_lowercase || is_uppercase || is_numeric || is_special) {
			let alphabets = 'abcdefghijklmnopqrstuvwxyz'
			let numbers = '1234567890'
			let special = '~!@#$%^&*().=,;-{}[]'
			
			let password = ''
			
			if (is_lowercase) {
				password += alphabets.charAt(Math.floor(Math. random() * alphabets.length))
			}
			if (is_uppercase) {
				password += alphabets.charAt(Math.floor(Math. random() * alphabets.length)).toUpperCase()
			}
			if (is_numeric) {
				password += numbers.charAt(Math.floor(Math. random() * numbers.length))
			}
			if (is_special) {
				password += special.charAt(Math.floor(Math. random() * special.length))
			}
	
			for (i = password.length; i < password_length; i++) {
				let combination = []
				
				if (is_lowercase) {
					combination.push(alphabets.charAt(Math.floor(Math. random() * alphabets.length)))
				}
				if (is_uppercase) {
					combination.push(alphabets.charAt(Math.floor(Math. random() * alphabets.length)).toUpperCase())
				}
				if (is_numeric) {
					combination.push(numbers.charAt(Math.floor(Math. random() * numbers.length)))
				}
				if (is_special) {
					combination.push(special.charAt(Math.floor(Math. random() * special.length)))
				}

				password += combination[Math.floor(Math. random() * combination.length)]		
			}
			
			var passwordText = document.querySelector("#password")
  		passwordText.value = password
		} else {
			alert('At least one checkbox MUST be checked')
		}
  })
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate")


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword)