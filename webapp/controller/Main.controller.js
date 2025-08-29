sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "codelco/processededps/controller/formatter/Formatter"
], (Controller,JSONModel,Formatter) => {
    "use strict";

    return Controller.extend("codelco.processededps.controller.Main", {
    formatter: Formatter,    
        
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

        var oFiltrosModel = new JSONModel({
            tipoItemSeleccionado: "Todo"
        });
        this.getView().setModel(oFiltrosModel, "filtros");






        // ---------- Items de ejemplo para la lista 1 ----------
        var propItems = {
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

        var oItemsModel = new JSONModel(propItems);
        this.getView().setModel(oItemsModel, "propItems");



        // ---------- Items de ejemplo para la lista 2 ----------
            var hItems = {
            items: [
                {
                    id: "70000000304",
                    edpOC: "4501247774",
                    fecha: "2025-08-28",
                    monto: 3600,
                    currency: "CLF",
                    estado: "validado"
                },
                {
                    id: "70000000305",
                    edpOC: "4501247775",
                    fecha: "2025-08-27",
                    monto: 4500,
                    currency: "CLF",
                    estado: "rechazado"
                },
                {
                    id: "70000000306",
                    edpOC: "4501247776",
                    fecha: "2025-08-26",
                    monto: 5200,
                    currency: "CLF",
                    estado: "validado"
                },
                {
                    id: "70000000307",
                    edpOC: "4501247777",
                    fecha: "2025-08-25",
                    monto: 6100,
                    currency: "CLF",
                    estado: "validado"
                },
                {
                    id: "70000000308",
                    edpOC: "4501247778",
                    fecha: "2025-08-24",
                    monto: 2900,
                    currency: "CLF",
                    estado: "rechazado"
                },
                                {
                    id: "70000000307",
                    edpOC: "4501247777",
                    fecha: "2025-08-25",
                    monto: 6100,
                    currency: "CLF",
                    estado: "validado"
                },
                {
                    id: "70000000308",
                    edpOC: "4501247778",
                    fecha: "2025-08-24",
                    monto: 2900,
                    currency: "CLF",
                    estado: "rechazado"
                },
                                {
                    id: "70000000307",
                    edpOC: "4501247777",
                    fecha: "2025-08-25",
                    monto: 6100,
                    currency: "CLF",
                    estado: "validado"
                },
                {
                    id: "70000000308",
                    edpOC: "4501247778",
                    fecha: "2025-08-24",
                    monto: 2900,
                    currency: "CLF",
                    estado: "rechazado"
                },
                                {
                    id: "70000000307",
                    edpOC: "4501247777",
                    fecha: "2025-08-25",
                    monto: 6100,
                    currency: "CLF",
                    estado: "validado"
                },
                {
                    id: "70000000308",
                    edpOC: "4501247778",
                    fecha: "2025-08-24",
                    monto: 2900,
                    currency: "CLF",
                    estado: "rechazado"
                }
            ]
        };

        var oItemsModel2 = new JSONModel(hItems);
        this.getView().setModel(oItemsModel2, "hItems");
    },

    onHistoricoPress: function (oEvent) {
        var oView = this.getView();

        // Si todavía no lo creaste, lo crea y lo guarda
        if (!this._oHistoricoDialog) {
            this._oHistoricoDialog = sap.ui.xmlfragment(oView.getId(),
                "codelco.processededps.view.fragments.Historico", 
                this
            );
            oView.addDependent(this._oHistoricoDialog);
        }

        this._oHistoricoDialog.open();
    },

    onCloseHistorico: function () {
        if (this._oHistoricoDialog) {
            this._oHistoricoDialog.close();
        }
    }

    });
});