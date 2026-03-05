import Header from "@/components/Header";

const InnovacionJuvenil = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="text-center">
          <h1
            className="font-black text-4xl md:text-6xl mb-3"
            style={{ color: "#0047ca" }}
          >
            ¿PORQUÉ NACIÓ EL TALLER?
          </h1>
          <div
            className="h-1 w-20 mx-auto rounded-full mt-2"
            style={{ backgroundColor: "#0047ca" }}
          />
        </div>
      </section>
    </div>
  );
};

export default InnovacionJuvenil;
