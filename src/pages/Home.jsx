import paintings from "../data/data.json";

const Home = () => {
  const slug = (title) => title.split(" ").join("-");

  return (
    <div className="text-slate-700">
      <h2 className="pl-2 border-blue-500 border-l-8 mt-10 mb-10 font-bold">
        Paintings by Kumar Abhinav
      </h2>
      <div className="flex flex-wrap justify-between">
        {paintings.map((painting, i) => (
          <div key={i} className="mb-6">
            <img src={`/images/${painting.imageUrl}`} width={"340px"} />
            <div className="text-lg font-semibold">
              <a href={`/painting/${painting.id}/${slug(painting.title)}`}>
                {painting.title}
              </a>
            </div>
            <div>{painting.dimensions}</div>
            <div> &#8377;{painting.price}</div>
            {/* <button className="bg-blue-500 text-white pl-2 pr-2 px-0.5 py-0.5 cursor-pointer text-sm">
              Buy Now
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
