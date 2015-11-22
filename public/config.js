(function(){
    angular
        .module("WhiteBoardApp")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/home/home.view.html"
            })
            .when("/login", {
                templateUrl: "views/login/login.view.html",
                controller:  "LoginController",
                controllerAs: "model"
            });
    }
})();