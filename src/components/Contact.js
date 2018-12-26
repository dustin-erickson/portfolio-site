import {LitElement, html} from '../../assets/@polymer/lit-element';

class Contact extends LitElement {
    render() {
        return html`
            <style>
                h4 {
                    margin:0
                }
            </style>
            <div class="contact">
               <h4>this is the contact component</h4>
               <br/>
               adn another thing.
            </div>
        `;
    } 
}

customElements.define("contact-view", Contact);