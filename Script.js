var countrySateCityinfo = {
    pakistan: {
        "KPK": {
            Peshawar: ["54000"],
            Mardan: ["53000"]
        },
        punjab: {
            lahore: ["54000"],
            Kasur: ["53000"],
            Multan : ["54070"]
        }
    },
    Iran: {
        Karaj: {
            Fardis: ["80331", "80333", "80335"],
            KamalShahr: ["90402", "90403", "90404"]
        },
        Nazarabad: {
            Mahdasht: ["60306", "60309", "60310"],
            Mohammadshahr: ["55246", "55247", "55248", "55249"]
        }
    },
    koria: {
        Alberta: {
            Calgary: ["8033", "8333", "8035"],
            Edmonton: ["9040", "9403", "9040"]
        },
        Manitoba: {
            Brandon: ["6030", "6030"],
            Winnipeg: ["5524", "5547", "5248"]
        }
    }
};

window.onload = function() {
    const selectCountry = document.getElementById('country'),
        selectState = document.getElementById('state'),
        selectCity = document.getElementById('city'),
        selects = document.querySelectorAll('select');

    selectState.disabled = true;
    selectCity.disabled = true;

    selects.forEach(select => {
        if (select.disabled == true) {
            select.style.cursor = "auto";
        } else {
            select.style.cursor = "pointer";
        }
    });

    for (let country in countrySateCityinfo) {
        selectCountry.options[selectCountry.options.length] = new Option(country, country);
    }

    // Country change
    selectCountry.onchange = (e) => {
        selectState.disabled = false;
        selectCity.disabled = true;

        selects.forEach(select => {
            if (select.disabled == true) {
                select.style.cursor = "auto";
            } else {
                select.style.cursor = "pointer";
            }
        });

        selectState.length = 1;
        selectCity.length = 1;

        for (let state in countrySateCityinfo[e.target.value]) {
            selectState.options[selectState.options.length] = new Option(state, state);
        }
    };

    // State change
    selectState.onchange = (e) => {
        selectCity.disabled = false;

        selects.forEach(select => {
            if (select.disabled == true) {
                select.style.cursor = "auto";
            } else {
                select.style.cursor = "pointer";
            }
        });

        selectCity.length = 1;

        for (let city in countrySateCityinfo[selectCountry.value][e.target.value]) {
            selectCity.options[selectCity.options.length] = new Option(city, city);
        }
    };
};
