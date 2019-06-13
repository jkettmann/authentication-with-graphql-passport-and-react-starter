const resolvers = {
  Query: {
    currentUser: (parent, args, context) => context.user,
  },
  Mutation: {
    logout: (parent, args, context) => context.logout(),
  },
};

export default resolvers;