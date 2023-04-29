import { MarkerF } from "@react-google-maps/api";
import React, { useState } from "react";
import Modal from 'react-modal';
import EventInfo from "./eventInfo";
import "./customMarker.css"

const CustomMarker = ({data}) =>{
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleMerkerClick = () =>{
        setIsOpen(true);
    }

    const customIcon= {
        path: "M 20 -25 a 5 5 0 0 1 5 5 v 40 a 5 5 0 0 1 -5 5 h -10 l -5 5 l -5 -5 h -20 a 5 5 0 0 1 -5 -5 v -40 a 5 5 0 0 1 5 -5 z",
        fillColor: "white",
        fillOpacity: 2,
        strokeWeight: 1,
        rotation: 0,
        scale: 1,
    };

    const customStyles = {
        content: {
            width: '50%',
            height: '50%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
      };

    return(
        <div className="markerItem">
            <MarkerF
                position={{lat: data[0].activity_latitude, lng: data[0].activity_longitude}}
                icon={customIcon}
                visible={true}
            />

            <MarkerF
                position={{lat: data[0].activity_latitude, lng: data[0].activity_longitude}}
                icon={{
                  url: data[0].activity_picture,
                  scaledSize: new window.google.maps.Size(46, 46),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(23, 23),
                }}
                visible={true}
                onClick={() => {
                    handleMerkerClick();
                }}
            />

           <Modal
            isOpen = {isOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={customStyles}
           >
            <button className="button" onClick={closeModal}>CLOSE</button>

            <div className="eventContainer">
                {
                    data.map((ele) => (
                        <EventInfo key={ele.activity_id} thisEvent={ele}></EventInfo>
                    ))
                }
            </div>

           </Modal>    
        </div>
    )
};

export default CustomMarker;