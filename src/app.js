import {LitElement, html, unsafeCSS} from "lit-element";
import {connectRouter} from "lit-redux-router";

import bg1 from '../static/dudehead.svg';
import bg2 from '../static/oceanscape.svg';
import bg3 from '../static/templelines.svg';
import job_manage from '../static/jmsc_1.gif';
import milage_calc from '../static/mcsc-1.gif';

//components
import './components/NavBar.js';
import './components/Home.js';
import './components/Contact.js';
import './components/Projects.js';
//import './components/Music.js';

//store for router
import store from "./store.js";

//connect router
connectRouter(store);

class App extends LitElement {
    static get properties() {
        return {
            dark:{type:Boolean, reflect:true},    
            noborder:{type:Boolean},
            windowDim:{type:Object}
        }
    }

    static get styles() {
        return unsafeCSS`
        :host{
            --app-background-r:255;
            --app-background-g:255;
            --app-background-b:255;
            --app-background-a:1;
        }
        #app {
            display:grid;
            height:100%;
            grid-template-rows:auto auto 1fr;
            grid-template-areas:
                "h h h h h h h h h h h t"
                "n n n n n n n n n n n n"
                "ct ct ct ct ct ct ct ct ct ct ct ct";
            background-color: rgba(var(--app-background-r),var(--app-background-g), var(--app-background-b), var(--app-background-a));
            color:${this.dark ? `rgba(245,245,245, .7)`:`rgba(0,0,0, .5)`};
        }
        nav-bar {
            grid-area:n;
            padding:0px 5px;
        }
        .title {
            display:flex;
            grid-area:h;
            align-items:center;
            align-items:center;
            margin-left:6px;
            padding:15px 10px;
            font-size:19pt!important;
            font-family:arial;
            color:${this.dark ? `rgba(245,245,245, .7)`:`rgba(0,0,0, .5)`}
        }
        .app-content {
            grid-area:ct;
            border:${this.noborder ? 'none' : this.dark ? `solid 1px rgba(245,245,245, .5)`: `solid 1px rgba(128,128,128, .7)`};
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
            .title {
                display:flex;
                font-size:14pt;
                transition:font-size .3s;
            }
            .title > span {
                cursor:pointer;
                padding-right:15px;
                margin-left:auto;
                font-size:19pt;
            }
        }
        @media screen and (min-width: 688px) {
            .title {
                font-size:14pt;
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
                font-size:14pt;
                transition:font-size .3s;
            }

        }
    `;
    }
    constructor() {
        super();
        this.dark = false;
        this.noborder = false;
        this.windowDim = {width:0,height:0}
    }
    render(){
        return html`
            <style>
            .dark_toggle {
                grid-area:t;
                display:flex;
                min-width:40px;
                align-items: center;
                justify-content: center;
                font-size:11pt!important;
                cursor:pointer;
                opacity:1;
                transition:all .2s ease-in-out;
            }
            .dark_toggle_out {
                top:25px;
                opacity:0;
                transition:all .2s ease-in-out;
            }
            .title {color:${this.dark ? `rgba(245,245,245, .7)`:`rgba(0,0,0, .5)`}}
            a {
                border:${this.noborder ? `none`: ''};
            }
            #app{
                color:${this.dark ? `rgba(245,245,245, .7)`:`rgba(0,0,0, .5)`};
            }
            </style>
            <div id="app">
                <div class="title" style="position:relative;">
                    Dustin Erickson
                </div>
                <span class="dark_toggle ${this.dark ? 'dark' : 'light'}" title="Dark Toggle" @click="${this.handleThemeClick}">&#9788;</span>
                <nav-bar .dark=${this.dark} .noborder=${true}>
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
            </div>
        `;
    }
    updateBGColor(cssVar, newColor) {
        this.style.setProperty(cssVar, newColor);
    }
    handleThemeClick(e) {
        this._setTheme();
    }
    firstUpdated(){
        //set the theme based on if dark is passed to app
        this._setTheme(true);
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
        this.windowDim = Object.assign(this.windowDim,{width:window.innerWidth, height:window.innerHeight});
        window.addEventListener('resize', (e)=>{
            this.windowDim = Object.assign(this.windowDim,{width:window.innerWidth, height:window.innerHeight});
        });
   
    }
    _setTheme(initialTheme=false){
        const themeToggleElement = this.shadowRoot.querySelector('.dark_toggle');
        if(initialTheme) {
            themeToggleElement.classList.remove('light')
            themeToggleElement.classList.remove('dark')
            if(this.dark) {
                themeToggleElement.classList.add('light');
            } else {
                themeToggleElement.classList.add('dark');
            }
            
        }
        
        if (themeToggleElement.classList.contains('light')) {
            themeToggleElement.classList.remove('light');
            themeToggleElement.classList.add('dark');
            themeToggleElement.classList.add('dark_toggle_out')
            setTimeout(()=>{
                themeToggleElement.innerHTML = `&#9790;`;
                themeToggleElement.classList.remove('dark_toggle_out')
            },500)
            this.updateBGColor("--app-background-r", 0)
            this.updateBGColor("--app-background-g",13)
            this.updateBGColor("--app-background-b",30)
            this.updateBGColor("--app-background-a",0.78)
            this.dark = true;
       } else {
           themeToggleElement.classList.remove('dark');
           themeToggleElement.classList.add('light');
           themeToggleElement.classList.add('dark_toggle_out')
            setTimeout(()=>{
                themeToggleElement.innerHTML = `&#9788;`;
                themeToggleElement.classList.remove('dark_toggle_out')
            },500)
           this.updateBGColor("--app-background-r", 255)
            this.updateBGColor("--app-background-g",255)
            this.updateBGColor("--app-background-b",255)
            this.updateBGColor("--app-background-a",1)
           this.dark = false;
       }

    }
    _allNavLinks(){
        return Array.from(this.shadowRoot.querySelectorAll('.nav-link'));
    }
    _appStyle() {
        return html`
         
        `;
    }
}



customElements.define('portfolio-app', App);