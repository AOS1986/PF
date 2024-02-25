import AdsClickIcon from '@mui/icons-material/AdsClick';

function CardComp(props){

    return(
        <div onClick={props.onSelect} className={(props.tasks ? "cursor-pointer " : "") + (props.id % 2 == 0 ? "w-96 bg-cyan-50 p-2 rounded-lg mb-4" : "w-96 bg-red-50 p-2 rounded-lg mb-4")}>
            <div className="text-zinc-400 text-sm">{props.von == "" ? props.bis : props.von + " - " + props.bis}</div>
            <div className="font-bold text-lg">{props.titel}</div>
            <div className="flex flex-row">
                <div className="basis-3/4 text-zinc-400 text-sm float-left">{props.kurz}</div>
                <div className="basis-1/4 flex justify-end">{props.tasks ? <AdsClickIcon style={{ fontSize: 20 }}/> : ""}</div>
            </div>
            
        </div>
    );
}
export default CardComp;