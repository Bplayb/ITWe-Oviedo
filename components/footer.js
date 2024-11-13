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
                        <li><a href="#"><i><b>TODO</b></i></a></li>
                        <li><a href="#">A mulatto</a></li>
                        <li><a href="#">An albino</a></li>
                        <li><a href="#">A mosquito</a></li>
                        <li><a href="#">My libido</a></li>
                    </ul>
                </nav>
            </footer>
        `;
    }
}

customElements.define('custom-footer', Footer);