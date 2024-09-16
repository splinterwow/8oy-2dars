// let ism: string = "Ali";
// let yosh: number = 25;
// let talabami: boolean = true;
// let hobby: string | null = "Futbol";

//funksiyasi
// function stringgaAylantir(qiymat: number | string): string {
//     return qiymat.toString();
// }

//2-misol
// interface Kitob {
//     sarlavha: string;
//     muallif: string;
//     nashrYili: number;
//     sahifalarSoni: number;
//     mavjud: boolean;
// }

// const kitob1: Kitob = { sarlavha: "Kitob A", muallif: "Muallif A", nashrYili: 2001, sahifalarSoni: 300, mavjud: true };
// const kitob2: Kitob = { sarlavha: "Kitob B", muallif: "Muallif B", nashrYili: 2010, sahifalarSoni: 150, mavjud: false };
// const kitob3: Kitob = { sarlavha: "Kitob C", muallif: "Muallif C", nashrYili: 2018, sahifalarSoni: 200, mavjud: true };

// function kitobHaqidaMalumot(kitob: Kitob): string {
//     return `${kitob.sarlavha} muallifi ${kitob.muallif}, ${kitob.nashrYili}-yili nashr etilgan, sahifalar soni: ${kitob.sahifalarSoni}`;
// }


//-3misol
class Kutubxona {
    private kitoblar: Kitob[] = [];

    kitobQoshish(kitob: Kitob): void {
        this.kitoblar.push(kitob);
    }

    kitobniTopish(sarlavha: string): Kitob | undefined {
        return this.kitoblar.find(kitob => kitob.sarlavha === sarlavha);
    }

    mavjudKitoblarSoni(): number {
        return this.kitoblar.length;
    }
    

/
}

//////



//4misol
// interface Foydalanuvchi {
//     ism: string;
//     email: string;
// }

// class Talaba implements Foydalanuvchi {
//     ism: string;
//     email: string;
//     kurs: number;

//     constructor(ism: string, email: string, kurs: number) {
//         this.ism = ism;
//         this.email = email;
//         this.kurs = kurs;
//     }

//     malumot(): string {
//         return `${this.ism}, ${this.kurs}-kurs talabasi`;
//     }
// }

// const talaba1 = new Talaba("Sherzodbek", "sherzodbek@gmail.com", 3);
// console.log(talaba1.malumot());
