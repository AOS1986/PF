import DescriptionIcon from '@mui/icons-material/Description';
import CancelIcon from '@mui/icons-material/Cancel';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';



function PrevDetail(props){
const dataDescription = props.data;
    return(
    <>
        <div className="flex flex-row">
            <div><DescriptionIcon style={{color: '#9400D3', fontSize: 60}}/></div>
            <div className="flex items-center ml-1 font-bold font-roboto text-2xl"> - Was hat er da denn gemacht?</div>
        </div>

        <div className="pb-5 cursor-pointer" onClick={props.onClose}><CancelIcon style={{color: '#9400D3'}}/> schließen</div>

        <div className="w-full h-full overflow-auto">
            <div className="font-bold">{dataDescription.titel}</div>
            <div className="text-zinc-400 text-sm pb-5">{dataDescription.von == "" ? dataDescription.bis : dataDescription.von + " - " + dataDescription.bis}</div>
            <div className="mb-10" dangerouslySetInnerHTML={{__html: dataDescription.tasks}}></div>
            {dataDescription.attachment && (
                <a href ={"http://www.scheuermann.tech/portfolio/pdf/" + dataDescription.attachment} target = "_blank">
                    <div className="flex flex-col justify-center items-center">
                        <PictureAsPdfIcon style={{fontSize: 50, color: '#19e619'}} />
                        <div className='font-bold mt-1 mb-10'>{dataDescription.attDesc}</div>
                    </div>
                    
                </a>
            )}
                
        </div>
    </>
    );
}
export default PrevDetail;
