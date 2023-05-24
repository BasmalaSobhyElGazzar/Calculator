/*global $, document*/

var calButtons = $('.calButtons button');
var display = $('#show');
var value = "";
var all = "";

$(document).ready(function () {
    'use strict';
    
    
    calButtons.on('click', function () {
    
        value = $(this).val();

        if (value === "c") {

            display.val("");
            all = "";

        } else if (value === "=") {
            
            var result = eval(all);
            display.val(result);
            all = "";
            
        } else {
            all += value;
            display.val(all);
        
        }
    });
});