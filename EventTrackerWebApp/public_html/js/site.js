// site.sj //

$(document).ready(function() {

    "use strict";

    var btnGit = $("#git-button");

    btnGit.on("click", function(){
         window.location.href = "https://github.com/dalkofjac/Project-EventTracker";
         return false;
    });
    
    $('#media').carousel({
        pause: true,
        interval: false,
    });
    
    var usersName = $("#usersName");
    var usersEmail = $("#usersEmail");
    var usersMsg = $("#usersMsg");
    var submitBtn = $("#submitBtn");
    
    submitBtn.on("click", function(){
       window.alert("Korisnik: " + usersName.val() + ", Email: " + usersEmail.val() + ", Poruka: " + usersMsg.val());
       return false;
    });
});

