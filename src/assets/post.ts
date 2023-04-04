const post = {
  id: '1',
  createdAt: '19 December 2021',
  image:
    'https://images.unsplash.com/photo-1547595964-00ce56a24b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    image:
      'https://images.unsplash.com/photo-1612652573742-9536f7145702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    username: 'vadimnotjustdev',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        username: 'vadimnotjustdev',
      },
    },
  ],
};

export default post;
