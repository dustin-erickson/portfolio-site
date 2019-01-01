import {LitElement, html} from '../../assets/@polymer/lit-element';
import './NewButton.js';
import './RipInput.js';

class Contact extends LitElement {
    static get properties() {
        return {
            dark:{type:Boolean}
        }
    }
    constructor() {
        super();
        this.dark = false;
    }
    render() {
        return html`
            <style>
                :host {
                    color:${this.dark ? `#E8E8E8!important` : '#333'};
                }
                h4 {
                    margin:10px 0px;
                }
                .contact {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    flex-wrap:wrap;
                }
                .input-margin {
                    margin:10px 0px;
                }
            </style>
            <div class="contact">
            <h4>Silly custom Button</h4>
                <new-button .dark=${this.dark} @click="${this.handleContactClick}">
                    <div>
                        <span class="icon">&#9743;</span>
                        Contact
                    </div>
                </new-button>
                <div class="input-margin">
                <h4>Small Input</h4>
                    <rip-input value="Duuude" id="first_name_input" class="small" .dark=${this.dark} label="First Name" title="Enter first name here"></rip-input>
                </div>
                <div class="input-margin">
                <h4>Large Input</h4>
                    <rip-input id="last_name_input" class="large" .dark=${this.dark} label="Last Name" title="Enter Last name here"></rip-input>
                </div>
                <div class="input-margin">
                <h4>Normal Input</h4>
                    <rip-input id="smug_name_input" class="" .dark=${this.dark} label="Smug Name" title="Enter Smug name here"></rip-input>
                </div>
                <div class="input-margin">
                <h4>Normal Input</h4>
                    <rip-input id="party_name_input" class="" .dark=${this.dark} label="Party Name" title="Enter Party name here"></rip-input>
                </div>
            </div>
        `;
    }
    handleContactClick(e) {
        const formDataObj = {};
        Array.from(this.shadowRoot.querySelectorAll('rip-input')).forEach((input)=>{
            formDataObj[input.id] = input.value.trim() ? input.value.trim() : null;
        })
        console.log(formDataObj);
    } 
}

customElements.define("contact-view", Contact);