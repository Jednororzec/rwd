let Core = (function () {
    let podniesRolete = function () {
        wyslijSygnalElektrycznyDoSterownikaRoletyAbyWlaczycLubWylaczycSterownik(1);
        wyslijSygnalElektrycznyDoSterownikaRoletyAbyObrocicRolete(10);
        wyslijSygnalElektrycznyDoSterownikaRoletyAbyWlaczycLubWylaczycSterownik(0);
    };

    let wyslijSygnalElektrycznyDoSterownikaRoletyAbyObrocicRolete = function (sygnal) {
        //funkcja ktora obraca rolete
    };

    let wyslijSygnalElektrycznyDoSterownikaRoletyAbyWlaczycLubWylaczycSterownik = function (sygnal) {
          sterownik(sygnal);
    };

    let sterownik = function (sygnal) {
        switch (sygnal){
            case 1:{
                //uruchom cos
                break;
            }
            case 0:{
                //wylacz cos
                break;
            }
        }
    };

    let opuscRolete = function () {
        wyslijSygnalElektrycznyDoSterownikaRoletyAbyWlaczycLubWylaczycSterownik(1);
        wyslijSygnalElektrycznyDoSterownikaRoletyAbyObrocicRolete(-10);
        wyslijSygnalElektrycznyDoSterownikaRoletyAbyWlaczycLubWylaczycSterownik(0);
    };
    return {
        PodniesRolete: function () {
            return podniesRolete();
        },
        OpuscRolete: function () {
            return opuscRolete();
        }
    }
})();