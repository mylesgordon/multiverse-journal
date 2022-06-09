import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JournalList from "./JournalList";
import JournalCreateEntry from "./JournalCreateEntry";

const Journal = () => {
    const { getAccessTokenSilently, user } = useAuth0();
    const [journalEntries, setJournalEntries] = React.useState([]);

    const getAccessToken = async () =>
        await getAccessTokenSilently({
            audience: "multiverse-messages",
            scope: "read:current_user",
        });

    const getJournalEntries = () => {
        getAccessToken().then((token) =>
            fetch(`http://localhost:3001/api/v1/entry?user_id=${user.sub}`, {
                method: "GET",
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
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
    };

    React.useEffect(() => {
        getJournalEntries();
    }, []);

    return (
        <React.Fragment>
            <JournalCreateEntry
                getAccessToken={getAccessToken}
                getJournalEntries={getJournalEntries}
            />
            <JournalList journalEntries={journalEntries} />
        </React.Fragment>
    );
};

export default Journal;
