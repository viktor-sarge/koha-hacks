// Klistra in i opacuserjs-sysprefen för att ha ett skelett att bygga på för att validera SMS-nummer.
// Anpassa allra minst så att signalen inte är röd/grön vilket är problematiskt för färgblinda.

$(document).ready(function () {
    // Kör bara koden på sidan där låntagarna uppdaterar sina uppgifter
    if ($("body").is("#opac-patron-update")) {
        // Bevaka fältet borrower_phone efter förändringar
        $("#borrower_phone").on("input", function () {
            if ($(this).data("lastval") !== $(this).val()) {
                $(this).data("lastval", $(this).val());
                var VAL = $("#borrower_phone").val();
                // Ett reguljärt uttryck för att matcha mönstret hos mobilnummer
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
