import bit from "../assets/right side.png"
import Button from "./Button";
function Mission() {
  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-10 py-10 justify-between items-center">
      <div className="flex flex-col gap-6">
        <p className="max-w-md">
          Stacks mission to create a better, user-owned decenterlized internet
          .To do it we`re unleashing Bitcoin, the most battle - tested and
          valueable blockchain in the world.
        </p>
        <div className="flex gap-4 items-center">
          <div> 
            <Button>Learn about series</Button>
          </div>
          <a href="" className="text-sm text-gray-600/50 underline">Why stack in built</a>
        </div>
      </div>
      <div className="md:max-w-[450px]">
        <img src={bit} alt="" />
      </div>
    </div>
  );
}

export default Mission;
