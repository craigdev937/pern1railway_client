import React from "react";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { FriendAPI } from "../global/FriendAPI";
import { FriendCard } from "../components/FriendCard";

export const Friends = () => {
    const { error, isFetching, data } = 
        FriendAPI.useAllQuery();

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>;
        }
    };

    if (isFetching) {
        return (
            <Audio 
                height="300"
                width="300"
                color="#fff"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
            />
        );
    };

    return (
        <React.Fragment>
            <header>
                <Link to="/add">
                    <button>Add a Friend</button>
                </Link>
            </header>
            <section className="friend__container">
                {data!.map((friend) => (
                    <FriendCard 
                        key={friend.id} 
                        friend={friend} 
                    />
                ))}
            </section>
        </React.Fragment>
    );
};


