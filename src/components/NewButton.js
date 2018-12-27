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
            <div class="btn">
                <div class="btn-border">
                    <slot></slot>
                </div>
            </div>
            <style>
                :host .btn {
                    cursor:pointer;
                    display:inline-flex;
                    min-width:85px;
                    min-height:7px;
                    padding:4px 12px;
                    color:${this.dark || this.primary ? `#DCDCDC` : `#333`};
                    border:${this.noborder ? `none` : this.dark || this.primary ? `solid 1.2px silver` : `solid 1.2px #333`};
                   background-color:${this.noFill ? 'inherit' : this.primary ? `rgba(6,95,212, .7)` : 'whitesmoke'};
                   justify-content:center;
                   text-align:center; 
                }
                :host .btn:active {
                    border:${this.noborder ? `none` : this.dark || this.primary ? `solid 1.4px silver` : `solid 1.4px #333`};
                }
                :host ::slotted(.icon) {
                    font-size:110%;
                    line-height:110%;
                    padding-right:3px;
                }
                :host .btn:hover {
                    background-color:${this.noFill ? 'inherit' : this.primary ? `rgba(6,95,212, 1)` : 'whitesmoke'};
                    color:${this.dark || this.primary ? `whitesmoke` : `#333`};
                }
                .btn-border {
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    width:100%;
                    height:100%;
                    padding:4px 10px;
                }
            </style>
        `;
    }
}

customElements.define('new-button', NewButton);