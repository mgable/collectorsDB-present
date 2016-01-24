"use strict";

angular.module('whatsitworth')
	.constant('CONFIG', {
		"data": {
			"protocol": "http",
			"domain": "search-mgable-es-ht4qtiycv6v543iujwxk6q5n3u.us-west-2.es.amazonaws.com",
			"index": "collectorsdb",
			"type": "advertising_tins",
			"imagePath": "https://s3-us-west-1.amazonaws.com/collectors-db/advertising_tins/store/images/",
			"endpoints": {
				"search": "_search",
				"suggest": "_suggest"
			}
		},
		"columns": [{
					field: "src",
					title: "Item",
					template: "<a href='#: link #'><img src='#: src  #' /></a>"
				},{
					field: "title",
					title: "Description",
					template: "<div class='description'>#: title #</div><div class='meta'><span class='category'>Bidders:&nbsp; <span>#: bidders #</span></span><span class='category'>Watchers:&nbsp;<span>#: watchers #</span></span><span class='category' ng-click='showAdditionalImages(\"#: itemId #\")'>Additional Images:&nbsp;<span>#: count #</span></span></div>",
					encoded: false
				},{
					field: "price",
					title: "Price",
					template: "<span>$#: price # </span>"
				},{
					field: "date",
					title: "Date",
					width: "120px" 
				}]
	});


