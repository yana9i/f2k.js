class F2kCol extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' });
        this.render()
    }

    get span() {
        return this.getAttribute('span');
    }
    set span(val) {
        if (val) {
            this.setAttribute('span', val);
        } else {
            this.removeAttribute('span');
        }
    }

    get offset(){
        return this.getAttribute('offset');
    }
    set offset(val){
        if (val) {
            this.setAttribute('offset', val);
        } else {
            this.removeAttribute('offset');
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }

    static get observedAttributes() {
        return ['span','offset']
    }



    render() {
        this.shadow.innerHTML = ``;

        const template = document.createElement('template');
        template.innerHTML = `
        <div class="col"><slot></slot></div>
        <style>
            :host {
                margin: 0;
                padding: 0;
                width:100%;
                display:block;
                width: ${this.span / 0.24}%;
                ${this.offset?`margin-left:${this.offset/0.24}%`:''};
            }


            div {
                float: left;
                box-sizing: border-box;
                display: block;
            }

            .col {
                width: 100%;

            }
        </style>
        `

        this.shadow.appendChild(template.content.cloneNode(true));
    }


}


export default F2kCol;