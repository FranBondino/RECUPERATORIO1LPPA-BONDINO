window.onload = function() {
  
    var formVar = document.getElementById('frm');
  
    // Input variables
    var nameVar = document.getElementById('nombreInput');
    var nameError = document.getElementById('nameError');
    var surNameVar = document.getElementById('apellidoInput');
    var surNameError = document.getElementById('surNameError');
    var emailVar = document.getElementById('mailInput');
    var emailError = document.getElementById('emailError');
    var repeatMail = document.getElementById('repeatMailInput')
    var repeatMailError = document.getElementById('repeatEmailError');
    var passwordVar = document.getElementById('passwordInput');
    var passwordError = document.getElementById('passwordError');
    var repeatPassword = document.getElementById('repeatPasswordInput');
    var repeatPasswordError = document.getElementById('repeatPasswordError');
    var modal = document.getElementById("modal-exito");
    var span = document.getElementsByClassName("close")[0];
    var success = true;
  
  //form reset
    formVar.addEventListener('reset', e => {
        cleanReset();
    })
  
    function cleanReset(){
        var errorArray = [nameError,surNameError,emailError,repeatMailError,passwordError,repeatPasswordError]
            i=0;
            for(i;i<(errorArray.length);i++){ 
              errorArray[i].classList.add('hiddenError');
            }
    }
  
  
  
  //submit validation
    formVar.addEventListener('submit', e => {
        e.preventDefault();
        success = true;
        validateName();
        validateSurName();
        validateEmail();
        validateEmailRepeat();
        validatePassword();
        validatePasswordRepeat();
        openModal();
    });
  
    function openModal(){
      if(success) {
        modal.style.display="block";
        nameVar.value="";
        surNameVar.value="";
        emailVar.value="";
        repeatMail.value="";
        passwordVar.value="";
        repeatPassword.value="";
      }
    }
  
  
    
  
  
    // Validation functions
    function validateName(e) {
        var expReg = /[a-zA-Z]/
        var x = nameVar.value;
        var esValido = expReg.test(x);
        if(x.length < 3 || esValido==false) {
            nameError.classList.remove('hiddenError');
            success = false;
            }
    }

    function validateSurName(e) {
        var expReg = /[a-zA-Z]/
        var x = surNameVar.value;
        var esValido = expReg.test(x);
        if(x.length < 3 || esValido==false) {
          surNameError.classList.remove('hiddenError');
          success = false;
        }
    }
  
    function validateEmail(e) {
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var x = emailVar.value;
        var esValido = expReg.test(x);
        if(esValido==false) {
          emailError.classList.remove('hiddenError');
          success = false;
        }
    }

    function validateEmailRepeat(e) {
        if (repeatMail.value != emailVar.value) {
            repeatMailError.classList.remove('hiddenError');
        }
    }
  
    function validatePassword(e) {
        var x = passwordVar.value;
        if (x.lenght < 7) {
            passwordError.classList.remove('hiddenError')
        }
    }

    function validatePasswordRepeat(e) {
        if (repeatPassword.value != passwordVar.value) {
            repeatPasswordError.classList.remove('hiddenError');
        }
    }
  
      //para cerrar el modal cuando click X
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    //para cerrar modela click en pantalla
    window.onclick = function(event) {
        if (event.target == modal) {
                modal.style.display = "none";
        }
    }
  
  
    //limpia errores cuando se hace focus
  
    nameVar.addEventListener('focus', clearNameError);
  
    surNameVar.addEventListener('focus', clearSurNameError);
  
    emailVar.addEventListener('focus', clearEmailError);
  
    repeatMail.addEventListener('focus', clearRepeatEmailError);

    passwordVar.addEventListener('focus', clearPasswordError)
      
    repeatPasswordError.addEventListener('focus', clearRepeatPasswordError)

      
    function clearNameError(e) {
        nameError.classList.add('hiddenError');
    }
    function clearSurNameError(e) {
        surNameError.classList.add('hiddenError');
    }
    function clearEmailError(e) {
        emailError.classList.add('hiddenError');
    }
    function clearRepeatEmailError(e) {
        repeatMailError.classList.add('hiddenError');
    }
    function clearPasswordError(e) {
        passwordError.classList.add('hiddenError');
    }
    function clearRepeatPasswordError(e) {
        repeatPasswordError.classList.add('hiddenError');
    }
  
}
