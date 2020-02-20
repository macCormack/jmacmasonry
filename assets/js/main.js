document.addEventListener("DOMContentLoaded", function () {
    mobileNav();
    owlCarousel();
    freeEstimate();
});

if (top.location.pathname === '/') {
    snapSvg();
};

// SNAP SVG BUTTONS
function snapSvg() {
    var s = Snap("#svg");
    var r = Snap("#svg2");


    // Full sized Brick || Button 1
    var l1 = s.rect(90, -25, 55, 20);
    var l2 = s.rect(30, -25, 55, 20);
    var l3 = s.rect(65, -26, 55, 20);
    var l4 = s.rect(5, -26, 55, 20);
    var l5 = s.rect(30, -26, 55, 20);

    // Button 2
    var r1 = r.rect(155, -26, 55, 20);
    var r2 = r.rect(215, -26, 55, 20);
    var r3 = r.rect(180, -26, 55, 20);
    var r4 = r.rect(240, -26, 55, 20);
    var r5 = r.rect(215, -26, 55, 20);

    // Half Bricks || button 1
    var s1 = s.rect(5, -25, 20, 20);
    var s2 = s.rect(5, -26, 20, 20);

    // Button 2
    var rs1 = r.rect(275, -26, 20, 20);
    var rs2 = r.rect(275, -26, 20, 20);


    var bricks1 = s.group(l1, l2, l3, l4, l5, s1, s2);
    bricks1.attr({
        fill: "#fefefe"
    });

    var bricks2 = r.group(r1, r2, r3, r4, r5, rs1, rs2);
    bricks2.attr({
        fill: '#fefefe'
    });

    // BUTTON 1
    $('.home-service').on('mouseenter', function () {
        l1.animate({ y: 50 }, 200);
        l2.animate({ y: 50 }, 275);
        s1.animate({ y: 50 }, 335);
        l3.animate({ y: 26 }, 400);
        l4.animate({ y: 26 }, 475);
        l5.animate({ y: 2 }, 535);
        s2.animate({ y: 2 }, 600);
    });

    $('.home-service').on('mouseleave', function () {
        s2.animate({ y: -45 }, 200);
        l5.animate({ y: -45 }, 275);
        l4.animate({ y: -35 }, 335);
        l3.animate({ y: -35 }, 400);
        s1.animate({ y: -25 }, 475);
        l2.animate({ y: -25 }, 535);
        l1.animate({ y: -25 }, 600);
    });

    // BUTTON 2
    $('.home-work').on('mouseenter', function () {
        r1.animate({ y: 50 }, 200);
        r2.animate({ y: 50 }, 275);
        rs1.animate({ y: 50 }, 335);
        r3.animate({ y: 26 }, 400);
        r4.animate({ y: 26 }, 475);
        r5.animate({ y: 2 }, 535);
        rs2.animate({ y: 2 }, 600);
    });

    $('.home-work').on('mouseleave', function () {
        rs2.animate({ y: -45 }, 200);
        r5.animate({ y: -45 }, 275);
        r4.animate({ y: -35 }, 335);
        r3.animate({ y: -35 }, 400);
        rs1.animate({ y: -25 }, 475);
        r2.animate({ y: -25 }, 535);
        r1.animate({ y: -25 }, 600);
    });
}

//MOBILE NAV 
function mobileNav() {
    var trigger = $('.nav-trigger');

    trigger.on('click', function () {
        $('.nav').toggleClass('is-opened');

        if ($('.nav').hasClass('is-opened')) {
            $('.nav-overlay').on('click', function () {
                $('.nav').removeClass('is-opened');
            })
        }
    })

};

// OWL CAROOUSEL INIT
function owlCarousel() {
    $('.owl-carousel').owlCarousel({
        autoHeight: true,
        loop: true,
        nav: true,
        dots: false,
        center: true,
        items: 1,
    })
};

//FREE ESTIMATE FORM
function freeEstimate() {
    var wrapper = $('.free-estimate-wrapper');

    $('.quote-link').on('click', function (e) {
        e.preventDefault();
        $(wrapper).addClass('active');
    })

    $('.free-estimate-close').on('click', function (e) {
        e.preventDefault();
        $(wrapper).removeClass('active');
    })
};

var responseKey = '';
var apiKey = '6LdseI0UAAAAAGmfh8dBwZmHz8chPYZacx1XytQr';

var cFormCaptcha = function (response) {
    // console.log(response);
    responseKey = response;

    // console.log(responseKey);
}

//FORM VALIDATION
// $(function () {
//     $('#contact').validator();

//     // console.log(grecaptcha.getResponse('contact-captcha'));

//     // when the form is submitted
//     $('#contact').on('submit', function (e) {
//         e.preventDefault();
//         var capResponse = $('#g-recaptcha-response').val();
//         // console.log(capResponse);
//         // if the validator does not prevent form submit
//         if (capResponse.length > 2) {
//             //Test for submission
//             // console.log($(this).serialize());
//             // console.log(responseKey);

//             var url = "/assets/mail.php";
//             var proxy = 'https://cors-anywhere.herokuapp.com/'
//             var googUrl = 'https://www.google.com/recaptcha/api/siteverify';

//             //POST TO RECAPTCHA
//             $.ajax({
//                 type: "POST",
//                 url: proxy + googUrl,
//                 crossDomain: true,
//                 data: {
//                     secret: apiKey,
//                     response: responseKey
//                 },
//                 success: function (data) {
//                     if (data.success === true) {
//                         console.log($('#contact').serialize());
//                         // POST contact form after being verified by recaptcha.
//                         $.ajax({
//                             type: "POST",
//                             url: $('#contact').attr("action"),
//                             data: $('#contact').serialize(),
//                             success: function (data)
//                             {
//                             	console.log('success' + data);
//                                 // data = JSON object that contact.php returns

//                                 // we recieve the type of the message: success x danger and apply it to the 
//                                 var messageAlert = data.type;
//                                 var messageText = data.message;

//                                 // let's compose Bootstrap alert box HTML
//                                 var alertBox = '<span>' + messageText + '</span>';

//                                 // If we have messageAlert and messageText
//                                 if (messageText) {
//                                     // inject the alert to .messages div in our form
//                                     $('#contact').find('.form-messages-inner').html(alertBox);
//                                     $('.form-messages-inner').addClass(messageAlert);
//                                     // empty the form
//                                     $('#contact')[0].reset();
//                                     grecaptcha.reset();

//                                     setTimeout(function() {
//                                         $('.form-messages-inner').removeClass(messageAlert);
//                                         $('.form-messages-inner').empty();
//                                     }, 6000);
//                                 }
//                             },
//                             error: function (request, status, error) {
//                                 var errorText = '<span>Server error <b>' + request.status + '&nbsp;' + error + '</b> if you continue to have the problem please contact the webmaster</span>';
//                                 $('#contact').find('.form-messages-inner').html(errorText);
//                                 $('.form-messages-inner').addClass('error');
//                                 grecaptcha.reset();
//                             }
//                         });
//                         return false;

//                     }
//                 },
//                 error: function (data) {
//                     console.log(data);
//                     grecaptcha.reset();
//                 }
//             });

//         } else {
//             var capError = "Error you must check the I'm not a human box";

//             if (capResponse.length === 0) {
//                 $('.form-messages-inner').addClass('error');
//                 $('#contact').find('.form-messages-inner').html(capError);
//             }
//         }
//     })
// });