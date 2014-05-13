 /**
 *	Author: Jared Tabor
 *  date: 5/13/2014 
 *  jaredtabor.com
 *
 * this is the controller for the application, 
 * and I could have probably made it shorter but ran out of time
 *
 * I didn't make any models, as I'm not doing much with the data. 
 * If I was to continue with this, I would incorporate directions for the 
 * road trip, in which case creating a model for the directions would be come up. 
 */
 
 Ext.define('JT.controller.MapController', {
    extend: 'Ext.app.Controller',
	views: ['TripForm' ]
 });
 
var durham;
var mapOptions; 
//load initial map
function initialize() {
	durham = new google.maps.LatLng(35.992847,-78.904393);
	mapOptions = {
		center:durham,
		zoom: 10		
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}
  google.maps.event.addDomListener(window, 'load', initialize);

//function that does all the calculations and loads them onto the view
function calcTrip(distance, time) {
	var pass = Ext.getCmp('passengers').value;
	var mileage = Ext.getCmp('mileage').value;
	var tank = Ext.getCmp('tank').value;	
	var octane = Ext.getCmp('octane').getChecked()[0].inputValue;
	var costPerTank = tank*octane; 
	var noFillups = distance/(mileage*tank); 
	var totalCost = costPerTank*noFillups; 
	var costPerPass = totalCost/pass; 
	var drivingShift = time/pass; 
	Ext.getCmp('summary').update('<span class="summary">Total distance: '+distance.toFixed(2)+ ' miles'+
		'<br>Total time: '+time.toFixed(2)+ ' hours'+
		'<br>Cost of 1 Tank: $'+costPerTank.toFixed(2)+
		'<br>No. of tanks: '+noFillups.toFixed(2)+
		'<br>Total cost of gas for trip: $'+totalCost.toFixed(2)+
		'<br>Cost per passenger $'+costPerPass.toFixed(2) +
		'<br>Driving shifts: '+drivingShift.toFixed(2)+' hours</span>');
}

function collectTripInfo(){
	var origin = Ext.getCmp('start').value; 
	var dest = Ext.getCmp('finish').value;
	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);;
	
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(map);
	
	//for a request three things are required:
	var request = {
		origin:origin,
		destination:dest,
		travelMode: google.maps.TravelMode.DRIVING
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
			distance = response.routes[0].legs[0].distance.value/1609.34; 
			time = response.routes[0].legs[0].duration.value/(60*60);
			calcTrip(distance, time); 
		}
		else{
			alert('Modify the search and try again'); 
		}
	});
}

function reset(){
	initialize(); 
	Ext.getCmp('start').setValue(""); 
	Ext.getCmp('finish').setValue("");
	Ext.getCmp('start').reset(); 
	Ext.getCmp('finish').reset();
	Ext.getCmp('passengers').setValue(1);
	Ext.getCmp('mileage').setValue(25);
	Ext.getCmp('tank').setValue(14); 
	Ext.getCmp('octane').items.items[0].setValue(true);
	Ext.getCmp('summary').update(); 
}