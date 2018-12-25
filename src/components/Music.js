import {LitElement, html} from '../../assets/@polymer/lit-element';

class Music extends LitElement {
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
               <h1>this is the music component</h1>
            </div>
        `;
    } 
}

customElements.define("music-view", Music);