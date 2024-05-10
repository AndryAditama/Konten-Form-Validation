// set icon visible/invicible password text
var check = document.querySelector('#password-check'); //get toggle on/off password
var icon = document.querySelector('#eye-icon'); //get icon on/off password
var form = document.querySelector('#password'); //get form input password

//set event saat toggle on/off diklik
check.addEventListener('click', function(){

    //cek kondisi toggle
    if (check.checked == true){
        //set perilaku elemen jika toggle on
        icon.setAttribute('name', 'eye-off'); //mengubah nama icon menjadi off 
        form.setAttribute('type', 'text'); //mengubah type input menjadi text
    } else {
        //set perilaku elemen jika toggle on
        icon.setAttribute('name', 'eye'); //mengubah nama icon menjadi on
        form.setAttribute('type', 'password'); //mengubah type input menjadi password
    };
});


//email validation
var email = document.querySelector('#email'); //get email form input
var emailValidation = document.querySelector('#email-validation'); //get text for description

var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/; //email regular expression
//email harus mengandung karakter @ dan .

//set event saat form email mulai diketik
email.addEventListener('keyup', function(e){
    var isValid = emailRegex.test(e.target.value); //cek inputan user dengan email regex
    
    if(isValid){
        //jika inputan user sesuai
        //deskripsi format email benar
        emailValidation.innerHTML = "*Format email benar!";
    } else if (email.value == "") {
        //jika form input email kosong
        //deskripsi kosong
        emailValidation.innerHTML = "";
    } else {
        //jika inputan user tidak sesuai
        //deskripsi format email salah
        emailValidation.innerHTML = "*Format email salah!";
    };
});


//password validation
var password = document.querySelector('#password'); //get password form input
var passwordValidation = document.querySelector('#password-validation'); //get text for description


// password regex untuk validasi password
const passwordRegex = [
        { regex: /.{8,}/, index: 0}, //password minimal 8 karakter
        { regex: /[0-9]/, index: 1}, //password harus mengandung setidaknya 1 angka (0-9)
        { regex: /[a-z]/, index: 2}, //password harus mengandung setidaknya 1 huruf kecil (a-z)
        { regex: /[A-Z]/, index: 3}, //password harus mengandung setidaknya 1 huruf besar (A-Z)
        { regex: /[^A-Za-z0-9]/, index: 4} //password harus mengandung setidaknya 1 karakter spesial
];

//set event saat form input password mulai diketik
password.addEventListener('keyup', (e) => {

    //cek kecocokan password yg diinput apakah sudah sesuai dengan regex
    passwordRegex.forEach(item => {
        const isValid = item.regex.test(e.target.value);

        if (isValid) {
            //jika inputan user sesuai
            //deskripsi format password benar
            passwordValidation.innerHTML = "*Format password benar!";
        } else if (password.value == "") {
            //jika form input password kosong
            //deskripsi kosong
            passwordValidation.innerHTML = "";
        }
        else {
            //jika inputan user sesuai
            //deskripsi format password benar
            passwordValidation.innerHTML = "*Format password salah!";
        }
        
    });
});
    

