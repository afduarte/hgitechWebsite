/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$("#intro").click(function() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 1500, 'easeInOutExpo');
});
$('#intro a').click( function(e) {
    e.stopPropagation();
});
/* SKIP PORTFOLIO
$("#services").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1500, 'easeInOutExpo');
});*/
$("#services").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500, 'easeInOutExpo');
});
$('#services a').click( function(e) {
    e.stopPropagation();
});
/*
$("#portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500, 'easeInOutExpo');
});
$('#portfolio a').click( function(e) {
    e.stopPropagation();
});*/

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#team").offset().top
    }, 1500, 'easeInOutExpo');
});
$('#about a').click( function(e) {
    e.stopPropagation();
});

$("#team").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500, 'easeInOutExpo');
});
$('#team a').click( function(e) {
    e.stopPropagation();
});



