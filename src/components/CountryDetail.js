import React from "react"
import countries from "../countries.json"
import CountriesList from './CountriesList'

function CountryDetail(props){
    
    const getCountry = (cca3) => {
        return countries.find(country => country.cca3 ===cca3)
    }

    const getBorders = (borders) =>{
        let bordersFound = []
        borders.forEach(border => {
            console.log(border)
            let single = countries.find(country => country.cca3 === border)
            console.log(bordersFound)
            console.log(single)
            bordersFound.push(countries.find(country=> country.cca3 === border))
            })
            return bordersFound 
    }
    
    const {params}= props.match

    const foundCountry = getCountry(params.cca3)
    //console.log(foundCountry)
    const borders= foundCountry.borders
    console.log(borders)
    const foundBorders = getBorders(borders)
    console.log(foundBorders)

    return( 
            
            <div>
                <CountriesList/>
                  <div class="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {foundBorders.map((border)=>{
                            return (
                            <li><a href={`/${border.cca3}`}>{border.name.common}</a></li>)
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
    ) 
}

export default CountryDetail