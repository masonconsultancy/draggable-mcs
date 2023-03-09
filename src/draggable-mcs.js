(function ($) {
  'use strict';

  $.fn.draggable = function (options) {
    var defaults = {
      headerIdentifier: '.draggable-header',
      position: {
        dock: null,
        top: null,
        left: null
      }
    };

    var settings = $.extend({}, defaults, options);

    this.filter('div.draggable').each(function () {
      var item = $(this);

      positionElement(item, settings.position);

      var headerItem = item.find(settings.headerIdentifier) ?? item;

      headerItem.unbind('mousedown');
      $(document).unbind('mouseup mousemove');

      dragElement(item, headerItem);
    });

    return this;
  };

  function positionElement (item, position) {
    if (position.dock) {
      var dockableItem = $(position.dock);

      if (!dockableItem) {
        return;
      }

      var y = position.top ?? 0;
      var x = position.left ?? 0;

      item.css({
        top: dockableItem.offset().top + y,
        left: dockableItem.offset().left + x
      });

      return;
    }

    if (position.top) {
      item.css({ top: position.top });
    }

    if (position.left) {
      item.css({ left: position.left });
    }
  }

  function dragElement (item, headerItem) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    headerItem.on('mousedown', function (mouseDownEvent) {
      mouseDownEvent = mouseDownEvent || window.event;
      mouseDownEvent.preventDefault();
      pos3 = mouseDownEvent.clientX;
      pos4 = mouseDownEvent.clientY;
      $(document).on('mousemove', function (moveEvent) {
        moveEvent = moveEvent || window.event;
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
      $(document).on('mouseup', function () {
        $(document).unbind('mouseup mousemove');
      });
    });
  };
}(jQuery));
