// SMS - minska låntagarnas möjligheter att själva välja att få SMS till endast tillgängliga reservationer. 
// Motsvarande kan göras i personalklienten om man inte vill att personalen heller lägger in SMS på låntagarna för andra funktioner.
// Klistra in i opacuserjs för att använda den. 
// Titta i HTML-koden för opac vad id-numret är på de boxar du vill ta bort och anpassa som du önskar. 

$(document).ready(function () {
    $("input#sms1").remove();
    $("input#sms2").remove();
    $("input#sms5").remove();
    $("input#sms6").remove();
});
