/**
 * Accordion plugin
 *
 * @author Omid Barza <hbarza@gmail.com>
 */

accordion = function(openFirst, autoClose) 
{

    /**
     * Defines first element of accordion is opened automatically when creating accordion
     * 
     * @var {bool}
     */
    this.openFirst = openFirst;

    /**
     * Defines auto close for open elements is enabled when click on closed element to open
     * 
     * @var {bool}
     */
    this.autoClose = autoClose;

    /**
     * Create and initilize accordion
     * 
     * @param {string} accordion
     */
    this._init = function (accordion)
    {
        var items = $(accordion).querySelectorAll('.accordion-item');
        for (var i = 0; i < items.length; i++) {
            var header  = items[i].querySelector('.accordion-header');
            var content = items[i].querySelector('.accordion-content');

            var clickListener = '#' + header.getAttribute('id');
            onClick(clickListener + ', ' + clickListener + ' *', 'toggle', this, clickListener);

            if (this.openFirst && i == 0) {
                codnitive.addClass(header, 'active');
                codnitive.addClass(header.querySelector('.btn-icon'), 'arrow-down')
                    .removeClass(header.querySelector('.btn-icon'), 'arrow-right');
                codnitive.addClass(content, 'show');
                continue;
            }
            codnitive.addClass(header, 'inactive');
            codnitive.addClass(header.querySelector('.btn-icon'), 'arrow-right')
                .removeClass(header.querySelector('.btn-icon'), 'arrow-down');
            codnitive.addClass(content, 'hide');
            codnitive.addClass(content, 'height-0');
        }
    };

    this.toggle = function (header)
    {
        // @reference https://gomakethings.com/how-to-add-transition-animations-to-vanilla-javascript-show-and-hide-methods/
        var content = $($(header).getAttribute('data-content'));
        codnitive.removeClass(content, 'hide');
        codnitive.hasClass(content, 'height-0') 
            ? codnitive.removeClass(content, 'height-0')
            : codnitive.addClass(content, 'height-0');
    };
}
