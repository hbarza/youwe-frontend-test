/**
 * Accordion plugin
 *
 * @author Omid Barza <hbarza@gmail.com>
 */

accordion = function(accordionSelector, openFirst, autoClose) 
{
    /**
     * Accordion object
     * 
     * @var {Element}
     */
    this.accordion = $(accordionSelector);

    /**
     * Accordion slide animation speed
     * 
     * @var {int}
     */
    this.animationTime = 350;

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
     */
    this._init = function ()
    {
        var items = this.accordion.querySelectorAll('.accordion-item');
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
        }
    };

    /**
     * Toggle accordion when click on header
     * 
     * @param {string} header
     * @returns undefined
     */
    this.toggle = function (header)
    {
        header = $(header);
        var content = $(header.getAttribute('data-content'));
        var arrow   = header.querySelector('.btn-icon');

        // @reference https://gomakethings.com/how-to-add-transition-animations-to-vanilla-javascript-show-and-hide-methods/
        if (codnitive.hasClass(content, 'show')) {
            codnitive.removeClass(header, 'active');
            codnitive.addClass(header, 'inactive');
            
            codnitive.removeClass(arrow, 'arrow-down');
            codnitive.addClass(arrow, 'arrow-right');

            this.slideUp(content);
            return;
        }
        if (this.autoClose) {
            var activeAccordionItem = this.accordion.querySelector('.accordion-header.active');
            if (null !== activeAccordionItem) {
                triggerClick(this.accordion.querySelector('.accordion-header.active'));
            }
        }
        codnitive.removeClass(header, 'inactive');
        codnitive.addClass(header, 'active');
            
        codnitive.removeClass(arrow, 'arrow-right');
        codnitive.addClass(arrow, 'arrow-down');

        this.slideDown(content);
    };

    /**
     * Slide down accordion to show content
     * 
     * @param {Element} element
     * @returns void
     */
    this.slideDown = function (element)
    {
        element.style.height = this.getHeight(element);
        codnitive.addClass(element, 'show');

        window.setTimeout(function () {
            element.style.height = '';
        }, this.animationTime);
    }

    /**
     * Slide up accordion to hide content
     * 
     * @param {Element} element
     * @returns void
     */
    this.slideUp = function (element)
    {
        element.style.height = element.scrollHeight + 'px';
        window.setTimeout(function () {
            element.style.height = '0';
        }, 1);
        window.setTimeout(function () {
            codnitive.removeClass(element, 'show');
        }, this.animationTime);
    };

    /**
     * Retrives accordion content height
     * 
     * @param {Element} element
     * @returns string
     */
    this.getHeight = function (element)
    {
        element.style.display = 'block';
		var height = element.scrollHeight + 'px';
		element.style.display = '';
		return height;
    }
}
