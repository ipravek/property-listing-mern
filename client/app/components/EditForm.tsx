import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface Data {
  name: string;
  location: string;
  image: string;
}

export default function EditForm({
  id,
  syncListData,
}: {
  id: string;
  syncListData: () => void;
}) {
  const [propertyName, setPropertyName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // Populate Data for Update
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "property/" + id
        );

        if (res.status === 200) {
          setPropertyName(res.data.data.name);
          setLocation(res.data.data.location);
          setImage(res.data.data.image);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data: Data | any = {};

      if (propertyName?.length) {
        data.name = propertyName;
      }
      if (location?.length) {
        data.location = location;
      }
      if (image?.length) {
        data.image = image;
      }

      const response = await axios.put(
        process.env.NEXT_PUBLIC_API_URL + "property/" + id,
        data
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        syncListData();
        setLoading(true);
      } else {
        toast.error(response.data.message);
        setLoading(false);
      }
    } catch (err: any) {
      toast.error(err.response.data.message.join(", "));
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
      />
      <TextField
        margin="dense"
        label="Location"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
      />
      <TextField
        margin="dense"
        label="Image URL"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
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
        Update
      </Button>
    </Box>
  );
}
