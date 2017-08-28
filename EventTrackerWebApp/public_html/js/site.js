// site.sj //

$(document).ready(function() {

    "use strict";

    var btnGit = $("#git-button");

    btnGit.on("click", function(){
         window.location.href = "https://github.com/dalkofjac/Project-EventTracker";
         return false;
    });
    
    $('#myCarousel').carousel({
        interval: 40000
    });

    $('.carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length>0) {
 
        next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');   
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});

