import { Button } from "primereact/button";
import ListCard from "../components/ListCard";
import { useRouter } from 'next/router'
 

export default function Home() {
  const router = useRouter();
  console.log(router.asPath);
  const handleCreateCard = () => {
    router.push('/createcard');
};
  return (
    <><Button className="grid" label="Create Card" onClick={handleCreateCard} /><div>
      <ListCard />
    </div></>
  );
}
