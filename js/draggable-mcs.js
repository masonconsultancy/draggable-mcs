(function ($) {
  'use strict';

  $.fn.draggable = function (options) {
    var defaults = {
      headerIdentifier: '.draggable-header'
    };

    var settings = $.extend({}, defaults, options);

    this.filter('div.draggable').each(function () {
      var item = $(this);

      var headerItem = item.find(settings.headerIdentifier) ?? item;

      headerItem.unbind('mouseup mousedown');
      item.unbind('mousemove');

      dragElement(item, headerItem);
    });

    return this;
  };

  function dragElement (item, headerItem) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    headerItem.on('mousedown', function (mouseDownEvent) {
      mouseDownEvent.preventDefault();
      pos3 = mouseDownEvent.clientX;
      pos4 = mouseDownEvent.clientY;
      item.on('mousemove', function (moveEvent) {
        moveEvent.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - moveEvent.clientX;
        pos2 = pos4 - moveEvent.clientY;
        pos3 = moveEvent.clientX;
        pos4 = moveEvent.clientY;
        // set the element's new position:
        item.offset({
          top: item.offset().top - pos2,
          left: item.offset().left - pos1
        });
      });
      headerItem.on('mouseup', function () {
        headerItem.unbind('mouseup');
        item.unbind('mousemove');
      });
    });
  };
}(jQuery));
