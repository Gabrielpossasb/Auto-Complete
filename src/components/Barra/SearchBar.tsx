import React, { useEffect, useRef, useState } from 'react';
import { FcSearch, FcCheckmark } from 'react-icons/fc';
import { Container } from './styles';
import { TiBackspace } from "react-icons/ti";
import Modal from 'react-modal';

Modal.setAppElement('#root');

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
   const api = props.data.map((val: {title:string}) => {return val.title})
   const [apiData, setApiData] = useState(api)
   const suggestions = apiData.filter( (option:string) => option.toLowerCase().includes(inputSearch.toLocaleLowerCase()));
   const [newItem, setNewItem] = useState('');

   const [showSuggestions, setShowSuggestions] = useState(false);
   const autocompleteRef = useRef<HTMLDivElement | null>(null);

   const [modalIsOpen, setIsOpen] = useState(false);

   useEffect(() => {


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

   function NewItemList() {

      { (newItem !== '') && (
         setApiData([...apiData,newItem])
         
      )}
      
      { newItem !== '' && (
         setIsOpen(false)
      )}
      
      setNewItem('')
   }

   return (
      <Container>
         <button
            className='btnNewItem'
             onClick={() => setIsOpen(true)}
         >
            +   
         </button>

         <button
            className='btnNewItem'
             onClick={() => console.log(apiData)}
         >
            C 
         </button>
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
         
         <Modal 
            className='react-modal-content'
            overlayClassName="react-modal-overlay"
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
         >
            <input 
               type="text"
               placeholder='Ex: Banana' 
               className='newItem'
               value={newItem}
               onChange={(val) => setNewItem(val.target.value)}
            />
            <FcCheckmark size={48} onClick={() => { NewItemList()}} className='iconCheck'/>
         </Modal>
      </Container>
   );
}






