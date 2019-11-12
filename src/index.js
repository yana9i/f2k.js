import axios from 'axios';

import components from './components';

components();

const div = document.createElement('div');

div.innerHTML = `
<f2k-button type="plain"  disabled=true>一个很长很长很长很长很长很长很长很长很长很长的按钮 </f2k-button>
<f2k-button type="danger" disabled=true>按钮 </f2k-button>
<f2k-button type="foo" disabled=true > 按钮</f2k-button>
<f2k-row > 
    <f2k-col span=8 >
        <div style="width:100%;height: 400px;background: red"> </div>
    </f2k-col>
    <f2k-col span=4 offset=4>
        <div style="width:100%;height: 400px;background: gray"></div>
    </f2k-col> 
    <f2k-col span=8>
        <div style="width:100%;height: 400px;background: blue"></div>
    </f2k-col> 
</f2k-row>

<f2k-row > 
    <f2k-col span=12 >
        <f2k-nav-side>
            <f2k-nav-side-item selected>导航一</f2k-nav-side-item>
            <f2k-nav-side-item>分两开</f2k-nav-side-item>
            <f2k-nav-side-item>导航二</f2k-nav-side-item>
            <f2k-nav-side-item>导航三</f2k-nav-side-item>
        </f2k-nav-side>
    </f2k-col> 
    <f2k-col span=12>
        <div style="width:100%;height: 400px;background: #fff">
            <form>
                <f2k-form-item label="label1">
                    <f2k-input></f2k-input>
                </f2k-form-item>
                <f2k-form-item label="lfdsaaabel2">
                    <f2k-input placeholder='请输入输入'></f2k-input>
                </f2k-form-item>
                <button>submit</button>
                <f2k-button>发送</f2k-button>
            </form>
            <f2k-form>
                <f2k-form-item label="label3">
                    <f2k-input></f2k-input>
                </f2k-form-item>
            </f2k-form>
        </div>
    </f2k-col> 
</f2k-row>

<f2k-row>
    <f2k-col span=12><div style="width:100%;height: 200px;background: #eee"></div></f2k-col> 

</f2k-row>
`

document.addEventListener('submit',(e,...arr)=>{
    e.preventDefault();
    console.log(e,arr)
})

document.body.appendChild(div)