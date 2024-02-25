/* eslint-disable react/prop-types */

function Button(props){
    const styleVar = "mt-10 bg-[#55ff4e] hover:bg-[#1cae17] text-slate-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-10 md:mb-0";
    return(
        <button className={styleVar} type="button" aria-autocomplete="false">
                    {props.value}
                </button>
    );
}
export default Button;