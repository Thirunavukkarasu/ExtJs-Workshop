/*
ExtJS 4 has introduced new feature called config. 
You can declare public properties with default values in config. 
Config means configuration option for the class. 
Properties which are declared via config, will have getters and setters automatically if class does not have this methods already define. 
*/
Ext.application({
    name : 'extjs-development',
    launch : function(){
        
        Ext.define('Runner', 
        {
            config:{
                name : 'Usian Bolt',
                height: 180,
                weight: 80
            },
            constructor: function(config){
                this.initConfig(config);
            }           
        });
        
        var runner = Ext.create('Runner');
        alert(runner.getName()+" height is "+runner.getHeight()+"cm and weight is "+runner.getWeight()+"kg");
    }
});