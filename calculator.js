$(document).ready(
    function() {
        $("button").click(calculateBAC);
    }
);

function calculateBAC()
{

    let numBeers = parseFloat( $("input#beers").val() );

    let numWines = parseFloat( $("input#wines").val() );

    let numShots = parseFloat( $("input#shots").val() );

    let weightInPounds = parseFloat( $("input#weight").val() );

    let hoursSinceDrink = parseFloat( $("input#hours").val() );

    // calculate total drinks with alcohol
    let totalDrinks = numBeers * 0.54 + numWines * 0.6 + numShots * 0.6;

    //Calculate average alcohol absorption rate
    let averageAlcoholAbsorptionRate = totalDrinks * 7.5;

    //BAC Value
    let bac = averageAlcoholAbsorptionRate / weightInPounds;

    // calculate hours rate for BAC
    let bac2 = bac - (hoursSinceDrink * 0.015);

    let displayBAC = bac2.toFixed(3);

    // alert
    $("p#bloodAlcoholCount").text(`Your Blood Alcohol Content(BAC) is ${displayBAC}% after ${hoursSinceDrink} hours.`);
}