class F2kNavSide extends HTMLElement{
    constructor(){
        super();

        this.shadow  = this.attachShadow({mode:"open"});

        this.render();
    }

    connectedCallback(){
        this.addEventListener('nav-item-click',(event)=>{
            event.preventDefault();
            Array.from(this.children).map(item=>{
                if(item.isEqualNode(event.detail.clickedItem)) {
                   item.selected = true;
                }
                else {
                    item.selected = false;
                }
            })
        })
    }

    render(){
        this.shadow.innerHTML = '';

        const template = document.createElement('template');

        template.innerHTML = `
            <ul><slot></slot></ul>
            <style>
                :host {
                    display: block;
                }

                ul {
                    text-align: left;
                    display: inline-block;
                    background-color: rgb(238, 241, 246);
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }                        

            </style>
        `

        this.shadow.appendChild(template.content.cloneNode(true));

    }
}

export default F2kNavSide 