/*
 * This file is part of Jarves.
 *
 * (c) Marc J. Schmidt <marc@marcjschmidt.de>
 *
 *     J.A.R.V.E.S - Just A Rather Very Easy [content management] System.
 *
 *     http://jarves.io
 *
 * To get the full copyright and license information, please view the
 * LICENSE file, that was distributed with this source code.
 */

jarves.FieldTypes.Theme = new Class({

    Extends: jarves.FieldTypes.Select,

    Statics: {
        label: 'Theme',
        asModel: true
    },

    createLayout: function () {
        this.parent();

        Object.each(jarves.settings.configs, function(config, key) {
            if (config.themes) {
                Object.each(config.themes, function(theme){
                    this.select.add(theme.id, theme.label);
                }.bind(this))
            }
        }.bind(this));

        if (this.select.options.selectFirst) {
            this.select.selectFirst();
        }
    }
});