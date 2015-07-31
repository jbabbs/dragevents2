# dragevents2

Inspired by [Dragster](https://github.com/bensmithett/dragster)
and [Dragbetter](https://github.com/lolmaus/jquery.dragbetter)

## Purpose

This module allows you to bind two new listeners to domNodes: dragenter2 and dragleaver2.
They are improved version of the dragenter and dragleave events, which behave more like mouseenter and mouseleave.

This is a pure javascript module and it is browserify compatible.

## Demo 
[link](https://jbabbs.github.io/dragevents2)

## Usage

```javascript
var de2 = new dragevents2(elem);
elem.addEventListener('dragenter2', function() {...});
elem.addEventListener('dragleave2', function() {...});
// if you wish to unbind the events
 de2.unbindEvents();
```
