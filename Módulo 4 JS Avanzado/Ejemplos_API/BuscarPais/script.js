const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")
const CountryList = document.getElementById("Country-List")

function searchCountries (country) {
    fetch (`https://restcountries.com/v3.1/name/${country}`) //fetch ayuda a hacer comunicación con las APIs y devuelve una promesa
    .then(response => response.json())
    .then(data => { 
        if( data.status == '404' ){
            CountryList.innerHTML = '<p>That country doesnt exist, try again with a new AND EXISTING country</p>' //Recibo mi lista de países
        } else {
            CountryList.innerHTML = ''
            data.forEach(country => {
                const countryCard = document.createElement('div')
                const currencies = Object.keys //[EUR]

                countryCard.innerHTML = `
                    <h2>${country.name.common}</h2>
                    <h3>${country.name.official}</h3>
                    <p>Capital(s): ${country.capital.toString()}</p>
                `

                CountryList.appendChild(countryCard)
                
            })
        }
    
    })
}


searchButton.addEventListener('click', function() {
    const countryText = searchInput.value.trim()
    console.log(countryText);//validación del trim con espacios laterales
    if(countryText.length > 2) {
        searchCountries(countryText)
    } else {
        CountryList.innerHTML = '<p> Please enter at least 3 characters to start searching...'
    }
})