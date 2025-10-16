class VerticalText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'text') {
      this.render();
    }
  }

  render() {
    const text = this.getAttribute('text') || 'VERTICAL';

    this.shadowRoot.innerHTML = `
      <style>
        .rotated-text {
          display: inline-block;
          transform: rotate(-90deg);
          transform-origin: left top;
          font-family: Arial, sans-serif;
          font-size: 16px;
          color: #333;
          white-space: nowrap;
        }
      </style>
      <div class="rotated-text">${text}</div>
    `;
  }
}

customElements.define('vertical-text', VerticalText);
