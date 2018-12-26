import {LitElement, html} from '../../assets/@polymer/lit-element';

class Projects extends LitElement {
    render() {
        return html`
            <style>
                h4 {
                    margin:0
                }
            </style>
            <div class="home">
               <h4>this is the projects component</h4>
            </div>
        `;
    } 
}

customElements.define("projects-view", Projects);