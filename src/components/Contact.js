import {LitElement, html} from '../../assets/@polymer/lit-element';

class Contact extends LitElement {
    render() {
        return html`
            <style>
                .nav{
                    display:flex;
                    padding:15px 10px;
                }
                a{
                    padding:7px;
                }
            </style>
            <div class="contact">
               <h1>this is the contact component</h1>
            </div>
        `;
    } 
}

customElements.define("contact-view", Contact);