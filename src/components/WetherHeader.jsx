import axios from "axios";
import React, { useState } from "react";
import Error from "./Error";
import Home from "./Home";
import List from "./List";
import TempSection from "./TempSection";
import './WetherHeader.css';
import LoadingA from "./LoadingA";

const date = new Date()

const Wether = () => {
    const [city, setCity] = useState([{}])
    const [search, setSearch] = useState('')
    const [isError, setIsError] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [beforeText, setBeforeText] = useState(true)



    const onClickSearch = async () => {
        try {
            setBeforeText(false);
            setLoading(true)
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search.trim()}&units=metric&appid=61b0bf3fb71c3272947b42984cfed9b1`)
            setCity(data.data);
            setIsError(false);
            setLoading(false);
            setSearch('')
        } catch (error) {
            setBeforeText(false);
            setIsError(true);
            setLoading(false);
        }
    }

    const SearchLocation = (e) => {
        if (e.key === 'Enter') {
            onClickSearch();
            setSearch('')
        }
    }


    return (
        <>
            <header className="Wether-header">
                <div className="input-feild">
                    <input
                        type="search"
                        name="searchCityName"
                        id="search"
                        placeholder="Type Your City Name"
                        // autoComplete="off"
                        className="input-city"
                        onChange={(e) => { setSearch(e.target.value) }}
                        value={search}
                        onKeyDown={SearchLocation}

                    />
                    <div className="searchIcon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 serachIcon" onClick={onClickSearch}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>
                <div className="github-profile">
                    <a href="https://github.com/abhayjangiddeveloper" target="blacnk">
                        <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" className="octicon octicon-mark-github v-align-middle">
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                </div>
                <div className="date-container">
                    <div className="month-year-container">
                        <p>
                            {date.toLocaleDateString('en-us', { month: "long", year: 'numeric' })}
                        </p>
                    </div>
                    <div className="full-date-container">
                        <p>
                            {date.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}
                        </p>
                    </div>
                </div>
            </header>

            {
                // Loading ? 'loading' : isError ? 'error' : <h1>{city?.main?.temp} °C</h1>
            }

            
            {beforeText ? <Home /> : Loading ? <LoadingA/> : isError ? <Error /> :
                <>
                    <TempSection
                        onDataHandler={city}
                        onLoadingHandler={Loading}
                        onErrorHandler={isError}
                    />
                    <div className="contaienr-listDisplay">
                        <List
                            image='./image/wind.svg'
                            heading='Wind Gust'
                            value={city.wind && city.wind.speed}
                        />
                        <List
                            image='./image/visibility.svg'
                            heading='Visibility'
                            value={city.visibility && city.visibility}
                        />
                        <List
                            image='./image/humidity.svg'
                            heading='Humidity'
                            value={city.main && city.main.humidity}
                        />
                        <List
                            image='./image/air.svg'
                            heading='Pressure'
                            value={city.main && city.main.pressure}
                        />
                    </div>
                </>}
        </>
    )
}

export default Wether;