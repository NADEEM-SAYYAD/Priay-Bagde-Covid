import React, { useState, useEffect } from 'react'
import axios from "axios"
import Summary from "./Summary"
import Countries from "./Countries"

const Details = () => {
    const [covidData, setCovidData] = useState({
        countries: [],
        global: [],
        currentDate: null,
        loading: true
    })

    useEffect(() => {
        const getCovidData = async () => {
            const response = await axios.get(`https://api.covid19api.com/summary`)
            const { Global: global, Date: currentDate, Countries: countries } = response.data;
            setCovidData({
                ...covidData,
                global, currentDate, countries,
                loading: false
            });
        }
        getCovidData();
    }, [])

    const { countries, global, currentDate, loading } = covidData;

    if (loading) {
        return (
            <div>Loading....</div>
        )
    }
    return (
        <div>
            <Summary summary={global} currentDate={currentDate} />
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Country Code</th>
                        <th>New Confirmed</th>
                        <th>New Deaths</th>
                        <th>New Recovered</th>
                        <th>Total Confirmed</th>
                        <th>Total Deaths</th>
                        <th>Total Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map(country => (
                        <Countries countries={country} key={country.Country} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Details