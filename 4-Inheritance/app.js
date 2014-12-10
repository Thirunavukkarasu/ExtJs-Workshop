Ext.application({
    name : 'extjs-development',
    launch : function(){
        
        Ext.define('Runner', 
        {
            name : 'Usian Bolt',
            constructor: function(runnerName){
                if(runnerName)
                   this.name = runnerName;
            },
            getRunnerName : function(){
                return this.name;
            }            
        });
        
        Ext.define('Marathon',{
            extend: 'Runner',
            marathonOrgName: 'Unknown',
            constructor: function(runnerName,marathonOrgName){
                this.marathonOrgName = marathonOrgName;
                //call parent class constructor
                this.callParent(arguments);
            },
            getMarathonOrgName: function(){
                return this.marathonOrgName;
            }
        });

        var marathon = Ext.create('Marathon','Usain Bolt','CTC');
        alert(marathon.getRunnerName() +" is going to run "+ marathon.getMarathonOrgName());
    }
});