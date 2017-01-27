// Gör rutan för personnummer: 
//   röd - om formatet på det som står i fältet inte stämmer med ett personnummer.
//   grön - om formatet på det står i fältet stämmer med ett personnummer.
//   ofärgad - om rutan är tom.

// Klistra in i syspref IntranetUserJS för att använda.
// OBS! Ändra alla förekomster av patron_attr_4 till det id som ert personnummer fält har i HTML-koden.
// Gå till /cgi-bin/koha/admin/patron-attr-types.pl för att skapa personnummer-attribut om ni inte har det.
// Aktivera sedan syspref för extendet patron attributes om ni inte redan har det på (Koha ger en varning isf).

// Koden ger en visuell hjälp att se att formatet stämmer men kontrollerar inte mot folkbokföringen att det är ett giltigt personnummer.

$(document).ready(function () {
    // Kör bara koden på sidan där låntagarna uppdaterar sina uppgifter
    if ($("body").is("#pat_memberentrygen")) {
        // Bevaka fältet för personnummer efter förändringar
        $("#patron_attr_4").on("input", function () {
            if ($(this).data("lastval") !== $(this).val()) {
                $(this).data("lastval", $(this).val());
                var VAL = $("#patron_attr_4").val();
                // Ett reguljärt uttryck för att matcha mönstret hos personnummer
                var personnummerPattern = /^(?:19|[2-9][0-9]){0,1}(?:[0-9]{2})(?!0229|0230|0231|0431|0631|0931|1131)(?:(?:0[1-9])|(?:1[0-2]))(?:(?:0[1-9])|(?:1[0-9])|(?:2[0-9])|(?:3[01]))[-+](?!0000)(?:[0-9]{4})$/;
        
                // Här logiken för kontroll av själva personnumret
                if (personnummerPattern.test(VAL)) {
                    // Visa någon indikator för att allt är ok.
                    $("#patron_attr_4").css("border-color", "green");
                    $("#patron_attr_4").css("background-color", "#d8ffe0");
                }
 
                else if ($("#patron_attr_4").val().length === 0) {
                    //alert("Inuti else if length 0");
                    $("#patron_attr_4").css("border-color", "initial");
                }
 
                else {
                    // Visa en indikator på att det finns problem med personnumret.
                    $("#patron_attr_4").css("border-color", "red");
                    $("#patron_attr_4").css("background-color", "#ffd8d8");                    
                }
            }
        });
    }
});
