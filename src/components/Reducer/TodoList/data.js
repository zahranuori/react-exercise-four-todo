const data = [
    {
      id: 1,
      name: "Shoping List",
      description: "Essential items",
      items: [
        {
          id: 1,
          title: "Bread",
          status: false,
        },
        {
          id: 2,
          title: "Chicken",
          status: false,
        },
      ],
    },
    {
      id: 2,
      name: "Daily Activities",
      description: "Important Tasks",
      items: [
        {
          id: 1,
          title: "Read the clean code book",
          status: false,
        },
        {
          id: 2,
          title: "Perform React project",
          status: false,
        },
      ],
    },
  ];
  
  export const makeRandomID = () => {
    return parseInt(Math.random() * 10000);
  };
  
  export default data;
  