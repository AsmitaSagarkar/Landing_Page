import twitter from "./socialicons/twitter.png";
import linkedin from "./socialicons/twitter.png";
import github from "./socialicons/github.png";
import facebook from "./socialicons/facebook.png";
import play from "./socialicons/play.png";
import socialicon from "./socialicons/Socialicon.png";


export default function Footer(){
    return(

        <>
        <div className="md:px-4 px-0 flex-col justify-start items-center gap-8 inline-flex">
    <div className="w-screen h-px bg-gray-300"></div>
    <div className="self-stretch h-[92px] flex-col justify-center items-start gap-3 flex  text-center md:text-left" >
        <div className="self-stretch text-gray-700 lg:text-2xl md:text-xl textlg font-bold font-['Satoshi']">UniCraft</div>
        <div className="self-stretch text-gray-400 text-lg font-medium font-['Satoshi']">Design amazing digital experiences that<br/>create more happy in the world.</div>
    </div>
    <div className="self-stretch justify-start items-center gap-8 flex md:flex-row flex-col">
        <div className="grow shrink basis-0 h-6 justify-between items-center flex">
            <div className="grow shrink basis-0 text-gray-400 text-base font-normal font-['Inter'] leading-normal">© 2077 Untitled UI. All rights reserved.</div>
        </div>
        <div className="grow shrink basis-0 h-6 justify-end items-center gap-6 flex">
            <div className="justify-start items-center gap-2.5 flex">
                <div className="w-6 h-6 relative"><img alt="Loading..." src={twitter}/></div>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex"><img alt="Loading..." src={linkedin}/></div>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
                <div className="w-6 h-6 relative"><img alt="Loading..." src={facebook}/></div>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
                <div className="w-6 h-6 relative"><img alt="Loading..." src={github}/></div>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
                <div className="w-6 h-6 relative"><img alt="Loading..." src={play}/></div>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
                <div className="w-6 h-6 relative"><img alt="Loading..." src={socialicon}/></div>
            </div>
        </div>
    </div>
</div>
        </>
    )
} 