sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.mandeep.zroutingandnavigation.controller.About", {
        onInit(){
            // We need to get the Component
            // We need to get the Router instance using the Component
            // We need to check if the Patter is matched
           var oComponent = this.getOwnerComponent();
           var oRouter = oComponent.getRouter();
           oRouter.getRoute("RouteAbout").attachPatternMatched(this._onAttachPatternMatched, this);
        },

        onNavigateToHomePage(){
        //  Requirement: Navigate to the Home Page
        // 1. We need to get the component
        // 2. We need to get the Router from the component
        // 3. We need to navigate to the HomePage using the router
        var oComponent = this.getOwnerComponent();
        var oRouter = oComponent.getRouter();
        oRouter.navTo("RouteHome");
        },

        _onAttachPatternMatched(oEvent){
            // console.log(oEvent);
           var sName = oEvent.getParameter("arguments").name;
           MessageToast.show(sName);
        }
    });
});