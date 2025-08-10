function openModel(name){ 
        let formSubmit = $('form')
        formSubmit.on('submit',function (params) {
            // console.log('click');
            $('#ajaxLoader').show();
        });

