sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
    "use strict";
    return {
        estadoColor: function(sEstado) {
            switch (sEstado) {
                case "validado":
                    return "Success"; // verde
                case "rechazado":
                    return "Error";   // rojo
                default:
                    return "None";    // gris/default
            }
        },
        displayEstado: function(sEstado) {
            if (sEstado === "validado") {
                return "Validado por el cliente";
            } else if (sEstado === "rechazado") {
                return "Rechazado por el cliente";
            }
            return sEstado; // fallback
        },

        formatMonto: function(fMonto) {
            if (fMonto === undefined || fMonto === null) {
                return "";
            }
            var oNumberFormat = NumberFormat.getFloatInstance({
                minFractionDigits: 2,
                maxFractionDigits: 2,
                groupingEnabled: true
            });
            return oNumberFormat.format(fMonto);
        }

    };
});