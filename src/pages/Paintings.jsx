import data from "../data/data.json";
import PaintingList from "../components/PaintingList";
import Title from "../components/Title";

const Paintings = () => {
  const { paintings } = data;
  return (
    <div className="w-full">
      <Title>All Paintings</Title>
      <PaintingList paintings={paintings} />
    </div>
  );
};

export default Paintings;
