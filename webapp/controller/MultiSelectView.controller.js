sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/core/Fragment",
	"sap/m/Token"
], (Controller,JSONModel,Filter,FilterOperator,MessageToast,MessageBox,Fragment,Token) => {
    "use strict";

    return Controller.extend("multiselectinput.controller.MultiSelectView", {
        onInit() {
            var aData = [ 
                {
                    "name" : "John",
                    "number" : "0090213",
                    "city": "Delhi"
                },
                {
                    "name" : "Marie",
                    "number" : "0078933",
                    "city": "Pune"

                },
                {
                    "name" : "Mahe",
                    "number" : "9893824",
                    "city": "Bengaluru"
                },
                {
                    "name" : "Kunal",
                    "number" : "990820",
                    "city": "Chennai"
                }

            ]
            var oMultiModel = new JSONModel();
            oMultiModel.setData(aData);
            this.getOwnerComponent().setModel(oMultiModel,"oMultiModel"); 
        },
        onValHelpReq(){
            this._createDialog("MultiInpF4","_oMultiInpF4");

        },
        _createDialog(sFragmentName,sDialogName){
            var oView = this.getView();
            if(!this.sDialogName){
                this.sDialogName = sap.ui.xmlfragment("multiselectinput.view.fragment."+sFragmentName, this);
                oView.addDependent(this.sDialogName);

            }
            this.sDialogName.open();
        },
        handleSearch(oEvent){
            var sVal = oEvent.getParameters("value").value;
            if(sVal){
            var oFilter = new Filter("name",FilterOperator.Contains,sVal);
            var oBinding = oEvent.getParameter("itemsBinding");
            oBinding.filter(oFilter);
            } else {
				oEvent.getSource().getBinding("items").filter([]);
			}

        },
        handleConfirm(oEvent){
            var inpMultiInp = this.getView().byId("inpMultiInput"),
            aSelectedItems = oEvent.getParameter("selectedContexts");
           if(aSelectedItems){
            aSelectedItems.forEach(function(oItem){
                inpMultiInp.addToken(new Token({
                    text: oItem.getObject().name
                }));
          
            });
           }

        },
        onSubmit : function(){
            MessageToast.show("Clicked on Submit!");
        }
    });
});