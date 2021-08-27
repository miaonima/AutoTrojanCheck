// ==UserScript==
// @name         AutoTrojanCheck
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://trojancheck.usc.edu/*
// @icon         https://www.google.com/s2/favicons?domain=usc.edu
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var intervalId = window.setInterval( function() {
        // Click No if such button exists
        $("div.mat-button-toggle-label-content:contains('No')").click();

        // Check the checkboxes
        let checkbox = $(".mat-checkbox-input");
        if(checkbox && !checkbox.prop("checked")) {
            checkbox.click();
        }

        // Click Begin (Assessment) Next or Submit if any exists on page.
        $(".btn-begin-assessment").click();
        $(".btn-assessment-start").click();
        $(".btn-next").click();
        $(".btn-submit").click();


    }, 500);
})();