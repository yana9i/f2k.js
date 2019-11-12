class F2kNavSideItem extends HTMLElement {
    constructor(){
        super()

        this.shadow = this.attachShadow({mode:'closed'});

        this.render()
    }

    get selected(){
        return this.hasAttribute('selected');
    }
    set selected(val){
        if (val) {
            this.setAttribute('selected', '');
            this.shadow.firstElementChild.setAttribute('style',`color:#20a0ff;`);
        } else {
            this.removeAttribute('selected');
            this.shadow.firstElementChild.removeAttribute('style');
        }
    }

    static get observedAttributes() {
        return ['selected']
    }

    connectedCallback(){
        this.addEventListener('click',(event)=>{
            event.preventDefault();
            const myEvent = new CustomEvent('nav-item-click',{
                detail:{clickedItem:event.currentTarget},
                bubbles:true
            })
            this.dispatchEvent(myEvent)
        })
    }

    render(){
        this.shadow.innerHTML = '';

        const template = document.createElement('template');

        template.innerHTML = `
            <li><slot></slot></li>
            <style>
            :host {
                display: block;
            }

            li {
                height: 56px;
                line-height: 56px;
                font-size: 14px;
                color: #48576a;
                padding: 0 20px;
                cursor: pointer;
                position: relative;
                transition: border-color .3s,background-color .3s,color .3s;
                box-sizing: border-box;
                white-space: nowrap;
                list-style:none
            }

            li:hover {
                background-color: #d1dbe5;
            }

            </style>
        `

        if(this.selected) {
            template.content.firstElementChild.setAttribute('style',`color:#20a0ff;`);
        }

        this.shadow.appendChild(template.content.cloneNode(true));
    }
}

export default F2kNavSideItem