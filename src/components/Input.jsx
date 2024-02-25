function Input(props){
    return(
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={props.type} aria-autocomplete="false"></input>
    );
}
export default Input;