// BUDGET CONTROLLER
var budgetController = (function() {
    // some controller
})();

// UI CONTROLLER
var UIController = (function() {
    // Some code
})();

// GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // 1. Get the field input data

        // 2. Add the item to budget controller

        // 3. Add the item to the budget

        // 4. Calculate the badget

        // 5. Display the badget on the UI
        console.log('It works');
    }

    // some controller
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);