// BUDGET CONTROLLER
var budgetController = (function() {
    // some controller
})();

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getinput: function() { // public parameter
            // method which returns three controlers
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }
})();

// GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UIController.getDOMstrings();

    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);

        // 2. Add the item to budget controller

        // 3. Add the item to the budget

        // 4. Calculate the badget

        // 5. Display the badget on the UI
    }

    // some controller
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);