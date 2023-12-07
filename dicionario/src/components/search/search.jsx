// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const UrbanDictionarySearch = () => {
    const [term, setTerm] = useState('');
    const [searchedTerm, setSearchedTerm] = useState('');
    const [definition, setDefinition] = useState('');

    const searchDefinition = async () => {
        const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8756f296f6msh0d3d137947b7db4p15f085jsn3b53d969cd87',
                'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setDefinition(data.list[0].definition);
            setSearchedTerm(term);
            console.log(data);
            console.log(data.list[0].definition);
            console.log(term);
            console.log(searchedTerm);
        } catch (error) {
            console.error(error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchDefinition();
        }
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-lg-6'>
                    <input 
                        className='form-control'
                        type="text" 
                        value={term} 
                        onChange={e => setTerm(e.target.value)} 
                        onKeyPress={handleKeyPress}
                        placeholder="Digite uma palavra..." 
                    />
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-lg-6'>
                    <button onClick={searchDefinition} className='btn btn-primary mt-2'>Buscar</button>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-lg-6'>
                    {definition && 
                        <div className='mt-5'>
                            <h2 className='fst-italic text-decoration-underline'>{searchedTerm}</h2>
                            <p>{definition}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default UrbanDictionarySearch;





