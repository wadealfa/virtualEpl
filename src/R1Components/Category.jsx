import { useDispatch, useSelector } from "react-redux";
// import  { testing } from "./GameReducer";

function Category() {
  const dispatch = useDispatch();

  const deactive=useSelector(state=>state.isloading)

  const isLoading = useSelector((store) => store.game.isloading);
  // console.log(isLoading);
  const CategoryAmount = [
    { category: "Beginner", amount: 10 },
    { category: "Light weight", amount: 20 },
    { category: "Heavy Weight", amount: 50 },
    { category: "Pro", amount: 100 },
  ];



  function handleDispatch() {
    // dispatch(testing())
    // console.log("first")
  }

  return (
    <>
    
      <div className="text-center p-4 bg-stone-600  ">
        <h2 className="text-2xl pb-2 ">Amount Class</h2>
        <div className=" flex gap-5 justify-center  ">
          {CategoryAmount.map(({ category, amount }, index) => (
            <button onClick={handleDispatch}
             
              key={index}
              className={` bg-teal-700 border-2 p-2 rounded-xl min-w-28 hover:bg-teal-950 `}>
              <h2>{category}</h2>
              <span>{amount}</span>
              
            </button>
            
          ))}
        </div>
      </div>
      <div className="bg-white py-1 m-0 p-0 blur-sm"></div>
    </>
  );
}

export default Category;
