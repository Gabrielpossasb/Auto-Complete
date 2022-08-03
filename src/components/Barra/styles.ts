import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

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

      background: #f0ebeb;

      input {
         border: 0;
         outline: 0;
         background: #dfdede;
         padding: 10px 20px;
         border-radius: 2rem;
         font-size: 22px;
         font-weight: 400;
         width: 100%;

         &::placeholder {
         color: #969494
         
         }
      }

      .del {
         border-radius: 2rem;
         margin-right: -20px;
         padding: 3px 1rem;
         transition: background 0.4s;
         &:hover{
            background: #dfdede;

         }
      }   
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
         margin-bottom: 1rem;
         
         &:hover{
            background: #0f5a5a;
         }
      }

   .dataResult {
      background: #f1f1f1;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      max-height: 300px;
      overflow: hidden;
      margin-bottom: 4px solid #2d2d2d;
      
      overflow-y: auto;
      width: 95%;
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
         background: #e9e9e9;
      }
   }
   
   
   
`;