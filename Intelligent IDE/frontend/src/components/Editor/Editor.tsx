import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface EditorProps {
  code: string;
  language: string;
  onChange: (value: string | undefined) => void;
  onLanguageChange: (language: string) => void;
}

// Supported programming languages
export const SUPPORTED_LANGUAGES = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'python', name: 'Python' },
  { id: 'java', name: 'Java' },
  { id: 'cpp', name: 'C++' }
];

const Editor: React.FC<EditorProps> = ({ code, language, onChange, onLanguageChange }) => {
  return (
    <Box>
      <FormControl sx={{ mb: 2, minWidth: 120 }}>
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          label="Language"
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <MenuItem key={lang.id} value={lang.id}>
              {lang.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ height: '70vh', border: '1px solid #ccc' }}>
        <MonacoEditor
          height="100%"
          defaultLanguage={language}
          theme="vs-dark"
          value={code}
          onChange={onChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            automaticLayout: true,
          }}
        />
      </Box>
    </Box>
  );
};

export default Editor; 