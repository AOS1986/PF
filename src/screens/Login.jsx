import welcomeImg from "../assets/welcomeImg_us.png";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";

function Login(){
    return(
        <div className="flex h-auto md:h-screen bg-slate-200 py-2 md:py-0">
            <div className="w-5/6 md:w-2/5 h-auto m-auto flex flex-col-reverse md:flex-row md:rounded-3xl shadow-2xl bg-gray-100" >
            <div className="basis-1/2">
                <div className="flex flex-col w-full h-full m-auto">
                    <div className="basis-1/2 flex flex-col w-4/5 m-auto p-5">
                        <Label value="Username" />
                        <Input type="text"/>

                        <Label value="Passwort" />
                        <Input type="password"/>

                        <Button value="Login"/>
                        </div>
                    </div>
            </div>
            <div className="basis-1/2 md:rounded-l-[125px] items-center mb-10 md:mb-0">
                <img className="object-cover h-[100%] md:rounded-l-[125px] md:rounded-r-3xl float-right" src={welcomeImg} alt="Willkommen"/>
            </div>
            </div>
        </div>
    );
}

export default Login;