// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap

$(document).ready(function () {

    $("#slider-range").slider({
        range: "min",
        value: 10000,
        min: 1,
        max: 500000,
        slide: function (l, m) {
            no_of_emails = m.value;
            if (no_of_emails == 1) {
                $("#emailemails").text("email")
            } else {
                $("#emailemails").text("emails")
            }
            ses_delivery = 0;
            ses_per_email = 0.0004;
            ses_cost = ses_delivery + (no_of_emails * ses_per_email);
            if (no_of_emails == 1) {
                ses_cost = ses_cost.toFixed(4)
            } else {
                ses_cost = ses_cost.toFixed(2)
            }
            cm_per_email = 0.01;
            cm_delivery = 5;
            cm_cost = cm_delivery + (no_of_emails * cm_per_email);
            cm_savings = cm_cost - ses_cost;
            cm_cost = a(cm_cost.toFixed(2));
            if (no_of_emails <= 5000) {
                mc_per_email = 0.03
            } else {
                if (no_of_emails <= 25000 && no_of_emails > 5000) {
                    mc_per_email = 0.02
                } else {
                    if (no_of_emails > 25000) {
                        mc_per_email = 0.01
                    }
                }
            }
            mc_delivery = 0;
            mc_cost = mc_delivery + (no_of_emails * mc_per_email);
            mc_savings = mc_cost - ses_cost;
            mc_cost = a(mc_cost.toFixed(2));
            $("#penny-static").hide();
            $("#penny-dynamic").show();
            average_savings = a(((mc_savings + cm_savings) / 2).toFixed(2));
            $(".savings").text("$" + average_savings);
            if (no_of_emails == 1) {
                $(".emails").text("")
            } else {
                $(".emails").text(a(no_of_emails))
            }
            $("#ses_cost").text(ses_cost);
            $("#cm_cost").text(cm_cost);
            $("#mc_cost").text(mc_cost)
        }
    });
    $(".emails").text(a($("#slider-range").slider("value")));
    $("#ses_cost").text(4);
    $("#cm_cost").text(105);
    $("#mc_cost").text(200);

    function a(l) {
        return l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
});
