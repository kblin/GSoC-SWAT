AppContexMenu={};
AppContexMenu={
 UserContexMenu : null
 ,BuiltinContexMenu : null
 ,OUContexMenu : null
 ,ContainerContexMenu : null
 ,show : false
 ,data : null

 ,init:function(){

            this.UserContexMenu = new Ext.menu.Menu({

                id: 'UserContexMenu'

                ,items: [
       {
        text: 'Copy ...'


        ,handler: this.OnUserContexMenuCopyClick

        //,iconCls: 'edit_user'

       }, {

        text: 'Add to a group'


        ,handler: this.OnContexMenuAddUserGroupClick

        //,iconCls: 'edit_user'

       }, {

        text: 'Disable account'
        ,id:'IdUserContexMenuDisableAccount'

        ,handler: this.OnUserContexMenuDisableAccountClick

        //,iconCls: 'edit_user'

       }, {

        text: 'Reset password'


        ,handler: this.OnUserContexMenuResetPassClick

        //,iconCls: 'edit_user'

       }, {

        text: 'Delete'
        ,id:'IdUserContexMenuDelete'

        ,handler: this.OnUserContexMenuDeleteClick

        //,iconCls: 'edit_user'

       }, {

        text: 'Rename'
        ,id:'IdUserContexMenuChangeName'

        ,handler: this.OnUserContexMenuRenameClick

        //,iconCls: 'edit_user'

       }, '-', {

        text: 'Properties'


        ,handler: this.OnUserContexMenuPropertyClick

        //,iconCls: 'edit_user'

       }
      ]

            });



            this.ShareContexMenu = new Ext.menu.Menu({

                id: 'ShareContexMenu',

                items: [

       {
        text: 'Copy ..'
        ,handler: this.OnContexMenuDelegateControlClick
       },{

        text: 'Eliminar'
        ,id:'IdContainerContexMenuDelete'

        ,handler: this.OnContexMenuDeleteClick

        //,iconCls: 'edit_user'

       }, {

        text: 'Cambiar nombre'
        ,id:'IdContainerContexMenuChangeName'

        ,handler: this.OnContexMenuRenameClick

        //,iconCls: 'edit_user'

       }, {

        text: 'Actualizar'

        ,handler: this.OnContexMenuUpdateClick

        //,iconCls: 'edit_user'

       },'-', {

        text: 'Properties'

        ,handler: this.OnShareContexMenuPropertyClick

        //,iconCls: 'edit_user'

       }
      ]

            });


            this.GroupContexMenu = new Ext.menu.Menu({

                id: 'GroupContexMenu',

                items: [
       {
        text: 'Copy ...'
        ,handler: this.OnGroupContexMenuCopyClick
        //,iconCls: 'edit_user'
       },{

        text: 'Delete'
        ,id:'IdGroupContexMenuDelete'

        ,handler: this.OnGroupContexMenuDeleteClick

        //,iconCls: 'edit_user'

       },{

        text: 'Rename'
        ,id:'IdGroupContexMenuRename'

        ,handler: this.OnGroupContexMenuRenameClick

        //,iconCls: 'edit_user'

       },'-', {

        text: 'Properties'
        //,id:'IdBuiltinContexMenuProperties'

        ,handler: this.OnGroupContexMenuPropertyClick

        //,iconCls: 'edit_user'

       }
      ]

            });

 }

 ,OnGroupContexMenuCopyClick : function(item,event){
  var data = AppContexMenu.data.json;
  GroupController.CopyGroup(data);
 }

 ,OnUserContexMenuCopyClick : function(item,event){
  var data = AppContexMenu.data.json;
  UserController.CopyUser(data);
 }

 ,OnContexMenuCutClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }


 ,OnContexMenuMoveClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }


 ,OnGroupContexMenuDeleteClick : function(item,event){
  var rid = AppContexMenu.data.json.rid;
  var group = AppContexMenu.data.json.name;
  GroupController.DeleteGroup(rid,group);
 }

 ,OnContexMenuDeleteClick : function(item,event){
  alert('Unimplemented');
   console.dir(item);
   console.dir(event);
 }


 ,OnUserContexMenuDeleteClick : function(item,event){
  var rid = AppContexMenu.data.json.rid;
  var account = AppContexMenu.data.json.username;
  UserController.DeleteUser(rid,account);
 }

 ,OnUserContexMenuRenameClick : function(item,event){

  UserController.RenameUser(AppContexMenu.rowIndex);

 }

 ,OnGroupContexMenuRenameClick : function(item,event){

  GroupController.RenameGroup(AppContexMenu.rowIndex);

 }

 ,OnContexMenuRenameClick : function(item,event){



 }

 ,OnContexMenuSearchClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }


 ,OnContexMenuUpdateClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }


 ,OnUserContexMenuDisableAccountClick : function(item,event){
  //console.dir(item);
  //console.dir(event);
  var rid = AppContexMenu.data.json.rid;
  var account = AppContexMenu.data.json.username;
  var disable = AppContexMenu.data.json.disable;
  if(disable){
   UserController.EnableAccount(rid,account,true);
  } else {
   UserController.EnableAccount(rid,account,false);
  }

 }


 ,OnUserContexMenuResetPassClick : function(item,event){

  var data = AppContexMenu.data.json;
  var account = data.username;

  UserController.SetPassword(account,data);

 }


 ,OnContexMenuDelegateControlClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }


 ,OnUserContexMenuPropertyClick : function(item,event){

  var data = AppContexMenu.data.json;
  var account = data.username;
  UserController.ManageUser(account,data);

 }

 ,OnShareContexMenuPropertyClick : function(item,event){
  var data = AppContexMenu.data.json;
  var name = data.name;
  ShareController.Manage(name,data);
 }

 ,OnGroupContexMenuPropertyClick : function(item,event){
  var data = AppContexMenu.data.json;
  var group = data.name;
  GroupController.Manage(group,data);
 }

 ,OnContexMenuAddPcClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }


 ,OnContexMenuAddGroupClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }


 ,OnContexMenuAddInetOrgPersonClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }


 ,OnContexMenuAddContactClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }


 ,OnContexMenuAddPrinterClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }


 ,OnContexMenuAddUserGroupClick : function(item,event){
  var data = AppContexMenu.data.json;
  DialogUserManager.show(data,1);
 }


 ,OnContexMenuAddShareFolderClick : function(item,event){
  alert('Unimplemented');
  console.dir(item);
  console.dir(event);
 }

 ,OnContexMenuChangeDomainClick: function(item,event){
   alert('Unimplemented');
   console.dir(item);
   console.dir(event);
 }
 ,OnContexMenuChangeDomainControllerClick: function(item,event){
   alert('Unimplemented');
   console.dir(item);
   console.dir(event);
 }
 ,OnContexMenuRaiseDomainFunctionalLevelClick: function(item,event){
   alert('Unimplemented');
   console.dir(item);
   console.dir(event);
 }
 ,OnContexMenuMasterOperationClick: function(item,event){
   alert('Unimplemented');
   console.dir(item);
   console.dir(event);
 }
 ,OnContexMenuAddToGroupClick: function(item,event){
   alert('Unimplemented');
   console.dir(item);
   console.dir(event);
 }
};