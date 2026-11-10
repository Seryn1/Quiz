class npc {
    name: string;
    health: number;
    speed: number;
    attack: number;
    defense: number;
    npcType: string;

    constructor (
        name: string,
        health: number,
        speed: number,
        attack: number,
        defense: number,
        npcType: string
    ) {
        this.name = name;   
        this.health = health;
        this.speed =  speed;
        this.attack = attack;
        this.defense = defense;
        this.npcType = npcType;
    }
    walking(): void {
        this.speed += 2;
        console.log(`${this.name} berjalan. speed bertambah menjadi: ${this.speed}`);
    }

    sprint(): void {
        this.speed += 4;
        console.log(`${this.name} sprint. speed bertambah menjadi: ${this.speed}`);
    }

    attacking(): void {
        this.attack += 2;
        console.log(`${this.name} menyerang! Attack bertamnbah menjadi: ${this.attack}`);
    }

    getattacked(demage: number)  {
        this.health -= demage;
        console.log(`${this.name} Health sekarang menjadi: ${this.health}`)
    }

    getBuff() : void {
        this.health += this.health * 0.1
        this.attack += this.attack * 0.05
        console.log(`${this.name} bertambah. Attack sekarang :${this.attack}`)
        
    }

    getUltimate() : void {
        this.health -= this.health * 0.5
        this.attack = this.attack * 2
        this.speed = this.speed * 2
        console.log(`${this.name} berjalan. speed sekarang: ${this.attack}. darah sekarang: ${this.health}`)
    }

}

const npcPertama = new npc("lintang", 1000, 100, 50, 20, "walk");



npcPertama.getUltimate();

// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini
class Mario {
    HP: number;
    speed: number;
    positionX: number;
    positionY: number;
    invincible: boolean;
    currentForm: string;

    constructor() {
        this.HP = 1;
        this.speed = 5;
        this.positionX = 0;
        this.positionY = 0;
        this.invincible = false;
        this.currentForm = 'mario';
    }

    getSuperMushroom() {
        this.HP++;
        this.currentForm = 'super mario';
    }

    getFireFlower() {
        this.HP++;
        this.currentForm = 'fire mario';
    }

    getSuperStar() {
        this.invincible = true;
    }

    beAttacked() {
        if (!this.invincible) {
            this.HP--;
            this.currentForm = 'mario';
        }
    }

    moveRight() {
        this.positionX += this.speed;
    }

    moveLeft() {
        this.positionX -= this.speed;
    }

    // Method ini dioverride oleh FireMario (polymorphism).
    useSpecialAbility(): string {
        return 'Mario tidak memiliki kemampuan khusus.';
    }
}

class SuperMario extends Mario {
    constructor() {
        super();
        this.HP = 2;
        this.currentForm = 'super mario';
    }
}

class FireMario extends Mario {
    constructor() {
        super();
        this.HP = 2;
        this.currentForm = 'fire mario';
    }

    useSpecialAbility(): string {
        return 'Fire Mario menembakkan bola api!';
    }
}

// Object untuk mencoba perilaku Mario dan polymorphism antar-form.
const mario = new Mario();
mario.getSuperMushroom();
mario.getFireFlower();
mario.getSuperStar();
mario.beAttacked(); // tidak berpengaruh karena sedang kebal
mario.moveRight();

const superMario = new SuperMario();
const fireMario = new FireMario();
console.log(mario.currentForm, mario.HP, mario.positionX);
console.log(superMario.currentForm, superMario.HP);
console.log(fireMario.useSpecialAbility());
