
var adlTemp;
var whyTemp;
var whyHumid;
var adlHumid;
var adlCloud;
var whyCloud;

weather();

// ------------------------------------------------------------------GET TEMPERATURE AND HUMIDITY DATA-------------------------------------------------------------------------------------------

function weather(){
	$.getJSON("http://adlfrin.ge/IDS60901.94672.json", function(data){
		adlTemp = data.observations.data[0].air_temp;
		adlHumid = data.observations.data[0].rel_hum;
		adlCloud = data.observations.data[0].cloud;
		tempHum();
		tempDiff();
		clouds();
	});

	$.getJSON("http://adlfrin.ge/IDS60801.95664.json", function(data){
		whyTemp = data.observations.data[0].air_temp;
		whyHumid = data.observations.data[0].rel_hum;
		whyCloud = data.observations.data[0].cloud;
		tempHum();
		tempDiff();
		clouds();
	});
}

function tempHum() {
	$("#adelaide #temp").text(adlTemp + "° C");
	$("#adelaide #humid").text(adlHumid + " Humidity");
	$("#whyalla #temp").text(whyTemp + "° C");
	$("#whyalla #humid").text(whyHumid + " Humidity");
}

//----------------------------------------------------------------------------------HOTTER OR COLDER------------------------------------------------------------------------------------------------

function tempDiff() {
	if(whyTemp > adlTemp){
		$("#adelaide h4").text("Adelaide is cooler than Whyalla");
		$("#whyalla h4").text("Whyalla is hotter than Adelaide");
	} else if(whyTemp < adlTemp){
		$("#adelaide h4").text("Adelaide is hotter than Whyalla");
		$("#whyalla h4").text("Whyalla is cooler than Adelaide");
	}
}

//----------------------------------------------------------------------------------CLOUDY OR NOT ----------------------------------------------------------------------------------------------------

function clouds() {
	if (adlCloud === "Cloudy"){
		$("#adelaide img").attr("src", "cloud.png");
	} if (adlCloud === "Clear"){
		$("#adelaide img").attr("src", "sun.png");
	} if (whyCloud === "Cloudy"){
		$("#whyalla img").attr("src", "cloud.png");
	} if (whyCloud === "Clear"){
		$("#whyalla img").attr("src", "sun.png");
	}
}

//-----------------------------------------------------------------------------------JQUERY TABS -------------------------------------------------------------------------------------------------------

$( function() {
    $( "#tabs" ).tabs();
  });