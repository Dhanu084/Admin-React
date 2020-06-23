export const data = {
  getUsers: () => {
    return Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            name: "Jake",
            email: "jake@gmail.com",
            id: 1,
          },
          {
            name: "Midoriya",
            email: "midoriya@gmailcom",
            id: 2,
          },
          {
            name: "Bakuwago",
            email: "bakuwago@hotmail.com",
            id: 3,
          },
          {
            name: "Todorkio",
            email: "Todoriko@gmail.com",
            id: 4,
          },
        ]),
    });
  },
};
