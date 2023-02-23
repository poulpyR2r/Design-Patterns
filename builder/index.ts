// Interface définissant les méthodes pour construire différents aspects de la maison
interface HouseBuilder {
    setFoundation(foundation: string): void;
    setStructure(structure: string): void;
    setRoof(roof: string): void;
    setPaintColor(paintColor: string): void;
    setFlooring(flooring: string): void;
    getHouse(): House;
  }
  
  // Classe représentant la maison
  class House {
    private foundation: string;
    private structure: string;
    private roof: string;
    private paintColor: string;
    private flooring: string;
  
    constructor() {}
  
    setFoundation(foundation: string): void {
      this.foundation = foundation;
    }
  
    setStructure(structure: string): void {
      this.structure = structure;
    }
  
    setRoof(roof: string): void {
      this.roof = roof;
    }
  
    setPaintColor(paintColor: string): void {
      this.paintColor = paintColor;
    }
  
    setFlooring(flooring: string): void {
      this.flooring = flooring;
    }
  
    getInfo(): string {
      return `Maison avec une fondation ${this.foundation}, une structure ${this.structure}, un toit ${this.roof}, une couleur de peinture ${this.paintColor} et un revêtement de sol ${this.flooring}.`;
    }
  }
  
  // Implémentation de l'interface HouseBuilder
  class HouseBuilderImpl implements HouseBuilder {
    private house: House;
  
    constructor() {
      this.house = new House();
    }
  
    setFoundation(foundation: string): void {
      this.house.setFoundation(foundation);
    }
  
    setStructure(structure: string): void {
      this.house.setStructure(structure);
    }
  
    setRoof(roof: string): void {
      this.house.setRoof(roof);
    }
  
    setPaintColor(paintColor: string): void {
      this.house.setPaintColor(paintColor);
    }
  
    setFlooring(flooring: string): void {
      this.house.setFlooring(flooring);
    }
  
    getHouse(): House {
      return this.house;
    }
  }
  
  // Classe qui utilise le HouseBuilder pour construire une maison avec une configuration particulière
  class Director {
    private houseBuilder: HouseBuilder;
  
    constructor(houseBuilder: HouseBuilder) {
      this.houseBuilder = houseBuilder;
    }
  
    constructHouse(): void {
      this.houseBuilder.setFoundation("en béton");
      this.houseBuilder.setStructure("en bois");
      this.houseBuilder.setRoof("en tuiles");
      this.houseBuilder.setPaintColor("bleu");
      this.houseBuilder.setFlooring("en carrelage");
    }
  }
  
  // Utilisation du Director pour construire une maison et obtenir ses informations
  const houseBuilder: HouseBuilder = new HouseBuilderImpl();
  const director: Director = new Director(houseBuilder);
  director.constructHouse();
  const house: House = houseBuilder.getHouse();
  console.log(house.getInfo()); // affiche "Maison avec une fondation en béton, une structure en bois, un toit en tuiles, une couleur de peinture bleu et un revêtement de sol en carrelage."
  