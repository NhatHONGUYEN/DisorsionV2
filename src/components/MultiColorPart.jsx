export default function MultiColorPart() {
  return (
    <div className="w-full h-full bg-black text-white">
      <div className="flex flex-col py-96 ">
        <div className="flex justify-center ">
          <video
            className="  "
            src="/finalpinksmoke.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="flex">
          <video
            className="w-1/3"
            src="/finalbluesmoke.mp4"
            autoPlay
            muted
            loop
          ></video>
          <video
            className="w-1/3"
            src="/finalbluesmoke.mp4"
            autoPlay
            muted
            loop
          ></video>
          <video
            className="w-1/3"
            src="/finalbluesmoke.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </div>
  );
}
