import type { CreateSnippetDto } from "../schemas/snippet.schema";

export const snippetSeeds :CreateSnippetDto[]= [
  {
    title: "Fetch API - GET request",
    language: "Javascript",
    tags: ["api", "fetch", "async"],
    code: `async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    
    console.log(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

getUsers();`,
  },
  {
    title: "Utility Type - Partial",
    language: "Typescript",
    tags: ["types", "utility"],
    code: `type User = {
  id: number;
  name: string;
  email: string;
};

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const user: User = { id: 1, name: "Juan", email: "juan@mail.com" };

const updatedUser = updateUser(user, { name: "Pedro" });

console.log(updatedUser);`,
  },
  {
    title: "Responsive Card Layout",
    language: "CSS",
    tags: ["layout", "responsive", "flexbox"],
    code: `.card-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 250px;
  padding: 1rem;
  border-radius: 8px;
  background: #1e1e1e;
  color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}`,
  },
];