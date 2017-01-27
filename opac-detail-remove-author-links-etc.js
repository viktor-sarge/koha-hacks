// Klistra in i opacuserjs-syspref för att använda. 
// Raderar vidaresökningslänkar för författare m.m. från opac-detail.pl sidan.
// Själva länken i HTML-dokumentet ersätts med länktexten.

$(document).ready(function () {
    if ($("body").is("#opac-detail")) {
        $("#catalogue_detail_biblio a").replaceWith(function () {
            return $(this).text();
        });
    }
});
