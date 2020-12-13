(function (window) {    
    var Byegreeter = {};
    Byegreeter.names = "John", 'Jen', 'Jason', 'Jim';
    var bye = "Good Bye ";
    Byegreeter.sayGoodbye = function () {
        console.log (bye + Byegreeter.names);
    }
    window.Byegreeter = Byegreeter;
})(window);