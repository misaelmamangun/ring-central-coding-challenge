// src/pages/UserProfile.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";
import type { User } from "../types/user.type";
import { fetchUserById } from "../api/user.api";

export default function UserProfile() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const loadUser = async () => {
    try {
      if (id) {
        const data = await fetchUserById(id);
        setUser(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadUser();
  }, [id]);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {user.name}
        </Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>Website: {user.website}</Typography>
        <Typography>Company: {user.company?.name}</Typography>
        <Button sx={{ mt: 2 }} variant="contained" onClick={() => navigate(-1)}>
          Back
        </Button>
      </CardContent>
    </Card>
  );
}
