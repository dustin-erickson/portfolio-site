import {LitElement, html} from '../../assets/@polymer/lit-element';

class Home extends LitElement {
    static get properties(){
        return {
            dark:{type:Boolean}
        }
    }
    render() {
        return html`
            <style>
                :host {
                    color:${this.dark ? `#E8E8E8!important` : '#333'};
                }
                h4 {
                    margin:0;
                }
                .home {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    flex-wrap:wrap;
                }
            </style>
            <div class="home">
                <h4>Home Component</h4>
            </div>
        `;
    } 
    firstUpdated() {
       
    }
}

customElements.define("home-view", Home);