// ==UserScript==
// @name         Sign In
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Optional auto sign in script for usc login if password is remembered.
// @author       You
// @match        https://login.usc.edu/*
// @icon         https://www.google.com/s2/favicons?domain=usc.edu
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(".form-button:contains('Sign in')").click();
})();
