import Zoom from "./images/zoom.png";
import Spotify from "./images/spotify.png";
import Zapier from "./images/zapier.png";
import Slack from "./images/slack.png";
import Adobe from "./images/adobe.png";
import Amazon from "./images/amazon.png";


export default function Logo() {
return(
    <>
        <div className="flex justify-center mt-16">
        <div class="text-center text-gray-400 text-sm font-medium font-['Satoshi']">Trusted By 250+ Companies</div>
        </div>

        <div className="flex justify-center gap-20 mt-5 mb-11">
         <img className="w-[72.22px] h-[36.11px]" src={Zapier} alt="Loading" />
         <img className="w-[72.22px] h-[36.11px]" src={Spotify} alt="Loading" />
         <img className="w-[72.22px] h-[36.11px]" src={Zoom} alt="Loading" />
         <img className="w-[72.22px] h-[36.11px]" src={Slack} alt="Loading" />
         <img  className="w-[72.22px] h-[36.11px]" src={Amazon} alt="Loading" />
         <img className="w-[72.22px] h-[36.11px]" src={Adobe} alt="Loading" />

        </div>


    </>
    )
}