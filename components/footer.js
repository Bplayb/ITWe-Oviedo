/**
 *  Custom footer for the whole website
 * 
 *  @author xislasb00
 */


class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <nav class="footer">
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="https://www.oviedo.es/noticias">News</a></li>
                        <li><a href="https://www.facebook.com/www.oviedo.es/">Facebook</a></li>
                        <li><a href="https://x.com/aytoviedo">Twitter</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </nav>
            </footer>
        `;
    }
}

customElements.define('custom-footer', Footer);