import { Box, Theme, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import React from "react";
import { Icon } from "..";
import { ICONS } from "../../constants";

const Navbar = () => {
    const classes = useStyles();
    return (
        <nav className={classes.container}>
            <Box>
                <Icon src={ICONS.ninjamail} width={129} height={64} />
                <Typography variant={"h3"}>{"NinjaMail"}</Typography>
            </Box>
            <Box>
                <Typography>{"FEATURE"}</Typography>
                <Typography>{"PRICING"}</Typography>
                <Typography>{"SERVICES"}</Typography>
                <Typography>{"PARTNERS"}</Typography>
            </Box>
        </nav>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: 89,
        },
    }),
);

export default observer(Navbar);
