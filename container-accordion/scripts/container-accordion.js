/* global b$ */
(function () {
    'use strict';

    var Container = b$.bdom.getNamespace('http://backbase.com/2013/portalView').getClass('container');
 
    Container.extend(function() {
        Container.apply(this, arguments);
        this.isPossibleDragTarget = true;
    }, {
        localName: 'templateAccordion',
        namespaceURI: 'templates_templateAccordion'
    }, {
        template: function(json) {
            var data = {item: json.model.originalItem};
            return window[this.namespaceURI][this.localName](data);
        },
        handlers: {
            DOMReady: function(){
            },
            preferencesSaved: function(event){
                if(event.target === this) {
                    this.refreshHTML(function(item){
                        //add code, HTML refreshed
                    });
                }
            }
        }
    });
})();
