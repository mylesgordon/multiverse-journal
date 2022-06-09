import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Journal = () => {
    const { user } = useAuth0();

    return <div>{user.sub}</div>;
};

export default Journal;
