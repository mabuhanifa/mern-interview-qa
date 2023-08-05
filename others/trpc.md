**tRPC: A Comprehensive Tutorial with Examples**

tRPC is a modern and efficient data fetching framework for TypeScript, React, and Next.js. It aims to simplify the process of building APIs and managing data fetching on the client-side. In this tutorial, we will cover the basics of tRPC, how to set up a tRPC server, perform data queries, mutations, authentication, and real-time updates using tRPC with practical examples.

## Table of Contents:

1. Introduction to tRPC
2. Setting up a tRPC Server
3. Defining tRPC Controllers and Services
4. Performing Data Queries with tRPC
5. Handling Mutations with tRPC
6. Implementing Authentication with tRPC
7. Real-Time Updates with tRPC and WebSocket
8. Using tRPC with React and Next.js
9. Conclusion

### 1. Introduction to tRPC:

tRPC is a TypeScript-based data fetching framework designed to simplify and optimize API development and usage. It follows a strongly typed approach, leveraging TypeScript's static type checking to ensure data consistency and safety.

The key features of tRPC include:

- Strongly Typed: tRPC relies on TypeScript to enforce type safety throughout the application.
- Efficient Data Fetching: tRPC minimizes the amount of data sent over the network by only sending the necessary data for each request.
- Real-Time Updates: tRPC supports real-time updates using WebSockets for seamless, live data streaming.
- Built-in Authentication: tRPC provides built-in support for handling authentication and authorization.

### 2. Setting up a tRPC Server:

To set up a tRPC server, we need a runtime and a data source. We'll use Node.js, Express, and Prisma (a database toolkit) for this tutorial. The following steps are involved:

1. Initialize a new Node.js project and install required dependencies.
2. Set up an Express server to handle incoming HTTP requests.
3. Connect to the database using Prisma and define the data models.
4. Implement tRPC controllers and services to define the API endpoints and business logic.

### 3. Defining tRPC Controllers and Services:

In tRPC, a controller is a collection of API endpoints, and a service is a collection of business logic for each endpoint. The controller defines the route paths, and the service handles the actual data fetching and manipulation.

A simple tRPC controller and service to fetch posts would look like this:

```typescript
// Controller
import { createRouter } from "trpc/server";
import { createContext } from "./context";
import { postService } from "./services/postService";

export default createRouter()
  .query("posts", {
    resolve: () => postService.getAllPosts(),
  })
  .query("post", {
    input: {
      id: z.string(),
    },
    resolve: ({ input }) => postService.getPostById(input.id),
  });
```

```typescript
// Service
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postService = {
  getAllPosts: async () => {
    return prisma.post.findMany();
  },
  getPostById: async (id: string) => {
    return prisma.post.findUnique({ where: { id } });
  },
};
```

### 4. Performing Data Queries with tRPC:

To perform data queries with tRPC, we use the `useQuery` hook on the client-side. It allows us to fetch data from the tRPC server and handle loading, error, and success states.

A simple data query for fetching all posts would look like this:

```typescript
import { useQuery } from "trpc/react";
import { AppRouter } from "../api/trpc/[trpc]";

export const Posts = () => {
  const { data, error } = useQuery(["posts"], {
    refetchInterval: 10000, // Refresh data every 10 seconds
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};
```

### 5. Handling Mutations with tRPC:

tRPC supports mutations for data modification. To perform mutations, we use the `useMutation` hook on the client-side. It allows us to send data to the tRPC server to create, update, or delete resources.

A simple mutation for creating a new post would look like this:

```typescript
import { useMutation } from "trpc/react";
import { AppRouter } from "../api/trpc/[trpc]";

export const NewPostForm = () => {
  const { mutate, isLoading } = useMutation("post.create", {
    onSuccess: () => {
      // Handle success
    },
    onError: (error) => {
      // Handle error
    },
  });

  const handleFormSubmit = async (data: any) => {
    await mutate({ input: data });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {/* Form fields for post data */}
      <button type="submit" disabled={isLoading}>
        Create Post
      </button>
    </form>
  );
};
```

### 6. Implementing Authentication with tRPC:

tRPC provides built-in support for handling authentication and authorization. We can define custom middlewares to enforce authentication and access control on specific routes.

To implement authentication, we can use JWT (JSON Web Tokens) for token-based authentication.

### 7. Real-Time Updates with tRPC and WebSocket:

tRPC supports real-time updates using WebSockets. By enabling WebSockets on the server and setting up the necessary subscriptions on the client-side, we can receive live data updates.

For example, to get real-time updates for new posts, we can define a subscription on the server and subscribe to it on the client-side.

### 8. Using tRPC with React and Next.js:

tRPC is well-integrated with React and Next.js, making it easy to use in these frameworks.

For example, to use tRPC with Next.js, we can create an API route to handle tRPC requests:

```typescript
// pages/api/trpc/[trpc].ts
import { createRouter } from "trpc/server";
import { postService } from "../../../services/postService";
import { prisma } from "../../../prisma";

export default createRouter()
  .query("posts", {
    resolve: () => postService.getAllPosts(),
  })
  .query("post", {
    input: {
      id: z.string(),
    },
    resolve: ({ input }) => postService.getPostById(input.id),
  })
  .middleware(async ({ ctx, next }) => {
    // Attach Prisma client to the context
    ctx.prisma = prisma;
    await next();
  }, "all")
  .buildRouter();
```

### 9. Conclusion:

tRPC is a powerful and efficient data fetching framework for TypeScript, React, and Next.js. It provides strong type checking, efficient data fetching, built-in authentication support, and real-time updates using WebSockets. By following this tutorial and understanding the examples, you can use tRPC to build modern and performant web applications with

ease.
