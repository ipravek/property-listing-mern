import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function Search({ handleSearch }: { handleSearch: any }) {
  const [search, setSearch] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <TextField
        size="small"
        type="text"
        placeholder="Search Property"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button size="large" variant="outlined" onClick={handleSearch(search)}>
        Search
      </Button>
    </Box>
  );
}
