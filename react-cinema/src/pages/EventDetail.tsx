import { useParams } from "react-router-dom";
import { LayoutPage } from "../layout/LayoutHoc";

function EventDetail() {
    
    const { eventId } = useParams<string>();

    return ( 
        <>
           {eventId}
        </>
     );
}

const LayoutEventDetail = LayoutPage(EventDetail);

export default LayoutEventDetail;