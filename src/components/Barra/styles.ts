import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: flex-start;
   padding: 2rem;
   gap: 2rem;
   justify-content: center;
   flex-direction: row;

   .searchInput {
      display: flex;
      align-items: center;

      width: 90%;
      max-width: 600px;
      height: 65px;
      margin-bottom: 5px solid #4e4e4e;
      
      border-radius: 1rem;
      padding: 0 2rem;

      gap: 10px;

      background: #13181f;

      input {
         border: 0;
         outline: 0;
         background: #1a2129;
         padding: 10px 20px;
         border-radius: 2rem;
         font-size: 22px;
         color: #a455b9;
         font-weight: 400;
         width: 100%;

         &::placeholder {
            color: #58425e         
         }
      }

      .del {
         border-radius: 2rem;
         background: #1a2129;
         margin-right: -20px;
         padding: 3px 1rem;
         transition: background 0.4s;
         &:hover{
            background: #2f3946;

         }
      }   
   }
   .searchArea {
      display: flex;
      align-items: center;
      flex-direction: column;
   }

      .btnNewItem{
         background: #198b8b;
         border: 0;
         color: #fff;
         cursor: pointer;
         font-size: 2.5rem;
         padding: 0 11px;
         border-radius: 2rem;
         transition: background 0.4s;
         margin-top: 0.6rem;
         
         &:hover{
            background: #0f5a5a;
         }
      }

   .dataResult {
      background: #1a2129;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      max-height: 300px;
      overflow: hidden;
      color: #a058b4;
      margin-bottom: 4px solid #2d2d2d;
      
      overflow-y: auto;
      width: 95%;
      font-size: 1.25rem;
      max-width: 632px;
   }

   .dataResult::-webkit-scrollbar {
      display: none;
   }

   .dataItem {
      display: flex;
      align-items: center;
      padding: 12px 18px;
      gap: 16px;
      cursor: pointer;
      
      &:hover {
         background: #1f2831;
      }
   }
   
   
   
`;