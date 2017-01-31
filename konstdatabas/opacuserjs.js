$(document).ready(function(){
  $('.view').remove();
  $('#views').remove();
  $('#tab_descriptions').remove();
  $('#descriptions').remove();
  $('#export').remove();
  $('.print-large').remove();
  $('#moresearches').remove();
  $('.addtoshelf').remove();
  $('.results_summary.lists').remove();
  $('#listsmenu').remove();
  $('#opac-main-search').remove();

// Removing the "toggle hold options bar" 
if ($('body').is('#opac-holds'))
  {$("a.toggle-hold-options").remove()  }

// Removing author and other links by replacing the links with the link text
if ($('body').is('#opac-detail'))
{
$("#catalogue_detail_biblio a").replaceWith(function() { return $(this).text(); });
}


if ($('body').is('#opac-main')){

  // Removing right column and widening the main area
  $('.span3').remove();
  $('.span7').toggleClass('span7 span10');

  // IMAGE GRID CODE STARTS HERE
  // Sets up the url to a public report giving an array of biblionumbers
  var url = "http://rhkonst.bibkat.se/cgi-bin/koha/svc/report?id=17" ;

  // Fetching the JSON data from the report
  $.getJSON(url, function(result){

  $('<h1 style="font-size:4ex;text-align:center">' + "Tillgängligt just nu hos Artoteket" + '</h1>').appendTo($('#opacmainuserblock'));

  var position = 0; 
  var rowStart = '<div class="row-fluid" style="padding-bottom:5ex;">';
  var rowEnd = '</div>';
  var cell = '' 
  var html = ''
  var limit = result.length;   
  // Working through the array of biblioids from 0 to lenght of array 
  while (position < limit)
  { 
  html = html + rowStart;  
  for (var i=0; i<4; ++i)   // Doing four columns per go but handling index out of range below
  {
     
    if (position+i < limit)
     {
      cell = '<div class="span3 text-center"><p><a href="http://rhkonst.bibkat.se/cgi-bin/koha/opac-image.pl?biblionumber='+result[position+i]+'" data-lightbox="coverset" data-title="<a href="http://rhkonst.bibkat.se/cgi-bin/koha/opac-detail.pl?biblionumber='+result[position+i]+'">Beställ detta konstverk</a>"><img src="/cgi-bin/koha/opac-image.pl?thumbnail=1&biblionumber='+result[position+i]+'" style="height:180px"></a></p></div>'
     }
    else{ cell = '<div class="span3 text-center"><p></p></div>' }
     html = html + cell;

  }
  html = html + rowEnd;  // Adding the ending html before potentially breaking of the while loop
  position = position +4;  // Didnt do position++ in the for loop to not exit the while prematurely so now adding the 4 
  }
  
  // Add the final string of generated html
  $('#opacmainuserblock').append(html);


 });
 
 } // End of body is #opac main

}); // End of document ready
