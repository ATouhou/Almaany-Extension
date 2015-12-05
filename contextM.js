
function getword(info,tab) {
	console.log(tab);

   console.log("Word " + info.selectionText + " was clicked.");
    
    if (info.selectionText.match(/[\u0600-\u06FF]+/g)){

    chrome.tabs.create({ 

        url: "http://www.almaany.com/ar/dict/ar-ar/" + info.selectionText,
    });
		console.log('ar-ar');
	}
    else if(info.selectionText.match(/[\u0000-\u007E]+/g)){
    	chrome.tabs.create({ 

        url: "http://www.almaany.com/en/dict/ar-en/" + info.selectionText,
    });
		console.log("en");
	}
	else{
		console.log("not a valid language");
	}


}
//API: https://developer.chrome.com/extensions/contextMenus#method-create
chrome.contextMenus.create({

    title: "Lookup %s on Almaany.com", 
    contexts:["selection"], 
    onclick: getword,

});
