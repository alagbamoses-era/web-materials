$("h1").addClass("big-title");
$("h1").text("Bye")
$("button").text("Don't Click Me");
$("button").html("<em>Hey</em>");

// Manipulating Attribute with JQuery
console.log($("img").attr("src"))

//To redirect a link
$("a").attr("href", "https://www.yahoo.com" );

// How to add event listener using JQuery
$("h2").click(function() {
    $("h2").css("color", "purple");
});

// to add event listener to button

// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[1].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "red";
//     })

// }

// Using JQuery

$("button").click(function() {
    $("h2").css("color", "purple");
});

// To determine a keypress
// $("input").keypress(function(event) {
//     console.log(event.key)
// })


// How to change h1 to the any key press on the keyboard
$("input").keypress(function(event) {
    $("h1").text(event.key)
})

// Using mouseover event to change color of a text

$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
});


// To add html tag without writing it on index.html

$("h1").before("<button> Before New</button>") // the button will appear before h1 element
$("h1").after("<button> After New</button>") // the button will appear after h1 element
$("h1").prepend("<button> Prepend New</button>") // the button will appear before within the same h1 element
$("h1").append("<button> Append New</button>") // the button will appear after within the same h1 element


// To hide an element
// $("button").on("click", function() {
// $("h1").hide();
// })


// // to show the hide buuton
// $("button").on("click", function() {
// $("h1").show();
// })

// to toggle the button

// $("button").on("click", function() {
// $("h1").toggle();
// })

// To fadeout
// $("button").on("click", function() {
// $("h1").fadeOut();
// })

//to fade in
// $("button").on("click", function() {
// $("h1").fadeIn();
// })


// Fade Toggle option
// $("button").on("click", function() {
// $("h1").fadeToggle();
// })

// To collapse, use slideUp
// $("button").on("click", function() {
// $("h1").slideUp();
// })

// // To uncollapse , use slideDown
// $("button").on("click", function() {
// $("h1").slideDown();
// })

/// Use slideToggle
// $("button").on("click", function() {
// $("h1").slideToggle();
// })

// For customise animation, use .animate()
// $("button").on("click", function() {
// $("h1").animate({opacity: 0.5 });
// })


// Chain animation
$("button").on("click", function() {
$("h1").slideUP().slideDown().animate({opacity: 0.5});
})