function sendEmail(from) {
    var name;
    var email;
    var msg;
    var subject;
    var body;

    if (from == "freeSession") {
        name = document.getElementById("name").value;
        email = document.getElementById("email").value;
        subject = "Free session: " + name;
        body = "FREE SESSION | Name: " + name + " | Email: " + email;
        cleanMsgModal();
    }
    else {
        name = document.getElementById("nameContact").value;
        email = document.getElementById("emailContact").value;
        msg = document.getElementById("msgContact").value;
        subject = "Contact: " + name;
        body = "CONTACT | Name: " + name + " | Email: " + email + " | Msg: " + msg;
        cleanMsgContact();
    }

    if (validationForm(name, email, from, msg)) {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "leonardo1209@gmail.com",
            Password : "1A89105920F2A9EB2940F41A41B97B1DD3E3",
            To : 'leo@leoreboucas.com',
            From : "leonardo1209@gmail.com",
            Subject : subject,
            Body : body
        }).then(
            message => validation(message, from)
        );
    }
}

function validationForm(name, email, from, msg) {
    var required = true;
    var mailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if(name == null || name.trim() == "") {
        required = false;
        if (from == "freeSession")
            document.getElementById("validationName").innerHTML = "*Name is required";
        else
            document.getElementById("validationNameContact").innerHTML = "*Name is required";
    }

    if(email == null || email.trim() == "") {
        required = false;
        if (from == "freeSession")
            document.getElementById("validationEmail").innerHTML = "*E-mail is required";
        else
            document.getElementById("validationEmailContact").innerHTML = "*E-mail is required";
    }
    else if(!email.match(mailFormat)) {
        required = false;
        if (from == "freeSession")
            document.getElementById("validationEmail").innerHTML = "*E-mail is invalid";
        else
            document.getElementById("validationEmailContact").innerHTML = "*E-mail is invalid";
    }

    if(from == "contact") {
        if(msg == null || msg.trim() == "") {
            required = false;
            document.getElementById("validationMsgContact").innerHTML = "*Message is required";
        }
    }
    
    return required;
}

function validation(message, from) {
    console.log(message);
    if (message == "OK") {
        if (from == "freeSession")
            document.getElementById("confirmationEmail").innerHTML = "Great! I received your request.";
        else
            document.getElementById("successContact").innerHTML = "Great! I received your contact.";
    }
    else {
        if (from == "freeSession")
            document.getElementById("errorSendEmail").innerHTML = "Oops! Something went wrong... Please, try again or e-mail me: leo@leoreboucas.com";
        else
            document.getElementById("errorContact").innerHTML = "Oops! Something went wrong... Please, try again or e-mail me: leo@leoreboucas.com";    
    }
}

function callToAction() {
    var element =  document.getElementById("formContact");
    element.scrollIntoView();
    document.getElementById("message").value = "Free session";
}

function menuCoaching() {
    var element = document.getElementById("coaching");
    element.scrollIntoView();
}

function menuContact() {
    var element = document.getElementById("contact");
    element.scrollIntoView();
}

function cleanMsgModal() {
    document.getElementById("validationName").innerHTML = "";
    document.getElementById("validationEmail").innerHTML = "";
    document.getElementById("confirmationEmail").innerHTML = "";
    document.getElementById("errorSendEmail").innerHTML = "";
}

function cleanMsgContact() {
    console.log("here in clean contact");
    //msg validation inputs
    document.getElementById("validationNameContact").innerHTML = "";
    document.getElementById("validationEmailContact").innerHTML = "";
    document.getElementById("validationMsgContact").innerHTML = "";
    //msg validation send email
    document.getElementById("successContact").innerHTML = "";
    document.getElementById("errorContact").innerHTML = "";
}

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModal() {
    modal.style.display = "block";
    cleanMsgModal();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal)
//         modal.style.display = "none";
// }

function showMoreCases (box) {
    document.getElementById(box).style.display = "flex";
    // document.getElementById("link-show-less").style.display = "inline"; //Not use now, maybe in the future.
}

//Not use now, maybe in the future. When have a lot of cases.
function showLessCases () {
    document.getElementById("box-02").style.display = "none";
    document.getElementById("link-show-less").style.display = "none";
}

// var animationFinished = false;
var i = 0;
var txt = "You want to improve your work life,";

var speed = 60;
var speedButton = 480;

//document.getElementById("pitch-02").style.display = "none";
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("pitch-01").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(typeWriter2, speedButton);
        setTimeout(turnOnPitch02, speedButton);
    }
}

function turnOnPitch02() {
    document.getElementById("pitch-02").style.display = "block"
}

var i2 = 0;
var txt2 = " but it's not clear which path to follow?";

function typeWriter2() {
    if (i2 < txt2.length) {
        document.getElementById("pitch-02").innerHTML += txt2.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed);
    }
    else {
        setTimeout(typeWriterButton, speedButton);
        setTimeout(turnOnButton, speedButton);
    }
}

function turnOnButton() {
    document.getElementById("bt-cta").style.display = "block";
}

var iButton = 0;
var txtButton = "I can help you!";

function typeWriterButton() {
    if (iButton < txtButton.length) {
        document.getElementById("bt-cta").innerHTML += txtButton.charAt(iButton);
        iButton++;
        setTimeout(typeWriterButton, speed);
    }
    else
        setTimeout(typeWriterButton2, speedButton);
}

var iButton2 = 0;
var txtButton2 = " Try a free session.";

function typeWriterButton2() {
   // document.getElementById("bt-cta").innerHTML = txtButton;
    
    if (iButton2 < txtButton2.length) {
        document.getElementById("bt-cta").innerHTML += txtButton2.charAt(iButton2);
        iButton2++;
        setTimeout(typeWriterButton2, speed);
    }
    // else
    //     animationFinished = true;
}

// window.addEventListener("scroll",function(){
//     if(document.documentElement.scrollTop == 0 && animationFinished){
//         alert("top")
//         typeWriter();
//     }
//   })

//menu toggle
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
    $('.nav-overlay').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
})(jQuery);