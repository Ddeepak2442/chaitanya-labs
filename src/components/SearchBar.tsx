import React, { useState } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Paper,
  Typography,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Tests' },
    { value: 'diabetes', label: 'Diabetes' },
    { value: 'pregnancy', label: 'Pregnancy' },
    { value: 'thyroid', label: 'Thyroid' },
    { value: 'anemia', label: 'Anemia' },
    // { value: 'covid', label: 'COVID' },
    { value: 'heart', label: 'Heart' },
    { value: 'cancer', label: 'Cancer' },
  ];

  const popularSearches = [
    'Blood Test', 'Diabetes', 'Thyroid', 'Vitamin D', 'Cholesterol'
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  return (
    <Box sx={{ my: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Search by Health Concern
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
          <TextField
            select
            value={category}
            onChange={handleCategoryChange}
            sx={{ minWidth: 150 }}
            size="medium"
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          
          <TextField
            fullWidth
            placeholder="Search for tests or health concerns..."
            value={searchTerm}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size="medium"
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Popular Searches:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {popularSearches.map((search, index) => (
              <Chip
                key={index}
                label={search}
                variant="outlined"
                onClick={() => setSearchTerm(search)}
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SearchBar;