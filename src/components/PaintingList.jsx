import { useNavigate } from "react-router-dom";

const PaintingList = ({ paintings }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-5 flex-wrap">
        {paintings.map((painting, i) => (
          <div className="min-w-[200px] mb-6 bg-[#333]" key={i} onClick={() => navigate(`/painting/${painting.id}`)}>
            <div className="sm:w-[200px] sm:h-[200px] sm:overflow-hidden">
              <img className="w-full h-auto" src={`/images/${painting.imageUrl}`} />
            </div>
            <div style={{ padding: "5px" }}>
              <div className="text-lg font-semibold text-[#f47519] cursor-pointer">
                  {painting.title}
              </div>
              <div>{painting.dimensions}</div>
              <div className="flex justify-between">
                {" "}
                <span>&#8377;{painting.price}</span>{" "}
                {painting.sold && <span className="text-red-500">SOLD</span>}
              </div>
              {/* <button className="bg-blue-500 text-white pl-2 pr-2 px-0.5 py-0.5 cursor-pointer text-sm">
              Buy Now
            </button> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default PaintingList;
