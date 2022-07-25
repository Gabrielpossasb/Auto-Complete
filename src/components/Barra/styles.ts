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
      min-width: 400px;
      height: 65px;
      margin-bottom: 5px solid #4e4e4e;
      
      border-radius: 1rem;
      padding: 0 2rem;

      gap: 24px;

      background-color: white;

      input {
         border: 0;
         outline: 0;
         background: none;
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
         padding: 3px 22px;
         transition: background 0.6;
         &:hover{
            background: #eceaea;

         }
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
      min-width: 432px;
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