'use strict';

describe('ngMarquee', function() {
	var $compile,
			$scope,
			marqueeDirective;

	beforeEach(function() {
		module('ngMarquee');
	});

	beforeEach(inject(function(_$compile_,
										_$rootScope_) {
		$compile = _$compile_;
		$scope = _$rootScope_.$new();

		var directive = angular.element('<div ng-marquee scroll="scroll" duration="duration">Good morning</div>');
		$scope.scroll = true;
		$scope.duration = 10000;
		marqueeDirective = $compile(directive)($scope);
		$scope.$digest();
	}));

	it("has correct html", function() {
		console.log(marqueeDirective.html());
		expect(marqueeDirective.html()).toContain("Good morning");
		expect(marqueeDirective.find('.js-marquee-wrapper')).not.toBe([]);
		$scope.scroll = true;
		$scope.$digest();
		console.log(marqueeDirective.html());
	});

	it("toggle animation by stop attribute", function() {
		//$scope.scroll = false;
		$scope.$digest();
		//expect(marqueeDirective.find(''))
	});
});