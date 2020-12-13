


(function (window) {    
    var Hellogreeter = {};
    Hellogreeter.names = [];
    var Greetings = "hello ";
    Hellogreeter.sayhello = function () {
        var names = ["Yaakov", "Paul", "Frank", "Larry", "Paula", "Laura",];
        for (var i = 0; i < names.length; i++)
        console.log (Greetings + names[i]);
       
    }
    window.Hellogreeter = Hellogreeter;
})(window);




(function (window) {    
    var Byegreeter = {};
    Byegreeter.names = [];
    var bye = "Good Bye ";
    Byegreeter.sayGoodbye = function () {
        var names = ["John", "Jen", "Jason", "Jim"];
        for (var i = 0; i < names.length; i++)
        console.log (bye + names[i]);
    }
    window.Byegreeter = Byegreeter;
})(window);




