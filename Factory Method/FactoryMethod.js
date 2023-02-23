var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
    La classe Creator déclare la méthode d'usine qui est censée renvoyer un objet de
    la classe Product. Les sous-classes de Creator fournissent généralement
    l'implémentation de cette méthode.
 */
var Creator = /** @class */ (function () {
    function Creator() {
    }
    /**
        Notez également que, malgré son nom, la responsabilité principale du Creator n'est pas
        la création de produits. Habituellement, il contient une logique métier de base qui
        repose sur les objets Product, renvoyés par la méthode d'usine. Les sous-classes peuvent
        indirectement modifier cette logique métier en remplaçant la méthode d'usine
        et en renvoyant un type de produit différent.
     */
    Creator.prototype.someOperation = function () {
        // Appelez la méthode d'usine pour créer un objet Product
        var product = this.factoryMethod();
        // utilisation de Product
        return "Creator: The same creator's code has just worked with ".concat(product.operation());
    };
    return Creator;
}());
/**
    Les créateurs concrets remplacent la méthode d'usine afin de changer le type du produit résultant.
 */
var ConcreteCreator1 = /** @class */ (function (_super) {
    __extends(ConcreteCreator1, _super);
    function ConcreteCreator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     Notez que la signature de la méthode utilise toujours le produit abstrait
    type, même si le produit concret est réellement renvoyé par la méthode.
    De cette façon, le créateur peut rester indépendant des classes de produits concrets.
     */
    ConcreteCreator1.prototype.factoryMethod = function () {
        return new ConcreteProduct1();
    };
    return ConcreteCreator1;
}(Creator));
var ConcreteCreator2 = /** @class */ (function (_super) {
    __extends(ConcreteCreator2, _super);
    function ConcreteCreator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator2.prototype.factoryMethod = function () {
        return new ConcreteProduct2();
    };
    return ConcreteCreator2;
}(Creator));
/**
 *     Les produits concrets fournissent diverses implémentations de l'interface Product.
 */
var ConcreteProduct1 = /** @class */ (function () {
    function ConcreteProduct1() {
    }
    ConcreteProduct1.prototype.operation = function () {
        return '{Result of the ConcreteProduct1}';
    };
    return ConcreteProduct1;
}());
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
    }
    ConcreteProduct2.prototype.operation = function () {
        return '{Result of the ConcreteProduct2}';
    };
    return ConcreteProduct2;
}());
/**
Le code client fonctionne avec une instance d'un créateur concret, bien que par l'intermédiaire
de son interface de base. Tant que le client continue de travailler avec le créateur via
l'interface de base, vous pouvez lui transmettre n'importe quelle sous-classe de créateur.
 */
function clientCode(creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}
/**
 * L'application choisit le type de créateur en fonction de la configuration ou de l'environnement.
 */
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());
