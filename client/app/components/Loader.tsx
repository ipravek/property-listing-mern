import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Loader() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}
