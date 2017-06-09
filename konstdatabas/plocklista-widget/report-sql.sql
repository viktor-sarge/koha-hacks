SELECT imagenumber, reserves.branchcode AS "Hämtställe", priority AS "Köplats", reservedate AS "Beställningsdatum", reservenotes AS "Noteringar", surname AS "Efternamn", firstname AS "Förnamn", cardnumber AS "Lånekortsnummer", barcode AS "Inventeringsnr." FROM reserves
LEFT JOIN borrowers ON reserves.borrowernumber = borrowers.borrowernumber
LEFT JOIN items ON reserves.biblionumber = items.biblionumber
LEFT JOIN biblioimages ON reserves.biblionumber = biblioimages.biblionumber
WHERE found IS NULL
