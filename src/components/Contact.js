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
                <div style="display:flex;">
                    <div class="bg_svg">
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
                            <new-button .dark=${this.dark} @synthClick="${this.handleContactClick}" style="display:block;text-align:center;">
                                <span class="icon">&#128330;</span>
                                Send Message
                            </new-button>
                        </div>
                    </div>
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
    _contactStyle() {
        return html`
        <style>
            :host {
                color:${this.dark ? `#E8E8E8!important` : '#333'};
            }
            new-button {
                margin-top:15px;
            }
            h4 {
                margin:10px 0px;
            }
            h3 {
                margin-bottom:5px;
                font-weight:normal;
            }
            a {
                font-size:.89rem;
                margin-right:10px;
                text-decoration:none;
                text-underline:none;
                color:${this.dark ? `silver!important` : '#333'};
            }
           .contact_form_wrapper {
               display:flex;
               flex-direction:column;
               min-height:700px;
               width:95%;
               max-width:400px;
               padding-top:3em
           }
           .input_container {
             margin-bottom:2em;
           }
            h4 {
                padding:0;
                margin:0
            }
            .bg_svg::before {
                content: "";
                position: absolute;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                background-image:url('./static/dudehead.svg');
                background-position:center;
                background-size:cover;
                background-repeat: no-repeat;
                opacity:.08;
                max-width:700px;
                margin:auto;
            }
            .bg_svg {
                z-index:5;
                font-family:tahoma;
                font-size:13pt;
                position:relative;
                width:100%;
                height:100%;
                display:flex;
                align-items:center;
                flex-direction:column;
            }
        </style>
        `;
    } 
}



customElements.define("contact-view", Contact);