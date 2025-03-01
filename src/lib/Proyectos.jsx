const proyectos = [
  {
    titulo: "RPG Fantasy [2026]",
    img: "",
    alt: "RPG Fantasy Game",
    descripcion: "An adventure game in a 2D world",
  },
  {
    titulo: "Horror 3D [2027]",
    img: "/GameHorror.png",
    alt: "Horror 3D",
    descripcion: "A horror game where you will have to escape from the forest",
  },
];

const ProyectosSection = () => {
  return (
    <section className="py-10 px-6 text-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 justify-center">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 bg-gray-800 hover:bg-gray-700 ${
              index === 2 ? "md:col-span-2" : ""
            }`}
          >
            <img
              src={proyecto.img}
              alt={proyecto.alt}
              className="w-full h-48 object-cover transition duration-300 hover:opacity-90"
            />
            <div className="p-2">
              <h3 className="text-lg font-semibold mb-1">{proyecto.titulo}</h3>
              <p className="text-gray-400 text-sm">{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProyectosSection;
