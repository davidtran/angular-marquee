angular-marquee
===============

Marquee for AngularJS
------------

There are a lot of jQuery marquee but most of them can't not work properly with AngularJS. Angular marquee is written for AngularJS and it works well when $scope data changes, you can play/pause marquee, change animation duration from $scope data. Most of the code was adapted from https://github.com/aamirafridi/jQuery.Marquee.

Usage:
-------

Add angular-marquee to module dependencies:

```javascript
angular
	.module('app', ['angular-marquee']);
```
Put angular-marquee directive to html template:

```html
<div angular-marquee scroll="scroll" duration="duration">{{title}}</div>
```
Change marquee options from controller:

```javascript
angular
	.module('app')
	.controller('appCtrl', function($scope) {
		$scope.title = "Hello World!";
		$scope.scroll = true;
		$scope.duration = 10000;
	});
```

Directive attributes:
--------
**scroll**: toggle marquee animation

**duration**: duration in miliseconds which you want your element to travel
