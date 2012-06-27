// The unfurl url: http://unfurlr.com/?url=

var links = document.getElementsByTagName("a");

var len = links.length;
for (i=0; i < len; i++) {
	links[i].href = "http://unfurlr.com/?url=" + encodeURI(links[i].href);
	links[i].target = "_blank";
}