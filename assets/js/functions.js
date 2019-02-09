/**
 * Global query selector function
 * 
 * @param {string} selector
 * @return {object}
 */
function $ (selector)
{
    return document.querySelector(selector);
}

/**
 * On click listener function
 * 
 * @param {string} selector 
 * @param {string} callback 
 * @param {object} context 
 * @param {array} args 
 */
function onClick (selector, callback, context, args)
{
    // @reference https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/
    document.addEventListener('click', function (event) {
        if (!event.target.matches(selector)) return false;
        event.preventDefault();
        exec(callback, context, args);
    }, false);
}

/**
 * 
 * @param {string} functionName 
 * @param {object} context 
 */
// @reference https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
function exec (functionName, context) 
{
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}
