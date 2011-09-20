Ext.ns("ShareController");

ShareController = {

            AddShare:function(){
                DialogNewShare.show();
            }

            ,RenameShare:function(rowIndex){
                MainAppW.RowEditor.startEditing(rowIndex, false);
            }



            ,CopyShare:function(data){
                if(data==null) return;
                DialogNewShare.show(data);
            }


            ,DeleteShare:function(name,Share){
                ParamsObj = {
                    name:name
                    ,Share:Share
                }
                ShareController.SendData('Share/DeleteShare',ParamsObj);
            }

            ,DeleteShareList:function(){
                var seleccionados = Ext.getCmp('GridObjectBrowser').getSelectionModel().getSelections();
                var RemoveList = Array();

                Ext.each(seleccionados, function (record) {
                    RemoveList.push(record.data['name']);
                });

                ParamsObj = {
                    ShareList:RemoveList.toString()
                }

                if(RemoveList.length>0){
                    ShareController.SendData('Share/DeleteShareList',ParamsObj);
                }
            }



            ,Manage:function(Share,data){
                DialogShareManager.show(data);
            }


            ,SendData:function(url,params,MainWindow){

                    Ext.Ajax.request({
                                        url: url,
                                        method : 'POST',
                                        success: function(response, opts) {

                                                var Return = Ext.decode(response.responseText);

                                                if(!Return.success){
                                                    Ext.Msg.alert('<b>Error</b>',Return.msg);
                                                    return false;
                                                }

                                                Ext.getCmp('GridObjectBrowser').store.load();

                                                if(typeof(MainWindow) != 'undefined') {
                                                    MainWindow.close();
                                                }


                                        },

                                        failure: function(response, opts) {
                                                ErrorMsg = 'status code ' + response.status;
                                                Ext.Msg.alert('<b>Error</b>',ErrorMsg);
                                        },
                                        params: params
                    });

            }

}

