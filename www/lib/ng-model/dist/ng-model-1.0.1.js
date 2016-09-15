(function(window, document) {
    "use strict";
    (angular.module('ng.model', [ 'ng' ])).factory('$model', [ function() {
	var $model = {
	    set : function(directive, value) {
		document.querySelector('[data-ng-model="' + directive + '"]').value = value;
	    },
	    get : function(directive) {
		return document.querySelector('[data-ng-model="' + directive + '"]').value;
	    }
	};
	return $model;
    } ]);
})(window, document);
