function initMap() {
	// Create center marker at UCSD
	var ucsd_ltlng = {lat:32.880, lng:-117.236};

	//new marker at SSC
	var ssc = {lat: 32.878829, lng:-117.235910};

	//Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ssc,
		map: map,
		title: "Student Services Center"
	});

}