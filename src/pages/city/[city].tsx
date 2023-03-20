import { useRouter } from "next/router";

const City = () => {
  const router = useRouter();
  const { city } = router.query;
  return (
    <>
      <h1>{city}</h1>
    </>
  );
};

export default City;
