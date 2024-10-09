import { Link, useParams } from "react-router-dom";
import paintings from "../data/data.json";

const Details = () => {
  const params = useParams();
  const painting = paintings.find((p) => p.id === parseInt(params.id));
  
  return (
    <div className="flex mt-12">
      <div className="w-76 mb-6">
        <img src={`/images/${painting.imageUrl}`} width={"320px"} />
      </div>
      <div>
        <div className="text-lg font-semibold">{painting.title}</div>
        <div>{painting.dimensions}</div>
        <div> &#8377;{painting.price}</div>
        <br/><br/>
        <div>To buy this painting, you can <Link to="/contact">contact</Link> me and tell me the title of the painting you wish to buy. We will coordinate form there.</div>
        {/* <button className="bg-blue-500 text-white pl-4 pr-4 px-1 py-1 cursor-pointer">
          Buy Now
        </button> */}
      </div>
    </div>
  );
};

export default Details;
