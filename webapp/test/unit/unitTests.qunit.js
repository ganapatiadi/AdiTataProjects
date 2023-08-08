/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comtatatech/modelfilter/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
