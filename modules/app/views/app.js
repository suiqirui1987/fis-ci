var Backbone, TodoView, todos, common, AppView;

var $ = require('jquery');
var _ = require('underscore');

Backbone = require('backbone');
common = require('common');

AppView = Backbone.View.extend({

	el: '#detu_header',

	statsTemplate: __inline('./template/content.tmpl'),

	initialize: function () {

		this.$main = this.$('#main');
		
		this.render();
	},
	render: function() {
		
        this.$main.html(this.statsTemplate({
				username: "sqr"
			}));

    }

});

module.exports = AppView;
