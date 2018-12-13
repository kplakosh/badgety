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

    // some controller
    document.querySelector('.add__btn').addEventListener('click', function() {
        console.log('button was clicked');
    });

})(budgetController, UIController);