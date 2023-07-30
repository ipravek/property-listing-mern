import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddForm({
  syncListData,
}: {
  syncListData: () => void;
}) {
  const [propertyName, setPropertyName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (propertyName.length == 0 || location.length == 0 || image.length == 0) {
      return toast.warn("Please fill all the required fields");
    }

    try {
      setLoading(true);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "property",
        {
          name: propertyName,
          location,
          image,
        }
      );

      if (response.status === 201) {
        toast.success(response.data.message);
        syncListData();
        setLoading(true);
      } else {
        toast.error(response.data.message);
        setLoading(false);
      }
    } catch (err: any) {
      toast.error(err.response.data.message.join(" "));
      setLoading(false);
    }
  };

  return (
    <Box>
      <TextField
        margin="dense"
        label="Property Name"
        name="propertyName"
        value={propertyName}
        onChange={(e) => setPropertyName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        margin="dense"
        label="Location"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        fullWidth
      />
      <TextField
        margin="dense"
        label="Image URL"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        fullWidth
      />

      <Button
        variant="outlined"
        onClick={handleSubmit}
        disabled={loading}
        sx={{
          mt: 1,
        }}
      >
        Create
      </Button>
    </Box>
  );
}
