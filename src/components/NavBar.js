import {LitElement, html} from '../../assets/@polymer/lit-element';

class NavBar extends LitElement {
    render() {
        return html`
            <style>
                .nav{
                    display:flex;
                    padding:15px 10px;
                }
                a{
                    padding:7px;
                }
            </style>
            <div class="nav">
                <a href="/">home</a>
                <a href="/projects">projects</a>
                <a href="/music">music</a>
                <a style="margin-left:auto;" href="/contact">contact</a>
            </div>
        `;
    } 
}

customElements.define("nav-bar", NavBar);