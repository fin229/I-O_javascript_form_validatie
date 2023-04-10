const knop=document.getElementById('btnSubmit');

knop.addEventListener('click',function(event){
    event.preventDefault();
    valideerForm()
});

function valideerForm () {
    let errors=[];
    let veld=document;

    checkEmptyFields(veld.getElementById('Voornaam'),'voornaam',errors);
    checkEmptyFields(veld.getElementById('Naam'),'naam',errors);
    checkEmptyFields(veld.getElementById('Gebruikersnaam'),'gebruikersnaam',errors);
    checkEmptyFields(veld.getElementById('emailadres'),'emailadres',errors)
    ValidatieMail(veld.getElementById('emailadres'),errors);
    controleWachtwoord(veld.getElementById('password'),veld.getElementById('confirmPassword'),errors);
    checkEmptyFields(veld.getElementById('Adres'),'adres',errors);   
    checkEmptyFields(veld.getElementById('Land'),'land',errors);
    checkEmptyFields(veld.getElementById('Provincie'),'provincie',errors);
    CheckPC(veld.getElementById('postcode'),errors);
    // validatiePayment(veld.getElementsByName('btl'),errors);
    checkEmptyFields(veld.getElementById('voorwaarden'),'Algemene voorwaarden',errors);
    
   if(errors.length>0){
    text=errors.join('\n')
    veld.getElementById('errors').style.visibility='visible'
    veld.getElementById('errors').innerHTML=text+'<br>';
   }
}

function checkEmptyFields (veld,melding,errors) {
    if (veld.value=='') {
        errors.push('Het veld '+melding+'is vereist.');
    }
    return errors;
}

function ValidatieMail (emailadres,errors) {
    //op chat gpt gevonden
    let waarde;
    if (!/\S+@\S\.\S+/.test(emailadres)) {
        waarde=false;
        errors.push('E-mailadres is niet correct');
    }
    else{
        waarde=true;
    }
}

function controleWachtwoord (passwordField,confirmPasswordField,errors) {
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  if (!password||!confirmPassword) {
    errors.push('Het veld wachtwoord is vereist.\nHet veld herhaal wachtwoord is vereist.');
    return;
  }


  if (password.length < 8) {
    errors.push('Het wachtwoord moet minstens 8 karakters bevatten.');
    return;
  }

  if (password !== confirmPassword) {
    errors.push('De wachtwoorden komen niet overeen.');
    return;
  }
}

function CheckPC (veld,errors) {
    if (veld.value=='') {
        errors.push('Het veld postcode is vereist.');
    }
    if (veld.value<1000||veld.value>9999) {
        errors.push('De waarde van postcode moet tussen 1000 en 9999 liggen.')
    }
    return errors;
}

function validatiePayment (veld) {

    if (veld[0].checked||veld[1].checked||veld[2].checked||veld[3].checked) {
        document.getElementById('btlw').innerHTML+=veld.value;
        document.getElementById('btlw').style.visibility="visible";
    }
    else{
        document.getElementById('btlw').style.visibility="hidden";
    }
}
