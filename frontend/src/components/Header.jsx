import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
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
                <Button variant="contained">Log In</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
