import React from "react";
import { use100vh } from "react-div-100vh";
import { CssBaseline, Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Navbar } from "../bar";
import { observer } from "mobx-react-lite";

const AdminLayout = (props: any) => {
    const classes = useStyles();
    const height100vh = use100vh();
    return (
        <div className={classes.contanier} style={{ height: height100vh ? height100vh : 0 }}>
            <CssBaseline />
            <Navbar />
            <div></div>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contanier: {
            display: "flex",
            flexDirection: "column",
        },
    }),
);

export default observer(AdminLayout);
