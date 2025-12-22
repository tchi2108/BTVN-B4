const Users = () => {
  const users = [
    { id: 1, name: "Admin" },
    { id: 2, name: "User A" },
  ];

  return (
    <div>
      <h3>Quản lý users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
