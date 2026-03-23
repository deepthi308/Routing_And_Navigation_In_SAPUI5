sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.mandeep.zroutingandnavigation.controller.Home", {
        onInit() {
        },

        onNavigateToAboutPage() {
            // Requirement: Navigate to the About Page
            // 1. We need to get the component
            // 2. Get the Router using the component
            // 3. Navigate to About Page using the Router
            var oComponent = this.getOwnerComponent();
            var oRouter = oComponent.getRouter();
            oRouter.navTo("RouteAbout", {
                name: "Deepthi Maniprakash H"
            });
        }
    });
});