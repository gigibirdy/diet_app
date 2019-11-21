import {LitElement, html, css} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin.js'
import {store} from '../redux/store.js';
import {fetchNutri} from '../redux/actions.js';
import { buttonStyles } from './styles/button-styles.js';
import {inputStyles} from './styles/input-styles.js';

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
    return{
      foodName: {type: String}
    }
  }
  constructor(){
    super();
    this.foodName = ''
  }
  render(){
    return html`
      <form>
        <input id="foodinput" type="text" placeholder="please enter your food"  value="${this.foodName}" @change="${this.updateFoodName}"/>
        <button type="submit" @click="${this.handleClick}">Submit</button>
      </form>
    `;
  }

  //update the value of foodName property
  updateFoodName(e){
    this.foodName = e.target.value;
  }
  //dispatch fetchNutri action to fetch data from nutritionix API endpoint
  async handleClick(e){
    e.preventDefault();
    if(this.foodName){
      await store.dispatch(fetchNutri(this.foodName));
      this.foodName = '';
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
