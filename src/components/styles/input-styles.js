import {css} from 'lit-element';

export const inputStyles = css`
  input{
    width: 30vw;
    font-size: 1em;
    border: 1px dashed var(--main-bg-color);
    padding: 5px 0;
    text-align: center;
    margin-right: 30px;
  }
  input:active{
    outline: none;
  }
  input:focus{
    outline: none;
  }
  @media screen and (max-width: 480px){
    input{
      font-size: 8px;
      padding: 5px 0;
      width: 50vw;
    }
  }

`;
