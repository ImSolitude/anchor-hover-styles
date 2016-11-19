/*global console, alert, confirm, prompt*/
var a = document.querySelectorAll('a');

[].forEach.call(a, function (aElement) {
    'use strict';
    aElement.onclick = function(e) {
        e.preventDefault();
    };
});