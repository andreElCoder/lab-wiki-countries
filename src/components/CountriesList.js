import React from "react"
import countries from '../countries.json'
import { NavLink } from "react-router-dom"
import CountryDetail from "../components/CountryDetail"

function CountriesList () {


    const myCountries = countries
        return(
        <div>
            <div class="list-group">
                {myCountries.map((country)=>{
                    return(
                    <NavLink activeClassName="selected"  to ={`/${country.cca3}`}>{country.cca2} {country.name.common}</NavLink>)
                    })
                }
            </div>
        </div>
       
        )
    }

export default CountriesList