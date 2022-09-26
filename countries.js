const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries[0])
    const allCountryHTML = countries.map(country => getCountryHTML(country))
    // console.log(allCountryHTML[0]);
    const countainer = document.getElementById('countries')
    countainer.innerHTML = allCountryHTML.join(' ');
}

// destructuring step-1. original system
// const getCountryHTML = (country) =>{
//     return `
//         <div class='country'>
//             <img src=${country.flags.png} alt="">
//             <h2>${country.name.common}</h2>
//             <p>${country.capital}</p>
        
//         </div>
//     `
// }

// destructuring step-2

// const getCountryHTML = (country) =>{
//     // console.log(country)
//     const {flags, name, capital} = country;
//     return `
//         <div class='country'>
//             <img src=${flags.png} alt="">
//             <h2>${name.common}</h2>
//             <p>${capital}</p>

//         </div>
//     `
// }

// 

// destructurin step-3
const getCountryHTML = ({flags, name, capital}) =>{
    return `
        <div class='country' title="The worlds countries details is here. If you want to see details in every countries of this world in the website.">
            <img src=${flags.png} alt="">
            <h2>${name.common}</h2>
            <p>${capital}</p>
        </div>
    `
}

loadCountries()