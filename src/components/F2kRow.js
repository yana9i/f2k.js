class F2kRow extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'closed' })
        this.render();
    }


    get justify() {
        return this.getAttribute('justify');
    }
    set justify(val) {
        if (val) {
            this.setAttribute('justify', val);
        } else {
            this.removeAttribute('justify');
        }
    }

    get align() {
        return this.getAttribute('align');
    }
    set align(val) {
        if (val) {
            this.setAttribute('align', val);
        } else {
            this.removeAttribute('align');
        }
    }

    static get observedAttributes() {
        return [ 'justify', 'align']
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }

    render() {
        this.shadow.innerHTML = '';

        const template = document.createElement('template');
        template.innerHTML = `
        <div class="row"><slot></slot></div>
        <style>
            :host {
                margin: 0;
                padding: 0;
                display: flex;
                width:100%;
            }
            
            div {
                display: flex;
                ${this.justify? `justify-content:${this.justify}`:''}
            }
            
            .row {
                position: relative;
                box-sizing: border-box;
                width:100%
            }
        </style>
        `

        this.shadow.appendChild(template.content.cloneNode(true))



    }
}


export default F2kRow;