import { useState, useEffect } from "react";
import AuthService from "./../services/AuthService";

const UseUser = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true);
        AuthService.getUser().then((user) => {
            setUser(user);
            setLoading(false);
        });
    }, []);

    return [user, loading];
};

export default UseUser;