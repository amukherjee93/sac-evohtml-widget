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
    const formattedText = text.split('').join('<br>');
    this.shadowRoot.innerHTML = `
      <style>
        .vertical-text {
          font-family: Arial, sans-serif;
          font-size: 16px;
          color: #333;
          line-height: 1.2;
          text-align: center;
          white-space: pre;
        }
      </style>
      <div class="vertical-text">${formattedText}</div>
    `;
  }
}

customElements.define('vertical-text', VerticalText);
