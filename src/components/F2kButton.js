import parse from '../lib/parser';

const template = document.createElement('template');

class F2kButton extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'closed' });
        this.render()
    }

    static get observedAttributes() {
        return ['type', 'disable']
    }

    get type() {
        return this.getAttribute('type');
    }

    set type(value) {
        this.setAttribute('type', value);
    }

    get disable() {
        const value = this.getAttribute('disable');
        return value.toLowerCase === 'true'
    }

    set disable(value) {
        this.setAttribute('disable', value);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }

    render() {

        const template = document.createElement('template');

        template.innerHTML = `
            <button class="f2k-button" type="submit">
                <span>
                    <slot>按钮</slot>
                </span>
            </button>
            <style>

            ${(() => {
                switch (this.type) {
                    case 'success':
                        return `.f2k-button:focus, .f2k-button:hover {
                    border-color: #D5E2CC99;
                    background: #D5E2CC99
                }`
                    case 'warning':
                        return `.f2k-button:focus, .f2k-button:hover {
                        border-color: #EFBC8199;
                        background:  #EFBC8199;
                    }`
                    case 'danger':
                        return `.f2k-button:focus, .f2k-button:hover {
                        border-color: #DB805999;
                        background: #DB805999;
                    }`
                    case 'info':
                        return `.f2k-button:focus, .f2k-button:hover {
                        border-color: #518EFF99;
                        background: #518EFF99
                    }`
                    case 'primary':
                    default:
                        return `.f2k-button:focus, .f2k-button:hover {
                        color: #5994DB;
                        border-color: #5994DB;
                    }`
                }
            })()}

            .f2k-button {
                display: inline-block;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                background: ${(() => {
                switch (this.type) {
                    case 'success':
                        return `#D5E2CC`
                    case 'warning':
                        return `#EFBC81`
                    case 'danger':
                        return `#DB8059`
                    case 'info':
                        return `#518EFF`
                    case 'primary':
                    default:
                        return `#fff`
                }
            })()};
                border: 1px solid #c4c4c4;
                color: ${(() => {
                switch (this.type) {

                    case 'warning':
                    case 'danger':
                    case 'info':
                        return `#fff`
                    case 'primary':
                    case 'success':
                    default:
                        return `#000`
                }
            })()};
                margin: 0;
                padding: 10px 15px;
                border-radius: 4px;
                transition: 0.2s all;
                outline: 0;
                text-align: center;
            }

            </style>
            `
    
        this.shadow.innerHTML = '';
        this.shadow.appendChild(template.content.cloneNode(true));

    }
}

export default F2kButton;