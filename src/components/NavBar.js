import {LitElement, html} from '../../assets/@polymer/lit-element';

class NavBar extends LitElement {
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
        <nav .dark=${this.dark}>
            <slot></slot>
        </nav>
        <style>
           @import url('https://fonts.googleapis.com/css?family=Press+Start+2P|Roboto+Mono');
            :host {
                font-family: Arial, Helvetica, sans-serif;
            }
            nav {
                display:flex;
                padding:1px;
                border:${ this.dark ? `solid 1px rgba(245,245,245, .5)` : `solid 1px rgba(128,128,128, .7)` };
            }
            nav ::slotted(.nav-link) {  
                text-align:center;
                padding:5px 0px;
                border:${ this.dark ? `solid 1.2px silver` : `solid 1.2px rgba(128,128,128, .7)` };
                min-width:85px;
                text-decoration:none;
                color:${this.dark ? `whitesmoke` : `#585858`};
                opacity: 0.4;
                transition: 0.2s;
            }
            nav ::slotted(a:first-child:not([active])) {
             
            }
            nav ::slotted(a:last-child:not([active])) {
              
            }
            nav ::slotted(a:last-child:not([active])) {
          
            }
            nav ::slotted(a:last-child:not([active])) {
             
            }
            nav ::slotted(a[active]) {
                opacity: 1;
            }
            nav ::slotted(.nav-link:hover:not([active])) {
                opacity: 0.8;
            }
            nav ::slotted(a) {
                padding:0px 8px;
            }
            nav ::slotted(.right) {
                margin-left:auto;
            }   
            nav ::slotted(.left) {
                margin-right:auto;
            }   
            nav ::slotted(.center) {
                margin-right:auto;
                margin-left:auto;
            }   
        </style>
        `;
    } 
}

customElements.define("nav-bar", NavBar);