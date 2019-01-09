import {LitElement, html} from '../../assets/@polymer/lit-element';

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
                r ${this.background_r} 
                <input type="range" min="0" max="255" .value="${this.background_r}" @input="${this.handleBackground_r}">
                g ${this.background_g} 
                <input type="range" min="0" max="255" .value="${this.background_g}" @input="${this.handleBackground_g}">
                b ${this.background_b} 
                <input type="range" min="0" max="255" .value="${this.background_b}" @input="${this.handleBackground_b}">
                a ${this.background_a} 
                <input type="range" min="0" max="1" step=".02" value="${this.background_a}" @input="${this.handleBackground_a}">
            </div>
        `;
    } 
    updated(props) {
        props.forEach((prevVal, prop)=>{
            if(prop === 'dark' && prevVal === false) {
                this.background_r = 0;
                this.background_g = 13;
                this.background_b = 30;
            } else if(prop === 'dark' && prevVal === true) {
                this.background_r = 255;
                this.background_g = 255;
                this.background_b = 255;
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
    themeChange(newVal, OldVal) {
        console.log("HAS CHANGE FIRED.")
    }
}

customElements.define("home-view", Home);