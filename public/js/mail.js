 // MAIL STUFF


 // On Click for mail

 $("#email").click(function() {
     event.preventDefault()
     console.log("clicked")

     swal({
         title: 'Submit email to run ajax request',
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
         if (result.value) {
             swal({
                 type: 'success',
                 title: 'Ajax request finished!',
                 html: 'Submitted email: ' + result.value
             })
         }
     })

 })

 //  $('document').ready(function() {
 //   $('#btnTest').click(function() {
 //     $('#dummyModal').modal('show');
 //   });
 // });



 // var from, to, subject, text, store_location, order, name, dropOff;
 // $("#send_email").click(function() {
 //     event.preventDefault()
 //     store_location = $("#store_location").val();
 //     order = $("#order").val();
 //     name = $("#name").val();
 //     dropOff = $("#dropOff").val();
 //     to = "errandsbiz24@gmail.com";
 //     subject = "Order";
 //     $("#main").text("Sending E-mail...Please wait");
 //     // data = {to:to,subject:subject,location:location,order:order,name:name,dropOff:dropOff}
 //     data = { to, subject, text: `Store Location: ${store_location}, \n order: ${order}, \n name: ${name}, \n dropOff: ${dropOff}` }
 //     $.ajax({
 //         type: "POST",
 //         url: 'http://localhost:3000/send',
 //         data: data,
 //         success: function(data) {
 //             console.log('mail response:', data);
 //             if (data == "sent") {
 //                 $("#main").empty().html("Email is been sent. " + name + " Your order is on the way!");
 //             }
 //         }
 //     })
 //         $.get("http://localhost:3000/send",{to:to,subject:subject,location:location,order:order,name:name,dropOff:dropOff},function(data){
 //         if(data=="sent")
 //         {
 //             $("#main").empty().html("Email is been sent at "+to+". Your order is on it's way!");
 //         }
 // });
 // });
 // ******