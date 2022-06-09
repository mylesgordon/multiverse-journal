import React from "react";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

const JournalCreateEntry = ({ journalEntries, setJournalEntries }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
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
