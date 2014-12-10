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
            layout:{
                type: 'border'
            },            
            items : [{
                xtype    : 'grid',
                region   : 'west',
                width    : 700,
                title    : 'Siruseri Runners - Results',
                columns: {
                    defaults: {
                        width  : 120
                    },
                    items: [
                        { text: 'Runner Name', dataIndex: 'runner_name' },
                        { text: 'Lap 1', dataIndex: 'lap1' },
                        { text: 'Lap 2', dataIndex: 'lap2' },
                        { text: 'Lap 3', dataIndex: 'lap3' },
                        { text: 'Lap 4', dataIndex: 'lap4',flex:1 }
                    ]
               },
               store    : {
                  fields : [ 'runner_name', 'lap1', 'lap2', 'lap3','lap4' ],
                  data   : [['Keshor',7,7,7,7],['Thiru',7,7,7,7],['Aravind',7,7,7,7],['Arun',7,7,7,7],['Panneer',7,7,7,7],['Bhuvanesh',7,7,7,7],['Mariselvi',7,7,7,7],['Rekha',7,7,7,7],['Anjana',7,7,7,7],['Janani',7,7,7,7],
                            ['Prabhu',7,7,7,7],['Malini',7,7,7,7],['Thiyagu',7,7,7,7],['Rajesh',7,7,7,7],['Ram kumar',7,7,7,7],['Hari',7,7,7,7],['Siva',7,7,7,7],['Arul',7,7,7,7],['Sugaan',7,7,7,7],['Shyam',7,7,7,7],['Umapathi',7,7,7,7]]
                },
                listeners: {
                    itemdblclick : function(RowModel, record, index, eOpts){
                      var form = Ext.getCmp("resultsEditor");  
                      form.loadRecord(record);
                    }
                }                                           
            },{
                xtype: 'form',
                id: 'resultsEditor',
                title: 'Results - Editor',
                width: 650,
                height: 600,
                bodyPadding: 35,
                defaultType: 'textfield',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },                
                fieldDefaults: {
                    labelWidth: 100,
                    labelStyle: 'font-weight:bold',
                    allowBlank: false
                },
                defaults: {
                    margins: '0 0 10 0'
                },                
                items: [{
                        fieldLabel: 'Runner name',
                        name: 'runner_name'
                        }, {
                        fieldLabel: 'Lap 1',
                        name: 'lap1'
                        }, {
                        fieldLabel: 'Lap 2',
                        name: 'lap2'
                        }, {
                        fieldLabel: 'Lap 3',
                        name: 'lap3'
                        },{
                        fieldLabel: 'Lap 4',
                        name: 'lap4'
                        }],
                buttons: [{
                    text: 'Save',
                    handler: function(){
                        if (Ext.getCmp('resultsEditor').getForm().isValid()) {
                            Ext.MessageBox.show({title:'Success!',msg: "Record saved!",buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.INFO});
                        }
                        else
                            Ext.MessageBox.show({title:'Failure!',msg: "Fill the form properly!",buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.WARNING });

                    }
                },{
                    text: 'Cancel',
                    handler: function(){
                        Ext.MessageBox.show({title:'Canceled!',msg: "Action canceled!",buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.ERROR });
                    }                    
                }]            
            }]
        });
    }
});