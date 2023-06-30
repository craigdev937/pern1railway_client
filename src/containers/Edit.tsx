import React from "react";
import "./Edit.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FriendAPI } from "../global/FriendAPI";
import { IFriend } from "../models/Interfaces";

export const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const friendID = id !== undefined ? String(id) : "";
    const [friend, setFriend] = React.useState<IFriend>({
        id: friendID, first: "", last: "", 
        age: 0, info: "", image: ""
    });

    const { data: friendDATA, 
        isSuccess: friendDATAReady 
    } = FriendAPI.useOneQuery(friendID);

    const [deleteFriend, { 
        isLoading: isDeleting, isSuccess: isDeleted 
    }] = FriendAPI.useDeleteMutation();

    const [editFriend, { 
        isLoading: isUpdating, isSuccess: isSaved 
    }] = FriendAPI.useUpdateMutation();

    React.useEffect(() => {
        if (friendDATAReady) {
            setFriend(friendDATA);
        }
    }, [friendDATA, friendDATAReady]);

    function goBack(time: number) {
        setTimeout(() => {
            navigate("/");
        }, time);
    };

    function removeFriend() {
        deleteFriend(friendID);
        goBack(1200);
    };

    const handleChange = 
    (event: any) => {
        setFriend({...friend, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: any) => {
        event.preventDefault();
        await editFriend(friend);
        setFriend({
            id: friendID, first: "", last: "",
            age: 0, info: "", image: ""
        })
        goBack(1200);
    };

    return (
        <React.Fragment>
            <section className="form__wrapper">
                <div>
                    <h1 className="form__title">Update Friend</h1>
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
                        <footer>
                            <button><Link to="/">Cancel</Link></button>
                            <button 
                                onClick={removeFriend}
                                >{isDeleting ? "Deleting..." : "Delete"}
                            </button>
                            <button 
                                className="form__button"
                                type="submit"
                                >{isUpdating ? "Updating..." : "Update"}
                            </button>
                        </footer>
                        {isDeleted && (
                            <aside>The Friend was Deleted, redirecting...</aside>
                        )}
                        {isSaved && (
                            <aside>The Friend was Saved, redirecting...</aside>
                        )}
                    </form>
                </div>
            </section>
        </React.Fragment>
    );
};


