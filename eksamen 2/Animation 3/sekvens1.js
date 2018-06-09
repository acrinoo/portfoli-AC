$(window).on("load", begynd);

function sidenVises() {
    console.log("sidenVises");

}

$("#junglemusik")[0].play();

function Flamingostart() {

    $("#start").on("click", moveIn);
}

$("#start").on("click", clickBox); {
    function clickBox() {
        console.log("duHarKlikketPåBoxen");
        $("box").off("click", clickbox);
    }
}
$("#hippo_container").addClass("move_in")


//    $("#mit_element").on("animationend",navnetPåDenFunktionDerSkalEksekveresNårCssAnimationenErSpilletFærdig);
//function navnetPåDenFunktionDerSkalEksekveresNårCssAnimationenErSpilletFærdig(){
//	console.log(“Min animation er spillet færdig”);
//}
