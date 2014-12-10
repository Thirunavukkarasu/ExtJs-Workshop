/*
Courtesy: http://www.extjs-tutorial.com/extjs/viewport-in-extjs4

 Viewport (Ext.container.Viewport or xtype:'viewport') in ExtJS 4 is a specialized container representing the viewable application area in the browser. There can be only one viewport in ExtJS 4 single page application.

The Viewport renders itself to the document body, and automatically sizes itself to the size of the browser viewport and manages window resizing. 
*/
Ext.application({
    name : 'Runner',
    autoCreateViewport: false,
    launch: function(){

    Ext.create('Ext.container.Viewport', {

        id: 'RunnerViewport',
        layout: {
            type: 'border'
        },
        items: [
        {
            region: 'north',
            margins: '0 0 5 0',
            title:'Runner website Header (north region)',
            height: 100,
            html:'Header information goes here',
            collapsible: true,
            split: true
        }, {
            region: 'west',
            title: 'Left Pane (west region)',
            width: 150,
            html:'Navigation goes here',
            collapsible: true,
            split: true
        }, {
            region: 'south',
            title: 'Runner website Footer (south region)',
            html: 'Footer Information goes here',
            height: 100,
            collapsible: true,
            split: true
        }, {
            region: 'east',
            title: 'Right Pane (East region)',
            width: 150,
            html:'Important information goes here',
            collapsible: true,
            split: true
        }, {
            region: 'center',
            title:'center content area (center region)',
            html:'Content area',
            collapsible: true,
            split: true
        }]
    });        
    }
});