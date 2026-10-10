
var edzes = new Edzes("Fekvenyomás", "Mell", "Közepes", 4, 10, 90)


console.assert(edzes.getNev() === "Fekvenyomás", "Hiba a getNev() metódus működésében!")
console.assert(edzes.getIzomcsoport() === "Mell", "Hiba a getIzomcsoport() metódus működésében!")
console.assert(edzes.getNehezsegiSzint() === "Közepes", "Hiba a getNehezsegiSzint() metódus működésében!")
console.assert(edzes.getSorozatok() === 4, "Hiba a getSorozatok() metódus működésében!")
console.assert(edzes.getIsmetlesek() === 10, "Hiba a getIsmetlesek() metódus működésében!")
console.assert(edzes.getPihenesiIdo() === 90, "Hiba a getPihenesiIdo() metódus működésében!")
edzes.setNev("Guggolás")
console.assert(edzes.getNev() === "Guggolás", "Hiba a setNev() metódus működésében!")
edzes.setIzomcsoport("Láb")
console.assert(edzes.getIzomcsoport() === "Láb", "Hiba a setIzomcsoport() metódus működésében!")
edzes.setNehezsegiSzint("Nehéz")
console.assert(edzes.getNehezsegiSzint() === "Nehéz", "Hiba a setNehezsegiSzint() metódus működésében!")
edzes.setSorozatok(5)
console.assert(edzes.getSorozatok() === 5, "Hiba a setSorozatok() metódus működésében!")
edzes.setIsmetlesek(12)
console.assert(edzes.getIsmetlesek() === 12, "Hiba a setIsmetlesek() metódus működésében!")
edzes.setPihenesiIdo(120)
console.assert(edzes.getPihenesiIdo() === 120, "Hiba a setPihenesiIdo() metódus működésében!")
edzes.setNev("Gugg")
console.assert(edzes.getNev() === "Ismeretlen gyakorlat", "Hiba a setNev() metódus működésében, mert rövid névnél nem az alapértelmezett nevet állítja be!");
edzes.setNev("Kitörés")
console.assert(edzes.getNev() === "Kitörés", "Hiba a setNev() metódus működésében, mert nem fogadja el a megfelelő hosszúságú nevet!")
//Hibás a set neved mert this.getNev().length helyet csak sima nev.lenght kell