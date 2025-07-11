import Image from "next/image";
// import collin from "/collin.jpg"
export default function Banner() {
  return (
    <div className="relative h-96 bg-cyan-100 rounded-2xl mt-10">
      <Image
        src="/collin.jpg"
        fill
        alt="Picture of the author"
        className="rounded-2xl object-cover"
      />
      <div className="bg-white absolute bottom-0 left-20 transform translate-y-1/2 p-5 max-w-[500px] rounded-lg shadow-lg">
        <p className="bg-blue px-2 py-1 rounded-lg max-w-20 text-xs text-white">
          Technology
        </p>
        <h2 className="text-2xl font-bold my-5">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h2>
        <div className="flex gap-3">
          <Image
            src="/user.png"
            width={30}
            height={30}
            alt="Logo"
            className="rounded-full object-cover"
          />
          <div className="flex flex-col text-xs">
            <p className="capitalize text-secondary-text font-bold">
              Jason Francise
            </p>
            <p>August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
