import {LitElement, html} from '../../assets/@polymer/lit-element/lit-element.js';
class NewButton extends LitElement {
    static get properties() {
        return {
            noFill:{type:Boolean},
            noborder:{type:Boolean},
            dark:{type:Boolean},
            primary:{type:Boolean}
        }
    }
    constructor() {
        super();
        this.noFill = false;
        this.noborder = false;
        this.dark = false;
        this.primary = false;
    }
    render(){
        return html`
        <!--HTML templete area -->

            <button class="btn" @click="${this.handleButtonClick}">
                <div class="btn-border">
                    <slot></slot>
                </div>
            </button>

        <!--end HTML templete area -->

        <!--Styles Area -->

            <style>
                :host {
                    display:inline!important;
                }
                :host .btn {
                    cursor:pointer;
                    display:inline-flex;
                    min-width:100px;
                    min-height:20px;
                    padding:4px 12px;
                    color:${this.dark || this.primary ? `#DCDCDC` : `rgba(104,104,104, 1)`};
                    border:${this.noborder ? `none` : this.dark || this.primary ? `solid 1.2px silver` : `solid 1.2px rgba(128,128,128, .6)`};
                    justify-content:center;
                    text-align:center; 
                    background-color:${this.noFill ? 'inherit' : this.primary ? `rgba(6,95,212, .7)` : 'rgba(245, 245, 245, .2)'};
                    transition:0.3s;
                }
                :host .btn:active {
                    border:${this.noborder ? `none` : this.dark || this.primary ? `solid 1.4px silver` : `solid 1.4px #333`};
                    box-shadow:${this.noborder ? `.1px .2px .2px #333` : this.dark || this.primary ? `-.1px -.2px 1px, -.3px -.3px 1px rgba(190,190,190, .2)` : `-.3px -.3px 1px, -.4px -.3px 1px rgba(190,190,190, .2)`};
                }
                :host ::slotted(.icon) {
                    font-size:110%;
                    line-height:110%;
                    padding-right:3px;
                }
                :host .btn:hover {
                    background-color:${this.noFill ? 'rgba(245,245,245 .4)' : this.primary ? `rgba(6,95,212, 1)` : 'rgba(245, 245, 245, .4)'};
                    color:${this.dark || this.primary ? `whitesmoke` : `#333`};
                }
                :host[dark] {
                    background-color:${this.noFill ? 'rgba(245,245,245 .2)' : this.primary ? `rgba(6,95,212, 1)` : 'rgba(245, 245, 245, .2)'};
                }
                .btn-border {
                    width:100%;
                    height:100%;
                    padding:4px 10px;
                }
                @media screen and (min-width: 0px) {
                    .btn {
                        padding:1px 4px!important;
                        border-radius:3px;   
                        font-size:.8em!important; 
                    }
                }
                @media screen and (min-width: 899px) {
                    .btn {
                        padding:3px 8px !important;
                        border-radius:4px;
                        font-size:.9em!important; 
                    }
                }
                @media screen and (min-width: 1500px) {
                    .btn {
                        padding:4px 12px !important;
                        border-radius:5px;
                        font-size:1em!important;
                    }
                }
            </style>
        <!--end Styles Area -->
        `;
    }
    handleButtonClick(e) {
        this.dispatchEvent(new CustomEvent('synthClick', e));
    }
}

customElements.define('new-button', NewButton);