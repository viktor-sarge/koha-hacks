/* 
Code for Koha-versions prior to 17.05 (like 16.11)
*/ 

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

/* 
Code for 17.05 and later. (MARCXML has been moved in the database.)
*/ 

SELECT 
    biblio.biblionumber, 
    author, 
    title, 
    isbn,
    location,
    ExtractValue(biblio_metadata.metadata,'//datafield[@tag="520" AND @ind1="#" AND @ind2="#"]/subfield[@code="a"]') AS "desc"
FROM biblio
INNER JOIN biblioitems ON biblio.biblionumber = biblioitems.biblionumber
LEFT JOIN items ON biblio.biblionumber = items.biblionumber
INNER JOIN biblio_metadata ON biblio_metadata.biblionumber = biblio.biblionumber
WHERE isbn IS NOT NULL
AND "desc" IS NOT NULL
AND location = "BIBLIOTEK"
GROUP BY biblio.biblionumber
LIMIT 30
