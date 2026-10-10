var profil = new Profil("Kovacs", "kovacs@gmail.hu", "Jelszo123!A")


console.assert(profil.getNev() === "Kovacs", "Hiba a getNev() metódus működésében!")
console.assert(profil.getEmail() === "kovacs@gmail.hu", "Hiba a getEmail() metódus működésében!")
console.assert(profil.getJelszo() === "Jelszo123!A", "Hiba a getJelszo() metódus működésében!")


profil.setNev("Anna")
console.assert(profil.getNev() === "Anna", "Hiba a setNev() metódus működésében, nem fogadja el a 4 karakteres nevet")
profil.setNev("Ann")
console.assert(profil.getNev() === "Anna", "Hiba a setNev() metódus működésében,elfogadja a tul rovid nevet is")
profil.setNev("Anna!")
console.assert(profil.getNev() === "Anna", "Hiba a setNev() metódus működésében, nem lehet benne specialis karakter")
profil.setNev("Béla")
console.assert(profil.getNev() === "Béla", "Hiba a setNev() metódus működésében, nem enged ékezetes nevet elfogadni!")


profil.setEmail("teszt@gmail.hu")
console.assert(profil.getEmail() === "teszt@gmail.hu", "Hiba a setEmail() metódus működésében, ervenyes gmail nem fogad el")
profil.setEmail("Teszt@gmail.hu")
console.assert(profil.getEmail() === "teszt@gmail.hu", "Hiba a setEmail() metódus működésében, nem lehet nagybetu a gmailban")
profil.setEmail("teszt@gmail.com")
console.assert(profil.getEmail() === "teszt@gmail.hu", "Hiba a setEmail() metódus működésében, nem lehet .hu nelkuli emailt elfogadni")
profil.setEmail("teszt@freemail.hu")
console.assert(profil.getEmail() === "teszt@gmail.hu", "Hiba a setEmail() metódus működésében, @gmail nelkuli emailt nem szabad elfogadni")


profil.setJelszo("UjJelszo12!")
console.assert(profil.getJelszo() === "UjJelszo12!", "Hiba a setJelszo() metódus működésében, nem fogadja el a jo jelszot")
profil.setJelszo("Abc!")  
console.assert(profil.getJelszo() === "UjJelszo12!", "Hiba a setJelszo() metódus működésében, elfogadja a 4 karakteres jelszot is")
profil.setJelszo("Jelszo12!")
console.assert(profil.setJelszo("jelszojelszo!") === false, "Hiba a setJelszo() metódus működésében, kell egy nagybetu a jelszo elfogadasahoz")
console.assert(profil.setJelszo("JELSZOJELSZO!") === false, "Hiba a setJelszo() metódus működésében, kell egy kisbetu a jelszo elfogadasahoz")
console.assert(profil.setJelszo("Jelszojelszo") === false, "Hiba a setJelszo() metódus működésében, kell egy specialis karakter a jelszo elfogadasahoz")


console.assert(profil.specialisKarakter("abc!") === true, "Hiba a specialisKarakter() metódusban, nem ismeri fel a specialis karaktert")
console.assert(profil.specialisKarakter("abcdef") === false, "Hiba a specialisKarakter() metódusban, elfogad mast is mint specialis karakterek")
console.assert(profil.emailEllenorzo("a@gmail.hu") === true, "Hiba az emailEllenorzo() metódusban, ervenyes emailt elutasit")
console.assert(profil.emailEllenorzo("A@gmail.hu") === false, "Hiba az emailEllenorzo() metódusban, nagybetus emailt elfogad")
console.assert(profil.jelszoEllenorzo("Abcdefgh1!") === true, "Hiba a jelszoEllenorzo() metódusban, ervenyes jelszot elutasit")
console.assert(profil.jelszoEllenorzo("abc") === false, "Hiba a jelszoEllenorzo() metódusban, ervenytelen jelszot is elfogad")


var rossz = new Profil("Al", "rossz@mail.com", "gyenge")
console.assert(rossz.getNev() === undefined, "Hiba a konstruktorban, Ervenytelen nevet is elmenti")
console.assert(rossz.getEmail() === undefined, "Hiba a konstruktorban, Ervenytelen emailt is elmenti")
console.assert(rossz.getJelszo() === undefined, "Hiba a konstruktorban, Ervenytelen jelszot is elmenti")

// Nem latok hibat csak a getEmail() fuggvenyben benne hagytad a parametert
