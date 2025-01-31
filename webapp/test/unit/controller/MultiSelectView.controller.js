/*global QUnit*/

sap.ui.define([
	"multi_select_input/controller/MultiSelectView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MultiSelectView Controller");

	QUnit.test("I should test the MultiSelectView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
