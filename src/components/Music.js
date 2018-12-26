import {LitElement, html} from '../../assets/@polymer/lit-element';

class Music extends LitElement {
    render() {
        return html`
            <style>
                h4 {
                    margin:0
                }
            </style>
            <div class="home">
               <h4>this is the music component</h4>
            </div>
        `;
    } 
}

customElements.define("music-view", Music);