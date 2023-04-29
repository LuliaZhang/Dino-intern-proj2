import React from "react";
import "./eventInfo.css";

const EventInfo = (data) =>{
    return(
        <div className="infoContainer">
            <div className="header">
                <p className="name">{data.thisEvent.activity_name}</p>
                <p className="summary">{data.thisEvent.activity_summary}</p>
            </div>

            <div className="details">
                <p>{data.thisEvent.activity_organizer} • {data.thisEvent.activity_category} • ${data.thisEvent.activity_cost}</p>
                
                <p className="location">
                    <span className="locIcon">
                        <svg>
                            <path fill="currentColor" d="M 12 7 c -1.93 0 -3.5 1.57 -3.5 3.5 S 10.07 14 12 14 s 3.5 -1.57 3.5 -3.5 S 13.93 7 12 7 Z m 0 5 c -0.827 0 -1.5 -0.673 -1.5 -1.5 S 11.173 9 12 9 s 1.5 0.673 1.5 1.5 S 12.827 12 12 12 Z m 0 -10 c -4.687 0 -8.5 3.813 -8.5 8.5 c 0 5.967 7.621 11.116 7.945 11.332 l 0.555 0.37 l 0.555 -0.37 c 0.324 -0.216 7.945 -5.365 7.945 -11.332 C 20.5 5.813 16.687 2 12 2 Z m 0 17.77 c -1.665 -1.241 -6.5 -5.196 -6.5 -9.27 C 5.5 6.916 8.416 4 12 4 s 6.5 2.916 6.5 6.5 c 0 4.073 -4.835 8.028 -6.5 9.27 Z">
                            </path>
                        </svg>
                    </span>
                    <span>{data.thisEvent.event_venue} </span>
                </p>

                <p className="link">
                    <span className="linkIcon">
                        <svg>
                            <path fill="currentColor" d="M 18.36 5.64 c -1.95 -1.96 -5.11 -1.96 -7.07 0 L 9.88 7.05 L 8.46 5.64 l 1.42 -1.42 c 2.73 -2.73 7.16 -2.73 9.9 0 c 2.73 2.74 2.73 7.17 0 9.9 l -1.42 1.42 l -1.41 -1.42 l 1.41 -1.41 c 1.96 -1.96 1.96 -5.12 0 -7.07 Z m -2.12 3.53 l -7.07 7.07 l -1.41 -1.41 l 7.07 -7.07 l 1.41 1.41 Z m -12.02 0.71 l 1.42 -1.42 l 1.41 1.42 l -1.41 1.41 c -1.96 1.96 -1.96 5.12 0 7.07 c 1.95 1.96 5.11 1.96 7.07 0 l 1.41 -1.41 l 1.42 1.41 l -1.42 1.42 c -2.73 2.73 -7.16 2.73 -9.9 0 c -2.73 -2.74 -2.73 -7.17 0 -9.9 Z">
                            </path>
                        </svg>
                    </span>
                    <span><a className="linkText" href={data.thisEvent.event_website}>website link</a></span>
                </p>

                <p className="time">
                    <span className="timeIcon">
                        <svg>
                            <path fill="currentColor" d="M 7 4 V 3 h 2 v 1 h 6 V 3 h 2 v 1 h 1.5 C 19.89 4 21 5.12 21 6.5 v 12 c 0 1.38 -1.11 2.5 -2.5 2.5 h -13 C 4.12 21 3 19.88 3 18.5 v -12 C 3 5.12 4.12 4 5.5 4 H 7 Z m 0 2 H 5.5 c -0.27 0 -0.5 0.22 -0.5 0.5 v 12 c 0 0.28 0.23 0.5 0.5 0.5 h 13 c 0.28 0 0.5 -0.22 0.5 -0.5 v -12 c 0 -0.28 -0.22 -0.5 -0.5 -0.5 H 17 v 1 h -2 V 6 H 9 v 1 H 7 V 6 Z m 0 6 h 2 v -2 H 7 v 2 Z m 0 4 h 2 v -2 H 7 v 2 Z m 4 -4 h 2 v -2 h -2 v 2 Z m 0 4 h 2 v -2 h -2 v 2 Z m 4 -4 h 2 v -2 h -2 v 2 Z">
                            </path>
                        </svg>
                    </span>
                    <span>{data.thisEvent.event_date} • {data.thisEvent.event_status} </span>
                </p>

                <p className="description">
                    <span>{data.thisEvent.activity_description} </span>
                </p>  
            </div>
        </div>
    );
}

export default EventInfo;