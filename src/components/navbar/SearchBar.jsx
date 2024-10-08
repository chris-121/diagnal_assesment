import React, { useContext, useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SearchContext } from "../../context/SearchContext";

const textFieldStyles = {
  width: "100%",
  padding: "0 16px",
  input: { color: "#fff" },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { onSearch, onClickSearch, isSearching } = useContext(SearchContext);

  const onChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const handleClose = () => {
    setSearchTerm("");
    if (onSearch) onSearch("");
    onClickSearch();
  };

  return (
    <>
      {isSearching ? (
        <TextField
          autoFocus
          variant={"standard"}
          placeholder="Search..."
          value={searchTerm}
          onChange={onChange}
          sx={textFieldStyles}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  height={"20px"}
                  alt="Search icon"
                  src={`${import.meta.env.VITE_BASE_API_URL}/images/search.png`}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClose} edge="end">
                  <CloseIcon sx={{ color: "White" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <IconButton onClick={onClickSearch} sx={{ paddingRight: "16px" }}>
          <img
            height={"20px"}
            width={"20px"}
            alt="Search button"
            src={`${import.meta.env.VITE_BASE_API_URL}/images/search.png`}
          />
        </IconButton>
      )}
    </>
  );
};

export default SearchBar;
