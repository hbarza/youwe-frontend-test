(function(validator){

    'use strict';

    /**
     * Check contact form validation
     * 
     */
    var validator = new validator();
    validator._init('#contact_form .submit-btn', 'validate', $('.contact #contact_form'));
}(validator));
