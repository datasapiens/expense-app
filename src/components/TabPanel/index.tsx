import { FC, ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

interface Props {
    children: ReactNode
    index: number
    value: number
}

export const TabPanel: FC<Props> = ({ children, value, index }) => {
    return (
        <div
            aria-labelledby={`simple-tab-${index}`}
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            role="tabpanel"
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}
