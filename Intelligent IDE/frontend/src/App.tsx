import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout/Layout';
import Editor, { SUPPORTED_LANGUAGES } from './components/Editor/Editor';
import CodeAnalysis from './components/CodeAnalysis/CodeAnalysis';
import { Box } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [code, setCode] = useState<string>('// Start coding here...');
  const [language, setLanguage] = useState<string>(SUPPORTED_LANGUAGES[0].id);

  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <Box sx={{ my: 4 }}>
          <Editor 
            code={code} 
            language={language}
            onChange={handleCodeChange}
            onLanguageChange={handleLanguageChange}
          />
          <CodeAnalysis code={code} language={language} />
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
