$(document).ready(function () {
    
    if ($("body").is("#main_intranet-main")) {
        var reportUrl = "http://rhkonst-admin.bibkat.se/cgi-bin/koha/svc/report?id=24"; // Change to id of your own report
        // Fetching the JSON data from a report
        $.getJSON(reportUrl, function (result) {
            var i = 0;
            var stopindex = result.length;
            var container = $("#holdsToPull");
            var row = "";
            var imagenr = "";
            var pickup = "";
            var orderdate = "";
            var notice = "";
            var name = "";
            var borrowernr = "";
            var barcode = "";
            var rowHTMLleft = "";
            var rowHTMLright = "";
            for (i = 0; i < stopindex; i += 1) {
                imagenr = result[i][0];
                pickup = result[i][1];
                orderdate = result[i][3];
                notice = result[i][4];
                name = result[i][6] + " " + result[i][5];
                borrowernr = result[i][7];
                barcode = result[i][8];
                rowHTMLright = "<div><strong>Konstverk " + barcode + "</strong><br>Hämtas på: " + pickup;
                rowHTMLright = rowHTMLright + "<br>" + "Beställd: " + orderdate + " av " + name + " (" + borrowernr + ")<br>Notering: " + notice + "</div>";
                rowHTMLleft = "<div style='float:left;padding-right:10px'><img src='http://rhkonst.bibkat.se/cgi-bin/koha/opac-image.pl?thumbnail=1&imagenumber=" + imagenr + "'></div>";
                row = $("<div/>", {"style": "clear:both", "html": rowHTMLleft + rowHTMLright});
                container.append(row);
            }
        });
    }
});
