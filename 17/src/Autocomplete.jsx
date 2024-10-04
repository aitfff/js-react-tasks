import axios from 'axios';
import React, { useState, useEffect } from 'react';

// BEGIN (write your solution here)
const Autocomplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [countries, setCountries] = useState([]);

    const fetchCountries = async (term) => {
        if (term && term.trim()) { 
            const res = await axios.get("/countries", { params: { term } });
            setCountries(res.data);
        } else {
            setCountries([]); 
        }
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchCountries(inputValue);
        }, 300); 

        return () => clearTimeout(delayDebounceFn); 
    }, [inputValue]);

    return (
        <div>
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Country"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
            {inputValue && countries.length > 0 && (  
                <ul>
                    {countries.map(country => (
                        <li key={country}>{country}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Autocomplete;

// END
