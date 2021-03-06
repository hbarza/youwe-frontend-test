/**
 * codnitive a simple vanilla js framework
 *
 * @author Omid Barza <hbarza@gmail.com>
 */

codnitive =  
{

    /**
     * Add new class name to element class porperty
     * 
     * @param {Element} element
     * @param {string} className
     * @returns {self}
     */
    addClass: function (element, className)
    {
        element.classList.add(className);
        return this;
    },

    /**
     * Add new class name to element class porperty
     * 
     * @param {Element} element
     * @param {string} className
     * @returns {self}
     */
    removeClass: function (element, className)
    {
        element.classList.remove(className);
        return this;
    },

    /**
     * Checks element has specific class name or not
     * 
     * @param {Element} element
     * @param {string} className
     * @returns {bool}
     */
    hasClass: function (element, className)
    {
        return element.classList.contains(className);
    },

    /**
     * 
     * @param {Element} element 
     * @returns {string} show|hide
     */
    toggle: function(element)
    {
        // return element.classList.toggle('show');
        if (codnitive.hasClass(element, 'show')) {
            codnitive.removeClass(element, 'show');
            codnitive.addClass(element, 'hide');
            return 'hide';
        }
        else {
            codnitive.removeClass(element, 'hide');
            codnitive.addClass(element, 'show');
            return 'show';
        }
    },

    /**
     * Toggle mobile menu
     * 
     * @param {Element} element 
     */
    toggleMenu: function (element)
    {
        codnitive.removeClass($('.header-top'), 'show');
        if (codnitive.hasClass(element, 'visible-search')) {
            codnitive.toggle(element);
            codnitive.removeClass($('.nav'), 'visible-search');
        }
        
        codnitive.addClass($('.nav .top-search'), 'hide')
            .removeClass($('.nav .menu'), 'hide')
            .addClass($('.nav .menu'), 'show');

        codnitive.toggle(element) == 'show' 
            ? codnitive.addClass($('.nav'), 'visible-menu')
            : codnitive.removeClass($('.nav'), 'visible-menu');
    },

    /**
     * Toggle mobile search bar
     * 
     * @param {Element} element 
     */
    toggleSearch: function (element)
    {
        codnitive.removeClass($('.header-top'), 'show');
        if (codnitive.hasClass(element, 'visible-menu')) {
            codnitive.toggle(element);
            codnitive.removeClass($('.nav'), 'visible-menu');
        }
        
        codnitive.removeClass($('.nav .top-search'), 'hide')
            .addClass($('.nav .top-search'), 'show')
            .addClass($('.nav .menu'), 'hide');

        codnitive.toggle(element) == 'show'
            ? codnitive.addClass($('.nav'), 'visible-search')
            : codnitive.removeClass($('.nav'), 'visible-search');
    },

    /**
     * Toggle top links in header
     * 
     * @param {Element} element 
     */
    toggleTopLinks: function (element)
    {
        codnitive.removeClass($('.nav'), 'show');
        codnitive.removeClass($('.nav'), 'visible-menu');
        codnitive.removeClass($('.nav'), 'visible-search');
        codnitive.toggle(element);
    }

}
