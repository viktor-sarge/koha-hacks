Till OpacNavRight

<div class="rss-widget-container">
 <div class="rss-widget-head">
   Rubriker från bloggen
 </div>
 <div class="rss-widget-body" id="bloggen">
  <ul class="rss-items"></ul>
  <div class="loading">
   Laddar innehåll från bloggen. Detta kräver Javascript aktiverat i din webbläsare. 
  </div>
  </div>
</div>


<div class="rss-widget-container">
 <div class="rss-widget-head">
   Bokbästisarna
 </div>
 <div class="rss-widget-body" id="bokbastisarna">
  <ul class="rss-items"></ul>
  <div class="loading">
   Laddar innehåll från bloggen. Detta kräver Javascript aktiverat i din webbläsare. 
  </div>
  </div>
</div>



Till OpacUserJS

$("#bloggen").ready(function () {
    var proxy_url = "http://MINPROXYSERVER.appspot.com/crossdomain?url=http://hyltebiblioteken.blogspot.com/feeds/posts/default&callback=?";
    $.getJSON(proxy_url, function (data) {
        var feedXML = $(data.content);
        feedXML.find("entry").slice(0, 5).each(function () {
            var $this = $(this),
                item = {
                    title: $this.find("title").text(),
                    link: $this.find("link[rel='alternate']").attr('href')
                };
            if (item.title.length === 0) {
                item.title = "Utan titel";
            }
            var item_html = '<li><a href="' + item.link + '">' + item.title + '</a></li>';
            $("#bloggen ul.rss-items").append(item_html);
        });
        $("#bloggen div.loading").fadeOut();
        $("#bloggen ul.rss-items").slideDown();
    });
}); 

$("#bokbastisarna").ready(function () {
    var proxy_url = "http://MINPROXYSERVER.appspot.com/crossdomain?url=http://bokbastisarna.blogspot.com/feeds/posts/default&callback=?";
    $.getJSON(proxy_url, function (data) {
        var feedXML = $(data.content);
        feedXML.find("entry").slice(0, 5).each(function () {
            var $this = $(this),
                item = {
                    title: $this.find("title").text(),
                    link: $this.find("link[rel='alternate']").attr('href')
                };
            if (item.title.length === 0) {
                item.title = "Utan titel";
            }
            var item_html = '<li><a href="' + item.link + '">' + item.title + '</a></li>';
            $("#bokbastisarna ul.rss-items").append(item_html);
        });
        $("#bokbastisarna div.loading").fadeOut();
        $("#bokbastisarna ul.rss-items").slideDown();
    });
});

/* Please note - you need to use your own proxy server giving you JSONP data when you post a request with the callback parameter.
You can run your own proxy server for free on Google App Enging using our software https://github.com/regionbibliotekhalland/samsokproxy
*/       
