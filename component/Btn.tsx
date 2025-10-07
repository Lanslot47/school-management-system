type proptype = {
    BtnText : String,
    bool: boolean
}
const Btn = (props:proptype) => {
    return (  
        <button className={(props.bool ? 'ml-10' : '' ) + 'sm:text-sm font-semibold px-4 py-4'}>{props.BtnText}</button>
    );
}

export default Btn;