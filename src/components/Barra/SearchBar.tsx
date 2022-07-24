import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import {FcSearch} from 'react-icons/fc'

interface propsApi {
  data: string[];
}

export function SearchBar(props:propsApi) {

  const [inputSearch, setInputSearch] = useState('');
  const suggestions = props.data.filter( (option: string) => option.toLowerCase().includes(inputSearch.toLocaleLowerCase()));
  const [showSuggestions, setShowSuggestions] = useState(false);


  useEffect(() => {
    
  }, [])

  function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
    setInputSearch(event.target.value)
  }

  function handleClickAutoComplete(value : string)  {
    setInputSearch(value)
    setShowSuggestions(false)
  }

  return (
    <Container>
      <div className='searchInput'>
        <FcSearch className='icon' color='#777676' size={32}/>
        <input 
          placeholder='Pesquisar...' 
          value={inputSearch} 
          onChange={(val) => handleFilter(val)}
          onFocus={() => setShowSuggestions(true)}
        />
      
      </div>
      {
        showSuggestions && (
      
      <div className='dataResult'>
        {
          suggestions.map((value: string ) =>{
            return(
            <div className='dataItem' onClick={() => {handleClickAutoComplete(value)}}>
              <p>{value}</p>
              
            </div>
          )})
        }
      </div>
        )
    
      }
    </Container>
  );
}






