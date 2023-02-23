// L'interface Prototype définit une méthode de clonage. Toutes les classes qui
// implémentent Prototype doivent avoir cette méthode.
interface Prototype {
    clone(): Prototype;
  }
  
  // La classe de base pour les voitures. Elle implémente l'interface Prototype
  // et définit les propriétés communes à toutes les voitures.
  class Car implements Prototype {
    public model: string;
    public brand: string;
    public color: string;
    public year: number;
  
    constructor(model: string, brand: string, color: string, year: number) {
      this.model = model;
      this.brand = brand;
      this.color = color;
      this.year = year;
    }
  
    public clone(): Car {
      // La méthode clone() crée une nouvelle instance de Car et copie les
      // propriétés de l'objet en cours dedans.
      const clone = new Car(this.model, this.brand, this.color, this.year);
      return clone;
    }
  }
  
  // Une classe concrète de voiture qui hérite de la classe de base Car.
  class SportsCar extends Car {
    public topSpeed: number;
  
    constructor(model: string, brand: string, color: string, year: number, topSpeed: number) {
      super(model, brand, color, year);
      this.topSpeed = topSpeed;
    }
  
    public clone(): SportsCar {
      // La méthode clone() appelle la méthode clone() de la classe de base
      // et crée une nouvelle instance de SportsCar.
      const clone = new SportsCar(this.model, this.brand, this.color, this.year, this.topSpeed);
      return clone;
    }
  }
  
  // Exemple d'utilisation de la classe Prototype pour créer des voitures.
  const car1 = new Car("Civic", "Honda", "Bleu", 2022);
  const car2 = car1.clone();

  console.log(car1);
  console.log(car2);
  
  const sportsCar1 = new SportsCar("911", "Porsche", "Rouge", 2022, 320);
  const sportsCar2 = sportsCar1.clone();
  