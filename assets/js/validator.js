/**
 * form validator
 *
 * @author Omid Barza <hbarza@gmail.com>
 */

validator = function() 
{
    /**
     * initialize event listeners
     * 
     * @param {string} button
     * @param {string} callback
     * @param {object} formElement
     */
    this._init = function(button, callback, formElement)
    {
        onClick(button, callback, this, formElement);
    };

    /**
     * Validates form object
     * 
     * @param {object} formObject
     */
    this.validate = function (formObject)
    {
        var validator = this;
        var isValid = true;
        for (var i = 0, element; element = formObject.elements[i++];) {
            var skipCondition = (element.getAttribute('data-validation') === null)
                || (element.type == 'submit')
                || (element.type == 'button');
            if (skipCondition) continue;
            if (element.type == 'text' || element.type == 'textarea') {
                isValid = validator.validateText(element) && isValid;
            }
            // @todo add other validators for other form elements here
        }
        if (isValid) {
            formObject.submit();
        }
    };

    /**
     * Validates form text and textarea fields
     * 
     * @param {object} element
     * @return {bool}
     */
    this.validateText = function (element)
    {
        var result    = true;
        var validator = this;
        var validationConditions = element.getAttribute('data-validation').split(' ');
        for(var i = 0; i < validationConditions.length; i++) {
            var functionName = validationConditions[i].split('-')[0].toLowerCase();
            var execution    = exec(functionName, validator, element);
            if (execution === undefined) continue;
            if (!execution) {
                validator.removeClass(element, 'valid');
                validator.addClass(element, 'invalid');
                result = false;
            }
            else {
                validator.removeClass(element, 'invalid');
                validator.addClass(element, 'valid');
                validator.removeError(element);
            }
        }
        return result;
    };

    // @todo work on full form validators
    // this.validateRadio = function (element)
    // {

    // };

    // this.validateCheckbox = function (element)
    // {

    // };

    // this.validateSelect = function (element)
    // {

    // };

    /**
     * Check field element for requrired value
     * 
     * @param {object} element
     * @return {bool}
     */
    this.required = function (element)
    {
        /**
         * @todo add more conditions for other form field types
         */
        var result = element.value !== '';
        !result 
            ? this.addError(element, 'This is required') 
            : this.removeError(element);
        return result;
    };

    /**
     * Checks field value is a valid email address
     * 
     * @param {object} element
     * @return {bool}
     */
    this.email = function (element)
    {
        // @reference https://www.regular-expressions.info/email.html
        var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        // var pattern = /(?=[a-z0-9@.!#$%&'*+/=?^_`{|}~-]{6,254}\z)(?=[a-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@)[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{1,63}\z)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


        var result  = pattern.test(String(element.value).toLowerCase());
        !result 
            ? this.addError(element, 'Invalid email address') 
            : this.removeError(element);
        return result;
    };

    /**
     * Validates value max length
     * 
     * @param {object} element
     * @return {bool}
     */
    this.maxlength = function (element)
    {
        if (element.value == '') {
            return;
        }
        params = this.getLengthParams(element);
        var result = element.value.length <= params[1];
        !result 
            ? this.addError(element, 'Max valid length is ' + params[1]) 
            : this.removeError(element);
        return result;
    };

    /**
     * Validates value min length
     * 
     * @param {object} element
     * @return {bool}
     */
    this.minlength = function (element)
    {
        if (element.value == '') {
            return;
        }
        params = this.getLengthParams(element);
        var result = element.value.length >= params[1];
        !result 
            ? this.addError(element, 'Min valid length is ' + params[1]) 
            : this.removeError(element);
        return result;
    };

    /**
     * Validates value is between min and max length
     * 
     * @param {object} element
     * @return {bool}
     */
    this.betweenlength = function (element)
    {
        if (element.value == '') {
            return;
        }
        params = this.getLengthParams(element);
        var result = (element.value.length >= params[1]) && (element.value.length <= params[2]);
        !result 
            ? this.addError(element, 'Length must be between ' + params[1] + ' and ' + params[2]) 
            : this.removeError(element);
        return result;
    };

    this.getLengthParams = function (element)
    {
        var lengthValidationMethods = ['maxlength', 'minlength', 'betweenlength'];
        var validationConditions = element.getAttribute('data-validation').split(' ');
        for(var i = 0; i < validationConditions.length; i++) {
            var params = validationConditions[i].split('-');
            if (lengthValidationMethods.indexOf(params[0]) !== -1) {
                return params;
            }
        }
        return false;
    }

    /**
     * Add new class name to element class porperty
     * 
     * @param {object} element
     * @param {string} className
     * @return {self}
     */
    this.addClass = function (element, className)
    {
        this.removeClass(element, className);
        element.className = element.className + ' ' + className;
        return this;
    };

    /**
     * Add new class name to element class porperty
     * 
     * @param {object} element
     * @param {string} className
     * @return {self}
     */
    this.removeClass = function (element, className)
    {
        element.className = element.className.replace(className, '').replace(/  +/g, ' ').trim();
        return this;
    };

    /**
     * Add error message to form field
     * 
     * @param {objec} element
     * @param {string} message
     * @return {self}
     */
    this.addError = function (element, message)
    {
        var errorElement = element.parentNode.querySelector('.error');
        if (null === errorElement) {
            var errorElement = document.createElement('span');
            errorElement.className = 'error';
            errorElement.innerHTML = message;
            element.parentNode.insertBefore(errorElement, element.nextSibling);
        }
        else {
            errorElement.innerHTML = message;
        }
        return this;
    };

    /**
     * Remove error message block
     * 
     * @param {object} element
     * @return {self}
     */
    this.removeError = function (element)
    {
        var errorElement = element.parentNode.querySelector('.error');
        if (null !== errorElement) {
            element.parentNode.removeChild(errorElement);
        }
        return this;
    }

}
