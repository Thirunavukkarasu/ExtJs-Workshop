/*
Note:-

1] About Fitlayout

It's worth noting that the FitLayout will only work for the first child item of the parent
container. If you have multiple items defined, the first will be displayed (as it will expand
into the remaining space of its parent) and the others will not be visible.

2] 
*/
Ext.application({
    name : 'extjs-development',
    launch : function(){
    /*Ext.create('Ext.panel.Panel', {
        title  : 'Fit Layout (Using a FitLayout to expand components to fill their parent)',
        width  :  600,
        height :  300,
        layout : 'fit',
        items: {
            title: 'Inner Panel',
            html: '<h2>Panel content</h2>',
            bodyPadding: 10,
            border: true
        },            
        renderTo: Ext.getBody()
    });*/

    /*Ext.create('Ext.container.Viewport', {
        layout: {
            type: 'vbox',
            align: 'stretch',
            padding: 10
        },
        items: [{
            xtype: 'panel',
            title: 'Panel One ( Creating flexible vertical layouts with VBoxes)',
            height: 100
        }, {
            xtype: 'panel',
            title: 'Panel Two',
            flex: 1
        }, {
            xtype: 'panel',
            title: 'Panel Three',
            frame: true,
            flex: 3
        }]        
    });*/
    
    /*Ext.create('Ext.container.Viewport', {
        layout: {
            type: 'hbox',
            align: 'stretchmax',
            padding: 10
        },
        items: [{
            xtype: 'panel',
            title: 'Panel One',
            height: 500,
            width: 100,
            border: true
        }, {
            xtype: 'panel',
            title: 'Panel Two',
            flex: 1,
            border: true
        }, {
            xtype: 'panel',
            title: 'Panel Three',
            width: 100,
            border: true
        }]
    });*/

    /*Ext.create('Ext.Panel', {
        title: 'Column Layout',
        layout: 'column',
        border: true,
        defaults: {
            height: 500,
            frame: true,
            margin: '5 5 5 5'
        },
        items: [{
            title: 'Panel One',
            columnWidth: .2,
            html: 'Panel One Content'
        }, {
            title: 'Panel Two',
            columnWidth: .8,  
            html: 'Panel Two Content'
        }, {
            title: 'Panel Three',
            width: 200,
            html: 'Panel Three Content'
        }],
        renderTo: Ext.getBody()
    });*/

    /*var card1 = new Ext.panel.Panel({
        bodyStyle: 'padding: 20px',
        title: 'Personal Info',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'First Name'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Last Name'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Email Address',
            vtype: 'email'
        }]
    });

    var card2 = new Ext.panel.Panel({
        bodyStyle: 'padding: 20px',
        title: 'Account Info',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Username'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Password',
            inputType: 'password'
        }]
    });

    var card3 = new Ext.panel.Panel({
        bodyStyle: 'padding: 20px',
        title: 'Account Creation Successful!',
        html: 'Success!'
    });   

    var panel = Ext.create('Ext.panel.Panel', {
        title: 'Account Creation Process - Using Card Layout',
        width: 350,
        height: 300,
        layout: 'card',
        renderTo: Ext.getBody(),
        items: [card1, card2, card3],
        bbar: ['->', {
            xtype: 'button',
            text: 'Previous',
            handler: function(btn){
                var layout = panel.getLayout();
                if (layout.getPrev()) {
                    layout.prev();
                }
            }
        }, {
            xtype: 'button',    
            text: 'Next',
            handler: function(btn){
                var layout = panel.getLayout();
                if (layout.getNext()) {
                 layout.next();
                }
            }
        }]        
    }); */

    /*Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'north',
            height: 100,
            margins: 5,
            xtype: 'container'
        }, {
            title: 'West',
            region: 'west',
            margins: '0 5 0 5',
            collapsible: true,
            split: true,
            titleCollapse: true,            
            flex: .3
        }, {
            title: 'Center',
            region: 'center'
        }, {
            title: 'East',
            region: 'east',
            margins: '0 5 0 5',
            collapsible: true,
            split: true,
            collapsed: true,
            width: 200
        }, {
            title: 'South',
            region: 'south',
            margins: '0 5 5 5',
            split: true,
            flex: .3
        }]
    }); */

    var mainMenu = Ext.create('Ext.panel.Panel', {
        title: 'Main Menu',
        region: 'west',
        margins: '0 5 5 5',
        flex: .3,
        frame: true,
        collapsible: true,
        titleCollapse: true,
        layout: 'accordion',
        layoutConfig: {
            animate: false,
            multi: true
        },
        items: [{
            title: 'Product Management'
        }, {
            title: 'User Management'
        }, {
            title: 'Settings'
        }]
    }); 

        var card1 = new Ext.panel.Panel({
            bodyStyle: 'padding: 20px',
            title: 'Personal Info',
            border: false,
            items: [{
                xtype: 'textfield',
                fieldLabel: 'First Name'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Last Name'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Email Address',
                vtype: 'email'
            }]
        });
        var card2 = new Ext.panel.Panel({
            bodyStyle: 'padding: 20px',
            title: 'Account Info',
            border: false,
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Username'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Password',
                inputType: 'password'
            }]
        });
        var card3 = new Ext.panel.Panel({
            bodyStyle: 'padding: 20px',
            title: 'Account Creation Successful!',
            border: false,
            html: 'Success!'
        });

        var createUserWizard = Ext.create('Ext.panel.Panel', {
            title: 'Create User Wizard',
            layout: 'card',
            frame: true,
            deferredRender: true,
            items: [card1, card2, card3],
            bbar: ['->', {
                xtype: 'button',
                text: 'Previous',
                handler: function(btn){
                    var layout = cardPanel.getLayout();
                    if (layout.getPrev()) {
                        layout.prev();
                    }
                }
                }, {
                xtype: 'button',
                text: 'Next',
                handler: function(btn){
                    var layout = cardPanel.getLayout();
                    if (layout.getNext()) {
                        layout.next();
                    }
                }
        }]
        });

        var userManagementPanel = Ext.create('Ext.panel.Panel', {
        title: 'User Management',
        layout: {
            type: 'hbox',
            align: 'stretch',
            padding: 10
        },
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'container',
            margins: '0 5 0 0',
            layout: {
                type: 'vbox',
                align: 'stretch',
                animate: true
            },
            defaults: {
                flex: 1,
                frame: true
            },
            items: [{
                title: 'User Contact Information',
                margins: '0 0 5 0'
            }, {
                title: 'Session Log'
            }]
        }, {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch',
                animate: true
            },
            defaults: {
            flex: 1,
            frame: true
            },
            items: [{
                title: 'Account Privileges',
                margins: '0 0 5 0'
            }, {
                title: 'Purchase History',
            }]
        }]
        });

        var contentPanel = Ext.create('Ext.tab.Panel', {
        region: 'center',
        margins: '0 5 5 0',
        items: [createUserWizard, userManagementPanel]
        });

        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
            region: 'north',
            margins: 5,
            height: 100,
            xtype: 'container',
            html: 'Logo Here'
            }, mainMenu, contentPanel]
        });        
    }
});