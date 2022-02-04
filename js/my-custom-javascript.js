"use strict";

// $(document).ready(function() {
//
//
// });

$('li').css('font-size', '20px')
$('p').css('font-size', '20')
let welcome = $('#welcome').html();
alert(welcome)

$('#items-you-need').dblclick(function(e) {
    $('p').css('font-size', '18px')

});



$('#helmet').click(function (){
    window.location.href = 'https://escapefromtarkov.fandom.com/wiki/SSh-68_steel_helmet';    // Send browser to url
});

$('#body-armor').click(function (){
    window.location.href = 'https://escapefromtarkov.fandom.com/wiki/BNTI_Module-3M_body_armor';    // Send browser to url
});

$('#tools').click(function (){
    window.location.href = 'https://escapefromtarkov.fandom.com/wiki/Red_Rebel_ice_pick';    // Send browser to url
});

$('#ammo').click(function (){
    window.location.href = 'https://escapefromtarkov.fandom.com/wiki/.45_ACP_RIP';    // Send browser to url
});





$('#helmet').hover(
    function() {
        $(this).css('color', '#FF0000');
    },
    function() {
        $(this).css('color', '#000000');
    }
);

$('#body-armor').hover(
    function() {
        $(this).css('background-color', '#FF0');
    },
    function() {
        $(this).css('background-color', '#FFF');
    }
);

$('#tools').hover(
    function() {
        $(this).css('background-color', '#FF0');
    },
    function() {
        $(this).css('background-color', '#FFF');
    }
);

$('#ammo').hover(
    function() {
        $(this).css('background-color', '#FF0');
    },
    function() {
        $(this).css('background-color', '#FFF');
    }
);


