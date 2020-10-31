import React, { useState } from 'react';

const Form = () => {

    const [search, saveSearch ] = useState({
        city: '',
        country: ''
    });

    const [ error, saveError ] = useState(false);

    const { city, country } = search;

    const handleChange = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(city.trim() === '' || country.trim() === ''){
            saveError(true);
            return;
        }
        saveError(false);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darken-4 error">All fields are required</p> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value="country"
                    onChange={handleChange}
                >
                <option value="">-- Select a country --</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">Spain</option>
                <option value="PE">Perú</option>
                </select>
                <label htmlFor="country ">Country: </label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    value="Search Weather"
                    className="waves-effect waves-ligth btn-large btn-block yellow accent-4 col-s12"
                >Search Weather</button>
            </div>
        </form>
    )
}

export default Form;
