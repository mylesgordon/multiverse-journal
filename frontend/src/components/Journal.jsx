import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JournalList from "./JournalList";
import JournalCreateEntry from "./JournalCreateEntry";

const Journal = () => {
    const { getAccessTokenSilently, user } = useAuth0();

    const getAccessToken = async () =>
        await getAccessTokenSilently({
            audience: "multiverse-messages",
            scope: "read:current_user",
        });

    const [journalEntries, setJournalEntries] = React.useState([]);

    React.useEffect(() => {
        getAccessToken().then((token) =>
            fetch("http://localhost:3001/api/v1/entry", {
                method: "GET",
                withCredentials: true,
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
                .then((res) => res.json())
                .then((obj) => {
                    console.log(obj);
                    setJournalEntries(obj);
                })
                .catch((e) => console.error(e))
        );
    }, []);

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
