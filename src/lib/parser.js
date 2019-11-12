export default {
    bool:str=>{
        str = str.toLowerCase();
        if(str === 'true')
            return true;
        return false
    },
    function:str=>{
        return new Function(str)
    }
}