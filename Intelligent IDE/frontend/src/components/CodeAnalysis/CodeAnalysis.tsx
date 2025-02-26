import React, { useState } from 'react';
import { 
    Box, 
    Button, 
    Stack, 
    Alert,
    Tooltip,
    Snackbar 
} from '@mui/material';
import LoadingState from '../LoadingState/LoadingState';
import ResultsDisplay from '../ResultsDisplay/ResultsDisplay';
import { useKeyboardShortcuts } from '../../utils/shortcuts';
import { codeService } from '../../services/api';

interface CodeAnalysisProps {
    code: string;
    language: string;
}

const CodeAnalysis: React.FC<CodeAnalysisProps> = ({ code, language }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [completion, setCompletion] = useState<string>('');
    const [analysis, setAnalysis] = useState<string>('');
    const [tests, setTests] = useState<string>('');
    const [snackbar, setSnackbar] = useState<string>('');

    const showSnackbar = (message: string) => {
        setSnackbar(message);
        setTimeout(() => setSnackbar(''), 3000);
    };

    const handleComplete = async () => {
        if (!code.trim()) {
            showSnackbar('Please enter some code first');
            return;
        }
        try {
            setLoading(true);
            setError('');
            const result = await codeService.complete(code, language);
            setCompletion(result.completion);
            showSnackbar('Code completion generated!');
        } catch (err) {
            setError('Failed to get code completion');
        } finally {
            setLoading(false);
        }
    };

    const handleAnalyze = async () => {
        if (!code.trim()) {
            showSnackbar('Please enter some code first');
            return;
        }
        try {
            setLoading(true);
            setError('');
            const result = await codeService.analyze(code);
            setAnalysis(result.analysis);
            showSnackbar('Bug analysis completed!');
        } catch (err) {
            setError('Failed to analyze code');
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateTests = async () => {
        if (!code.trim()) {
            showSnackbar('Please enter some code first');
            return;
        }
        try {
            setLoading(true);
            setError('');
            const result = await codeService.generateTests(code);
            setTests(result.tests);
            showSnackbar('Tests generated!');
        } catch (err) {
            setError('Failed to generate tests');
        } finally {
            setLoading(false);
        }
    };

    useKeyboardShortcuts([
        { key: 'c', ctrlKey: true, handler: handleComplete },
        { key: 'a', ctrlKey: true, handler: handleAnalyze },
        { key: 't', ctrlKey: true, handler: handleGenerateTests },
    ]);

    return (
        <Box sx={{ mt: 2 }}>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Tooltip title="Ctrl + C">
                    <Button 
                        variant="contained" 
                        onClick={handleComplete}
                        disabled={loading}
                    >
                        Complete Code
                    </Button>
                </Tooltip>
                <Tooltip title="Ctrl + A">
                    <Button 
                        variant="contained" 
                        onClick={handleAnalyze}
                        disabled={loading}
                    >
                        Analyze Bugs
                    </Button>
                </Tooltip>
                <Tooltip title="Ctrl + T">
                    <Button 
                        variant="contained" 
                        onClick={handleGenerateTests}
                        disabled={loading}
                    >
                        Generate Tests
                    </Button>
                </Tooltip>
            </Stack>

            {loading && (
                <LoadingState message="Processing your request..." />
            )}

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
            )}

            {completion && (
                <ResultsDisplay 
                    title="Code Completion" 
                    content={completion}
                    language={language}
                />
            )}
            
            {analysis && (
                <ResultsDisplay 
                    title="Bug Analysis" 
                    content={analysis} 
                />
            )}
            
            {tests && (
                <ResultsDisplay 
                    title="Generated Tests" 
                    content={tests} 
                />
            )}

            <Snackbar
                open={!!snackbar}
                message={snackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </Box>
    );
};

export default CodeAnalysis; 