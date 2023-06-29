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
            <section className="form__wrapper">
                <div>
                    <h1 className="form__title">Add New Friend</h1>
                    <form onSubmit={handleSubmit}>
                        <aside>
                            <input 
                                className="form__input"
                                type="text" 
                                name="first"
                                placeholder="First"
                                value={friend.first}
                                onChange={handleChange}
                            />
                        </aside>
                        <aside>
                            <input 
                                className="form__input"
                                type="text" 
                                name="last"
                                placeholder="Last"
                                value={friend.last}
                                onChange={handleChange}
                            />
                        </aside>
                        <aside>
                            <input 
                                className="form__input"
                                type="number" 
                                name="age"
                                placeholder="Age"
                                value={friend.age}
                                onChange={handleChange}
                            />
                        </aside>
                        <aside>
                            <input 
                                className="form__input"
                                type="text" 
                                name="info"
                                placeholder="Info"
                                value={friend.info}
                                onChange={handleChange}
                            />    
                        </aside>
                        <aside>
                            <input 
                                className="form__input"
                                type="text" 
                                name="image"
                                placeholder="Link to Image"
                                value={friend.image}
                                onChange={handleChange}
                            />
                        </aside>
                        <button 
                            className="form__button"
                            type="submit"
                            >Add Friend
                        </button>
                    </form>
                </div>
            </section>
        </React.Fragment>
    );
};


