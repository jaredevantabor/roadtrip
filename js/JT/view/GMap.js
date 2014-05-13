 Ext.define('JT.view.GMap', {
   extend: ' Ext.ux.GMapPanel',	
	alias : 'widget.tripform',		
	// xtype: 'form',
var map = new Ext.ux.GMapPanel({
            xtype: 'gmappanel',
            region: 'center',
            id:  'mygooglemap',
            zoomLevel: 3,
            gmapType: 'map',
            setCenter: {
                'lat': 37.4419,
                'lng': -122.1419
            }
        });