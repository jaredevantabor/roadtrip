/**
 *	Author: Jared Tabor
 *  date: 5/13/2014 
 *  jaredtabor.com
 *
 * The viewport extends Ext.Viewport and is the view for 
 * the whole application
 */
Ext.define('JT.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'border',
    items: [
		{
			region: 'north',
			html: '<div class="title">RoadTrip<span class="subtitle">some tagline about taking roadtrips</span></div>' ,
			border: false,
			margins: '0 0 5 0'
		}, {
			region: 'west',
			border: false, 
			title: 'Trip Information',
			width: 400, 
			items: [
				{
					xtype: 'tripform'
				}
			]
		},{
			region: 'south',
			html: '<p align="right">JaredTabor.com <br> jaredevantabor@gmail.com<p>',
			height: 40,
			border: false, 
		}, 
		{
			region: 'center',
			border: false, 
			html:  '<div id="map-canvas" style="width: 100%; height: 100%"></div>',
			
		}
	]
   
});
