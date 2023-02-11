
const nativeValues$ = {

    'jQueryLogo' : {

        '$' : true,
        'JQ' : true,
        'JQUERY' : true,

    },

    'jQueryAdmins' : {

        'window' : $(window),
        'document': $(document)

    }

}


class Native$ {

    constructor(typeOf, tegSelector) {

        this.typeOf = typeOf.toString()
        this.tegSelector = tegSelector

        if (!Boolean(Array.from(Object.keys(nativeValues$['jQueryLogo']
            )).indexOf(this.typeOf.toUpperCase()) === -1)) {

            this.JQobject = $(tegSelector)

        }

    }

}

export {
    Native$, nativeValues$
}