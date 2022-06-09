import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JournalList from "./JournalList";
import JournalCreateEntry from "./JournalCreateEntry";

const Journal = () => {
    const { user } = useAuth0();

    const [journalEntries, setJournalEntries] = React.useState([1, 2, 3, 4]);

    return (
        <React.Fragment>
            <JournalCreateEntry
                journalEntries={journalEntries}
                setJournalEntries={setJournalEntries}
            />
            <JournalList journalEntries={journalEntries} />
        </React.Fragment>
    );
};

export default Journal;
