import Mission from "./Mission";
import Vision from "./Vision";
import './Grid.css'

export default function GridItems(){
    return(
        <>
        <div className="flex flex-row gap-12 gBox">
        <Mission/>
        <Vision/>
        </div>
        </>
    );
}