

export function generateQueries(countries) {
    const queries = [];
    const uniqueQueries = {};
    countries = countries.filter(country => country.capital && country.capital[0] && country.flags && country.flags.png); // Make sure they have what we need. 

    function randomQuery() {
        const country = getOneRandom(countries);
        const typeOfQuestion = getOneRandom(["flag", "capital"]);    
        return [country, typeOfQuestion]
    }

    while (queries.length < 4) {
        // Create a unique (country, typeOfQuery) pair. 
        let [country, typeOfQuestion] = randomQuery();
        while(uniqueQueries[country.name.common + ":" + typeOfQuestion]) {
            [country, typeOfQuestion] = randomQuery();
        }
        uniqueQueries[country.name.common + ":" + typeOfQuestion] = true; 
        const correctAnswer = country;

        // Create alternatives
        const countriesBag = [...countries];
        removeItem(countriesBag, country);
        const alternatives = [correctAnswer];
        while (alternatives.length < 4) {
            alternatives.push(removeOneRandom(countriesBag));
        }

        queries.push({
            correctAnswer, 
            alternatives: randomized(alternatives), 
            typeOfQuestion
        })
    }

    return queries; 
}



/**
 * Random stuff
 */
function removeItem(array, value) {
    var index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}


function getOneRandom(list) {
    const index = Math.floor(Math.random()*(list.length))
    return list[index]; 
}
  
function removeOneRandom(list) {
    const index = Math.floor(Math.random()*(list.length))
    return list.splice(index, 1)[0]; 
}

function randomized(list) {
    const listCopy = [...list];
    const newList = [];
    while(listCopy.length > 0) {
        addRandomly(removeOneRandom(listCopy), newList);
    }
    return newList;
}
  
function addRandomly(item, list) {
    const insertIndex = Math.floor(Math.random()*(list.length));
    list.splice(insertIndex, 0, item);
}


  
// Example data: 
// {
//   "name": {
//     "common": "Guatemala",
//     "official": "Republic of Guatemala",
//     "nativeName": {
//       "spa": {
//         "official": "República de Guatemala",
//         "common": "Guatemala"
//       }
//     }
//   },
//   "tld": [
//     ".gt"
//   ],
//   "cca2": "GT",
//   "ccn3": "320",
//   "cca3": "GTM",
//   "cioc": "GUA",
//   "independent": true,
//   "status": "officially-assigned",
//   "unMember": true,
//   "currencies": {
//     "GTQ": {
//       "name": "Guatemalan quetzal",
//       "symbol": "Q"
//     }
//   },
//   "idd": {
//     "root": "+5",
//     "suffixes": [
//       "02"
//     ]
//   },
//   "capital": [
//     "Guatemala City"
//   ],
//   "altSpellings": [
//     "GT"
//   ],
//   "region": "Americas",
//   "subregion": "Central America",
//   "languages": {
//     "spa": "Spanish"
//   },
//   "translations": {
//     "ara": {
//       "official": "جمهورية غواتيمالا",
//       "common": "غواتيمالا"
//     },
//     "bre": {
//       "official": "Republik Guatemala",
//       "common": "Guatemala"
//     },
//     "ces": {
//       "official": "Republika Guatemala",
//       "common": "Guatemala"
//     },
//     "cym": {
//       "official": "Republic of Guatemala",
//       "common": "Guatemala"
//     },
//     "deu": {
//       "official": "Republik Guatemala",
//       "common": "Guatemala"
//     },
//     "est": {
//       "official": "Guatemala Vabariik",
//       "common": "Guatemala"
//     },
//     "fin": {
//       "official": "Guatemalan tasavalta",
//       "common": "Guatemala"
//     },
//     "fra": {
//       "official": "République du Guatemala",
//       "common": "Guatemala"
//     },
//     "hrv": {
//       "official": "Republika Gvatemala",
//       "common": "Gvatemala"
//     },
//     "hun": {
//       "official": "Guatemalai Köztársaság",
//       "common": "Guatemala"
//     },
//     "ita": {
//       "official": "Repubblica del Guatemala",
//       "common": "Guatemala"
//     },
//     "jpn": {
//       "official": "グアテマラ共和国",
//       "common": "グアテマラ"
//     },
//     "kor": {
//       "official": "과테말라 공화국",
//       "common": "과테말라"
//     },
//     "nld": {
//       "official": "Republiek Guatemala",
//       "common": "Guatemala"
//     },
//     "per": {
//       "official": "جمهوری گواتِمالا",
//       "common": "گواتِمالا"
//     },
//     "pol": {
//       "official": "Republika Gwatemali",
//       "common": "Gwatemala"
//     },
//     "por": {
//       "official": "República da Guatemala",
//       "common": "Guatemala"
//     },
//     "rus": {
//       "official": "Республика Гватемала",
//       "common": "Гватемала"
//     },
//     "slk": {
//       "official": "Guatemalská republika",
//       "common": "Guatemala"
//     },
//     "spa": {
//       "official": "República de Guatemala",
//       "common": "Guatemala"
//     },
//     "srp": {
//       "official": "Република Гватемала",
//       "common": "Гватемала"
//     },
//     "swe": {
//       "official": "Republiken Guatemala",
//       "common": "Guatemala"
//     },
//     "tur": {
//       "official": "Guatemala Cumhuriyeti",
//       "common": "Guatemala"
//     },
//     "urd": {
//       "official": "جمہوریہ گواتیمالا",
//       "common": "گواتیمالا"
//     },
//     "zho": {
//       "official": "危地马拉共和国",
//       "common": "危地马拉"
//     }
//   },
//   "latlng": [
//     15.5,
//     -90.25
//   ],
//   "landlocked": false,
//   "borders": [
//     "BLZ",
//     "SLV",
//     "HND",
//     "MEX"
//   ],
//   "area": 108889,
//   "demonyms": {
//     "eng": {
//       "f": "Guatemalan",
//       "m": "Guatemalan"
//     },
//     "fra": {
//       "f": "Guatémaltèque",
//       "m": "Guatémaltèque"
//     }
//   },
//   "flag": "🇬🇹",
//   "maps": {
//     "googleMaps": "https://goo.gl/maps/JoRAbem4Hxb9FYbVA",
//     "openStreetMaps": "https://www.openstreetmap.org/relation/1521463"
//   },
//   "population": 16858333,
//   "gini": {
//     "2014": 48.3
//   },
//   "fifa": "GUA",
//   "car": {
//     "signs": [
//       "GCA"
//     ],
//     "side": "right"
//   },
//   "timezones": [
//     "UTC-06:00"
//   ],
//   "continents": [
//     "North America"
//   ],
//   "flags": {
//     "png": "https://flagcdn.com/w320/gt.png",
//     "svg": "https://flagcdn.com/gt.svg",
//     "alt": "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band."
//   },
//   "coatOfArms": {
//     "png": "https://mainfacts.com/media/images/coats_of_arms/gt.png",
//     "svg": "https://mainfacts.com/media/images/coats_of_arms/gt.svg"
//   },
//   "startOfWeek": "monday",
//   "capitalInfo": {
//     "latlng": [
//       14.62,
//       -90.52
//     ]
//   },
//   "postalCode": {
//     "format": "#####",
//     "regex": "^(\\d{5})$"
//   }
// },