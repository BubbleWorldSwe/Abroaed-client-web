
function DestinationHero({header,text,img}) {
  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center "
        style={{
          backgroundImage: `url(${img})`,
          opacity:'1' 
        }}
      >
        <div
    className="absolute inset-0 bg-black opacity-30"
    style={{ mixBlendMode: "multiply" }}
  ></div>
        {/* Text Content */}
        <div className="absolute bottom-8 left-12  p-6 rounded-lg shadow-lg max-w-2xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">
            {header}
          </h1>
          <p className="font-light text-white md:text-lg xl:text-xl">
            {text}
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default DestinationHero;