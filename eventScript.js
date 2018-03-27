var contextMenu ={
	"id":"spenMoney",
	"title": "spenMoney",
	"contexts":["selection"]
};

chrome.contextMenus.create(contextMenu);


chrome.contextMenus.onClicked.addListener(function(clickData){
	//console.log(clickData.selectionText);
	chrome.storage.sync.set({'clickData':clickData.selectionText,function(){
		close();
	}}),

	chrome.storage.sync.get("clickData", function (data) { console.info(data) });
});



