SELECT 
    biblio.biblionumber, 
    author, 
    title, 
    isbn,
    location,
    ExtractValue(marcxml,'//datafield[@tag="520" AND @ind1="#" AND @ind2="#"]/subfield[@code="a"]') AS "desc"
FROM biblio
INNER JOIN biblioitems ON biblio.biblionumber = biblioitems.biblionumber
LEFT JOIN items ON biblio.biblionumber = items.biblionumber
WHERE isbn IS NOT NULL
AND "desc" IS NOT NULL
AND location = "BIBLIOTEK"
GROUP BY biblio.biblionumber
LIMIT 30
