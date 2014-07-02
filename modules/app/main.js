var Backbone, Workspace, app;

Backbone = require('backbone');

Backbone.$ = require('jquery');

app = require('app/views/app');


Backbone.$(document).ready(function(){
    new app();
});
