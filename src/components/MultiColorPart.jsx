export default function MultiColorPart() {
  return (
    <div className="w-full h-full bg-black text-white">
      <div className="flex flex-col py-96 ">
        <div className="flex justify-center ">
          <video
            className="  "
            src="/finalpink.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="flex">
          <video className="w-1/3  " autoPlay loop muted></video>
          <video className="w-1/3  " autoPlay loop muted></video>
          <video className="w-1/3  " autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
}
