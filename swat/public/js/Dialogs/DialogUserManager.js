DialogUserManager = {};

DialogUserManager = {
  show:function(data,activeTab){

   if(data==null)return;

   if(activeTab==null)activeTab=0;

  var oldgrouplist = '';

  var fullname = new Ext.form.TextField({
   xtype: "textfield"
   ,labelAlign: 'left'
   ,id: "idfullname"
   ,value:data.fullname
   ,name: "fullname"
   ,fieldLabel: "<b>FullName</b>"
   ,width: '95%'
  });

  var description = new Ext.form.TextField({
   xtype: "textfield"
   ,labelAlign: 'left'
   ,id: "iddescription"
   ,value:data.description
   ,name: "description"
   ,fieldLabel: "<b>Description</b>"
   ,width: '95%'
  });

  var ForcePasswordChange = new Ext.form.Checkbox({
   xtype:'checkbox'
   ,fieldLabel: ''
   ,boxLabel: 'The user must change the password'
   ,name: 'ForcePasswordChange'
   ,checked : data.changepassword
  });

  /*var CannotChangePassword = new Ext.form.Checkbox({
   xtype:'checkbox'
   ,fieldLabel: ''
   ,boxLabel: 'Cannot Change Password'
   ,name: 'CannotChangePassword'
   ,checked : data.cannotchangepassword
  });*/



  var passwordexpires = new Ext.form.Checkbox({
   xtype:'checkbox'
   ,fieldLabel: ''
   ,boxLabel: 'Password never expires'
   ,name: 'passwordexpires'
   ,checked : data.passwordexpires
   //,height: 30
  });

  var disable = new Ext.form.Checkbox({
   xtype:'checkbox'
   ,fieldLabel: ''
   ,boxLabel: 'Disabled account'
   ,name: 'disable'
   ,checked : data.disable
   //,height: 30
  });

  var locked = new Ext.form.Checkbox({
   xtype:'checkbox'
   ,fieldLabel: ''
   ,boxLabel: 'The account is locked'
   ,name: 'locked'
   ,checked : data.locked
   //,height: 30
  });



  var FormGeneral = new Ext.Panel({
   labelWidth: 75
   ,labelAlign: 'left'
   ,frame:true
                ,bodyStyle: 'x-window-body'
                ,border: false
   ,items: [{
      layout: 'form'
      ,items: [
        {
         xtype: "label"
         ,html: sprintf('<img width="32" height="32" src="css/icons/808645381.png"/><b>&nbsp;&nbsp;%s</b><br/><hr/>',data.username.capitalize())
        }
        ,fullname
        ,description
        ,{
         xtype: "label"
         ,html: '&nbsp;'
        }
        ,ForcePasswordChange
        ,passwordexpires
        ,disable
        ,locked
       ]
    }]

   });




        var FormMenberof = new Ext.form.FormPanel({
   //monitorValid: true,
   //standardSubmit: true,
   //width:300,
   height: 250,
   id: 'FormMenberof',
   border: false,
   frame: true,
   labelWidth: 50,
   items: [{
       xtype: "combo",
       name: "comboGroups",
       id: "idcomboGroups",
       forceSelection: false,
       store: MainAppW.MemberOfStore,
       allowBlank: false,
       emptyText: 'e.g. My Group ...',
       triggerAction: 'all',
       mode: 'local',
       displayField: 'name',
       //hiddenName: 'name',
       valueField: 'rid',
       //vtype: 'email',
       fieldLabel: "<b>Groups</b>"
       //,width: 250
       ,anchor: "100%"
   }, {
       xtype: 'box',
       autoEl: {
           tag: 'select',
           multiple: 'true',
           id: 'GroupList',
           name: 'GroupList[]',
           //html: '<select name="GroupList[]" id="GroupList" multiple="true" style="width: 80%; height: 95%;"></select>'
       }, listeners: {
           'render': function () {

                        //console.dir(data.grouplist);
                        for (j in data.grouplist) {
       if(typeof(data.grouplist[j])=='object'){
        appendOptionLast('GroupList', data.grouplist[j].rid,data.grouplist[j].name,1);

       }
                        }
                        oldgrouplist=ExplodeListByComma('GroupList');
           }
       }
       ,width: '100%'
       ,height: '75%'
   },{
       xtype: 'tbbutton',
       text: 'Delete',
       handler: function () {
           removeOptionSelected('GroupList', 1);
       },style: 'float:right;padding-right: 5px;padding-top:2px;'
   },{
       xtype: 'tbbutton',
       text: 'Add',
       handler: function () {

           var idcomboGroups = Ext.getCmp('idcomboGroups');

           if (!idcomboGroups) return false;

           var valor = '';
           var texto = '';
           var valor = idcomboGroups.getValue();




           if (valor.trim != '') {
      var record = idcomboGroups.findRecord(idcomboGroups.valueField, valor);
      if(record){
       var texto = record.get(idcomboGroups.displayField);
       if(texto.trim != ''){
        appendOptionLast('GroupList', valor, texto, 1);
       }
      }
           }



       },style: 'float:right;padding-right: 5px;padding-top:2px;'

   }],
        });



  var profile = new Ext.form.TextField({
   xtype: "textfield"
   ,labelAlign: 'left'
   ,id: "idprofile"
   ,value:data.profile
   ,name: "profile"
   ,fieldLabel: "<b>Path profile</b>"
   ,width: '95%'
  });

  var logonscript = new Ext.form.TextField({
   xtype: "textfield"
   ,labelAlign: 'left'
   ,id: "idlogonscript"
   ,value:data.logonscript
   ,name: "logonscript"
   ,fieldLabel: "<b>Logon script</b>"
   ,width: '95%'
  });


  var homedir = new Ext.form.TextField({
   xtype: "textfield"
   ,labelAlign: 'left'
   ,id: "idhomedir"
   ,value:data.homedir
   ,name: "homedir"
   ,fieldLabel: "<b>Local path</b>"
   ,width: '72%'
  });


  var driveArray = new Array();
  for(i = 3; i <= 26; i++){
   driveArray.push(new Array(i,String.fromCharCode(64+i)+':'));
  }

  var driveStore = new Ext.data.SimpleStore({
              id      : 0 ,
              fields  : [  'id', 'name' ],
              data    : driveArray
         });

  var radio1 = false;
  var radio2 = false;



  var maphomedirdrive = new Ext.form.TextField({
   xtype: "textfield"
   ,labelAlign: 'left'
   ,value:data.homedir
   ,name: "homedir"
   ,width: '54%'
  });

  var drive =  data.maphomedirdrive.toString().charAt(0);

  var drivecombo = new Ext.form.ComboBox({
      xtype : "combo"
      ,name : "drivecombo"
      ,width: 40
      ,store:driveArray
      ,mode: 'local'
      //,disabled:true
      //,forceSelection:true
      ,listeners   : {
         beforerender: function(combo){
          if(drive.isAlpha()){
           drivecombo.setValue(data.maphomedirdrive);
          }
         }
      }
  });


  if(drive.isAlpha()){
   radio2 = true;
   homedir.disable();
  } else {
   radio1 = true;
   drivecombo.disable();
   maphomedirdrive.disable();
  }


        var FormUserProfile = new Ext.Panel({
   //monitorValid: true,
   //standardSubmit: true,
   //width:300,
   //height: 250,
   id: 'FormUserProfile',
   border: false,
   frame: true,
   labelWidth: 0,
   items: [
      {
       xtype: 'fieldset'
       ,title: 'User Profile'
       ,labelAlign: 'left'
       //collapsible: true
       ,items: [profile,logonscript]
      }
      ,{
       xtype: 'fieldset'
       ,title: 'Home Folder'
       //,layout:'table'
       //,layoutConfig: {columns:2}
       //,labelAlign: 'top'
       //collapsible: true
       ,items: [
          {
            xtype           : "compositefield", //step 2
            //fieldLabel  : "Phone",
            hideLabel:true,
            border        : false,
            items           : [
             {
              xtype : "radio"
              ,name : "radio1"
              ,boxLabel:'Local path'
              ,checked: radio1
              ,handler:function(radio,checked){
               if(checked){
                homedir.enable();
               } else {
                homedir.disable();
               }
              }
             }
             ,homedir

            ]
          }
          ,{
            xtype           : "compositefield", //step 2
            hideLabel:true,
            border: false,
            items: [
             {
              xtype : "radio"
              ,name : "radio1"
              ,boxLabel:'Connect'
              ,checked: radio2
              ,handler:function(radio,checked){
               if(checked){
                drivecombo.enable();
                maphomedirdrive.enable();
               } else {
                drivecombo.disable();
                maphomedirdrive.disable();
               }
              }
             }
             ,drivecombo
             ,{xtype : "displayfield", value:" To: "}
             ,maphomedirdrive

            ]
          }
        /*{
         xtype: 'radio'
         ,name:'select'
         ,boxLabel: 'Delete1'
         ,handler: function () {
          removeOptionSelected('GroupList', 1);
         }
        }
        ,homedir
        ,{
         xtype: 'radio'
         ,boxLabel: 'Delete'
         ,name:'select'
         ,handler: function () {
          removeOptionSelected('GroupList', 1);
         }
         ,style: 'padding-right: 5px;padding-top:2px;'
        }*/
       ]
      }
     ],
        });



   var tabs = new Ext.TabPanel({
   activeTab: activeTab,
   items: [
     {
      title: 'General'
      //,html: 'Another one'
      ,items: [FormGeneral]
     },{
      title: 'Menber of'
      ,items:[FormMenberof]
     },{
      title: 'Profile'
      ,items:[FormUserProfile]
      //,html: 'Another one'
     }
    ]
   });


   var WindowUserManager = new Ext.Window({
   title: sprintf('%s properties',data.username.capitalize())
   ,modal:true
   ,labelWidth: 75
   ,width:380
   ,height:365
   ,frame: true
   ,bodyStyle: 'padding:5px 5px 5px 5px'
   ,layout: 'form'
   ,items: [tabs]
    ,buttons: [
      {
       text: 'Save',
       //formBind: true,
       handler:function(){



        if(drivecombo.getValue().trim()!=''){
         homedir = maphomedirdrive.getValue();
        } else {
         homedir = homedir.getValue();
        }

                            //var optionList = new Array();



                            //var sendJson = Ext.util.JSON.encode(optionList);
                            //console.log(grouplist);

                             grouplist=ExplodeListByComma('GroupList');
        params={
          description:description.getValue()
          ,changepassword:ForcePasswordChange.getValue()
          //,cannotchangepassword:CannotChangePassword.getValue()
          ,disable:disable.getValue()
          ,fullname:fullname.getValue()
          ,homedir:homedir
          ,locked:locked.getValue()
          ,logonscript:logonscript.getValue()
          ,maphomedirdrive:drivecombo.getValue()
          ,passwordexpires:passwordexpires.getValue()
          ,profile:profile.getValue()
          ,grouplist:grouplist
          ,oldgrouplist:oldgrouplist
          ,rid:data.rid
          ,username:data.username
        }

        //var form = new Ext.form.FormPanel({id:'idSendForm',url:''});

        //SendForm(form,WindowUserManager,'User/UpdateUser',params)
        UserController.SendData('User/UpdateUser',params,WindowUserManager);
       }
      }, {
       text: 'Cancel',
       handler: function () {
        WindowUserManager.close();
       }
      }
   ]
   });


   //top.render(WindowUserManager);

   WindowUserManager.show();
   WindowUserManager.center();

  }
}

