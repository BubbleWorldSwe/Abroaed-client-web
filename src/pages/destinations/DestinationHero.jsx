
import destinationHeroImg from "../../assets/destinationHeroImg.png"
function DestinationHero() {
  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center "
        style={{
          backgroundImage: `url(${destinationHeroImg})`,
          opacity:'4' 
        }}
      >
        <div
    className="absolute inset-0 bg-black opacity-60"
    style={{ mixBlendMode: "multiply" }}
  ></div>
        {/* Text Content */}
        <div className="absolute bottom-8 left-11  p-6 rounded-lg shadow-lg max-w-2xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">
            Study in USA
          </h1>
          <p className="font-light text-white md:text-lg xl:text-xl">
            Irure do commodo voluptate excepteur est qui tempor officia. Cillum
            occaecat sint occaecat consequat in fugiat dolor. Voluptate ea
            dolore duis amet Lorem.
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default DestinationHero;