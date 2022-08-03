import {createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: "Roboto", sans-serif;
		-webkit-font-smoothing: antialiased;
		background: rgb(30,40,50);
	}

	.react-modal-content{
		background: #13181f;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 1rem 3rem;
		position: relative;
		
		border-radius: 0.24rem;

		.iconCheck {
			border-radius: 2rem;
			margin-top: 2rem;
			padding: 0.5rem;

			&:hover{
				background: #1a2129;
			}
		}

		input {
			background: #13181f;
			padding: 1rem 1rem;
			width: 100%;
			font-size: large;
			border: 0;
			border-bottom: 1px solid #58425e;
			color: #a058b4;

			&::placeholder {
				color: #58425e;
			}	
			&:focus{
         	outline: 0;
      	}
		}

	}
	.react-modal-overlay{
		background: rgba(0,0,0,0.3);
		border: none;

		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`