import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";

import Journal from "../components/Journal";

const Home = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <main>
            {isAuthenticated ? (
                <Journal />
            ) : (
                <Typography>Please log in to use this journal</Typography>
            )}
        </main>
    );
};

export default Home;
