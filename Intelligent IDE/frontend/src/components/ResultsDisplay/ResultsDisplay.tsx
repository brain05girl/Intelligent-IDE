import React from 'react';
import { Paper, Typography, Box, Divider } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ResultsDisplayProps {
    title: string;
    content: string;
    language?: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ 
    title, 
    content, 
    language = 'typescript' 
}) => {
    return (
        <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ maxHeight: '300px', overflow: 'auto' }}>
                <SyntaxHighlighter 
                    language={language}
                    style={atomOneDark}
                    customStyle={{ margin: 0 }}
                >
                    {content}
                </SyntaxHighlighter>
            </Box>
        </Paper>
    );
};

export default ResultsDisplay; 