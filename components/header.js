/**
 *  Custom header for the whole website
 * 
 *  @author xislasb00
 */


class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" type="text/css" href="style.css">

            <header>
            <!-- Top fixed menu -->
                <nav class="menu">
                    <ul>
                        <li><a href="index.html">
                            <div class="logo">
                                <img title="City of Oviedo" src="favicon.png" height=50px alt="Home image">
                            </div>
                        </a></li>

                        <li><a href="#">Main page</a></li>
                        <li><a href="#">What to do</a></li>
                        <li><a href="#">Tourism offices</a></li>
                        <li><a href="#">Our culture</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('custom-header', Header);   //Register the custom element. Optional third parameter for extending.