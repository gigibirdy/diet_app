import {LitElement, html, css} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin.js';
import {store} from '../redux/store.js';
import {selectFood, caculateTotal} from '../redux/actions.js';
import { buttonStyles } from './styles/button-styles.js';

export class SelectFoodBtn extends connect(store)(LitElement){
  static get styles() {
    return [
      buttonStyles,
      css`
        .container{
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }
      `
    ]
  }

  static get properties(){
    return{
      selectedFood: {type: Array},
      targetFood: {type: Object}
    }
  }
  //re-render UI once the state updates
  stateChanged(state){
    this.selectedFood = state.selectedFood;
    this.targetFood = state.targetFood
  }
  render(){
    return html`
      <div class="container">
        <button type="submit" @click="${this.handleClick}">Add</button>
      </div>
    `;
  }
  //dispatch selectFood action to add targetFood to selectedFood array,
  //dispatch caculateTotal action to caculate the total nutri info
  async handleClick(e){
    e.preventDefault();
    await store.dispatch(selectFood(this.targetFood));
    await store.dispatch(caculateTotal(this.selectedFood));
  }
}

customElements.define('select-food-btn', SelectFoodBtn);
