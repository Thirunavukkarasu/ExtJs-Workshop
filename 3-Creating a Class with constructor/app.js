Ext.application({
    name : 'extjs-development',
    launch : function(){
        
        Ext.define('Runner', 
        {
            name : 'Usian Bolt',
            getRunnerName : function(){
                return "The Runner name is " + this.name;
            },
            constructor: function(runnerName){
                if(runnerName)
                   this.name = runnerName;
            }
        });
        
        var runnerObject = Ext.create('Runner');
        console.log(runnerObject.getRunnerName());
        var runnerObject = Ext.create('Runner','Keshor');
        console.log(runnerObject.getRunnerName());
    }
});