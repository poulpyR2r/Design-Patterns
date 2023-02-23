/**
    La classe Creator déclare la méthode d'usine qui est censée renvoyer un objet de
    la classe Product. Les sous-classes de Creator fournissent généralement
    l'implémentation de cette méthode.
 */
abstract class Creator {
    /**
     * Notez que le Creator peut également fournir une implémentation par défaut de la
       méthode d'usine.
     */
    public abstract factoryMethod(): Product;

    /**
        Notez également que, malgré son nom, la responsabilité principale du Creator n'est pas
        la création de produits. Habituellement, il contient une logique métier de base qui
        repose sur les objets Product, renvoyés par la méthode d'usine. Les sous-classes peuvent
        indirectement modifier cette logique métier en remplaçant la méthode d'usine
        et en renvoyant un type de produit différent.
     */
    public someOperation(): string {
        // Appelez la méthode d'usine pour créer un objet Product
        const product = this.factoryMethod();
        // utilisation de Product
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

/**
    Les créateurs concrets remplacent la méthode d'usine afin de changer le type du produit résultant.
 */
class ConcreteCreator1 extends Creator {
    /**
     Notez que la signature de la méthode utilise toujours le produit abstrait
    type, même si le produit concret est réellement renvoyé par la méthode. 
    De cette façon, le créateur peut rester indépendant des classes de produits concrets.
     */
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

/**
 *L'interface Product déclare les opérations que tous les produits concrets doivent implémenter.
 */
interface Product {
    operation(): string;
}

/**
 *     Les produits concrets fournissent diverses implémentations de l'interface Product.
 */
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}

/**
Le code client fonctionne avec une instance d'un créateur concret, bien que par l'intermédiaire
de son interface de base. Tant que le client continue de travailler avec le créateur via
l'interface de base, vous pouvez lui transmettre n'importe quelle sous-classe de créateur.
 */
function clientCode(creator: Creator) {
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