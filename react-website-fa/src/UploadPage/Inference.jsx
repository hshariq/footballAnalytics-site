import { Alert, AlertTitle, Button, CardMedia, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import { useEffect, useState } from "react";

function Inference(props) {
    const { uploadId } = useParams()
    const [taskId, setTaskId] = useState('')
    const [err, setErr] = useState('')
    const [result, setResult] = useState({})

    const startInference = async () => {

        if (localStorage.getItem('upload_id') === uploadId) {
            if (localStorage.getItem('task_id')) {
                setTaskId(localStorage.getItem('task_id'))
            }
            return
        }

        try {
            const response = await fetch(`http://localhost:5000/infer/${uploadId}`, {
                method: 'GET'
            })
            if (response.ok) {
                const res = await response.json()
                localStorage.setItem('upload_id', uploadId)
                localStorage.setItem('task_id', res.result_id)
                setTaskId(res.result_id)
            }
        } catch (err) {
            console.log(err)
            setErr('Error while connecting to the server.')
        }
    }

    const onGetStatus = async () => {
        if (taskId === '') {
            setErr('Cannot fetch details, task not set. Please try again.')
            return
        }
        try {
            const response = await fetch(`http://localhost:5000/result/${taskId}`)
            if (response.ok) {
                const res = await response.json()
                setResult(res)
                console.log(result)
            }

        } catch (err) {
            setErr('Error while fetching details, try again.')
            console.log(err)
        }
    }

    useEffect(() => {
        startInference()
    }, [])

    return (
        <div>
            <ResponsiveAppBar />
                <Grid
                    container
                    direction={'column'}
                    sx={{
                        background: '#201A2B',
                        color: 'white',
                        padding: 4
                    }}
                >
                    <Grid item md={12}>
                        <Typography variant="h4">
                            Inference Status
                        </Typography>
                        <Typography gutterBottom>
                            Task ID: {taskId} | {result.ready ? 'Ready' : 'In Process'} | {result.successful ? 'Succesfuly Completed' : 'Failed'}
                        </Typography>
                    </Grid>

                    <Grid item marginTop={1}>
                        <Button
                            variant="contained"
                            onClick={onGetStatus}
                        >
                            Get Status
                        </Button>
                    </Grid>

                    <Grid item marginTop={1}>
                        <Typography>
                            Detection: <Link href={result.value && result.value.length >= 2 && result.value[0]}>Link to firebase</Link>
                        </Typography>
                        <CardMedia src={result.value[0]}>
                            
                        </CardMedia>
                    </Grid>

                </Grid>

                {
                    err ?
                        <Alert severity="error" variant='filled'>
                            <AlertTitle>Error</AlertTitle>
                            {err}
                        </Alert> :
                        null
                }


        </div>
    )

}

export default Inference;