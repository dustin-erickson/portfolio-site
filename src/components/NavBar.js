import {LitElement, html} from '../../assets/@polymer/lit-element';

class NavBar extends LitElement {
    render() {
        return html`
        <nav>
            <slot></slot>
        </nav>
        <style>
           @import url('https://fonts.googleapis.com/css?family=Press+Start+2P|Roboto+Mono');
            :host {
                font-family: 'Roboto Mono','Press Start 2P', monospace;
            }
            nav {
                display:flex;
                padding:1px;
                border:solid 1px rgba(245,245,245, .5);
            }
            nav ::slotted(.nav-link) {  
                text-align:center;
                padding:5px 0px;
                border:solid 1.2px silver;
                min-width:85px;
                text-decoration:none;
                color:whitesmoke;
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