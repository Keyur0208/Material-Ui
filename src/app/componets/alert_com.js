import { Alert, AlertTitle, Button } from "@mui/material";

export default function Alert_com() {



    return (
        <>
            <div className="flex flex-col gap-4" >
                <Alert severity="info" variant="filled">
                    Here is a gentle confirmation that your action was successful.
                </Alert>
                <Alert severity="success" variant="filled">
                    Here is a gentle confirmation that your action was successful.
                </Alert>
                <Alert severity="error" variant="filled">
                    Here is a gentle confirmation that your action was successful.
                </Alert>
                <Alert severity="warning" variant="filled">
                    Here is a gentle confirmation that your action was successful.
                </Alert>
                <Alert severity="warning" variant="filled">
                    <AlertTitle>warning</AlertTitle>
                    Here is a gentle confirmation that your action was successful.
                </Alert>
            </div>
        </>

    )
}