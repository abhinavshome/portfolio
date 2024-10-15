import { useNavigate } from "react-router-dom";
import PaintingList from "../../components/PaintingList";
import data from "../../data/data.json";
import Title from "../../components/Title";

const Latest = () => {
  const navigate = useNavigate();
  const { latest, paintings } = data;
  const latestPaintings = paintings.filter((p) => latest.includes(p.id));
  return (
    <div>
      <Title>RECENTLY ADDED</Title>
      <PaintingList paintings={latestPaintings} />
      <div className="flex justify-center">
        <button
          type="button"
          className="focus:outline-none text-white bg-[#F47519] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          onClick={() => navigate("/paintings")}
        >
          See All Paintings
        </button>
      </div>
    </div>
  );
};

export default Latest;
