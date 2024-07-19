import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  font-size: 1em;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 250px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [country, setCountry] = React.useState('US');

  const handleSearch = () => {
    onSearch(city, state, country);
  };

  return (
    <FormContainer>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <Input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Enter state (optional)"
      />
      <Input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter country code (default: US)"
      />
      <Button onClick={handleSearch}>Search</Button>
    </FormContainer>
  );
};

export default SearchForm;
