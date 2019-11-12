class F2kForm extends HTMLElement{
    constructor(){
        super()

        this.shadow = this.attachShadow({mode:'open'});

        this.render()
    }

    
    get labelWidth(){
        return this.getAttribute('labelWidth');
    }
    set labelWidth(val){
        if (val) {
            this.setAttribute('labelWidth', val);
        } else {
            this.removeAttribute('labelWidth');
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }

    static get observedAttributes() {
        return ['labelWidth']
    }

    render(){
        this.shadow.innerHTML = '';

        const template = document.createElement('template');

        template.innerHTML = `
            <form><slot></slot></form>
        `

        this.shadow.appendChild(template.content.cloneNode(true));


    }
}


export default F2kForm;