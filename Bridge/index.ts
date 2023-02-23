interface Voiture {
    accelerer(): void;
    freiner(): void;
    ouvrirCoffre(): void;
  }
  
  class VoitureElectrique implements Voiture {
    accelerer(): void {
      console.log("La voiture électrique accélère...");
    }
  
    freiner(): void {
      console.log("La voiture électrique freine...");
    }
  
    ouvrirCoffre(): void {
      console.log("Le coffre de la voiture électrique s'ouvre...");
    }
  
    rechargerBatterie(): void {
      console.log("La batterie de la voiture électrique se recharge...");
    }
  }
  
  class VoitureEssence implements Voiture {
    accelerer(): void {
      console.log("La voiture à essence accélère...");
    }
  
    freiner(): void {
      console.log("La voiture à essence freine...");
    }
  
    ouvrirCoffre(): void {
      console.log("Le coffre de la voiture à essence s'ouvre...");
    }
  
    faireLePlein(): void {
      console.log("La voiture à essence fait le plein d'essence...");
    }
  }
  
  abstract class Conducteur {
    protected voiture: Voiture;
  
    constructor(voiture: Voiture) {
      this.voiture = voiture;
    }
  
    abstract conduire(): void;
  }
  
  class ConducteurDeCourse extends Conducteur {
    constructor(voiture: Voiture) {
      super(voiture);
    }
  
    conduire(): void {
      console.log("Le conducteur de course prend le volant de sa voiture...");
      this.voiture.accelerer();
      this.voiture.freiner();
      this.voiture.freiner();
      this.voiture.accelerer();
      this.voiture.ouvrirCoffre();
    }
  }
  
  class ConducteurDeVille extends Conducteur {
    constructor(voiture: Voiture) {
      super(voiture);
    }
  
    conduire(): void {
      console.log("Le conducteur de ville prend le volant de sa voiture...");
      this.voiture.accelerer();
      this.voiture.freiner();
      this.voiture.ouvrirCoffre();
    }
  }
  
  // Utilisation du pattern bridge
  const voitureElectrique: Voiture = new VoitureElectrique();
  const voitureEssence: Voiture = new VoitureEssence();
  
  const conducteurDeCourse: Conducteur = new ConducteurDeCourse(voitureEssence);
  const conducteurDeVille: Conducteur = new ConducteurDeVille(voitureElectrique);
  
  conducteurDeCourse.conduire();
  conducteurDeVille.conduire();
  