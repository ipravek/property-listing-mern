"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import { Box, Container } from "@mui/material";
import Loader from "./components/Loader";
import Grid from "@mui/material/Grid";
import ImageCard from "./components/ImageCard";
import Search from "./components/Search";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "./components/BasicModal";
import AddForm from "./components/AddForm";
import { toast } from "react-toastify";

interface Data {
  _id: string;
  name: string;
  image: string;
  location: string;
}

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "property");

      if (res.status === 200) {
        setData(res.data.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    (async () => {
      fetchData();
    })();
  }, []);

  const handleSearch = (name: string) => {
    console.log(name);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        process.env.NEXT_PUBLIC_API_URL + "property/" + id
      );

      if (response.status == 200) {
        toast.success(response.data.message);
        fetchData();
      }
    } catch (err) {
      toast.error("Some thing went wrong");
    }
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <main className={styles.main}>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Search handleSearch={handleSearch} />

            <Box>
              <BasicModal
                title="Add New Property"
                startIcon={<AddIcon />}
                buttonText="Add"
                btnSize="large"
                btnVariant="contained"
              >
                <AddForm syncListData={fetchData} />
              </BasicModal>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 2,
            }}
          >
            <Grid container spacing={2}>
              {data &&
                data.map((e: Data) => {
                  return (
                    <Grid item lg={4} key={e._id}>
                      <ImageCard
                        name={e.name}
                        location={e.location}
                        image={e.image}
                        id={e._id}
                        handleDelete={handleDelete}
                        syncListData={fetchData}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </main>
      )}
    </Container>
  );
}
