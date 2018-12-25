import {LitElement, html} from "../assets/@polymer/lit-element/lit-element";
import {Router} from '@vaadin/router';
import './components/NavBar.js';
import './components/Home.js';
import './components/Contact.js';
import './components/Projects.js';
import './components/Music.js';

class App extends LitElement {
    render() {
        return html`
            <style>
                html {
                    padding:0;
                    margin:0;
                }
            </style>
            <div id="app">
                <nav-bar></nav-bar>
                <div class="content"></div>
            </div>
        `;
    }
    firstUpdated() {
        const contentDiv = this.shadowRoot.querySelector('.content');
        const router = new Router(contentDiv)
        router.setRoutes([
            {path:'/',component:'home-view'},
            {path:'/projects',component:'projects-view'},
            {path:'/music',component:'music-view'},
            {path:'/contact',component:'contact-view'}
        ])
    }
}



customElements.define('portfolio-app', App);