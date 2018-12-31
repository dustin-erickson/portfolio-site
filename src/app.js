import {LitElement, html} from "../assets/@polymer/lit-element/lit-element";
import {connectRouter} from "lit-redux-router";
import './components/NavBar.js';
import './components/Home.js';
import './components/Contact.js';
import './components/Projects.js';
import './components/Music.js';
import store from "./store.js";

connectRouter(store);

class App extends LitElement {
    static get properties() {
        return {
            dark:{type:Boolean},    
            noborder:{type:Boolean}
        }
    }
    constructor() {
        super();
        this.dark = false;
        this.noborder = false;
    }
    render(){
        return html`
            <div id="app">
                <nav-bar .dark=${this.dark} .noborder=${this.noborder}>
                    <a active href="/" class="nav-link">Home</a>
                    <a href="/projects" class="nav-link">About</a>
                    <div class="title right">Dustin Erickson</div>
                    <a href="/contact" class="nav-link right">Contact</a> 
                </nav-bar>
                <div class="app-content">
                    <lit-route path="/">
                        <home-view .dark=${this.dark} ></home-view>
                    </lit-route>
                    <lit-route path="/projects">
                        <projects-view .dark=${this.dark}></projects-view>
                    </lit-route>
                    <lit-route path="/contact">
                        <contact-view .dark=${this.dark}></contact-view>
                    </lit-route>
                    <lit-route><h1>404 Not found</h1></lit-route>
                </div>
                <link-icons></link-icons>
            </div>
            <style>
                #app {
                    background-color:inherit;
                    height:98vh;
                }
                .title {
                    display:flex;
                    align-items:center;
                    font-weight:bold;
                    /* justify-content:space-evenly;
                    margin-left:auto; */
                    font-size:15pt;
                    color:${this.dark ? `rgba(245,245,245, .7)`:`rgba(0,0,0, .5)`}
                }
                .app-content {
                    border:${this.noborder ? 'none' : this.dark ? `solid 1px rgba(245,245,245, .5)`: `solid 1px rgba(128,128,128, .7)`};
                    max-height:700px;
                    overflow:auto;
                    border-top:none;
                    padding:10px 25px;
                }
                h4 {
                    margin:0;
                }
                @media screen and (min-width: 0px) {
                    #app {
                        width:100%;
                        margin:auto;
                        transition: width .7s;
                    }
                    .title {
                        font-size:10pt;
                        transition:font-size .3s;
                    }
                }
                @media screen and (min-width: 688px) {
                    .title {
                        font-size:12pt;
                        transition:font-size .3s;
                    }
                }
                @media screen and (min-width: 899px) {
                    #app {
                        width:85%;
                        margin:auto;
                        margin-top:3px!important;
                        transition: width .7s, margin .5s;
                    }
                    .title {
                        font-size:14pt;
                        transition:font-size .3s;
                    }
                   
                }
                @media screen and (min-width: 1500px) {
                    #app {
                        width:70%;
                        margin:auto;
                        margin-top:5px!important;
                        transition: width .7s, margin .5s;
                    }
                    .title {
                        font-size:16pt;
                        transition:font-size .3s;
                    }
                }
            </style>
        `;
    }
    firstUpdated(){
        const navLinks = this._allNavLinks();
        const currentPath = location.pathname;
        navLinks.forEach(nav=>{
            if(currentPath == nav.pathname) {
                nav.setAttribute('active', true)
            } else {
                nav.removeAttribute('active')
            }
            nav.addEventListener('click', _handleLinkClick);
        })
        function _handleLinkClick(e){
            _clearActiveLinks();
            e.target.setAttribute('active', true);
        }
        function _clearActiveLinks(){
            navLinks.forEach(nav=>nav.removeAttribute('active'));
        } 
    }
    _allNavLinks(){
        return Array.from(this.shadowRoot.querySelectorAll('.nav-link'));
    }
}



customElements.define('portfolio-app', App);