function unfurlLink(info, tab) {
	var unfurlURL = "http://unfurlr.com/?url=" + encodeURI(info.linkUrl);
	chrome.tabs.create({url: unfurlURL})
}

chrome.contextMenus.create({"title": "Check with Unfurlr",
							"contexts": ["link"],
							"onclick": unfurlLink});