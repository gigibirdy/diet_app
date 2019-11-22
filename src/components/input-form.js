import {LitElement, html, css} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin.js'
import {store} from '../redux/store.js';
import {fetchNutri} from '../redux/actions.js';
import { buttonStyles } from './styles/button-styles.js';
import {inputStyles} from './styles/input-styles.js';
import {getFoodName} from '../redux/actions.js';

export class InputForm extends connect(store)(LitElement) {
  static get styles() {
    return [
      buttonStyles,
      inputStyles,
      css`
        form {
          display: flex;
          justify-content: center;
        }
        `
    ]
  }
  static get properties(){
    return {
      targetFood: {type: Object}
    }
  }
  //re-render UI once the state updates
  stateChanged(state){
    this.targetFood = state.targetFood;
  }
  render(){
    return html`
      <form>
        <input id="foodinput" type="text" placeholder="please enter your food" value="${this.targetFood.foodName}" @change="${this.updateFoodName}"/>
        <button type="submit" @click="${this.handleClick}">Submit</button>
      </form>
    `;
  }

  //update the value of foodName property
  updateFoodName(e){
    store.dispatch(getFoodName(e.target.value));
  }
  //dispatch fetchNutri action to fetch data from nutritionix API endpoint
  async handleClick(e){
    e.preventDefault();
    if(this.targetFood.foodName){
      await store.dispatch(fetchNutri(this.targetFood.foodName));
      const foodInput = this.shadowRoot.getElementById('foodinput');
      foodInput.value = '';
    }
  }
  //auto focus cursor
  firstUpdated(){
    const foodInput = this.shadowRoot.getElementById('foodinput');
    foodInput.focus();
  }
}
customElements.define('input-form', InputForm);
