import {LitElement, html} from 'lit-element';

class NavBar extends LitElement {
    static get properties() {
        return {
            dark:{type:Boolean, reflect:true},
            noborder:{type:Boolean}
        }
    }
    constructor() {
        super();
        this.dark = false;
        this.noborder = false;
    }
    render() {
        return html`
        <nav .dark=${this.dark}>
            <slot></slot>
        </nav>
        <style>
            :host {
                font-family: Arial, Helvetica, sans-serif;
            }
            nav {
                display:flex;
                padding:1px;
                border:${this.noborder ? 'none' : this.dark ? `solid 1px rgba(245,245,245, .5)` : `solid 1px rgba(128,128,128, .7)` };
            }
            nav ::slotted(.nav-link) {  
                text-align:center;
                padding:5px 0px;
                border:${ this.dark ? `solid 1.2px silver` : `solid 1.2px rgba(128,128,128, .7)` };
                min-width:85px;
                text-decoration:none;
                color:${this.dark ? `whitesmoke` : `#585858`};
                opacity: 0.4;
                transition: 0.3s;
            }
            nav ::slotted(a[active]) {
                text-decoration:underline;
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
            @media screen and (min-width: 0px) {
                    #app {
                        width:100%;
                        margin:auto;
                        transition: .3s;
                    }
                }
                @media screen and (min-width: 899px) {
                    nav ::slotted(.nav-link)  {
                        padding:7px 2px;
                        font-size:1.1em;
                        transition:  .3s;
                    }
                }
                @media screen and (min-width: 1500px) {
                    nav ::slotted(.nav-link) {
                        padding:10px 5px;
                        font-size:1.2em;
                        transition: .3s;
                    }
                }   
        </style>
        `;
    } 
}

customElements.define("nav-bar", NavBar);