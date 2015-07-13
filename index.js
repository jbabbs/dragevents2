/*
 * Usage: var elem = getElementById('someId');
 *        var de2 = new DragEvents2(elem);
 *        elem.addEventListener('dragenter2', function() {...});
 *        elem.addEventListener('dragleave2', function() {...});
 *        // if you wish to unbind 'dragenter2' and 'dragleave2'
 *        de2.unbindEvents();
 */
(function() {
  if (typeof module === 'object') {
    module.exports = DragEvents2;
  } else {
    window['DragEvents2'] = DragEvents2;
  }

  var targetEnter = function(e) {
    if (this.alreadyEntered) {
      this.disableLeave = true;
      return;
    }
    this.alreadyEntered = true;
    this.target.dispatchEvent(new Event('dragenter2'));
  };

  var targetLeave = function(e) {
    if (this.disableLeave) {
      this.disableLeave = false;
      return;
    }
    this.alreadyEntered = false;
    this.target.dispatchEvent(new Event('dragleave2'));
  };

  var targetDrop = function(e) {
    this.alreadyEntered = false;
  };

  function unbindEvents() {
    this.target = null;
    this.target.removeEventListener('dragenter', targetEnter.bind(this));
    this.target.removeEventListener('dragleave', targetLeave.bind(this));
    this.target.removeEventListener('drop', targetDrop.bind(this));
  }

  function bindEvents() {
    this.target.addEventListener('dragenter', targetEnter.bind(this), true);
    this.target.addEventListener('dragleave', targetLeave.bind(this), false);
    this.target.addEventListener('drop', targetDrop.bind(this), true);
  }

  function DragEvents2(e) {
    this.target = e;
    this.disableLeave = false;
    this.alreadyEntered = false;
    this.bindEvents();
  }

  DragEvents2.prototype.bindEvents = bindEvents;
  DragEvents2.prototype.unbindEvents = unbindEvents;
})();