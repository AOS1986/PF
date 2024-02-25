import WorkCard from "../components/WorkCard";
import { portfolioList } from './../assets/DummyData';

function Portfolio(){
    const anzElemente = 4;
    const anzCol = Math.ceil(portfolioList.length / anzElemente);
    
    console.log(anzCol);
    
    return(
        <div className="bg-slate-200 h-screen font-helvetica flex justify-center">
            <div className="bg-white rounded-3xl w-3/4 h-3/4 flex flex-col overflow-auto mt-14">

                {[...Array(anzCol)].map((col, i) => {
                    return(
                        <div key={i} className="p-10 flex flex-row space-x-10 justify-center items-center">
                            {portfolioList.map((item, j) => {
                                let e_end = (i+1)*anzElemente;
                                let e_start = e_end - anzElemente;
                                if(j >= e_start && j < e_end){
                                    return( 
                                        <WorkCard  key={j} titel={item.titel} desc={item.desc} img={item.img} core={item.core} longDesc={item.longDesc} imgPath={item.imgPath} attDesc={item.attDesc} attachment={item.attachment}/>
                                    );
                                }
                            })}
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default Portfolio;
