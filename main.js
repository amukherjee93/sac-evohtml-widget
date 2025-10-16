class VerticalText extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'vertical-text');

    const text = this.getAttribute('text') || 'VERTICAL';
    wrapper.innerHTML = text.split('').join('<br>'); // Breaks each letter into a new line

    const style = document.createElement('style');
    style.textContent = `
      .vertical-text {
        font-family: Arial, sans-serif;
        font-size: 16px;
        white-space: pre;
        line-height: 1.2;
        text-align: center;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }

  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'text') {
      this.shadowRoot.querySelector('.vertical-text').innerHTML = newValue.split('').join('<br>');
    }
  }
}

customElements.define('vertical-text', VerticalText);