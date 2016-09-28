$(function () {
    $("#calculate").click(function () {
        calculateTip();
    })
    $("#clearSpace").click(function() {
        location.reload();
    })


});
function calculateTip() {

    var billAmount = $("#billAmount").val();
    var serviceQuality = $("#serviceQuality").val();
    var numPeople = $("#totalPeople").val();

    if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;

        $("#each").hide();
    } else {
        $("#each").show();

    }
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

   
    $("#totalTip").show();
    $("#tip").html('<h3> $' + total + ' </h3>');
}

    $("#textTip").hide();
    $("#each").hide();
    $("#totalTip").hide();