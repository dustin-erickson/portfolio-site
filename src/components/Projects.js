import {LitElement, html} from 'lit-element';
const bgSVG1 = new URL('../../assets/images/dudehead.svg', import.meta.url).toString();

class Projects extends LitElement {
    render() {
        return html`
           ${this._projectsStyle()}
            <div class="home" style="width:100%;height:100%;">
                <div style="width:100%;height:100%;">
                    <div style="width:100%;height:100%;background-image:url(${bgSVG1});background-position:center;background-size:contain;background-repeat: no-repeat;">
                    </div>
               </div>
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