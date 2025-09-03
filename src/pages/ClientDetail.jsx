import { useParams } from "react-router";

export default function ClientDetail() {
  const { id } = useParams();
  return <h1>Client Detail Page for {id}</h1>;
}
