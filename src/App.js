import Header from "./component/header";
import Middle from "./component/middle";
import Working from "./component/working";
import Section from "./component/section";
import Pricing from "./component/pricing";
import Bottom from "./component/bottom";

export default function App(){
  return (
    <div className="relative">
    
    <Header />
    <Middle />
    <Working />
    <Section />
    <Pricing />
    <Bottom />
    
    
    </div>
    
    
  )
}