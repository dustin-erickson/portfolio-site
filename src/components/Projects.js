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
                        <section>
                            <div style="display:flex;flex-wrap:wrap;justify-content:center;">
                                <div>
                                    <img src="https://loremflickr.com/640/360" height="100%"/>
                                </div>
                                <div>
                                    <h3>Job Management</h3>
                                    <p>
                                        <u>Description:</u>
                                        A widget style web application to provide a simple, easy to use interface to help manage 
                                        aspects of jobs/tasks
                                    </p>
                                    <p>
                                        <u>Purpose:</u>
                                        Build specificly to complement an already existing custom CRM. This widget gives a birds eye
                                        view an individual salespersons active jobs/customers.
                                    </p>
                                    <p>
                                        <u>Learned:</u>
                                        This is a glorified to-do list, albeit a very complicated to-do list with ties to databases and users.
                                        You always learn a lot from a simple to-do list.
                                        Being one of my first projects build with Vue JS, I was able to learn a great deal about vue and it's ecosystem.
                                        I would later go on and re-build this same widget using webcomponents to explore that tech.

                                    </p>
                                </div>
                            </div>
                        </section>
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
                padding:0px 25px;
                z-index:500;
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
                opacity:.08;
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