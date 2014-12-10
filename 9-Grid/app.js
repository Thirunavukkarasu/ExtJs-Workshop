/*
Courtesy: http://www.extjs-tutorial.com/extjs/viewport-in-extjs4

Viewport (Ext.container.Viewport or xtype:'viewport') in ExtJS 4 is a specialized container representing the viewable application area in the browser. There can be only one viewport in ExtJS 4 single page application.

The Viewport renders itself to the document body, and automatically sizes itself to the size of the browser viewport and manages window resizing. 
*/
Ext.application({
    name : 'Runner',
    autoCreateViewport: false,
    launch: function(){

        Ext.create('Ext.container.Viewport', 
        {
            layout : 'fit',
            items : [{
                xtype    : 'grid',
                title    : 'Sencha ExtJS - Grid Example',
                plugins  : 'rowediting',
                store    : {
                  fields : [ 'runner_name', 'lap1', 'lap2', 'lap3','lap4' ],
                  data   : [['Keshor',7,7,7,7],['Thiru',7,7,7,7],['Aravind',7,7,7,7],['Arun',7,7,7,7],['Panneer',7,7,7,7],['Bhuvanesh',7,7,7,7],['Mariselvi',7,7,7,7],['Rekha',7,7,7,7],['Anjana',7,7,7,7],['Janani',7,7,7,7],
                            ['Prabhu',7,7,7,7],['Malini',7,7,7,7],['Thiyagu',7,7,7,7],['Rajesh',7,7,7,7],['Ram kumar',7,7,7,7],['Hari',7,7,7,7],['Siva',7,7,7,7],['Arul',7,7,7,7],['Sugaan',7,7,7,7],['Shyam',7,7,7,7],['Umapathi',7,7,7,7]]
                },   
                columns: {
                    defaults: {
                        editor : 'numberfield',
                        width  : 120
                    },
                    items: [
                        { text: 'Runner Name', dataIndex: 'runner_name', editor: 'textfield' },
                        { text: 'Lap 1', dataIndex: 'lap1' },
                        { text: 'Lap 2', dataIndex: 'lap2' },
                        { text: 'Lap 3', dataIndex: 'lap3' },
                        { text: 'Lap 4', dataIndex: 'lap4',flex:1 }
                    ]
               }                             
            }]
        });
    }
});