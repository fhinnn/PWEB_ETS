class header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <h1>
          <span><i class="fa-solid fa-champagne-glasses"></i>Ceritanya Perpustakaan<i class="fa-solid fa-champagne-glasses"></i></span>
        </h1>
        <h2>Temukan Ketenanganmu , Hidup cuman sekali bro :)</h2>
        <div class="nav-links">
          <ul>
          </ul>
        </div>
      </nav>
      `;
  }
}

customElements.define('header-bar', header);
