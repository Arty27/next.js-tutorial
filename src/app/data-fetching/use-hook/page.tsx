import { Suspense, use } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface UserResponse {
  users: User[];
  total: number;
}

function getUsers(): Promise<UserResponse> {
  return fetch("https://dummyjson.com/users").then((result) => result.json());
}

const UseHookExample = () => {
  const users = getUsers();
  return (
    <div>
      <h1>Use Hook Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersList userPromise={users} />
      </Suspense>
    </div>
  );
};

function UsersList({ userPromise }: { userPromise: Promise<UserResponse> }) {
  const getUsersList = use(userPromise);
  return (
    <div>
      {getUsersList.users.map((user) => (
        <div key={user.id}>
          <p>
            {user.firstName}-{user.lastName}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UseHookExample;
