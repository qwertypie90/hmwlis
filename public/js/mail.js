 // MAIL STUFF
 var to;
 var subject = "someone just sent you their w!shl!st"
 // On Click Function For Mail
 $("#email").click(function() {
     event.preventDefault()
     var x = wishes.toString()
     var wishArr = x.split(",").join("\n")
     swal({
         title: '- Email all of your W!$HES -',
         input: 'email',
         showCancelButton: true,
         confirmButtonText: 'Submit',
         showLoaderOnConfirm: true,
         preConfirm: (email) => {
             return new Promise((resolve) => {
                 setTimeout(() => {
                     if (email === 'taken@example.com') {
                         swal.showValidationError(
                             'This email is already taken.'
                         )
                     }
                     resolve()
                 }, 2000)
             })
         },
         allowOutsideClick: false
     }).then((result) => {
         to = $(".swal2-input").val();
         subject = "Order";
         data = { to, subject, text: `w!sHes: \n ${wishArr}` }
         console.log(data)
         $.ajax({
             type: "POST",
             url: 'http://localhost:8080/send',
             data: data,
             success: function(data) {
                 console.log('mail response:', data);
             }
         })
         if (result.value) {
             swal({
                 type: 'success',
                 title: 'Email Sent',
                 html: 'Submitted email: ' + result.value
             })
         }
     })
 })