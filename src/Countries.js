import React from 'react'

const Countries = ({ countries }) => {
    const { Country, CountryCode, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = countries;
    return (
        <tr>
            <td>{Country}</td>
            <td>{CountryCode}</td>
            <td>{NewConfirmed}</td>
            <td>{NewDeaths}</td>
            <td>{NewRecovered}</td>
            <td>{TotalConfirmed}</td>
            <td>{TotalDeaths}</td>
            <td>{TotalRecovered}</td>
        </tr>
    )
}
export default Countries