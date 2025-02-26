import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingStateProps {
    message: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ message }) => {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: 2,
                py: 4 
            }}
        >
            <CircularProgress />
            <Typography variant="body1" color="text.secondary">
                {message}
            </Typography>
        </Box>
    );
};

export default LoadingState; 