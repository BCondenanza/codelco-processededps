/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["codelco/processededps/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
