export default function YellowPart() {
  return (
    <div className="w-full h-full bg-black text-white">
      <div className="relative w-full h-screen">
        <video
          className="absolute top-80 right-1/4 z-10 h-[500px]"
          src="/yellowsmoke.mp4"
          autoPlay
          loop
          muted
        ></video>
        <video
          className="top-40 left-44 absolute h-[800px]"
          src="/yellowsmoke1.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <p className="text-2xl w-1/3 pt-80 pb-[30%] text-center mx-auto">
        Relaxation has been shown to have numerous benefits for both physical
        and mental health. It can help to reduce stress and anxiety, improve
        sleep quality, boost mood and energy levels, and even enhance cognitive
        function. By allowing yourself to be guided by the smoke effects, you
        are tapping into the power of relaxation and allowing your body and mind
        to heal and rejuvenate.
      </p>
    </div>
  );
}
