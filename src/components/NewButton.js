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

            <div class="btn">
                <div class="btn-border">
                    <slot></slot>
                </div>
            </div>

        <!--end HTML templete area -->

        <!--Styles Area -->

            <style>
                :host {
                    font-family: Georgia, 'Times New Roman', Times, serif;
                }
                :host .btn {
                    cursor:pointer;
                    display:inline-flex;
                    min-width:85px;
                    min-height:7px;
                    padding:4px 12px;
                    color:var(-button-color);
                    color:${this.dark || this.primary ? `#DCDCDC` : `rgba(104,104,104, 1)`};
                    border:${this.noborder ? `none` : this.dark || this.primary ? `solid 1.2px silver` : `solid 1.2px rgba(128,128,128, .6)`};
                    justify-content:center;
                    text-align:center; 
                    background-color:${this.noFill ? 'inherit' : this.primary ? `rgba(6,95,212, .7)` : 'whitesmoke'};
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
                    background-color:${this.noFill ? 'rgba(133, 224, 133, .2)' : this.primary ? `rgba(6,95,212, 1)` : 'rgba(133, 224, 133, .2)'};
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
        <!--end Styles Area -->
        `;
    }
}

customElements.define('new-button', NewButton);