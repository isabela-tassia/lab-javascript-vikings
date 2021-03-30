// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function () {
      return this.strength;
    };
    this.receiveDamage = function (damage) {
      damage = 0;
      health - damage;
    };
  }

  
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.receiveDamage = function (damage) {
      damage = 0;
      health - damage;
      if (health > 0) {
        return "NAME has received DAMAGE points of damage";
      } else {
        return "NAME has died in act of combat";
      }
    };
    this.battleCry = function () {
      return "Odin Owns You All!";
    };
  }
}

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
}

// War
class War {
    constructor() {
        this.addViking = [];
        this.addSaxon = [];
        this.vikingAttack = [];
        this.saxonAttack = [];
        this.showStatus = [];

    }
}
