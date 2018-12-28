import {LitElement, html} from '../../assets/@polymer/lit-element';
import './NewButton.js';
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
                <div style="text-align:center;">
                    <new-button @click="${this.handleContactClick}">
                        <span class="icon">&#9743;</span>
                        Contact
                    </new-button>
                </div>
            </div>
        `;
    } 
    handleContactClick(e) {
        console.log("new Button clicked")
    }
}

customElements.define("home-view", Home);