Ext.application({
    name : 'extjs-development',
    launch : function(){
        
        Ext.define('Runner', 
        {
            name : 'Usian Bolt',
            getRunnerName : function(){
                return "The Runner name is " + this.name;
            }
        }, function(){
            alert('Runner object created');
        });
        
        var runnerObject = Ext.create('Runner');
        console.log(runnerObject.getRunnerName());
    }
});