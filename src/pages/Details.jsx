import { Link, useParams } from "react-router-dom";
import data from "../data/data.json";

const Details = () => {
  const params = useParams();
  const { paintings } = data;
  const painting = paintings.find((p) => p.id === params.id);

  return (
    <div className="sm:flex mt-12">
      <div className="mb-6">
        <img src={`/images/${painting.imageUrl}`} width={"1220px"} />
      </div>
      <div className="sm:ml-6">
        <div className="text-lg font-semibold text-[#f47519]">{painting.title}</div>
        <div>{painting.dimensions}</div>
        <div> &#8377;{painting.price}</div>
        <br />
        <br />
        <div>
          <p>
          To buy this painting, you can <Link to="/contact">contact</Link> me
          and tell me the title of the painting you wish to buy. We will
          coordinate from there.
          </p>

          <p>
            Price mentioned includes framing and shipping. Please contact for framing options.
          </p>


        </div>
        {/* <button className="bg-blue-500 text-white pl-4 pr-4 px-1 py-1 cursor-pointer">
          Buy Now
        </button> */}
      </div>
    </div>
  );
};

export default Details;
