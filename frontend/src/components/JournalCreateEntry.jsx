import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

const JournalCreateEntry = ({ getAccessToken, getJournalEntries }) => {
    const { user } = useAuth0();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);

        getAccessToken().then((token) =>
            fetch("http://localhost:3001/api/v1/entry", {
                method: "POST",
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
                body: JSON.stringify({
                    text: e.target[0].value,
                    user_id: user.sub,
                }),
            }).catch((e) => console.error(e))
        );

        getJournalEntries();
    };

    return (
        <form onSubmit={onSubmit}>
            <FormControl>
                <InputLabel htmlFor="journal-entry">New Entry</InputLabel>
                <Input id="journal-entry" />
            </FormControl>
            <Button type="submit" variant="contained">
                Add Entry
            </Button>
        </form>
    );
};

export default JournalCreateEntry;
