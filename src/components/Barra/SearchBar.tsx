import React, { useEffect, useRef, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { Container } from './styles';
import { TiBackspace } from "react-icons/ti";

interface propsApi {
   title: string;
   id: number;
   data: any;
}

export function SearchBar(props:propsApi) {
/*
para fazer o search atraves de uma api em forma de OBJETO {} adicionar o .title depois do
"option.toLowerCase()" => "option.title.toLowerCase()". Se der certo o filter fara o map no data e percorrera 
todos os "titles" e os colocando em letra minuscula
*/
   const [inputSearch, setInputSearch] = useState('');
   const [apiData, setApiData] = useState([]);
   const suggestions = apiData.filter( (option:string) => option.toLowerCase().includes(inputSearch.toLocaleLowerCase()));
   
   
   const [showSuggestions, setShowSuggestions] = useState(false);
   const autocompleteRef = useRef<HTMLDivElement | null>(null);


   useEffect(() => {
      const api = props.data.map((val: {title:string}) => {return val.title})
      setApiData(api)
      console.log(api)

      const handleClick = (event: { target: any; }) => {
         if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
            setShowSuggestions(false)
         }
      };
      document.addEventListener("click", handleClick);
      
      return () => {
         document.removeEventListener("click", handleClick)
      }
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
         <div className='searchInput' ref={autocompleteRef}>
            <FcSearch className='icon' color='#777676' size={32}/>
            <input 
               placeholder='Pesquisar...' 
               value={inputSearch} 
               onChange={(val) => handleFilter(val)}
               onFocus={() => setShowSuggestions(true)}
            />
            <TiBackspace className='del' color='#777676' size={38} onClick={() => (setInputSearch(''))}/>            
         </div>
         {
         showSuggestions && (
            <div className='dataResult'>
            {
               suggestions.map( (value: string ) =>{
                  return(
                     <div key={value} className='dataItem' onClick={() => {handleClickAutoComplete(value)}}>
                        <p>{value}</p>
                     </div>
                  )
               })
            }
            </div>
         )
         }
      </Container>
   );
}






