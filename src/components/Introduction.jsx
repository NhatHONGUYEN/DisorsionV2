export default function Introduction() {
  return (
    <div className="w-full h-full bg-black text-white">
      <div className="relative w-full h-screen flex items-center">
        <video
          className="absolute top-80 left-[30%] z-10 h-[500px]"
          src="/redsmoke.mp4"
          autoPlay
          loop
          muted
        ></video>
        <video
          className="top-40 left-[35%] absolute h-[800px]"
          src="/redsmoke1.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute z-20 right-[10%] w-1/3 pr-10 text-left py-40 text-2xl top-32  h-2/3 flex flex-col justify-between">
          <p className=" w-3/4 ">
            "Immerse yourself in the soothing beauty of our smoke effects and
            let them wrap around you, enveloping your senses and guiding you to
            a state of inner peace. As the smoke swirls and dances around you,
            allow your mind to relax and let go of the worries and anxieties of
            daily life. Feel the weight of your concerns slowly melting away as
            you focus on the rhythmic patterns of the smoke. "
          </p>
        </div>
      </div>
    </div>
  );
}
