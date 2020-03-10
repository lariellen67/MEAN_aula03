angular.module('ifsp', ['ngRoute'])

angular.module('ifsp', ['ngRoute']).config(function($routeProvider) {
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    })
})