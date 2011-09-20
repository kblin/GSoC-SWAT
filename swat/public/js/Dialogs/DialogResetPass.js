DialogResetPass = {};

DialogResetPass = {
  show:function(account,data){

   if(account==null)return;
   if(data==null)return;

     var FormResetPass = new Ext.FormPanel({
    labelWidth: 75
    ,labelAlign: 'left'
    ,frame:true
    //,title: 'Restablecer contrase&ntilde;a'
    //,bodyStyle:'padding:5px 5px 0'
                ,bodyStyle: 'x-window-body'
                ,border: false
    ,monitorValid:true
    ,items: [{
       layout: 'form'
       ,items: [{
          xtype: "textfield"
          ,labelAlign: 'left'
          ,inputType: 'password'
          ,id: "idpass1"
          ,name: "pass1"
          ,allowBlank: false
          ,fieldLabel: "<b>Password</b>"
          ,width: '95%'
         },{
          xtype: "PasswordMeter"
          ,labelAlign: 'left'
          ,id: "idpass2"
          ,name: "pass2"
          ,inputType: 'password'
          ,fieldLabel: "<b>Password</b>"
          ,allowBlank: false
          ,width: '95%'
         },{
          xtype: 'fieldset'
          ,title: ''
          ,labelAlign: 'top'
          //collapsible: true
          ,items: [{
             xtype:'checkbox'
             ,fieldLabel: ''
             ,boxLabel: 'User must change password on next login.'
             ,name: 'ForcePasswordChange'
             ,checked : data.changepassword
             //,height: 30
            },{
             xtype: 'box'
             ,id:'AccountStatusLabel'

             ,autoEl: {
              //tag: 'blockquote'
              html: '<span style="font-size: small">&nbsp;&nbsp;&nbsp;The user has to log off and back in for the changes to take effect.<br><br></span>'
             }
            },{
             xtype: 'box'
             ,autoEl: {
              tag: 'blockquote'
              ,html: '<span style="font-size: small">Account lockout status in this domain controller:</span>'
             }
            },{
             xtype:'checkbox'
             ,fieldLabel: ''
             ,boxLabel: 'Unlock user account'
             ,name: 'UnlockUserAccount'
            }]
         }]
     }]
                    ,buttons: [{
                        text: 'Save',
                        formBind: true,
                        handler:function(){
       var pass1 =  Ext.getCmp('idpass1').getValue();
       var pass2 =  Ext.getCmp('idpass2').getValue();
       var strength = Ext.getCmp('idpass2').getStrength();

       if (pass1 != pass2){
        Ext.Msg.alert('Error','Password mismatch.');
        return;
       }

       if (strength <= 60){
        Ext.Msg.alert('Error','Password too weak.');
        return;
       }

       params={
        account:account
        ,password:pass1
        ,rid:data.rid
       }


       SendForm(FormResetPass,WindowResetPass,'User/SetPassword',params)

                        }
                    }, {

                        text: 'Cancel',

                        handler: function () {

                            WindowResetPass.close();

                        }

                    }]
   });



   var WindowResetPass = new Ext.Window({
                    title: 'Reset Password'
                    ,modal:true
                    ,labelWidth: 75
                    ,frame: true
                    ,bodyStyle: 'padding:5px 5px 5px 5px'
                    ,layout: 'form'
                    ,items: [FormResetPass]
   });


   //top.render(WindowResetPass);

   WindowResetPass.show();
   WindowResetPass.center();

  }
}
