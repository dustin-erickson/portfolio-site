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
            noborder:{type:Boolean},
            windowDim:{type:Object}
        }
    }
    constructor() {
        super();
        this.dark = false;
        this.noborder = false;
        this.windowDim = {width:0,height:0}
    }
    render(){
        return html`
            <div id="app">
            <div class="title" style="position:relative;">Dustin Erickson<span class="dark_toggle light" title="Dark Toggle" @click="${this.handleThemeClick}">&#9788;</span></div>
                <nav-bar .dark=${this.dark} .noborder=${this.noborder}>
                    <a active href="/" class="nav-link">Home</a>
                    <a href="/projects" class="nav-link">Projects</a>
                    <a href="/contact" class="nav-link right">Contact</a> 
                </nav-bar>
                <div class="app-content">
                    <lit-route path="/">
                        <home-view 
                            .dark=${this.dark}
                            @updateBGr=${(e)=>{this.updateBGColor("--app-background-r", e.detail)}} 
                            @updateBGg=${(e)=>{this.updateBGColor("--app-background-g", e.detail)}} 
                            @updateBGb=${(e)=>{this.updateBGColor("--app-background-b", e.detail)}} 
                            @updateBGa=${(e)=>{this.updateBGColor("--app-background-a", e.detail)}} 
                        >
                        </home-view>
                    </lit-route>
                    <lit-route path="/projects">
                        <projects-view .dark=${this.dark}></projects-view>
                    </lit-route>
                    <lit-route path="/contact">
                        <contact-view .dark=${this.dark} .winSize=${this.windowDim}></contact-view>
                    </lit-route>
                    <lit-route><h1>404 Not found</h1></lit-route>
                </div>
                <link-icons></link-icons>
            </div>
            <style>
                :host{
                    --app-background-r:255;
                    --app-background-g:255;
                    --app-background-b:255;
                    --app-background-a:1;
                }
                a {
                    border:${this.noborder ? `none`: ''};
                }
                .dark_toggle {
                    margin-top:-10px;
                    display:inline-block;
                    font-size:11pt!important;
                    position:relative;
                    top:0;
                    opacity:1;
                    transition:all .2s ease-in-out;
                }
                .dark_toggle_out {
                    top:25px;
                    opacity:0;
                }
                #app {
                    background-color: rgba(var(--app-background-r),var(--app-background-g), var(--app-background-b), var(--app-background-a));
                    height:98vh;
                    color:${this.dark ? `rgba(245,245,245, .7)`:`rgba(0,0,0, .5)`};
                    transition: background-color .3s;
                }
                .title {
                    display:flex;
                    align-items:center;
                    font-weight:bold;
                    align-items:center;
                    margin-left:6px;
                    padding:7px 0px;
                    font-size:18pt!important;
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
                        display:flex;
                        font-size:10pt;
                        transition:font-size .3s;
                    }
                    .title > span {
                        cursor:pointer;
                        padding-right:15px;
                        margin-left:auto;
                        font-size:13pt;
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
                        transition: width .3s, margin .3s, background-color .3s;
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
                        transition: width .3s, margin .3s, background-color .3s;
                    }
                    .title {
                        font-size:16pt;
                        transition:font-size .3s;
                    }
    
                }
            </style>
        `;
    }
    updateBGColor(cssVar, newColor) {
        this.style.setProperty(cssVar, newColor);
    }
    handleThemeClick(e) {
        const target = e.target;
       if (target.classList.contains('light')) {
            target.classList.remove('light');
            target.classList.add('dark');
            target.classList.add('dark_toggle_out')
            setTimeout(()=>{
                target.innerHTML = `&#9790;`;
                target.classList.remove('dark_toggle_out')
            },500)
            this.updateBGColor("--app-background-r", 0)
            this.updateBGColor("--app-background-g",13)
            this.updateBGColor("--app-background-b",30)
            this.dark = true;
       } else {
           target.classList.remove('dark');
           target.classList.add('light');
           target.classList.add('dark_toggle_out')
            setTimeout(()=>{
                target.innerHTML = `&#9788;`;
                target.classList.remove('dark_toggle_out')
            },500)
           this.updateBGColor("--app-background-r", 255)
            this.updateBGColor("--app-background-g",255)
            this.updateBGColor("--app-background-b",255)
           this.dark = false;
       }
    }
    firstUpdated(){
        const navLinks = this._allNavLinks();
        const currentPath = location.pathname;
    //navlink event listeners
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
          //window size event listener
        this.windowDim = {...this.windowDim, width:window.innerWidth, height:window.innerHeight}
        window.addEventListener('resize', (e)=>{
            this.windowDim = {...this.windowDim, width:window.innerWidth, height:window.innerHeight}
        });

        //event listener for checkbox theme change
   
    }
    _allNavLinks(){
        return Array.from(this.shadowRoot.querySelectorAll('.nav-link'));
    }
}



customElements.define('portfolio-app', App);