import {LitElement, html} from '../../assets/@polymer/lit-element';

class Projects extends LitElement {
    render() {
        return html`
           ${this._projectsStyle()}
            <div class="home">
               <h4>this is the projects component</h4>
            </div>
        `;
    } 
    _projectsStyle() {
        return html`
        <style>
            h4 {
                padding:0;
                margin:0
            }
        </style>
        `;
    }
}

customElements.define("projects-view", Projects);