import {LitElement, html, css} from 'lit-element';

export class HeaderBanner extends LitElement {
  static get styles(){
    return[
      css`
        div{
          background: var(--main-bg-color);
          color: #a3f7bf;
          height: 10vh;
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          padding-left: 15px;
          font-size: 25px;
        }
        @media screen and (max-width: 480px){
          h1{
            font-size: 22px;
          }
        }
      `
    ]
  }
  render(){
    return html`
      <div>
        <h1>Diet App</h1>
      </div>
    `;
  }
}

customElements.define('header-banner', HeaderBanner);
