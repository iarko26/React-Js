import Random from "./components/Random"
import Tag from "./components/Tag"

function App() {
  return (
    <div className=" flex flex-col w-full h-screen items-center">
      <h1 className="bg-black rounded-md l text-4xl text-yellow-700 px-10 py-2  text-center mt-[40px] w-11/12 font-bold">RANDOM GIFS</h1>
      <div className=" w-full items-center gap-y-20 mt-[30px] flex flex-col">
      <Random />
      <Tag/>

      </div>
  

    </div>
  )
}

export default App
