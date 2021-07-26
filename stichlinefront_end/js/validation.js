var LName=/^[A-Z]{1}[a-z]{1,9}$/;
$('#login_uname').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#login_uname').val();
    if (LName.test(inputName)){
        $('#login_span_uname').text('');
        // $('#custName').css('border','2px solid lime');
        if (input=="Enter"){
        }
    }else {
        // $('#custName').css('border','2px solid red');
        $('#login_span_uname').text('Data format Is Wrong(Ex:-Name)');
        $('#login_uname').focus();
    }
});

var Name=/^[A-Z]{1}[a-z]{1,9}$/;
$('#uname').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#uname').val();
    if (Name.test(inputName)){
        $('#spanuname').text('');
        // $('#custName').css('border','2px solid lime');
        if (input=="Enter"){
            $('#fname').focus();
        }
    }else {
        // $('#custName').css('border','2px solid red');
        $('#spanuname').text('Data format Is Wrong(Ex:-Name)');
        $('#uname').focus();
    }
});

var FullName=/^[A-Z]{1}[a-z]{1,9}( )[A-Z]{1}[a-z]{1,9}$/;
$('#fname').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#fname').val();
    if (FullName.test(inputName)){
        $('#spanfname').text('');
        // $('#custName').css('border','2px solid lime');
        if (input=="Enter"){
            $('#number').focus();
        }
    }else {
        // $('#custName').css('border','2px solid red');
        $('#spanfname').text('Data format Is Wrong(Ex:-Name Name)');
        $('#fname').focus();
    }
});

var Phone=/^[0-9]{3}(-)[0-9]{7}$/;
$('#number').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#number').val();
    if (Phone.test(inputName)){
        $('#spannumber').text('');
        // $('#custPhone').css('border','2px solid lime');
        if (input=="Enter"){
            $('#email').focus();
        }
    }else {
        // $('#custPhone').css('border','2px solid red');
        $('#spannumber').text('Data format Is Wrong(Ex:-111-1111111)');
        $('#number').focus();
    }
});

var Email=/^[a-z]{1,9}(@gmail.com)$/;
$('#email').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#email').val();
    if (Email.test(inputName)){
        $('#spanemail').text('');
        // $('#EmailAddress').css('border','2px solid lime');
        if (input=="Enter"){
            $('#password').focus();
        }
    }else {
        // $('#EmailAddress').css('border','2px solid red');
        $('#spanemail').text('Your Input Data format Is Wrong(Ex:-name@gmail.com)');
        $('#email').focus();
    }
});

