// Ta bort högerspalten på opacs förstasida och gör huvudytan bredare. 
// Obs - något av ett "fulhack" som bygger på att bara de två berörda elementen har klasserna .span3 och .span7.
// (Bootstrap har ett gridsystem som bygger på tolv kolumner så .span10 är en klass i bootstrap som betyder att huvudytan får tio tolftedelar av föräldraelementet)

$(document).ready(function () {
    if ($("body").is("#opac-main")) {
        $(".span3").remove();
        $(".span7").toggleClass("span7 span10");
    }
});
