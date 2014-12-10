/*
Courtesy: http://www.extjs-tutorial.com/extjs/viewport-in-extjs4

 Viewport (Ext.container.Viewport or xtype:'viewport') in ExtJS 4 is a specialized container representing the viewable application area in the browser. There can be only one viewport in ExtJS 4 single page application.

The Viewport renders itself to the document body, and automatically sizes itself to the size of the browser viewport and manages window resizing. 
*/
Ext.application({
    name : 'Runner',
    launch : function(){
        Ext.create('Ext.container.Viewport', 
        {
        	layout: 'column',
        	margin: 5,
            items : [{
		            	xtype: 'panel',
		            	width: 300,
		            	bodyPadding: 10,
		                title : 'Login Form (Multi-Language)',
		                items: [{
			      			xtype       : 'textfield',
			      			fieldLabel  : 'Username',
			      			translate   : {
			        		English 	: 'Username',
			        		Hindi   	: '&#2346;&#2381;&#2352;&#2351;&#2379;&#2325;&#2381;&#2340;&#2366; &#2344;&#2366;&#2350;',
			        		Arabic  	: '\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645',
			        		Chinese 	: '&#29992;&#25142;&#21517;'
			        		}
	      				},{
					       xtype       : 'textfield',
					       fieldLabel  : 'Password',
					       translate   : {
					       English : 'Password',
					       Hindi   : '&#2346;&#2366;&#2360;&#2357;&#2352;&#2381;&#2337;',
					       Arabic  : '\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631',
					       Chinese : '&#23494;&#30908;'
				          },
				          inputType   : 'password'      					
	      				}],
					 dockedItems: [{
					      xtype   : 'toolbar',
					      padding : '2 0 2 0',
					      dock    : 'bottom',
					      ui      : 'footer',
					      items   : [{
					      	text: 'English',
					      	listeners:{
					      		click: function(btn){
					      			this.up('form').changeLabel(btn);
					      		}
					      	}
					      },{
					      	text: 'Hindi',
					      	listeners:{
					      		click: function(btn){
					      			this.up('form').changeLabel(btn);
					      		}
					      	}					      	
					      },{
					      	 text: 'Arabic',
					      	listeners:{
					      		click: function(btn){
					      			this.up('form').changeLabel(btn);
					      		}
					      	}					      	 
					      },{
					      	text: 'Chinese',
					      	listeners:{
					      		click: function(btn){
					      			this.up('form').changeLabel(btn);
					      		}
					      	}					      	
					   }]
				   }]			     				
            }]
        });
        
    }
});