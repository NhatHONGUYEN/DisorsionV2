export default function FrontPage() {
  return (
    <div>
      <video
        className="relative w-full h-screen object-cover"
        src="/smokeintro.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-1/2 left-1/2 z-10 p-4 text-white ">
        <h1 className="font-bold text-4xl">Distorsion</h1>
        <div className="text-xl py-4">
          <p>
            Let the swirling smoke envelop you and take you on a journey to a
            realm of tranquility.
          </p>
          <p>
            In a world filled with noise and chaos, find your sanctuary in the
            soft clouds of relaxation.
          </p>
        </div>
      </div>
    </div>
  );
}
