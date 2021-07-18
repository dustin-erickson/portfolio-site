import {LitElement, html} from 'lit-element';

class Projects extends LitElement {
    static get properties(){
        return {
            dark:{
                type:Boolean,
            },
            background_r:{type:Number},
            background_g:{type:Number},
            background_b:{type:Number},
            background_a:{type:Number},
        }
    }
    render() {
        return html`
           ${this._projectsStyle()}
            <div class="home">
                <div style="width:100%;height:100%;">
                    <div class="bg_svg">
                        <div class="project_title_area">
                            <h1>Experiments</h1>
                            <p>
                            This "personal" website is an experiment of sorts. 
                            There is a silly amount of web components & javascripts happening to output this crap. 
                            Using what is most likely completely outdated code at this point. I had fun.
                            </p>
                        <div>
                        <h2>Other Projects</h2>
                    </div>
               </div>
            </div>
        `;
    } 
    _projectsStyle() {
        return html`
        <style>
            :host {
                color:${this.dark ? `#E8E8E8!important` : '#333'};
            }
            .project_title_area {
                padding:0px 10px;
            }
            .home {
                width:100%;
                height:100%;
            }
            h4 {
                padding:0;
                margin:0
            }
            .bg_svg::before {
                content: "";
                position: absolute;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                background-image:url('./static/dudehead.svg');
                background-position:center;
                background-size:contain;
                background-repeat: no-repeat;
                opacity:.05;
            }
            .bg_svg {
                z-index:5;
                font-family:tahoma;
                font-size:13pt;
                position:relative;
                width:100%;
                height:100%;
                display:flex;
                align-items:center;
                flex-direction:column;
            }
        </style>
        `;
    }
}

customElements.define("projects-view", Projects);