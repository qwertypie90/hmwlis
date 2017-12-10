// Initialize Firebase
var config = {
    apiKey: "AIzaSyC3CKDTMVLVL1VD2Y8Q4A4HdetgerLJVRk",
    authDomain: "wishlist-9e14f.firebaseapp.com",
    databaseURL: "https://wishlist-9e14f.firebaseio.com",
    projectId: "wishlist-9e14f",
    storageBucket: "",
    messagingSenderId: "343300001907"
};
firebase.initializeApp(config);

var wishes = []


$('#save').on("click", function() {
    var result = $(".form-control").val().trim()
    var URLinput = result.link(result)
    $('#linx').prepend(URLinput + "<br/>")
    wishes.push(result)
    $(".form-control").val("");
})

$('.form-control').keydown(function(event) {
    var keyCode = (event.keyCode ? event.keyCode : event.which);
    if (keyCode == 13) {
        $('#save').trigger('click');
    }
});