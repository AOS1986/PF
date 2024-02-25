import CardComp from "./../components/CardComp";
import PrevDetail from "../components/PrevDetail";
import { schoolData, professionData } from "./../assets/DummyData";
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';


import { useState } from "react";



function Previously(){
const [taskSelected, setTaskSelected] = useState(false);
const [dataDescription, setDataDescription] = useState();



    function handleClick(data){
        if(data.tasks){
            setTaskSelected(true);
            setDataDescription(data);
        }   
    }

    return(
        <div className="bg-slate-200 h-screen font-helvetica flex justify-center">
            <div className="bg-white rounded-3xl p-5 w-3/4 h-3/4 mt-14 flex flex-row">
                 {/*Schule*/}
                <div className="basis-1/3 flex flex-col items-center">
                    <div className="flex flex-row pb-8">
                        <div><SchoolIcon style={{color: '#9400D3', fontSize: 60}}/></div>
                        <div className="flex items-center ml-1 font-bold font-roboto text-2xl"> -Aus- & Weiterbildung</div>
                    </div>
                    
                    <div className="overflow-auto">
                        {schoolData.map((data, i) => {
                            return(
                                    <CardComp key={i} onSelect={() => handleClick(data)} id={(data.id)} von={data.von} bis={data.bis} titel={data.titel} kurz={data.kurz} tasks={data.tasks}/>
                                );
                            })
                        } 
                    </div> 
                </div>
                
                    

                {/*Beruf*/}
                <div className="basis-1/3 flex flex-col items-center">
                    <div className="flex flex-row pb-8">
                        <div><WorkHistoryIcon style={{color: '#9400D3', fontSize: 60}}/></div>
                        <div className="flex items-center ml-1 font-bold font-roboto text-2xl"> - Berufsweg</div>
                    </div>
                    <div className="overflow-auto">
                        {professionData.map((data, i) => {
                            return(
                                    <CardComp key={i} onSelect={() => handleClick(data)} id={(data.id+1)} von={data.von} bis={data.bis} titel={data.titel} kurz={data.kurz} tasks={data.tasks}/>
                                );
                            })
                        } 
                    </div>
                </div>
                {/*Anzeige Beschreibung*/}
                {taskSelected &&
                    <div className={taskSelected ? "basis-1/3 flex flex-col items-center bg-slate-200 rounded-3xl px-5" : "basis-1/3 flex flex-col items-center"}>
                        {taskSelected && (
                            <PrevDetail data={dataDescription} onClose={() => setTaskSelected(false)}/>
                        )} 
                    </div>
                }

            </div>
        </div>
    );
}
export default Previously;
