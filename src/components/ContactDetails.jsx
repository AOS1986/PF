


function ContactDetails(props){
    return(
        <div className={props.noPadding ? "flex flex-row" : "flex flex-row mb-7"}>
            <div className="flex basis-1/4 justify-center items-center">
                {props.children}
            </div>
            <div className="basis-3/4 flex flex-col">
                <div className='text-xs font-bold'>{props.hText}</div>
                <div className=' text-xs'>{props.descText}</div>
            </div>
        </div>
    );
}
export default ContactDetails;