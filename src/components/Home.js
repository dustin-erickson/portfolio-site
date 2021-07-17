import {LitElement, html} from 'lit-element';
const bgSVG1 = new URL('../../assets/images/oceanscape.svg', import.meta.url).toString();

class Home extends LitElement {
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
    constructor() {
        super();
        this.background_r = 255;
        this.background_g = 255;
        this.background_b = 255;
        this.background_a = 1;
    }
    render() {
        return html`
           ${this._homeStyle()}
            <div class="home">
                <div style="position:relative;">
                    <div class="bg_svg" style="z-index:5;font-family:tahoma;font-size:13pt;position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;">
                        <div>
                            <h1>Hello World</h1>
                            <p>I'm a web tinkerer, enjoying the vast universe of web related technologies floating around.</p>
                            <p>My main is javascript, but I am acquainted with it's older peers PHP, MySQL, Ect.</p>
                            <p>I enjoy understanding user interaction and user expierince the most.</p>
                        </div>
                    </div>
                </div>
                <div class="tc_container">
                    <div>
                        <div>r: ${this.background_r}</div>
                        <input type="range" min="0" max="255" .value="${this.background_r}" @input="${this.handleBackground_r}">
                    </div>
                    <div>
                        <div>g: ${this.background_g}</div>
                        <input type="range" min="0" max="255" .value="${this.background_g}" @input="${this.handleBackground_g}">
                    </div>
                    <div>
                        <div>b: ${this.background_b}</div>
                        <input type="range" min="0" max="255" .value="${this.background_b}" @input="${this.handleBackground_b}">
                    </div>
                    <div>
                        <div>a: ${this.background_a}</div> 
                        <input type="range" min="0" max="1" step=".02" .value="${this.background_a}" @input="${this.handleBackground_a}">
                    </div>  
                </div>
            </div>
        `;
    } 
    updated(props) {
        props.forEach((prevVal, prop)=>{
            if(prop === 'dark' && prevVal === false) {
                this.background_r = 0;
                this.background_g = 13;
                this.background_b = 30;
                this.background_a = 0.78;
            } else if(prop === 'dark' && prevVal === true) {
                this.background_r = 255;
                this.background_g = 255;
                this.background_b = 255;
                this.background_a = 1;
            }
        })
    }
    firstUpdated() {

    }
    handleBackground_r(e) {
        this.background_r = e.target.value;
        this.dispatchEvent(new CustomEvent('updateBGr', {detail:this.background_r}));
    }
    handleBackground_g(e) {
        this.background_g = e.target.value;
        this.dispatchEvent(new CustomEvent('updateBGg', {detail:this.background_g}));
    }
    handleBackground_b(e) {
        this.background_b = e.target.value;
        this.dispatchEvent(new CustomEvent('updateBGb', {detail:this.background_b}));
    }
    handleBackground_a(e) {
        this.background_a = e.target.value;
        this.dispatchEvent(new CustomEvent('updateBGa', {detail:this.background_a}));
    }

    _homeStyle() {
        return html`
            <style>
                :host {
                    color:${this.dark ? `#E8E8E8!important` : '#333'};
                }
                h4 {
                    margin:0;
                }
                .bg_svg::before {
                    content: "";
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    background-image:url(${bgSVG1});
                    background-position:center; 
                    background-repeat: no-repeat;
                    background-size: cover;
                    opacity:.06;
                }
                .home {
                    display:grid;
                    grid-template-rows:1fr auto;
                    height:100%;
                }
                .tc_container {
                    display:grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-gap:15px;
                    grid-row:4/-1;
                    align-items:center;
                }
                .tc_container > div {
                    display:flex;
                    align-items:center;
                    font-size:8pt;
                }
                .tc_container > div > div {
                    display:inline-block;
                    width:40px;
                }
                .tc_container > div > input {
                    background:none;
                    width:100%;
                }
                input[type=range] {
                    -webkit-appearance: none;
                    width: 100%;
                    margin: 5px 0;
                }
                input[type=range]:focus {
                    outline: none;
                }
                input[type=range]::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 1px;
                    cursor: pointer;
                    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
                    background: #3071a9;
                    border-radius: 0.8px;
                    border: 0px solid #010101;
                }
                input[type=range]::-webkit-slider-thumb {
                    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                    border: 1px solid #000000;
                    height: 11px;
                    width: 5px;
                    border-radius: 3px;
                    background: #ffffff;
                    cursor: pointer;
                    -webkit-appearance: none;
                    margin-top: -5px;
                }
                input[type=range]:focus::-webkit-slider-runnable-track {
                    background: #4a90cc;
                }
                input[type=range]::-moz-range-track {
                    width: 100%;
                    height: 1px;
                    cursor: pointer;
                    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
                    background: #3071a9;
                    border-radius: 0.8px;
                    border: 0px solid #010101;
                }
                input[type=range]::-moz-range-thumb {
                    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                    border: 1px solid #000000;
                    height: 11px;
                    width: 5px;
                    border-radius: 3px;
                    background: #ffffff;
                    cursor: pointer;
                }
                input[type=range]::-ms-track {
                    width: 100%;
                    height: 1px;
                    cursor: pointer;
                    background: transparent;
                    border-color: transparent;
                    color: transparent;
                }
                input[type=range]::-ms-fill-lower {
                    background: #225179;
                    border: 0px solid #010101;
                    border-radius: 1.6px;
                    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
                }
                input[type=range]::-ms-fill-upper {
                    background: #3071a9;
                    border: 0px solid #010101;
                    border-radius: 1.6px;
                    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
                }
                input[type=range]::-ms-thumb {
                    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                    border: 1px solid #000000;
                    height: 11px;
                    width: 5px;
                    border-radius: 3px;
                    background: #ffffff;
                    cursor: pointer;
                    height: 1px;
                }
                input[type=range]:focus::-ms-fill-lower {
                    background: #3071a9;
                }
                input[type=range]:focus::-ms-fill-upper {
                    background: #4a90cc;
                }
    
                /* Extra small devices (phones, 600px and down) */
                @media only screen and (max-width: 600px) {
                    .tc_container {
                        display:grid;
                        grid-template-columns: 1fr;
                        grid-gap:10px;
                        grid-template-rows: repeat(auto, 1fr);
                    }
                } 
            </style>
        `;
    }
}


customElements.define("home-view", Home);