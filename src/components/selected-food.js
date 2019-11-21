import {LitElement, html, css} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin.js';
import {store} from '../redux/store.js';

export class SelectedFood extends connect(store)(LitElement){
  static get styles(){
    return css`
      .container{
        color: var(--main-bg-color);
        margin-top: 30px;
      }
      .grid-container{
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
        justify-content: center;
        text-align: center;
        align-content: center;
      }
      .title{
        text-align: center;
        color: var(--main-bg-color);
        font-size: 16px;
      }
      .cell{
        font-size: 12px;
        border: 1px solid var(--main-bg-color);
        padding: 5px 0;
        height: 8vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .cell-total{
        font-size: 16px;
        border: 1px solid var(--main-bg-color);
        padding: 5px 0;
        height: 8vh;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      li {
        list-style-type: none;
      }
      ul{
        padding: 0;
      }
      @media screen and (max-width: 480px){
        .title{
          font-size: 12px;
        }
        .cell{
          font-size: 8px;
          padding: 0;
        }
        .cell-total{
          font-size: 10px;
          padding: 0;
        }
      }
    `;
  }
  static get properties(){
    return{
      selectedFood: {type: Array},
      total: {type: Object}
    }
  }
  //re-render UI once the state updates
  stateChanged(state){
    this.selectedFood = state.selectedFood;
    this.total = state.total;
  }

  render(){
    return html`
      <div class="container">
        <h3 class="title">Selected Food</h3>
        <ul class="table">
          <li class="grid-container">
            <div class="cell">Food Name</div>
            <div class="cell">Calories (cal)</div>
            <div class="cell">Protein (g)</div>
            <div class="cell">Fat (g)</div>
            <div class="cell">Carb (g)</div>
          </li>
        ${
          this.selectedFood.map(food =>
        html`
          <li class="grid-container">
            <div class="cell">${food.food_name.slice(0, 1).toUpperCase() + food.food_name.slice(1)}</div>
            <div class="cell">${food.nf_calories} </div>
            <div class="cell">${food.nf_protein} </div>
            <div class="cell">${food.nf_saturated_fat}</div>
            <div class="cell">${food.nf_total_carbohydrate}</div>
          </li>`
        )}
        ${
          this.total
          ? html`
          <li class="grid-container">
            <div class="cell-total">Total</div>
            <div class="cell-total">${this.total.nf_calories}</div>
            <div class="cell-total">${this.total.nf_protein}</div>
            <div class="cell-total">${this.total.nf_saturated_fat}</div>
            <div class="cell-total">${this.total.nf_total_carbohydrate}</div>
          </li>
          `
          : html``
        }
        </ul>
      </div>
    `;
  }
}

customElements.define('selected-food', SelectedFood);
