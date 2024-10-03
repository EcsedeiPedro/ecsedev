import { GridContainer } from "@/src/components/ui/grid-container";

export const Hero = () => {
  return (
    <section
      className="relative py-10 w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/hero/hero-bg.png)" }}
    >
      <div className="bg-black/70 absolute inset-0 z-10" />

      <GridContainer className="relative z-20">
        <div className="flex flex-shrink-0 items-center min-h-[499px] max-h-[500px] h-full">
          <div className="w-4/12">
            <h1 className="text-4xl font-bold text-white tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
          </div>

          <div></div>
        </div>
      </GridContainer>
    </section>
  );
};
