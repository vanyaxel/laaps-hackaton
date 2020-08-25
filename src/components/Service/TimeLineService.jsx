import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Done from '@material-ui/icons/Done';

import './service.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function CustomizedTimeline() {
    const classes = useStyles();

    return (
        <div className='timeline-container'>
            <Timeline align="left">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <Done />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h5>Recibido</h5>
                        <h6>El lavador ha aceptado tu servicio</h6>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <Done />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h5>En camino</h5>
                        <h6>El lavador se dirige a tu ubicación</h6>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <Done />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <h5>Terminado</h5>
                        <h6>El lavador se dirige a tu ubicación</h6>                </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
