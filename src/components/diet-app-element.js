import {LitElement, html} from 'lit-element';
import './preview-food.js';
import './input-form.js';
import './selected-food.js';
import './header-banner.js';

export class DietAppElement extends LitElement {
  render(){
    return html`
      <header-banner></header-banner/>
      <input-form></input-form>
      <preview-food></preview-food>
      <selected-food></selected-food>
    `;
  }
};

customElements.define('diet-app-element', DietAppElement);
