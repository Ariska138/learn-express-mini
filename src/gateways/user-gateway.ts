let users = [
  { id: 1, name: 'Hafiz' },
  { id: 2, name: 'Gaza' },
];

export const getUsers = () => {
  return users;
};

export const getUserById = (userId: number) => {
  return users.find((u) => u.id === userId);
};

export const insertNewUser = (name: string) => {
  const newUser = {
    id: users.length + 1,
    name,
  };
  users.push(newUser);

  return newUser;
};

export const getIndexById = (userId: number) => {
  return users.findIndex((user) => user.id === userId);
};

export const updateNameByIdx = (index: number, newName: string) => {
  users[index] = { ...users[index], name: newName };

  return users[index];
};

export const removeDataByIdx = (index: any) => {
  return users.splice(index, 1);
};
