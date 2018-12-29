import {LitElement, html} from "../assets/@polymer/lit-element/lit-element";
import {Router} from '@vaadin/router';
import './components/NavBar.js';
import './components/Home.js';
import './components/Contact.js';
import './components/Projects.js';
import './components/Music.js';


class App extends LitElement {
    static get properties() {
        return {
            dark:{type:Boolean}
        }
    }
    constructor() {
        super();
        this.dark = false;
    }
    render(){
        return html`
            <div id="app">
                <nav-bar .dark=${this.dark}>
                    <a active href="/" class="nav-link">Home</a>
                    <a href="/projects" class="nav-link">About</a>
                    <a href="/contact" class="nav-link right">Contact</a>
                </nav-bar>
                <div class="content"></div>
            </div>
            <style>
                #app {
                    background-color:inherit;
                    height:98vh;
                }
                .content {
                    border:${this.dark ? `solid 1px rgba(245,245,245, .5)`: `solid 1px rgba(128,128,128, .7)`};
                    height:700px;
                    overflow:auto;
                    border-top:none;
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
                }
                @media screen and (min-width: 899px) {
                    #app {
                        width:85%;
                        margin:auto;
                        margin-top:3px!important;
                        transition: width .7s, margin .5s;
                    }
                }
                @media screen and (min-width: 1500px) {
                    #app {
                        width:70%;
                        margin:auto;
                        margin-top:5px!important;
                        transition: width .7s, margin .5s;
                    }
                }
            </style>
        `;
    }
    firstUpdated(){
        const contentDiv = this.shadowRoot.querySelector('.content');
        const router = new Router(contentDiv /*{baseUrl:'/dummyBaseUrl/'}*/)
        router.setRoutes([
            {path:"/",component:`home-view`},
            {path:'/projects',component:'projects-view'},
            {path:'/music',component:'music-view'},
            {path:'/contact',component:'contact-view'}
        ])
        const navLinks = this._allNavLinks();
        navLinks.forEach(nav=>{
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