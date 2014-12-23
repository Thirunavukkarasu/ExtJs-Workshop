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
    name : 'extjs-workspace',
    launch : function(){
        //alert("Uh! Workspace setup completed :) !");
    }
});
