import {css} from 'lit-element';

export const buttonStyles = css`
  button{
    background: var(--main-bg-color);
    color: #a3f7bf;
    font-size: 1em;
    border-radius: 5%;
    padding: 5px 10px;
  }
  button:active{
    outline: none;
  }
  button:focus{
    outline: none;
  }
  @media screen and (max-width: 480px){
    button{
      font-size: 12px;
      padding: 2px 5px;
    }
  }

`;
