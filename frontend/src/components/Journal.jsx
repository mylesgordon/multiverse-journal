import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JournalList from "./JournalList";

const Journal = () => {
    const { user } = useAuth0();

    const [journalEntries, setJournalEntries] = React.useState([1, 2, 3, 4]);

    return (
        <React.Fragment>
            <JournalList journalEntries={journalEntries} />
        </React.Fragment>
    );
};

export default Journal;
