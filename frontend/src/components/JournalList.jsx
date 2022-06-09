import React from "react";

import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

const JournalList = ({ journalEntries }) => {
    const [checked, setChecked] = React.useState({});

    const handleToggle = (value) => {
        const newChecked = { ...checked };
        newChecked[value] = !newChecked[value];
        setChecked(newChecked);
    };

    React.useEffect(() => {
        console.log(checked);
    }, [checked]);

    return (
        <React.Fragment>
            <IconButton>
                <DeleteIcon />
            </IconButton>

            <List>
                {journalEntries.map((value) => {
                    return (
                        <ListItem key={value}>
                            <ListItemIcon>
                                <IconButton onClick={() => handleToggle(value)}>
                                    <Checkbox checked={checked[value]} />
                                </IconButton>
                            </ListItemIcon>
                            {new Date().toISOString()}
                            <br />
                            {value}
                        </ListItem>
                    );
                })}
            </List>
        </React.Fragment>
    );
};

export default JournalList;
