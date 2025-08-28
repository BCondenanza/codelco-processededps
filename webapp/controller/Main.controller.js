sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("codelco.processededps.controller.Main", {
    onInit: function() {
    // ---------- Tipos de Items ----------
    var aTiposDeItem = [
        { key: "Todo",       text: "Todo",       icon: "sap-icon://edit-outside" },
        { key: "Materiales", text: "Materiales", icon: "sap-icon://product" },
        { key: "Servicios",  text: "Servicios",  icon: "sap-icon://wrench" },
        { key: "Mixto",      text: "Mixto",      icon: "sap-icon://combine" }
    ];

    var oModelTipos = new JSONModel({
        tiposDeItem: aTiposDeItem
    });
    this.getView().setModel(oModelTipos);

    // Modelo para guardar el valor seleccionado
    var oFiltrosModel = new JSONModel({
        tipoItemSeleccionado: "Todo"
    });
    this.getView().setModel(oFiltrosModel, "filtros");


    // ---------- Items de ejemplo para la lista ----------
    var oDataItems = {
        items: [
            {
                id: "XXXXXXXXXXXXX",
                numeroContrato: "CON-0001",
                fechaCreacion: "2025-08-28",
                MA01: "12345"
            },
            {
                id: "XXXXXXXXXXXXX",
                numeroContrato: "CON-0002",
                fechaCreacion: "2025-08-27",
                MA01: "67890"
            }
        ]
    };

    var oItemsModel = new JSONModel(oDataItems);
    this.getView().setModel(oItemsModel, "itemsModel"); // bind de la lista con itemsModel
}
        });
});