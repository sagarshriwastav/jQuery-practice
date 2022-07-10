// $(document).ready(function () {
//     $("h1").css("color", "red");
//     $("h1").innerHTML("hello Boy");
// });
// $("h1").css("color","green");
// console.log($("h1").css("color"));
$("h1").addClass("big-title margin-50");


$("h1").removeClass("big-title");//to remove any class with jQuery

$("h1").hasClass("margin-50");//it returns true or false depends upon availability.

// to change html text using jQuery
$("h1").text("hello BOY");//Similar to .innertext in pure js
$("button").text("Don't click me.");
$("button").html("<b>Bold button</b>");        //Similar to .innerHTML in pure js

//181. Manipulating Attributes with jQuery
console.log($("img").attr("src"));
$("a").attr("href", "https://www.minifier.org/");

//182. Adding Event Listeners with jQuery
$("h1").click(function () {
    $("h1").css("color", "purple");
    // alert("function is called.")
});

$("button").click(function () {
    $("h1").css("color", "purple");
});

// To detect Keypress input from keyboard
/*$("input").keypress(function(event){
console.log(event.key);
});
$("body").keypress(function(event){
console.log(event.key);
});*/

$(document).keypress(function (event) {
    console.log(event.key);
});
$(document).keypress(function (event) {
    $("h1").text(event.key);
});

//On method with  mouuseover event
$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
    $("h1").css("font-size", "4rem");
});
// on method with click event
$("h1").on("click", function () {
    $("h1").css("color", "blue");
    $("h1").css("font-size", "6rem");
});
$("h1").on("keypress", function () {
    $("h1").css("color", "red");
    $("h1").css("font-size", "6rem");
});

//ADDING ELEMENT USING JQUERY USING before(),after(),prepend(),append()

// $("h1").before("<button>newbutton</button>");
// $("h1").after("<button>newafterbutton</button>");
$("h1").prepend("<button>NewPrependButton</button>");
// $("h1").append("<button>appendbutton</button>");

//REMOVING ELEMENT USING JQUERY USING .remove()
$("button").remove(".4th-btn");



//184. Website Animations with jQuery like .hide(), .show(), .toggle(), .fadeOut(), .fadeIn(), .fadeToggle(), .slideUp(), .slideDown(), .slideToggle()
$("button").on("click", function () {
    $("h1").fadeToggle().slideToggle().slideUp(4000).slideDown().animate({ opacity: 0.5 }, function () {
        alert("Animation succesfully applied..")
    });
    // $("h1").animate({ opacity: "0.5" });
    // $("h1").slideToggle();
    // $("h1").slideUp();
    // $("h1").fadeToggle();
    // $("h1").fadeIn();
    // $("h1").fadeOut();
    // $("h1").toggle();
    // $("h1").hide();
    // $("h1").show();
});