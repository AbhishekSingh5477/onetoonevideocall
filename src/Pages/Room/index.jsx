import React from "react";
import "./index.css"
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const Roompage=()=>{
    const {roomId}=useParams();
    const myMeeting=async (element)=>{
        const appID= 1257157878;
        const serverSecret="54f5afaba9d010670a65f92b7153cb12";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId ,Date.now().toString(),"Abhishek Singh")
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:"Copy Link",
                    url:`http://localhost:5173/room/${roomId}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:false,
        });
    };
    return <div className="call">
        <div ref={myMeeting} />
    </div>
}
export default Roompage