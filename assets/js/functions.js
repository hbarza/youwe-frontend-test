/**
 * Global query selector function
 * 
 * @public
 * @param {string} selector
 * @returns {Element}
 */
function $ (selector)
{
    return document.querySelector(selector);
}

/**
 * On click listener function
 * 
 * @public
 * @param {string} selector 
 * @param {string} callback 
 * @param {Element} context 
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
 * Simulate a click event
 * 
 * @public
 * @param {Element} element 
 */
function triggerClick (element) 
{
    // @reference https://gomakethings.com/how-to-simulate-a-click-event-with-javascript/
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	var canceled = !element.dispatchEvent(evt);
}

/**
 * Execute a function by name
 * 
 * @public
 * @param {string} functionName 
 * @param {Element} context 
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
