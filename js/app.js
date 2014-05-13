/**
 *	Author: Jared Tabor
 *  date: 5/13/2014 
 *  jaredtabor.com
 *
 * this class acts as the entry into the application,
 * and also specifies dependency on controllers
 */

Ext.application({
    name: 'JT',
	appFolder: 'js/JT', 
	controllers: [
        'MapController'
    ],
	autoCreateViewport: true
});