(function(codnitive, validator){

    'use strict';

    /**
     * Check contact form validation
     * 
     */
    var validator = new validator();
    validator._init('#contact_form .submit-btn', 'validate', $('.contact #contact_form'));

    onClick('.mobile-menu .btn-icon.fa-bars', 'toggleMenu', codnitive, $('.nav'));
    onClick('.mobile-menu .btn-icon.fa-search', 'toggleSearch', codnitive, $('.nav'));
    onClick('.mobile-menu .btn-icon.fa-link', 'toggleTopLinks', codnitive, $('.header-top'));
}(codnitive, validator));
