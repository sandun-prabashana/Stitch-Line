$('#btnSignup').click(function () {
    let size=$('#uname').val().length;
    let size1=$('#fname').val().length;
    let size2=$('#number').val().length;
    let size3=$('#email').val().length;
    let size4=$('#password').val().length;
    if ((size==0) || (size1==0) || (size2==0) || (size3==0) || (size4==0)){
        swal("Field cannot be empty", "Error");
    }else {
        let userName = $('#uname').val();
        let name = $('#fname').val();
        let mobileNumber = $('#number').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let state = document.getElementById("role").value;
        console.log("hi");
        console.log(state);
        $.ajax({
            method: "POST",
            contentType: "application/json",
            url: "http://localhost:8079/api/v1/user/save",
            crossDomain: true,
            crossOrigin: true,
            data: JSON.stringify({
                'userName': userName,
                'name': name,
                'mobileNumber': mobileNumber,
                'email': email,
                'password': password,
                'state': state
            }),
            success: function (resp) {
                swal("User Added success", "success");
                clear()
                if (resp.code == 200) {
                    swal("User Added success", "success");
                    clear()
                }

            }
        })
    }
});

function clear() {
    $('#uname').val("");
    $('#fname').val("");
    $('#number').val("");
    $('#email').val('');
    $('#password').val('');
}