import {LitElement, html} from "@polymer/lit-element";

class RipInput extends LitElement {
    static get properties() {
        return {
            label:{type:String},
            title:{type:String},
            hasValue:{type:Boolean},
            value:{type:String, reflect:true},
            type:{type:String},
            dark:{type:Boolean}
        }
    }
    constructor() {
        super();
        this.label = '';
        this.title = '';
        this.value = '';
        this.dark = false;
        this.type = "text"
    }
    render() {
        return html`
            <style>
            :host {
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                width:100%;
            }
            :host(.small) .input-box {    
                    height:30px;
            }
            :host(.small) label {    
                    top:-18px;
                    font-size:12pt;
            }
            :host(.small) input {    
                    top:8px;
                    font-size:11pt;
            }
            :host(.large) .input-box {    
                    height:54px;      
            }
            :host(.large) label {    
                    top:-27px;
                    font-size:19pt;
            }
            :host(.large) input {    
                    top:18px;
                    font-size:20pt;
            }
            .shrunkLabel {
                top:-27px!important;
                font-size:9pt!important;
                color:${this.dark ? 'rgb(144,202,249)' : '#3949ab'}!important;
            }
            :host(.small) .shrunkLabel {    
                font-size:8pt!important;
            }
            .hasvalue {
                top:-27px!important;
                font-size:9pt!important;
            }
            :host(.small) .hasvalue {    
                font-size:8pt!important;
            }
            .highlighted {
                background-color:${this.dark ? `rgba(189,189,189, .1)` : `rgba(189,189,189, .3)`}!important;
                box-shadow:${this.dark ? 'inset 0px -2px 0px 0px rgb(144,202,249)':'inset 0px -2px 0px 0px #3949ab'}!important;
            }
            :host(.large) .shrunkLabel {    
                top:-35px!important;
                font-size:12pt!important;
            }
            :host(.large) .hasvalue {    
                top:-35px!important;
                font-size:12pt!important;
            }
            label {
                user-select: none;
                cursor:text;
                position:relative;
                top:-16px;
                font-size:16pt;
                color:${this.dark ? `rgba(250,250,250, .5)`:`#78909c`};
                padding:0;
                margin:0;
                transition:font-size .3s, color .3s, top .3s;
            }
            input {
                position:relative;
                top:16px;
                border:none;
                background:transparent;
                color:${this.dark ? `rgba(250,250,250, .8)`:`#424242`};
                width:100%;
                font-size:14pt;
                outline-width:0;
                transition:font-size .3s, width .3s, top .3s;
                margin-top:4px;
            }
            .input-box {
                cursor:text;
                height:45px;
                -webkit-box-shadow:inset 0px -1.3px 0px 0px #b0bec5;
                -moz-box-shadow:inset 0px -1.3px 0px 0px #b0bec5;
                box-shadow:inset 0px -1.3px 0px 0px #b0bec5;
                background-color:${this.dark ? `rgba(200,200,200, .2)`:`rgba(250,250,250, .4)`};
                padding:2px 5px 0px 14px;
                transition:box-shadow 1s, width .3s;
            }
            .input-box:hover {
                background-color:${this.dark ? `rgba(250,250,250, .1)`:`rgba(250,250,250, 1)`};
                transition:background-color .3s
            }
            @media screen and (min-width: 0px) {
                .input-box {
                    margin:auto;
                    transition: height .7s;
                }
                input {
                    font-size:12pt;
                }
                label {
                    font-size:14pt;
                }
            }
            @media screen and (min-width: 899px) {
                .input-box {
                    margin:auto;
                    transition: height .4s;
                }
                input {
                    font-size:13pt;
                    transition: font-size .3s;
                }
                label {
                    font-size:16pt;
                    transition: font-size .3s;
                }
            }
            @media screen and (min-width: 1500px) {
                .input-box {
                    margin:auto;
                    transition: height .7s;
                }
                input {
                    font-size:14pt;
                    transition: font-size .3s;
                }
                label {
                    font-size:18pt;
                    transition: font-size .3s;

                }
            }
            </style>
            <div class="input-box" .title=${this.title} aria-label="${this.label}">
                
                <input
                    value="${this.value}"
                    type="${this.type}" 
                    aria-label="${this.label}"
                    @input=${this._handleInput} 
                >
                <label>${this.label}</label>
            </div>
        `;
    }
    _handleInput(e) {
        this.value = e.target.value.trim() && typeof(e.target.value.trim()) === 'string' && e.target.value.trim().length > 0 ? e.target.value.trim() : '';
    }
    firstUpdated() {
        const inputBox = this.shadowRoot.querySelector(".input-box");
        const input = this.shadowRoot.querySelector("input");
        const label = this.shadowRoot.querySelector('label');
        const onInputFocus = () => {
            label.classList.add('shrunkLabel');
            inputBox.classList.add('highlighted');
        };
        const onInputBlur = () => {
            label.classList.remove('shrunkLabel');
            inputBox.classList.remove('highlighted');
            if (!this.value.trim()) {
                //no value ...remove styles for label
                label.classList.remove('hasvalue');
                label.style.top = '';
                label.style.fontSize = '';
            } else {
                label.classList.add('hasvalue');
            }
            label.style.color = '';
        };
        const boxFocusInput = () => {
            input.focus();
        };
        //set inital styles accomidate for value being pre set.
        if(this.value) {
            label.classList.add('hasvalue');
        }
        input.addEventListener('focus', onInputFocus);
        input.addEventListener('blur', onInputBlur);
        inputBox.addEventListener("click", boxFocusInput);
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector(".input-box").cloneNode(true);
        this.shadowRoot.querySelector("input").cloneNode(true);
    }
    
}

customElements.define('rip-input', RipInput);