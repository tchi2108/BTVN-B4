import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";

const Users = () => {
  const users = ["Admin", "User A", "User B"];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Quản lý users
      </Typography>

      <List>
        {users.map((user, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={user} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Users;
