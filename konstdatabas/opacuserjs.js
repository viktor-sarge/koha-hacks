$(document).ready(function () {
    // Cleaning up the opac since we only want main area + our new image grid
    $(".view").remove();
    $("#views").remove();
    $("#tab_descriptions").remove();
    $("#descriptions").remove();
    $("#export").remove();
    $(".print-large").remove();
    $("#moresearches").remove();
    $(".addtoshelf").remove();
    $(".results_summary.lists").remove();
    $("#listsmenu").remove();
    $("#opac-main-search").remove();
    $("ul.menu-collapse li:contains('dina listor')").remove();

    // Removing the "toggle hold options bar" during placing a hold
    if ($("body").is("#opac-holds")) {
        $("a.toggle-hold-options").remove();
    }

    // Removing author and other links by replacing the links with the link text
    if ($("body").is("#opac-detail")) {
        $("#catalogue_detail_biblio a").replaceWith(function () {
            return $(this).text();
        });
    }
    
    // Everything we want to do only to the main area of opac homepage
    if ($("body").is("#opac-main")) {
        // Removing right column and widening the main area
        // Depending on there only being one .span3 and .span7 so bit of a ugly hack
        $(".span3").remove();
        $(".span7").toggleClass("span7 span10");

        // IMAGE GRID CODE STARTS HERE
        // Sets the url of public report serving an array of biblionumbers + imagenumbers
        var url = "http://rhkonst.bibkat.se/cgi-bin/koha/svc/report?id=21";

        // Fetching the JSON data from a public report
        $.getJSON(url, function (result) {
            $("<h1 style=\x22font-size:4ex;text-align:center\x22>" + "Tillgängligt just nu hos Artoteket" + "</h1>").appendTo($("#opacmainuserblock"));

            var position = 0;
            var rowStart = "<div class=\x22row-fluid\x22 style=\x22padding-bottom:5ex;\x22>";
            var rowEnd = "</div>";
            var cell = "";
            var html = "";
            var i = 0;
            var limit = result.length;
            // Working through the array of biblioids from 0 to lenght of array
            while (position < limit) {
                html = html + rowStart;
                for (i = 0; i < 4; ++i) {   // Doing four columns per go but handling index out of range below
                    if (position + i < limit) {
                        cell = "<div class=\x22span3 text-center\x22><p><a href=\x22http://rhkonst.bibkat.se/cgi-bin/koha/opac-image.pl?imagenumber=" + result[position + i][1] + "\x22 data-lightbox=\x22coverset\x22 data-title=\x27<a href=\x22http://rhkonst.bibkat.se/cgi-bin/koha/opac-detail.pl?biblionumber=" + result[position + i][0] + "\x22>Beställ detta konstverk</a>\x27><img src=\x22/cgi-bin/koha/opac-image.pl?thumbnail=1&imagenumber=" + result[position + i][1] + "\x22 style=\x22height:180px\x22></a></p></div>";
                    }
                    else {
                        cell = "<div class=\x22span3 text-center\x22><p></p></div>";
                    }
                    html = html + cell;
                }
                html = html + rowEnd;  // Adding the ending html before potentially breaking of the while loop
                position = position + 4;  // Didnt do position++ in the for loop to not exit the while prematurely so now adding the 4
            }
            // Add the final string of generated html
            $("#opacmainuserblock").append(html);
        }); // end of the getJSON anonymous function
    } // End of body is #opac main
}); // End of document ready
