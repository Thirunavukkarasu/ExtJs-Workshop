/*

Courtesy: http://www.extjs-tutorial.com/extjs/ext-application

What is Ext.application() is all about ?

Ext.application() is a gateway of ExtJS4 application. All Ext JS 4 application starts with the call to Ext.application method in app.js file. Ext is a singleton class and application() is a method of it that loads Ext.app.Application class and starts it up with the supplied configuration after the page is ready.

Ext.app.Application class represents an Ext JS 4 application, which is mostly a single page application using viewport.

Ext.app.Application has following features:

    Global settings for the application.
    Declare root level namespace for the application using 'name'.
    Reference all the controllers, views, stores and models used in the applicatio.
    Launch the application after all the dependencies loaded and initialized.

*/

Ext.application({
    name : 'Extjs',
    launch : function(){
        
        Ext.create('Ext.container.Viewport', 
        {
            layout : 'fit',
            items : [{
                title : 'Rest WebServices',
                html : '<h1>How to make use of Ajax?</h1>'
            }],
            listeners:{
                beforerender: function(){
                    console.log("Before render function!");
                    Ext.Ajax.request({
                        url: "http://localhost:80/about",
                        success: function(response){
                            var data = Ext.decode(response.responseText);
                            for(var i=0;i<data.length;i++){
                                console.log(data[i].Id);
                            }
                        },
                        failure: function(response){
                            console.log("Failure:"+ response);
                        }
                    });
                }
            }
        });
        
    }
});