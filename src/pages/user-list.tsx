import { useEffect, useState } from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import type { User } from "../types/user.type";
import { fetchUsers } from "../api/user.api";
import { SearchBar } from "../components/search-bar";
import { useNavigate } from "react-router-dom";

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SearchBar placeholder="Search Users" onSearch={setQuery} />
      <List>
        {filteredUsers?.map((u) => (
          <ListItemButton key={u.id} onClick={() => navigate(`/user/${u.id}`)}>
            <ListItemText primary={u.name} secondary={u.email} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}
