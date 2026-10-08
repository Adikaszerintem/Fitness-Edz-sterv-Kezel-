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
        if (this.getNev().length < 5) {
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
        this.#sorozatok = sorozatok
    }

    setIsmetlesek(ismetlesek) {
        this.#ismetlesek = ismetlesek
    }

    setPihenesiIdo(pihenesiIdo) {
        this.#pihenesiIdo = pihenesiIdo
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