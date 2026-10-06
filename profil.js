class Profil {
    #nev
    #email
    #jelszo
    constructor(nev, email, jelszo) {
        this.setNev(nev)
        this.setEmail(email)
        this.setJelszo(jelszo)
    }
    setNev(nev) {
        if (!this.specialisKarakter(nev) && nev.length > 3) {
            this.#nev = nev
        }
    }
    setEmail(email) {
        if (this.emailEllenorzo(email)) {
            this.#email = email
        }
    }
    setJelszo(jelszo) {
        if (!this.jelszoEllenorzo(jelszo)) {
            return false
        } else {
            this.#jelszo = jelszo
        }
    }
    getNev(){
        return this.#nev
    }
    getJelszo(){
        return this.#jelszo
    }
    getEmail(email){
        return this.#email
    }
    emailEllenorzo(email) {
        if (email !== email.toLowerCase()) {
            return false
        }
        if (!email.includes("@gmail")) {
            return false
        }
        if (!email.endsWith(".hu")) {
            return false
        }
        return true
    }
    specialisKarakter(parameter) {
        var specialis = "!@#$%^&*()_-+=?"
        for (let i = 0; i < parameter.length; i++) {
            for (let j = 0; j < specialis.length; j++) {
                if (parameter[i] == specialis[j]) {
                    return true
                }
            }
        }
        return false
    }
    jelszoEllenorzo(jelszo) {
        var nagyb = false
        var hossz = false
        var kisbetu = false
        if (jelszo.length > 8) {
            hossz = true
        }
        for (let i = 0; i < jelszo.length; i++) {
            if (jelszo[i] >= "A" && jelszo[i] <= "Z") {
                nagyb = true
            }

            if (jelszo[i] >= "a" && jelszo[i] <= "z") {
                kisbetu = true
            }
        }
        if (nagyb && hossz && kisbetu && this.specialisKarakter(jelszo)) {
            return true
        } else {
            return false
        }
    }

}