/**
 *	Author: Jared Tabor
 *  date: 5/13/2014 
 *  jaredtabor.com
 *
 * this defines the view/layout for the form 
 */
 Ext.define('JT.view.TripForm', {
   extend: 'Ext.form.Panel',	
	alias : 'widget.tripform',			
	// xtype: 'form',
	border: false, 
	bodyPadding: 10,
	items: [
		{
			xtype: 'textfield',
			id: 'start',
			fieldLabel: 'Starting location',
			emptyText: 'City, address, landmark',
			allowBlank: false  
		}, {
			xtype: 'textfield',
			id: 'finish',
			fieldLabel: 'Destination',
			emptyText: 'City, address, landmark',
			allowBlank: false 
		}, {
			xtype: 'numberfield',
			id: 'passengers',
			fieldLabel: 'Number of passengers',
			value: 1,
			maxValue: 15,
			minValue: 1
		}, {
			xtype: 'numberfield',
			id: 'mileage',
			fieldLabel: 'Highway MPG',
			value: 25,
			maxValue: 60,
			minValue: 1
		},
		{
			xtype: 'numberfield',
			id: 'tank',
			fieldLabel: 'Tank Size (gal)',
			value: 14,
			maxValue: 30,
			minValue: 1
		},
		{
			xtype: 'radiogroup',
			fieldLabel: 'Octane',
			id: 'octane',
			columns: 1,
			allowBlank: false, 
			vertical: true,
			items: [
				{ boxLabel: '<b>Regular</b> (87) $3.65/gal', id: 'regular',name: 'gas', inputValue: 3.65 , checked: true},
				{ boxLabel: '<b>Plus</b> (89) $3.83/gal', id: 'plus', name: 'gas', inputValue: 3.83},
				{ boxLabel: '<b>Supreme</b> (93) $4.01/gal', id: 'supreme', name: 'gas', inputValue: 4.01 }
			]
		},
		{
			xtype: 'button',
			scale: 'large', 
			margin: '0 20 0 35',
			width: 100,
			text: 'Get Trip<br>Breakdown',
			handler: function(){
				collectTripInfo();	
			}
		},
		{
			xtype: 'button',
			scale: 'large', 
			text: 'Reset',
			width: 100,
			handler: function(){
				reset();
			}
		},
		{
			tag:'hr',
			margin: '20 0 20 0'
		},
		{
			xtype: 'container',
			id: 'summary',
			padding: '10 10 10 10',
			border: false
		}
	]
}); 