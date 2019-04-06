import {LitElement, html} from 'lit-element';
import './NewButton.js';
import './RipInput.js';

class Contact extends LitElement {
    static get properties() {
        return {
            dark:{type:Boolean},
            winSize:{type:Object}
        }
    }
    constructor() {
        super();
        this.dark = false;
    }
    render() {
        return html`
            ${this._contactStyle()}
            <div class="contact">
                <div class="contact_form_wrapper">
                    <div class="input_container">
                        <rip-input 
                            value="" id="name_input" 
                            class="${this.winSize.width <=600 ? `small` : this.winSize.width <=1100 ? `` : `large`}" 
                            .dark=${this.dark} 
                            label="Name" 
                            title="Enter Name Here"
                        >
                        </rip-input>
                    </div>
                    <div class="input_container" style="width:100%;">
                        <rip-input 
                            value="" 
                            id="email_input"
                            class="${this.winSize.width <=600 ? `small` : this.winSize.width <= 1100 ? `` : `large`}" 
                            .dark=${this.dark} 
                            label="Email" 
                            title="Enter Email Here"
                        >
                        </rip-input>
                    </div>
               </div>
               <new-button .dark=${this.dark} @synthClick="${this.handleContactClick}" style="display:block;text-align:center;">
                            <span class="icon">&#128330;</span>
                            Send Message
                    </new-button>
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
    _contactStyle() {
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
                flex-direction:column;
                align-items:center;
                justify-content:center;
            }
            .contact_form_wrapper {
                width:${this.winSize.width <= 600 ? `100%` : this.winSize.width <= 1100 ? `75%` : `70%`};
            }
            .input-margin {
                margin:10px 0px;
                transition: .3s;
            }
            .input_container {
                width:100%;
                padding:10px 0px;
                transition: .3s;
            }
            .icon {
                font-size:17pt;
            }
        </style>
        `;
    } 
}



customElements.define("contact-view", Contact);