$('#btnSignup').click(function () {

    let userName = $('#uname').val();
    let name = $('#fname').val();
    let mobileNumber = $('#number').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let state = "user";

    console.log(name);
    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8079/api/v1/user/save",
        crossDomain:true,
        crossOrigin:true,
        data: JSON.stringify({
            'name': name,
            'email': email,
            'mobileNumber': mobileNumber,
            'address':address,
            'userName': userName,
            'password': password,
            'state':state
        }),
        success: function (resp) {
            confirm("User Added");
            // console.log("respnd udin");
            // console.log(resp.code);
            if (resp.code == 200) {
                confirm("User Added");
                console.log("respond yatin")
            }

        }
    })
});