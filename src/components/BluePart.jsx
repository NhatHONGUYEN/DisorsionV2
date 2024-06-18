export default function Bluepart() {
  return (
    <div className="w-full h-full bg-black text-white flex justify-between">
      <div className="relative w-full h-screen">
        <video
          className="absolute w-screen h-screen z-10  object-cover"
          src="/bluesmoke.mp4"
          autoPlay
          loop
          muted
        ></video>
        <p className="w-2/5 absolute text-2xl right-[10%] top-[40%]  z-10 text-left ">
          So take a moment to step away from the chaos of everyday life and let
          the smoke effects transport you to a state of inner peace. Close your
          eyes, breathe deeply, and allow the soothing patterns of the smoke to
          lull you into a state of relaxation. As you become more and more
          relaxed, allow yourself to fully embrace the peace and tranquility
          that surrounds you. Let the smoke effects be your guide on this
          journey of self-discovery and relaxation.
        </p>
      </div>
    </div>
  );
}
