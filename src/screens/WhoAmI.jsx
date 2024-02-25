import { Link } from 'react-router-dom';

import ContactDetails from "../components/ContactDetails";

import foto from './../assets/foto.png';
import xingIMG from './../assets/xing.svg';
import linkedInIMG from './../assets/linkedin.svg';

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake';

function WhoAmI(){
    let detailArr = [
        {icon: <PhoneIphoneIcon className='text-[#9400D3]' style={{ fontSize: 30 }}/>,hText: "Handy", descText: "01590 / 1899655"},
        {icon: <AlternateEmailIcon className='text-[#9400D3]' style={{ fontSize: 30 }}/>,hText: "E-Mail", descText: "scheuermann.andy@gmail.com"},
        {icon: <PlaceIcon className='text-[#9400D3]' style={{ fontSize: 30 }}/>,hText: "Location", descText: "Erding / Bayern"},
        {icon: <CakeIcon className='text-[#9400D3]' style={{ fontSize: 30 }}/>,hText: "Geburtsdatum", descText: "17.07.1986", noPadding:true}
    ];
    
        return(
            <div className="bg-slate-200 h-screen flex justify-center pt-14 font-helvetica">
                <div className="flex  w-3/4 h-5/6 flex-row">
                    
                    <div className="basis-1/4 h-auto flex flex-col items-center">
                        <div className='z-10'>
                            <img src={foto} width={250} height={250} alt="Logo" className=" rounded-3xl"/>
                        </div>
                        <div className="bg-white w-5/6 h-ol rounded-3xl p-2 -m-36 pt-40 flex flex-col items-center">
                            <div className='flex flex-col justify-center items-center'>
                                <div className="font-bold">Andreas Scheuermann</div>
                                <div className="bg-slate-100 p-2 rounded-md">Full Stack Entwickler</div>
                            </div>
    
                            <div className="flex flex-row my-6 justify-center">
                                <Link to="https://www.xing.com/profile/Andreas_Scheuermann4" target="_blank" rel="noopener noreferrer">
                                    <img src={xingIMG} width={25} height={25} alt="Xing"/>
                                </Link>
                               {/*
                                <Link to="https://www.linkedin.com/in/andreas-scheuermann-6363ab171" target="_blank" rel="noopener noreferrer" className="ml-5">
                                    <img src={linkedInIMG} width={25} height={25} alt="LinkedIn"/>
                                </Link>
                               */}
                            </div>
    
                            <div className="bg-slate-100 h-4/6 w-11/12 rounded-3xl flex flex-col justify-center">
                                {detailArr.map((detail, i) => {
                                    return(
                                        <ContactDetails key={i} hText= {detail.hText} descText= {detail.descText} noPadding={detail.noPadding}>
                                            {detail.icon}
                                        </ContactDetails>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
        
                    <div className="basis-3/4 w-full bg-white rounded-3xl p-3 overflow-auto">
                        <div className='text-4xl font-bold font-roboto'>Wer bin ich?</div>
                        <div className='w-full pt-5'>
                        <div className='font-bold'>Hallo und herzlich willkommen auf meiner Portfolio-Website!</div>
<br/>
Ich bin Andy, ein verheirateter Familienvater mit zwei wundervollen Töchtern im Alter von 12 und 15 Jahren. <br/>
Seit 2014 bin ich als Bereichsleiter in einer privaten Notrufzentrale tätig, wo ich die Abteilungen Operating, Datencenter, Entwicklung und Interventionsstelle koordiniere und leite. <br/>
<br/>
Mit einem Mitarbeiterstamm von rund 30 Mitarbeitern trage ich eine verantwortungsvolle Rolle.<br/>
Holding-Übergreifend umfasst die Betreuung in IT-Angelegenheiten etwa 350 Mitarbeiter.<br/>
<br/>
Meine Reise in die Welt der Softwareentwicklung begann bereits im Jahr 2002, als ich mir HTML, CSS und JavaScript selbst beigebracht habe. 
Was als Gelegenheitshilfe für Freunde und Verwandte begann, entwickelte sich schnell zu einer Leidenschaft, die ich seit 2017 auch beruflich verfolge. <br/>
Seitdem habe ich mich kontinuierlich in den Bereichen Front- & Backend-Entwicklung weitergebildet und zahlreiche Projekte erfolgreich umgesetzt.<br/>
<br/>
Als Autodidakt ohne akademischen Hintergrund oder formale Ausbildung als Informatiker habe ich dennoch einen beeindruckenden Weg in der IT eingeschlagen. <br/>
Meine Softskills, darunter Konfliktmanagement, Flexibilität, Stressresistenz und Führungskompetenz, habe ich im Laufe der Jahre durch meine Tätigkeit als Bereichsleiter entwickelt und verfeinert. 
Zudem zeichne ich mich durch meine Beständigkeit aus, die sich nicht nur in meiner langjährigen Tätigkeit im aktuellen Unternehmen, sondern auch in meinem Engagement bei unseren Sommerfesten zeigt, wo ich stets als der Bratmaxe am Grill agiere.<br/>
<br/>
<div className='font-bold'>Warum möchte ich nun den Schritt in die Softwareentwicklung vollziehen?</div><br/>
Die Faszination für das Programmieren ist über die Jahre stetig gewachsen, insbesondere wenn es darum geht, Lösungen in einem Live-Betrieb umzusetzen. Der Nervenkitzel und die Herausforderung, die damit einhergehen, reizen mich ungemein. <br/>
Hinzu kommt mein Hobby der Prototypenentwicklung mit 3D-Druckern, Lasern, Arduino, Raspberry und Co., das mich dazu motiviert, meine Kenntnisse zu vertiefen und neue Technologien zu erlernen.<br/>
<br/>
Ich freue mich darauf, meine Leidenschaft für die Softwareentwicklung in einem neuen beruflichen Umfeld weiter auszubauen und bin gespannt auf die Möglichkeit des Austauschs mit Gleichgesinnten. <br/>
Wenn Du Interesse hast, mehr über mich zu erfahren oder eine Zusammenarbeit in Betracht ziehst, zögere nicht, auf den <br/>
"Melde dich" <br/>
Button zu drücken. <br/><br/>
Ich freue mich darauf, von Dir zu hören und bin bereit, gemeinsam Großes zu erreichen! :)
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }
export default WhoAmI;
