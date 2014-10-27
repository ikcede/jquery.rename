jquery.rename
=============

Lets you rename things by double clicking (default) on them. (Then you can have a save option to save it to the server)

Updates:
    1. Now supports rename end events
    2. Change bind to a parent element if children are dynamic
    3. Lets you choose the input class name

Defaults:

```javascript
settings = $.extend({
    allowEmpty: false,
    child:null,
    editEvent:"dblclick",
    inputClass:"renameText",
    onRenameEnd: null,
    onRenameTest: null
},settings);
```