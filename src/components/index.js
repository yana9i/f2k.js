import CustomElement from './CustomElement'
import F2kButton from './F2kButton';
import F2kRow from './F2kRow';
import F2kCol from './F2kCol';
import F2kForm from './F2kForm';
import F2kFormItem from './F2kFormItem';
import F2kInput from './F2kInput';
import F2kNavSide from './F2kNavSide';
import F2kNavSideItem from './F2kNavSideItem';

export default ()=>{
    customElements.define('custom-element', CustomElement);
    customElements.define('f2k-button',F2kButton);
    customElements.define('f2k-row',F2kRow);
    customElements.define('f2k-col',F2kCol);
    customElements.define('f2k-form',F2kForm);
    customElements.define('f2k-form-item',F2kFormItem);
    customElements.define('f2k-input',F2kInput);
    customElements.define('f2k-nav-side',F2kNavSide);
    customElements.define('f2k-nav-side-item',F2kNavSideItem);
}