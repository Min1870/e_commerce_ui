import {BsStarFill} from "react-icons/bs"

const BestDealsCard = ({img}) => {
  return (
    <div className=" w-52 ">
      <div className=" relative">
        <img
          src={img}
          alt="Shoes"
          className="rounded-[25px] border-2 w-full overflow-hidden "
        />
        <div className="absolute text-[12px] top-0 left-[37%] bg-red-500 px-2 py-1 text-white">
          20% off
        </div>
      </div>

      <div className=" flex flex-col mt-3 items-center text-center">
        <h2 className=" font-semibold mb-1">Refreshing Mint</h2>
        <p>30,000 MMK</p>
        <span className=" line-through text-[12px]">30,000 MMK</span>
        <span className=" flex items-center gap-1 text-[12px] text-yellow-500"><BsStarFill size={10}/>600 Points</span>
      </div>
    </div>
  );
};

export default BestDealsCard;
