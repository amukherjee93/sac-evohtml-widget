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
    const text = this.getAttribute('text') || 'VERTICALLL';

    this.shadowRoot.innerHTML = `
      <style>
        .rotated {
          transform: rotate(-90deg);
          transform-origin: left top;
          font-family: Arial, sans-serif;
          font-size: 24px;
          color: #333;
          white-space: nowrap;
          display: inline-block;
        }
      </style>
      <div class="rotated">${text}</div>
    `;
  }
}

customElements.define('vertical-text', VerticalText);

