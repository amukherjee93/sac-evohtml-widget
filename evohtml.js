class EvoHTML extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowrRoot.innerHTML = `
			<div style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center;">
				<div style="transform: rotate (-90deg); white-space: nowrap; font-family: Arial; font-size: 14px;">
					Rotated Text
				</div>
			`;
		}
	}

customElements.define("com-custom-evohtml", EvoHTML);