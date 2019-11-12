class F2kInput extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'closed' });

        this.render();
    }

    get placeholder(){
        return this.getAttribute('placeholder');
    }
    set placeholder(val){
        if (val) {
            this.setAttribute('placeholder', val);
        } else {
            this.removeAttribute('placeholder');
        }
    }

    render() {
        this.shadow.innerHTML = '';

        const template = document.createElement('template');

        template.innerHTML = `
            <input 
                ${this.placeholder?`placeholder=${this.placeholder}`:``}
            />
            <style>
            :host {
                display:inline;
            }
            input {
                background-color: #fff;
                background-image: none;
                border-radius: 4px;
                border: 1px solid #dcdfe6;
                box-sizing: border-box;
                color: #606266;
                display: inline-block;
                font-size: inherit;
                height: 40px;
                line-height: 40px;
                outline: none;
                padding: 0 15px;
                transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            }

            input:hover {
                border-color: #8391a5;
            }
            </style>
        `

        this.shadow.appendChild(template.content.cloneNode(true));
    }

}

export default F2kInput;