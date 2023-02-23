/**
 * La classe Singleton définit la méthode `getInstance` qui permet aux clients d'accéder
 * à l'instance unique du singleton.
 */
var Singleton = /** @class */ (function () {
    /**
     * Le constructeur de Singleton doit toujours être privé pour empêcher les appels
     * de construction directs avec l'opérateur `new`.
     */
    function Singleton() {
    }
    /**
     * La méthode statique qui contrôle l'accès à l'instance singleton.
     *
     * Cette implémentation permet de sous-classer la classe Singleton tout en gardant
     * une seule instance de chaque sous-classe.
     */
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    /**
     * Enfin, tout singleton doit définir une certaine logique métier, qui peut être
     * exécutée sur son instance.
     */
    Singleton.prototype.someBusinessLogic = function () {
        // ...
    };
    return Singleton;
}());
/**
 * Le code client.
 */
function clientCodeSingleton() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log('Singleton fonctionne, les deux variables contiennent la même instance.');
    }
    else {
        console.log('Singleton a échoué, les variables contiennent des instances différentes.');
    }
}
clientCodeSingleton();
