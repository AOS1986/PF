import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


function WorkCard(props){
  const [open, setOpen] = useState(false);
  const [imgShow, setImgShow] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImgShow(0);
  };

  const handleImage = (x) => {
    setImgShow(x ==="+" ? imgShow == props.img ? 0 : imgShow + 1 : imgShow == 0 ? props.img : imgShow - 1);
  };
  return (
    <>
      <div className="flex flex-col w-52 h-52 rounded-2xl bg-slate-200 font-helvetica cursor-pointer border-solid border-2 border-slate-400" onClick={handleClickOpen}>
            <div className="flex w-full basis-1/2 items-center justify-center bg-white rounded-t-2xl">
                <img className="h-8" src={"http://www.scheuermann.tech/portfolio/img/" + props.imgPath + "/0.jpg"} alt="cardTitel" />
            </div>
            <div className=" flex flex-col w-full basis-1/2 p-2">
                <div className="font-bold">{props.titel}</div>
                <Divider/>
                <div className="font-semibold text-gray-600 text-xs mt-3 mb-3">{props.desc}</div>
                <div className="text-sm">{props.core}</div>
            </div>
        </div>
     
      <Dialog
        open={open}
        maxWidth='xl'
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="">
            <div className="font-bold">{props.titel}</div>
            <div className="text-xs">{props.desc}</div>
        </DialogTitle>
        <DialogContent>
        <div className="flex flex-col justify-start items-center h-[30em]">
          <div className="flex flex-row justify-center items-center">
            <ArrowCircleLeftIcon style={{fontSize: 40, color: '#9400D3'}} onClick={() => handleImage('-')}/>
              <div className="text-xs font-semibold p-1">{imgShow+1}/{props.img+1}</div>
            <ArrowCircleRightIcon style={{fontSize: 40, color: '#9400D3'}} onClick={() => handleImage('+')} />
          </div>
          <a href={"http://www.scheuermann.tech/portfolio/img/" + props.imgPath + "/" + imgShow + ".jpg"} target="_blank" rel="noopener noreferrer">
            <img src={"http://www.scheuermann.tech/portfolio/img/" + props.imgPath + "/" + imgShow + ".jpg"} className="max-w-[25em] max-h-[25em] mx-3 border border-solid border-0 p-2"/>
          </a>
          
  
          <div className="flex flex-col items-start w-full pt-5">
            <div dangerouslySetInnerHTML={{__html: props.longDesc}} className="mb-5"/>
            {props.attachment && (
                <a href ={"http://www.scheuermann.tech/portfolio/pdf/" + props.attachment} target = "_blank">
                    <div className="flex flex-col justify-center items-center">
                        <PictureAsPdfIcon style={{fontSize: 50, color: '#19e619'}} />
                        <div className='font-bold mt-1 mb-10'>{props.attDesc}</div>
                    </div>
                    
                </a>
            )}
          </div>
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus color="secondary">
            Schließen
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default WorkCard;
