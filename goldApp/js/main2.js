/*John Plank
Term 08/12
ASD Project 1
Apocalypse Checklist*/


$(document).on("pageinit", function(){
   
   var cform = $("#checklistForm");
       
       cform.validate({
       		invalidHandler: function(form, validator) {},

       		submitHandler: function() {
			var data = cform.serializeArray();
			localStorage.setItem("formdata", data);
			storeData(data);
			
		}

       });

});

/*function ge(x){
   var theElement = $("#x");
   return theElement;              
};*/

//var ge =$;
var validate;




//var toggleControls;
//gets radio elements if checked
	var getRadio = function () {
		var radio = document.forms[0].apocalypse;
		for (var i = 0; i < radio.length; i++) {
			if (radio[i].checked) {
				apocalypseValue = radio[i].value;
			}

		}
	};

//gets checkbox if they are checked
	var getCheckBoxValue = function () {
		if($("firearm").checked){
			firearmValue = $("#firearm").value;
		}else{
			firearmValue = "No"
		}
		if($("#ammo").checked){
			ammoValue = $("#ammo").value;
		}else{
			ammoValue = "No"
		}
		if($("#meleeWeapon").checked){
			meleeWeaponValue = $("#meleeWeapon").value;
		}else{
			meleeWeaponValue = "No"
		}
		if($("#cannedFood").checked){
			cannedValue = $("#cannedFood").value;
		}else{
			cannedValue = "No"
		}
		if($("#water").checked){
			waterValue = $("#water").value;
		}else{
			waterValue = "No"
		}
		if($("#chainMeshSuit").checked){
			chainMeshSuitValue = $("#chainMeshSuit").value;
 		}else{
			chainMeshSuitValue = "No"
		}
		if($("#topographicalMap").checked){
			topographicalMapValue = $("#topographicalMap").value;
		}else{
			topographicalMapValue = "No"
		}
		if($("#leatherman").checked){
			leathermanValue = $("#leatherman").value;
		}else{
			leathermanValue = "No"
		}
		if($("#rucksack").checked){
			rucksackValue = $("#rucksack").value;
		}else{
			rucksackValue = "No"
		}
		if($("#boots").checked){
			bootsValue = $("#boots").value;
		}else{
			bootsValue = "No"
		}
		if($("#matches").checked){
			matchesValue = $("#matches").value;
		}else{
			matchesValue = "No"
		}
		if($("#p38").checked){
			p38Value = $("#p38").value;
		}else{
			p38Value = "No"
		}
		if($("#intestinalFortitude").checked){
			intestinalFortitudeValue = $("#intestinalFortitude").value;
		}else{
			intestinalFortitudeValue = "No"
		}

	};





var storeData = function (key) {
		if(!key) {
			var id    		= Math.floor(Math.random()* 1000001);
		} else {
			var id = key;
		}
		getCheckBoxValue();
		getRadio();
		var item 			= {};
		    item.apocalypse = ["Apocalypse:", apocalypseValue];
			item.fear       = ["Fear level:", $("#groups").value];
			item.firearm	= ["Firearm:", firearmValue];
			item.ammo		= ["Ammo:", ammoValue];
			item.melee 		= ["Melee weapon:", meleeWeaponValue];
			item.canned		= ["Canned:", cannedValue];
			item.water		= ["Water:", waterValue];
			item.chain		= ["Chain mesh suit:", chainMeshSuitValue];
			item.map 		= ["Topographical Map:", topographicalMapValue];
			item.leatherman = ["Leatherman:", leathermanValue];
			item.rucksack	= ["Rucksack:", rucksackValue];
			item.boots		= ["Boots:", bootsValue];
			item.matches	= ["Matches:", matchesValue];
			item.p38		= ["P38:", p38Value];
			item.intestinal = ["Intestinal Fortitude:", intestinalFortitudeValue];
			//item.item		= ["Item:", ge("item").value];			
			item.date       = ["World Ended:", $("#date").value];
			item.email		= ["Email:", $("#email").value];
			item.comments	= ["Comments:", $("#comments").value];
			item.readiness  = ["Readiness:", $("#readiness").value];

		localStorage.setItem(id, JSON.stringify(item));
		alert("Checklist Saved!");
	console.log(item);
	


	};


	var getData = function () {
		//changePage("savedData");
		//toggleControls("on");
		if (localStorage.length === 0) {
			alert("There is no data in Local Storage so data was added. ");
			autoFillData();
		}

		var savedData = $("#savedData");
		//console.log(savedData);
		for (var i = 0, len = localStorage.length; i < len; i++) {
			 $("<li>").append(savedData);
			 //var linksLi = $("<li>");
			 //makeList.appendTo("#makeli");
			 var key = localStorage.key(i);
			 var value = localStorage.getItem(key);

			 var obj = JSON.parse(value);
			 //console.log(key, value, obj);
			 //var makeSubList = $("<ul>");
			 //makeli.appendTo("#makeSubList");
			 //getImage(obj.apocalypse[1], makeSubList);
			 for (var t in obj) {
			 	$("<p>" + obj[t][0]+ "</p>").append(savedData);
			 	// var makeSubLi = $("<li>");
			 	// makeSubList.appendTo("#makeSubLi");
			 	// var optSubText = obj[t][0]+" "+obj[t][1];
			 	// makeSubLi.html = optSubText;
			 	// makeSubList.appendTo("#linksLi");
			 }
			//makeItemLinks(localStorage.key(i),  linksLi);
			//console.log(i);
		}
		//changePage("savedData");
		//refreshList();
		console.log(obj);	
	};

function refreshList(){
	console.log('List refreshed');
	$("#checklistData").listview('refresh');
};


var getImage = function (catName, makeSubList) {
		var imageLi = $("#<li>");
		makeSubList.appendTo("#imageLi");
		var newImg = $("#<img>");
		var setSrc = newImg.attr("src", "images/" + catName + ".png");
		imageLi.appendTo("#newImg");
	};



var autoFillData = function () {
		for ( var n in json) {
			var id = Math.floor(Math.random()* 1000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}

var editItem = function () {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

		//toggleControls("off");

		var radio = document.forms[0].apocalypse;
		for (var i = 0; i<radio.length; i++) {
			if (radio[i].value == "Natural" && item.apocalypse[1] == "Natural") {
				radio[i].attr("checked", "checked");
			} else if (radio[i].value == "Atomic" && item.apocalypse[1] == "Atomic") {
				radio[i].attr("checked", "checked");
			} else if (radio[i].value == "Zombie" && item.apocalypse[1] == "Zombie") {
				radio[i].attr("checked", "checked");
			} else if (radio[i].value == "Aliens" && item.apocalypse[1] == "Aliens") {
				radio[i].attr("checked", "checked");
			} else if (radio[i].value == "Biblical" && item.apocalypse[1] == "Biblical") {
				radio[i].attr("checked", "checked");
		}	
		};		

		if(item.firearm[1] == "yes") {
			$("#firearm").attr("checked", "checked");
		}
		if(item.ammo[1] == "yes") {
			$("#ammo").attr("checked", "checked");
		}
		if(item.melee[1] == "yes") {
			$("#meleeWeapon").attr("checked", "checked");
		}
		if(item.canned[1] == "yes") {
			$("#cannedFood").attr("checked", "checked");
		}
		if(item.water[1] == "yes") {
			$("#water").attr("checked", "checked");
		}
		if(item.chain[1] == "yes") {
			$("#chainMeshSuit").attr("checked", "checked");
		}
		if(item.map[1] == "yes") {
			$("#topographicalMap").attr("checked", "checked");
		}
		if(item.leatherman[1] == "yes") {
			$("#leatherman").attr("checked", "checked");
		}
		if(item.rucksack[1] == "yes") {
			$("#rucksack").attr("checked", "checked");
		}
		if(item.boots[1] == "yes") {
			$("#boots").attr("checked", "checked");
		}
		if(item.matches[1] == "yes") {
			$("#matches").attr("checked", "checked");
		}
		if(item.p38[1] == "yes") {
			$("#p38").attr("checked", "checked");
		}
		if(item.intestinal[1] == "yes") {
			$("#intestinalFortitude").attr("checked", "checked");
		}

		$("#readiness").value = item.readiness[1]; 
		$("#date").value = item.date[1];
		$("#comments").value = item.comments[1];
		$("#groups").value = item.fear[1];     		
		$("#item").value = item.item[1];
		$("#email").value = item.email[1];

		save.off("click", storeData);
		$("#submit").value = "Edit Checklist";
		var editSubmit = $("#submit");
		editSubmit.on("click", validate);
		editSubmit.key = this.key;
};	

var clearLocal = function () {
			if (localStorage.length === 0) {
				alert("All clear.")
				}else{
					localStorage.clear();
					window.location.reload();
					return false;
			}
	};

var deleteItem =function () {
		var ask = confirm("Are you sure you want to erase this Checklist? Has a cure been found?");
		if (ask) {
			localStorage.removeItem(this.key);
			alert("Thank God for the cure, your checklist has been deleted!!");
			window.location.reload();
		} else {
			alert("Checklist not erased");
		}
	}



var makeItemLinks = function (key, linksLi) {
		var editLink = $("<a>");
	    editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Checklist";
		editLink.on("click", editItem);
		editLink.html = editText;
		linksLi.appendTo("#editLink");

		var breakTag = $("<br>");
		linksLi.appendTo("#breakTag");

		var deleteLink = $("<a>");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Checklist";
		deleteLink.on("click", deleteItem);
		deleteLink.html = deleteText;
		linksLi.appendTo("#deleteLink");
	};

var changePage = function(pageId){
		//console.log(pageId);
		$('#'+ pageId).trigger('pageinit');
		$.mobile.changePage($('#' + pageId), {transition:"slide"});
};




	$('#json').on('click', function(){			
				$('<h2>').html('JSON starts here').appendTo('#items');
				$.ajax({
					url: 'data.json',
					type: 'GET',
					dataType: 'json',
					success: function(answer){
						console.log(answer);

						for (var i=0, j=answer.data1.length; i<j; i++){
							
							console.log(j);
							var jdata = answer.data1[i];
							console.log(answer);

							$(''+
								'<li>'+ 
									jdata.fear +'<br />'+
									jdata.apocalypse +'<br />'+
									jdata.firearm +'<br />'+
									jdata.ammo +'<br />'+
									jdata.water +'<br />'+
									jdata.p38 +'<br /><br />'+
								'</li>'
							).appendTo('#items');
							console.log(answer);
						}
					}
				});
		});

	$('#csv').on('click', function(){
		$('<h2>').html('CSV starts here').appendTo('#items');
		$.ajax({
			url: 'data.csv',
			type: 'GET',
			dataType: 'text',
			success: function(answer) {
				var line = answer.split('\n');
				for (var i = 1, j = line.length; i <j; i++) {
					var obj = line[i];
					var item = obj.split(',');
					var itemList = $(
						'<li>' +
						'Apocalypse:' + item[0] + 
						"Firearm: " + item[1] + 
						"Ammo: " + item[2] +
						'</li>'
					).appendTo('#items');
				}	
			}
		});
		return false;
	});

	$('#xml').on('click', function(){
		$('<h2>').html('XML starts here').appendTo('#items');
			$.ajax({
			url: "data.xml",
			type: "GET",
			dataType: "xml",
			success: function(xml) {
				console.log(xml);
				$(xml).find('item').each(function(){
					var id = $(this).attr('id');
					var firearm = $(this).find('firearm').text();
					var ammo = $(this).find('ammo').text();
					var apocalypse = $(this).find('apocalypse').text();
					$('<div class=items id=item' + id + '></div>')
						.html('<div>' + apocalypse + '<br>' + firearm + '<br>' + ammo + '</div>')
						.appendTo('#items');
				});
			}
		});
	});














        var displayLink = $("#displayLink");
		displayLink.on("click", getData);
	 	var clearLink = $("#clear");
		clearLink.on("click", clearLocal);
		var save = $("#submit");
		save.on("click", validate);
		