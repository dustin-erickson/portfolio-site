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
                <div>
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
                            <div class="project_grid">
                                <div style="margin:auto;">
                                    <h3>Job Management</h3>
                                    <img src="./static/jmsc_1.gif" style="width:97%;"/>
                                    <div>
                                        <a href="https://job-manage-test-cxvfqkuoug.now.sh/">Demo</a>
                                        <a href="https://github.com/dustin-erickson/job-manager">Source</a>
                                    </div>
                                </div>
                                <div style="margin:auto;padding:10px;font-size:.92rem;">
                                   
                                    <p>
                                        <u>Description:</u>
                                        A widget style web application to provide a simple, easy to use interface to help manage 
                                        aspects of jobs/tasks
                                    </p>
                                    <p>
                                        <u>Purpose:</u>
                                        Build specifically to complement an already existing custom CRM. 
                                        This widget gives a birds eye view an individual salespersons active jobs/customers. 
                                        Features include alerts for upcoming/past due dates, setting tasks on jobs, overview of 
                                        job and customer.
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
                        <section>
                            <div class="project_grid">
                                <div style="margin:auto;">
                                    <h3>Milage Calculator</h3>
                                    <img src="./static/mcsc-1.gif" style="width:97%;"/>
                                    <div>
                                        <a href="https://milage-calc.vercel.app/">Demo</a>
                                        <a href="https://github.com/dustin-erickson/milage-calc">Source</a>
                                    </div>
                                </div>
                                <div style="margin:auto;padding:10px;font-size:.92rem;">
                                   
                                    <p>
                                        <u>Description:</u>
                                        Web application for calculating the total miles between two point over a period of time.
                                    </p>
                                    <p>
                                        <u>Purpose:</u>
                                        I wanted to know how many miles I was putting on my car and the amount of time I was spending commuting to work.
                                        I also wanted to know more about how web map technologies worked.
                                    </p>
                                    <p>
                                        <u>Learned:</u>
                                        Using webcomponents on this project allowed me to learn a lot of data-binding and event handling within lit-element.
                                        Using a few map technologies such as leaflet and openmap for the tiles, and mapbox for the directions line plotting.
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
            h3 {
                margin-bottom:5px;
                font-weight:normal;
            }
            a {
                font-size:.89rem;
                margin-right:10px;
                text-decoration:none;
                text-underline:none;
                color:${this.dark ? `silver!important` : '#333'};
            }
            section {
                border-bottom:1.4px solid;
                padding-bottom:15px;
                margin-bottom:15px;
            }
            .project_title_area {
                padding:0px 25px;
                z-index:500;
            }
            .project_grid {
                display:grid;
                grid-template-columns:1fr 1fr;
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
                background-image:url('./static/templelines.svg');
                background-position:center;
                background-size:cover;
                background-repeat: no-repeat;
                opacity:.123;
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
            @media only screen and (max-width: 842px){
                .project_grid {
                    grid-template-columns:1fr;
                }
            }
        </style>
        `;
    }
}

customElements.define("projects-view", Projects);