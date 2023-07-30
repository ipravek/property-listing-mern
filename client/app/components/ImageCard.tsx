import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicModal from "./BasicModal";
import EditIcon from "@mui/icons-material/Edit";
import EditForm from "./EditForm";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button } from "@mui/material";

interface Card {
  image: string;
  name: string;
  location: string;
  id: string;
  handleDelete: any;
  syncListData: () => void;
}

const ImageCard = ({
  image,
  name,
  location,
  id,
  handleDelete,
  syncListData,
}: Card) => {
  return (
    <Card
      sx={{
        maxWidth: "500",
      }}
    >
      <CardContent sx={{ pl: 2 }}>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="Image"
          sx={{
            borderRadius: "2px",
          }}
        />
        <Box
          sx={{
            p: ".5rem",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={700}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "inline-flex",
            }}
          >
            {location}
          </Typography>
        </Box>

        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <BasicModal
              title="Edit Property"
              startIcon={<EditIcon />}
              buttonText="Edit"
              btnSize="small"
              btnVariant="outlined"
            >
              <EditForm id={id} syncListData={syncListData} />
            </BasicModal>

            <Button
              variant="outlined"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
