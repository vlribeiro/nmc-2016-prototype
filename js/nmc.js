(function ($, $w) {
  'use strict';

  var NmcApp = {};

  NmcApp.events = (function() {
    var config = function() {
      $('.nmc-top-bar__action-button').on('click', toggleMenuClick);
    }

    var toggleMenuClick = function(e) {
      $('.nmc-top-bar__menu').toggleClass('hide');
      $('.nmc-top-bar__action-button').toggleClass('fa-bars');
      $('.nmc-top-bar__action-button').toggleClass('fa-times');
    }

    return {
      config: config
    }
  })();

  NmcApp.init = function() {
    NmcApp.events.config();
  }

  $w.addEventListener('load', NmcApp.init);

}) ($, window);
