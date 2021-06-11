        let password = document.getElementById('password');
        let randomPassword = document.querySelector('.random-password');
        var passwordLength = 14;
        var passwordVal = "";

        //Random Password Suggestion
        window.onload = function loadPassword(){
       
            let randomGenerateChars =
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
            
            for (var i=0; i<passwordLength; i++){
                let randomNumber = Math.floor(Math.random() * randomGenerateChars.length);
                passwordVal += randomGenerateChars.substring(randomNumber, randomNumber+1);
            }
            randomPassword.innerHTML = passwordVal;
        }

        password.addEventListener('focus', function(){
            if(password.value == ''){
                randomPassword.style = 'display: block';
            }   
        })

        randomPassword.addEventListener('click', function(){
            password.value = passwordVal;
            randomPassword.style = 'display: none';
        })

        //Show and Gide password
        var state = false;
        function toggle(){
            if(state){
                password.setAttribute("type","password");
                state=false;
            }
            else{
                password.setAttribute("type","text");
                state=true;
            }
        }
        function myFunction(show){
            show.classList.toggle("fa-eye-slash");
        }