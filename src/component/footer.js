class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <p style="text-align: center">Made By Dhafin Almas ❤️ for ETS PWEB .</p>        `;
  }
}

customElements.define('footer-bar', footer);
