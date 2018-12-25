import {LitElement, html} from '../../assets/@polymer/lit-element';

class Home extends LitElement {
    render() {
        return html`
            <style>
                .nav{
                    display:flex;
                    padding:15px 10px;
                }
                a{
                    padding:7px;
                }
            </style>
            <div class="home">
               <h1>this is the home component</h1>
            </div>
        `;
    } 
}

customElements.define("home-view", Home);