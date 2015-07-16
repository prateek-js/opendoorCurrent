Ext.define('TheOpenDoor.view.phone.ProfileView', {
    extend: 'Ext.Container',
    requires: [
    ],
    config: {
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'start'
        },
        cls: 'dashboard-view',
        items:[{
            xtype: 'container',
            layout : {
                type : 'vbox',
                align : 'center',
                pack : 'center'
            },
            cls: 'dashboard-view-container',
            items:[{
                xtype: 'label',
                cls: 'profile-details-label',
                html: 'Edit Your Profile Details'
            },{
                xtype: 'textfield',
                itemId: 'nameProfileField',
                placeHolder: 'Name',
                cls: 'other-textfield'
            },{
                xtype: 'emailfield',
                name: 'email',
                cls: 'other-textfield',
                readOnly: true,
                itemId: 'emailProfileFieldId'                    
            },{
                xtype: 'numberfield',
                cls: 'other-textfield',
                readOnly: true,
                name: 'ContactNumber',
                itemId : 'mobileNumberProfileField'
            },{
                xtype: 'button',
                ui: 'plain',
                text: 'Save',
                itemId: 'saveProfileButton',
                cls: 'save-button'
            }]
        }]           
    }
});
