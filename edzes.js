class Edzes {
    #nev
    #izomcsoport
    #nehezsegiSzint
    #sorozatok
    #ismetlesek
    #pihenesiIdo

    constructor(nev, izomcsoport, nehezsegiSzint, sorozatok, ismetlesek, pihenesiIdo) {
        this.setNev(nev)
        this.setIzomcsoport(izomcsoport)
        this.setNehezsegiSzint(nehezsegiSzint)
        this.setSorozatok(sorozatok)
        this.setIsmetlesek(ismetlesek)
        this.setPihenesiIdo(pihenesiIdo)
    }

    setNev(nev) {
        if (nev.length < 5) {
            this.#nev = "Ismeretlen gyakorlat"
        } else {
            this.#nev = nev
        }
    }

    setIzomcsoport(izomcsoport) {
        this.#izomcsoport = izomcsoport
    }

    setNehezsegiSzint(nehezsegiSzint) {
        this.#nehezsegiSzint = nehezsegiSzint
    }

    setSorozatok(sorozatok) {
        if (sorozatok >= 0) {
            this.#sorozatok = sorozatok
        }
        else{
            this.#sorozatok = 0
        }
    }

    setIsmetlesek(ismetlesek) {
        if (ismetlesek >= 0) {
            this.#ismetlesek = ismetlesek
        } else{
            this.#ismetlesek = 0
        }
    }

    setPihenesiIdo(pihenesiIdo) {
        if (pihenesiIdo >= 0) {
            this.#pihenesiIdo = pihenesiIdo
        } else{
            this.#pihenesiIdo = 0
        }
    }

    getNev() {
        return this.#nev
    }

    getIzomcsoport() {
        return this.#izomcsoport
    }

    getNehezsegiSzint() {
        return this.#nehezsegiSzint
    }

    getSorozatok() {
        return this.#sorozatok
    }

    getIsmetlesek() {
        return this.#ismetlesek
    }

    getPihenesiIdo() {
        return this.#pihenesiIdo
    }
}