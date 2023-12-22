import Header from "./component/header";
import Middle from "./component/middle";
import Working from "./component/working";
import Section from "./component/section";
import Pricing from "./component/pricing";
import Bottom from "./component/bottom";
import FAQ from "./component/frequentlyasked";

export default function App(){
  return (
    <div className="relative">
    
    <Header />
    <Middle />
    <Working />
    <Section />
    <Pricing />
    <FAQ />
    <Bottom />
    
    
    
    </div>
    
    
  )
}