import {LitElement, html} from '../../assets/@polymer/lit-element';

class Home extends LitElement {
    render() {
        return html`
            <style>
                h4 {
                    margin:0
                }
            </style>
            <div class="home">
               <h4>this is the home component</h4>
            </div>
        `;
    } 
}

customElements.define("home-view", Home);