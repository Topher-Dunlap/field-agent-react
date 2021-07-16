import React from 'react';
import CardFooter from './CardFooter';
import AgentDataList from './AgentDataList';
import noImg from "../images/placeholder.png";

export default function AgentCard({firstName, lastName, dob, height, agencies, aliases}) {
    return (
        <div className="card">
            <h3 className="cardHeader">{`${firstName} ${lastName}`}</h3>
            <div className="cardMain">
                <div className="mainImgDiv">
                    <img src={noImg} className="right" alt="agent"/>
                </div>
                <div className="hrDivTop">
                    <hr/>
                </div>
                <AgentDataList
                   dob={dob}
                   height={height}
                   agencies={agencies}
                   aliases={aliases}
                />
            </div>
            <CardFooter/>
        </div>
    )
}