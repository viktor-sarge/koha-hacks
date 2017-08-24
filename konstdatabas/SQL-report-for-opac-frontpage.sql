SELECT biblioimages.biblionumber, biblioimages.imagenumber, ExtractValue(biblioitems.marcxml,'//datafield[@tag="100"]/*') AS artist, biblio.title, ExtractValue(biblioitems.marcxml,'//datafield[@tag="300"]/*') AS measurements, v.lib
FROM biblioimages
INNER JOIN items
  ON items.biblionumber = biblioimages.biblionumber
LEFT JOIN reserves
  ON items.biblionumber = reserves.biblionumber
LEFT JOIN biblio
  ON items.biblionumber = biblio.biblionumber
LEFT JOIN biblioitems
  ON items.biblionumber = biblioitems.biblionumber
LEFT JOIN authorised_values v
  ON ExtractValue(biblioitems.marcxml,'//datafield[@tag="653"]/*') = v.authorised_value
WHERE reserves.biblionumber IS NULL
AND itemlost = 0
AND onloan IS NULL
AND damaged = 0
AND restricted IS NULL
AND notforloan = 0
