import styled from "styled-components";
import paintings from "../data/data.json";

const Paintings = () => {
  const slug = (title) => title.split(" ").join("-");

  const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  `;

  const Box = styled.div`
    min-width: 200px;
    background-color: #333;
  `

  const Image = styled.img`
    width: 100%;
    height: auto;
  `;

  const ImageHolder = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
  `;

  return (
    <div>
      <h2>Paintings</h2>
      <Wrapper>
        {paintings.map((painting, i) => (
          <Box key={i} className="mb-6">
            <ImageHolder>
                <Image src={`/images/${painting.imageUrl}`} />
            </ImageHolder>
            <div style={{padding: '5px'}}>

            
            <div className="text-lg font-semibold">
              <a href={`/painting/${painting.id}/${slug(painting.title)}`}>
                {painting.title}
              </a>
            </div>
            <div>{painting.dimensions}</div>
            <div className="flex justify-between"> <span>&#8377;{painting.price}</span> {painting.sold && <span className="text-red-500">SOLD</span>}</div>
            {/* <button className="bg-blue-500 text-white pl-2 pr-2 px-0.5 py-0.5 cursor-pointer text-sm">
              Buy Now
            </button> */}
            </div>
          </Box>
        ))}
      </Wrapper>
    </div>
  );
};

export default Paintings;
