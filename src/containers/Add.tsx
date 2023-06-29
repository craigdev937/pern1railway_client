import React from "react";
import "./Add.css";
import { useNavigate } from "react-router-dom";
import { FriendAPI } from "../global/FriendAPI";
import { IFriend } from "../models/Interfaces";

export const Add = () => {
    const navigate = useNavigate();
    const [addFriend] = FriendAPI.useAddMutation();
    const [friend, setFriend] = React.useState<IFriend>({
        id: "", first: "", last: "", 
        age: 0, info: "", image: ""
    });

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setFriend({...friend, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit =
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await addFriend(friend);
        setFriend({
            id: "", first: "", last: "", 
            age: 0, info: "", image: ""
        });
        navigate("/");
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="first"
                    placeholder="First"
                    value={friend.first}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="last"
                    placeholder="Last"
                    value={friend.last}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="age"
                    placeholder="Age"
                    value={friend.age}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="info"
                    placeholder="Info"
                    value={friend.info}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="image"
                    placeholder="Image"
                    value={friend.image}
                    onChange={handleChange}
                />
                <button 
                    type="submit"
                    >Add Friend
                </button>
            </form>
        </React.Fragment>
    );
};


