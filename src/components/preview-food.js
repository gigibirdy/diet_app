import {LitElement, html, css} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin.js';
import {store} from '../redux/store.js';
import './select-food-btn.js';

export class PreviewFood extends connect(store)(LitElement){
  static get styles(){
    return css`
      .grid-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
        margin-bottom: 20px;
      }
      .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: var(--main-bg-color);
        text-align: center;
      }
      img{
        width: 30vw;
        height: 30vh;
        margin-bottom: 10px;
      }
      .cover{
        object-fit: contain;
      }
      @media screen and (max-width: 480px){
        .title{
          font-size: 12px;
        }
        .grid-container{
          font-size: 8px;
      }
    `;
  }
  static get properties(){
    return {
      targetFood: {type: Object},
      error: {type: Object}
    }
  }
  //re-render UI once the state updates
  stateChanged(state){
    this.targetFood = state.targetFood;
    this.error = state.error;
  }
  render(){
    return html`
      <div class="container">
      ${
        this.targetFood
        ? html`
            <h3 class="title">Add <span>${this.targetFood.food_name.slice(0, 1).toUpperCase() + this.targetFood.food_name.slice(1)}</span> to selected food?</h3>
            <div>
              <img src="${this.targetFood.photo.thumb}" alt="food image" class="cover">
            </div>
            <div class="grid-container">
              <div>Calories (cal)<br/>${this.targetFood.nf_calories}</div>
              <div>Protein (g)<br/>${this.targetFood.nf_protein} </div>
              <div>Fat (g)<br/>${this.targetFood.nf_saturated_fat} </div>
              <div>Carb (g)<br/>${this.targetFood.nf_total_carbohydrate} </div>
            </div>
            <div>
              <select-food-btn></select-food-btn>
            </div>
        `
        : html ``
      }
      ${
        this.error
        ? html `<p>Sorry, no matches</p>`
        : html ``
      }
      </div>
    `;
  }
}

customElements.define('preview-food', PreviewFood);
