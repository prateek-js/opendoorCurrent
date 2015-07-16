Ext.define('TheOpenDoor.view.phone.LoginView', {
    extend: 'Ext.Container',
    requires: [
    ],
    config: {
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'center'
        },
        cls: 'login-view',
        items:[{
            xtype: 'headerPanel',
            flex: 1,
            width: '100%'
        },{
            xtype: 'image',
            src: 'resources/images/bulletpoint.jpg',
            docked: 'top',
            itemId : 'centerLogo',
            cls: 'center-logo-image',
        },{
            xtype: 'container',
            flex: 9,
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            cls: 'google-parent-container',           
            items: [{
                xtype: 'container',
                itemId : 'googleBtnContainer',
                cls: 'google-btn-container',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'start'
                },
                items: [{
                    xtype: 'image',
                    src: 'resources/images/gplus.png',
                    cls: 'login-via-google-image'
                },{
                    xtype: 'label',
                    html: 'Login with Google',
                    cls: 'login-via-google-label',
                }],
                listeners: {
                    tap: {
                        element: 'element',
                        fn: function() {
                            TheOpenDoor.app.getController('LoginController').handleGoogleSignIn();
                        }
                    }
                }
            },{
                xtype: 'container',
                itemId : 'facebookBtnContainer',
                cls: 'google-btn-container',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'start'
                },
                items: [{
                    xtype: 'image',
                    src: 'resources/images/gplus.png',
                    cls: 'login-via-google-image'
                },{
                    xtype: 'label',
                    html: 'Login with Facebook',
                    cls: 'login-via-google-label',
                }],
                listeners: {
                    tap: {
                        element: 'element',
                        fn: function() {
                            TheOpenDoor.app.getController('LoginController').handleFacebookSignIn();
                        }
                    }
                }
            }]            
        }]
    }
});
