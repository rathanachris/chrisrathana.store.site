function openModel(name){
    $(name).modal('toggle');
}
document.querySelectorAll(".form-group input").forEach((input) => {
    input.addEventListener("focus", function () {
        this.setAttribute("placeholder", "");
    });
    input.addEventListener("blur", function () {
        if (this.value === "") {
            this.setAttribute(
                "placeholder",
                `Enter Your ${
                    this.getAttribute("name2").charAt(0).toUpperCase() +
                    this.getAttribute("name2").slice(1)
                }`
            );
        }
    });
});
function ProceedBtn(element) {
    $('#ajaxLoader').show();
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let input_email = $('#sc_mail').val();
    if (String(input_email).toLowerCase().match(re)) {
        // console.log('input_email => ',input_email);
        location.href = `/auth//callback?input_email=${input_email}`;
    }else{
        element.disabled = false;
        $('#ajaxLoader').hide();
        // console.log('not matched');
        $('#fill_model_error_msg').text('please provide valid email !');
    }
}
function togglePasswordView(fieldId,btnClass){
        if($(fieldId).attr('type') == 'password'){
            $(fieldId).attr('type','text')
        }
        else{
            $(fieldId).attr('type','password')
        }
        $(btnClass).toggle();
    }
</script> 
    <script type="text/javascript">
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            console.log('website');
            for (let registration of registrations) {
                registration.unregister()
            }
        })
    }
       // this will run when form submit
        
        let formSubmit = $('form')
        formSubmit.on('submit',function (params) {
            // console.log('click');
            $('#ajaxLoader').show();
        });

        // this will run if any ajex will run
        $(document).ajaxStart(function () {
            $("#ajaxLoader").show();
        });
        $(document).ajaxStop(function () {
            $("#ajaxLoader").hide();
    });
});
