import { useAuthStore } from "../../../store/useAuthStore.js";

const Home = () => {
  const { authUser } = useAuthStore();

  return (
    <div className="container mx-auto">
      <h1>Hello, {authUser?.fullName}</h1>
    </div>
  );
};

export default Home;
