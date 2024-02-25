import imgFrontend from './../assets/frontend.png';
import imgBackend from './../assets/backend.png';
import imgDB from './../assets/database.png';
import imgMethods from './../assets/methods.png';
import imgBasics from './../assets/basics.png';
import { skillImages } from "./../assets/DummyData";
import Divider from '@mui/material/Divider';


function Skills(){
    return(
        <div className="bg-slate-200 h-screen font-helvetica flex justify-center">
            <div className="bg-white flex flex-col rounded-3xl p-2 w-3/4 h-3/4 mt-14">
            {/*oben*/}
                <div className="basis-3/5 flex flex-row">
                {/*backend*/}
                    <div className="basis-1/3 flex  flex-col justify-center p-2">
                        <div className='flex flex-row justify-center items-center'>
                            <img className="h-14" src={imgBackend} alt="Backend" />
                            <div className="ml-4 font-bold font-roboto text-2xl">Backend</div>
                        </div>
                        <Divider className="pt-5"/>
                        <div className="h-full p-4 flex flex-col">
                            <div className="flex space-x-10 items-center justify-center pt-3">
                                <img className="h-16 flex" src={skillImages.backend[0]} alt="html" />
                                <img className="h-16 flex" src={skillImages.backend[1]} alt="html" />
                            </div>
                        </div>
                    </div>
                {/*frontend*/}
                    <div className="basis-1/3 flex  flex-col justify-center p-2">
                        <div className='flex flex-row justify-center items-center'>
                            <img className="h-14" src={imgFrontend} alt="Frontend" />
                            <div className="ml-4 font-bold font-roboto text-2xl">Frontend</div>
                        </div>
                        <Divider className="pt-5"/>
                        <div className="h-full p-4 flex flex-col">
                            <div className="flex space-x-10 items-center justify-center pt-3">
                                <img className="h-20 flex" src={skillImages.frontend[0]} alt="html" />
                                <img className="h-20 flex" src={skillImages.frontend[1]} alt="html" />
                                <img className="h-20 flex" src={skillImages.frontend[2]} alt="html" />
                            </div>
                            <div className="flex space-x-8 items-center justify-center pt-10">
                                <img className="h-16 flex" src={skillImages.frontend[3]} alt="html" />
                                <img className="h-16 flex" src={skillImages.frontend[4]} alt="html" />
                                <img className="h-16 flex" src={skillImages.frontend[5]} alt="html" />
                            </div>
                            <div className="flex space-x-10 items-center justify-center pt-10">
                                <img className="h-8 flex" src={skillImages.frontend[6]} alt="html" />
                            </div>
                        </div>
                    </div>
                {/*database*/}
                    <div className="basis-1/3 flex  flex-col justify-start p-2">
                        <div className='flex flex-row justify-center items-center'>
                            <img className="h-14" src={imgDB} alt="DB" />
                            <div className="ml-4 font-bold font-roboto text-2xl">Datenbanken</div>
                        </div>
                        <Divider className="pt-5"/>
                        <div className="h-full p-4 flex flex-col">
                            <div className="flex space-x-10 items-center justify-center pt-3">
                                <img className="h-12 flex" src={skillImages.database[0]} alt="html" />
                                <img className="h-10 flex" src={skillImages.database[1]} alt="html" />
                            </div>
                            <div className="flex space-x-10 items-center justify-center pt-10">
                                <img className="h-10 flex" src={skillImages.database[2]} alt="html" />
                            </div>
                        </div>
                    </div>
                </div>
             {/*unten*/}
                <div className="basis-2/5 flex flex-row">
                {/*links*/}
                    <div className="basis-2/4 flex  flex-col justify-start p-2">
                        <Divider/>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img className="h-14" src={imgMethods} alt="DB" />
                            <div className="ml-4 font-bold font-roboto text-2xl">Methoden</div>
                        </div>
                        <Divider className="pt-5"/>
                        <div className="h-full p-4 flex flex-col justify-start items-center font-bold">
                            <div>Git</div>
                            <div>Scrum</div>
                            <div>Kanban</div>
                        </div>
                    </div>
                {/*rechts*/}
                    <div className="basis-2/4 flex  flex-col justify-start p-2">
                        <Divider/>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img className="h-14" src={imgBasics} alt="Basics" />
                            <div className="ml-4 font-bold font-roboto text-2xl">Basics</div>
                        </div>
                        <Divider className="pt-5"/>
                        <div className="h-full p-4 flex flex-col justify-start items-center font-bold">
                            <div>VBA, VBS, C#</div>
                            <div>Shopware 6</div>
                            <div>Figma</div>
                            <div>Midjourney</div>
                            <div>Photoshop, Lightroom, Illustrator, InDesign, XD</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;


