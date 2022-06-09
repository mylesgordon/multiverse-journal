import React from "react";

import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

const JournalList = ({ journalEntries }) => {
    const [checked, setChecked] = React.useState({});

    const handleToggle = (id) => {
        const newChecked = { ...checked };
        newChecked[id] = !newChecked[id];
        setChecked(newChecked);
    };

    React.useEffect(() => {
        const newChecked = {};
        journalEntries.forEach((entry) => {
            newChecked[entry.id] = false;
        });
        setChecked(newChecked);
    }, [journalEntries]);

    return (
        <React.Fragment>
            <IconButton>
                <DeleteIcon />
            </IconButton>

            <List>
                {journalEntries.map((entry) => {
                    return (
                        <ListItem key={entry.id}>
                            <ListItemIcon>
                                <IconButton
                                    onClick={() => handleToggle(entry.id)}
                                >
                                    {/* TODO: hacky fix below */}
                                    <Checkbox
                                        checked={
                                            typeof checked[entry.id] ===
                                            "undefined"
                                                ? false
                                                : checked[entry.id]
                                        }
                                    />
                                </IconButton>
                            </ListItemIcon>
                            {new Date().toISOString()}
                            <br />
                            {entry.text}
                        </ListItem>
                    );
                })}
            </List>
        </React.Fragment>
    );
};

export default JournalList;
