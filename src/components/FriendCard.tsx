import React from "react";
import "./FriendCard.css";
import { Link } from "react-router-dom";
import { IFriend } from "../models/Interfaces";

type FRI = {
    friend: IFriend
};

export const FriendCard = ({ friend }: FRI) => {
    return (
        <React.Fragment>
            <section 
                className="friend" 
                key={friend.id}
            >
                <div>
                    <img 
                        src={friend.image} 
                        alt={friend.first} 
                    />
                </div>
                <div>
                    <h3>{friend.first} {friend.last}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Info: {friend.info}</p>
                </div>
                <div>
                    <Link 
                        to={`/edit/${friend.id}`}
                        >Update
                    </Link>
                </div>
            </section>
        </React.Fragment>
    );
};


