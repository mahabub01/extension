

$("#btn_click").on("click",function() {
	$("#btn_result").text("hello");
})


$("#btn_notification").on("click",function() {
	var notification = {
		"type":"basic",
		"iconUrl":"icon64.png",
		"title":"notification title",
		"message": "Hello user! it is not possible for u"
	};


	chrome.notifications.create("primaryNotification",notification);
})