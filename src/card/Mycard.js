import { Card, CardContent, Typography, Button, requirePropFactory, DialogTitle, DialogContent, Dialog, DialogActions } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getMatchdetails, getMatches } from '../api/Api';

const MyCard = ({ match }) => {


    const [detail, setDetail] = useState({});
    const [open, setOpen] = useState(false);


    const handleClick = (id) => {
        getMatchdetails(id)
            .then((data) => {
                console.log(data);
                setDetail(data);
                handleOpen();

            })
            .catch((error) => console.log("error"));
    }

    const getmatchescart = () => {
        return (
            <Card style={{ marginTop: 50 }}>
                <CardContent >
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item sm={4} >
                            <Typography variant="h5">{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography><img style={{ width: 95 }} src={require("../images/vs logo.png")}></img></Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant="h5" >{match["team-2"]}</Typography>
                        </Grid>


                    </Grid>

                </CardContent>
                <Button variant="contained" color="secondary" onClick={() => {
                    handleClick(match.unique_id)
                }} variant="contained" color="secondary">
                    show detail
                </Button>
                <Button variant="contained" color="secondary">
                    Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                </Button>

            </Card>

        );
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
                {"Match Detail.."}

            </DialogTitle >
            <DialogContent id="alert-dialog-description">
                <Typography>{detail.stat}</Typography>
                <Typography>
                    Match <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                        {detail.matchStarted ? "Started" : "Not started Yet"}</span>
                </Typography>
                <Typography>
                    Score <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                        {detail.score}</span>
                </Typography>


            </DialogContent>

            <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Close
            </Button>
            </DialogActions>

        </Dialog>
    );

    return (
        <Fragment>
        {getmatchescart()}
        {getDialog()}
        </Fragment>

    );
}

export default MyCard;