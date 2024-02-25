import { useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import axios from 'axios';

function ContactButton(){
    const [isActive, setIsActive ] = useState("5px 5px 0px #000000");
    const [open, setOpen] = useState(false);
    const styleVar = "bg-[#55ff4e] hover:bg-[#55ff4e] text-slate-700 font-bold py-2 px-4 active:ml-1.5 active:mt-1.5 active:bg-[#55ff4e]";
    const [tfCompany, setTfCompany] = useState("");
    const [tfName, setTfName] = useState("");
    const [tfPhone, setTfPhone] = useState("");
    const [tfMail, setTfMail] = useState("");
    const [tfMsg, setTfMsg] = useState("");
    const [errOpen, setErrOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setErrOpen(false);
    };
    const handleSendMsg = () => {
      if(tfMail || tfPhone){
        setErrOpen(false);
        
        const data = {comp: tfCompany, name: tfName, phone: tfPhone, mail: tfMail, msg: tfMsg}; 
        axios.post('http://www.scheuermann.tech/portfolio/scripts/api.php?api=sendContactMail', data)
            .then(response => {
              console.log(response.data);
            }); 
            setTfCompany("");
            setTfMail("");
            setTfName("");
            setTfPhone("");
            setTfMsg("");
            setOpen(false);
      }else{
        setErrOpen(true);
      }
    }
    
    return(
      <>
       <Dialog
        open={open}
        maxWidth='xl'
        onClose={handleClose}
      >
        <DialogContent>
        <div className="w-[40em] h-[30em] p-10">
          <TextField id="tf_company" label="Firma" variant="outlined" fullWidth style={{marginBottom:"1em"}} color="secondary" onChange={(e) => setTfCompany(e.target.value)}/>
          <TextField id="tf_name" label="Name" variant="outlined" fullWidth style={{marginBottom:"1em"}} color="secondary" onChange={(e) => setTfName(e.target.value)}/>
          {errOpen && (
            <Alert severity="error">
              So kann ich mich aber nicht zurück melden :/ <br/>Bitte Rufnummer oder E-Mail-Adresse angeben.
            </Alert>
          )}
          <div className='flex flex-row justify-center items-center mb-14'>
            <TextField id="tf_phone" label="Rufnummer" variant="outlined" fullWidth color="secondary" onChange={(e) => setTfPhone(e.target.value)}/>
            <TextField id="tf_mail" label="Mail-Adresse" variant="outlined" fullWidth color="secondary" onChange={(e) => setTfMail(e.target.value)}/>
          </div>
          <TextField id="tf_msg" multiline label="Nachricht" variant="outlined" fullWidth style={{marginBottom:"1em"}} color="secondary" onChange={(e) => setTfMsg(e.target.value)}/>
          <Button onClick={handleSendMsg} variant="contained" color="secondary">Nachricht senden</Button>
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus color="secondary">
            doch nicht kontaktieren :(
          </Button>
        </DialogActions>
      </Dialog>
        <button onClick={handleClickOpen} className={styleVar} style={{boxShadow: isActive}}  onMouseDown={(e) => setIsActive('')} onMouseUp={(e) => setIsActive('5px 5px 0px #000000')} type="button" aria-autocomplete="false">
          <div className='flex flex-row'>
            <div><ChatIcon/></div>
            <div className='ml-2 font-helvetica'>Melde Dich!</div>
          </div> 
        </button>
      </>
    );
}
export default ContactButton;
