// Paste into opacuserjs to have a skeleton to build upon for validating sms-number when the user changes their own smsnumber.

$(document).ready(function () {
    if ($("body").is("#opac-patron-update")) {
        $("#borrower_phone").on("input", function () {
            if ($(this).data("lastval") !== $(this).val()) {
                $(this).data("lastval", $(this).val());
                var VAL = $("#borrower_phone").val();
                var phonepattern = /^\+46[1-9][0-9]{7,9}$/;
        
                // Här logiken för kontroll av själva telefonnumret
                if (phonepattern.test(VAL)) {
                    // Visa någon indikator för att allt är ok.
                    $("#borrower_phone").css("border-color", "green");
                    // Aktivera submit-knappen.
                    // Kod för detta här isf.
                }
 
                else if ($("#borrower_phone").val().length === 0) {
                    $("#borrower_phone").css("border-color", "#cccccc");
                    // Aktivera submit-knappen.
                }
 
                else {
                    // Visa en indikator på att det finns problem med telefonnumret.
                    $("#borrower_phone").css("border-color", "red");
                    // Deaktivera submit-knappen.
                }
            }
        });
    }
});
