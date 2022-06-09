import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    useEffect(() => {
        console.log(isAuthenticated);
    }, [isAuthenticated]);

    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" flexGrow={1}>
                    <Typography
                        variant="h1"
                        component="a"
                        href="/"
                        sx={{
                            color: "inherit",
                            textDecoration: "none",
                            fontSize: "2rem",
                        }}
                    >
                        Journal
                    </Typography>

                    <Typography>About</Typography>
                </Box>
                {isAuthenticated ? (
                    <Button
                        variant="contained"
                        onClick={() =>
                            logout({ returnTo: window.location.origin })
                        }
                    >
                        Log Out
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        onClick={() => loginWithRedirect()}
                    >
                        Log In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
