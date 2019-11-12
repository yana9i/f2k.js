class F2kFormItem extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: "open" })

        this.render()
    }

    get label() {
        return this.getAttribute('label');
    }
    set label(val) {
        if (val) {
            this.setAttribute('label', val);
        } else {
            this.removeAttribute('label');
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }

    static get observedAttributes() {
        return ['label']
    }

    render() {
        this.shadow.innerHTML = '';

        const template = document.createElement('template');
        template.innerHTML = `
            <label>${this.label}</label><slot></slot>
            <style>
                :host {
                    display: block;
                }

                label {
                    text-align: right;
                    vertical-align: middle;
                    float: left;
                    font-size: 14px;
                    color: #606266;
                    line-height: 40px;
                    padding: 0 12px 0 0;
                    box-sizing: border-box;
                }

                :host:after, :host:before {
                    display: table;
                    content: "";
                }

                :host:after {
                    clear: both;
                }
            </style>
        `
        
        this.shadow.appendChild(template.content.cloneNode(true))

        if(this.parentElement.labelWidth){
            this.shadow.querySelector('label').style.width = this.parentElement.labelWidth+'px';
            console.log(this.shadow.querySelector('label').style.width);
        }
    }

}

export default F2kFormItem;