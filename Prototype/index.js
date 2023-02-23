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
// La classe de base pour les voitures. Elle implémente l'interface Prototype
// et définit les propriétés communes à toutes les voitures.
var Car = /** @class */ (function () {
    function Car(model, brand, color, year) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
    }
    Car.prototype.clone = function () {
        // La méthode clone() crée une nouvelle instance de Car et copie les
        // propriétés de l'objet en cours dedans.
        var clone = new Car(this.model, this.brand, this.color, this.year);
        return clone;
    };
    return Car;
}());
// Une classe concrète de voiture qui hérite de la classe de base Car.
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(model, brand, color, year, topSpeed) {
        var _this = _super.call(this, model, brand, color, year) || this;
        _this.topSpeed = topSpeed;
        return _this;
    }
    SportsCar.prototype.clone = function () {
        // La méthode clone() appelle la méthode clone() de la classe de base
        // et crée une nouvelle instance de SportsCar.
        var clone = new SportsCar(this.model, this.brand, this.color, this.year, this.topSpeed);
        return clone;
    };
    return SportsCar;
}(Car));
// Exemple d'utilisation de la classe Prototype pour créer des voitures.
var car1 = new Car("Civic", "Honda", "Bleu", 2022);
var car2 = car1.clone();
console.log(car1);
console.log(car2);
var sportsCar1 = new SportsCar("911", "Porsche", "Rouge", 2022, 320);
var sportsCar2 = sportsCar1.clone();
