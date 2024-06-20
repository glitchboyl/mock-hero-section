import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="h-full min-h-[640px] mt-[-72px] md:mt-[-80px] flex items-center justify-center flex-col bg-[url('/images/bg-image.png')] bg-bottom bg-no-repeat bg-cover">
      <h2 className="text-[40px] leading-[49px] md:text-[60px] md:leading-[73.5px] lg:text-[80px] lg:leading-[98px] font-bold tracking-wider bg-gradient text-transparent bg-clip-text">
        A Fast Blockchain.
      </h2>
      <h2 className="text-[40px] leading-[49px] md:text-[60px] md:leading-[73.5px] lg:text-[80px] lg:leading-[98px] font-bold tracking-wider">
        Scalable AI.
      </h2>
      <p className="max-w-[744px] text-[16px] leading-[24px] lg:text-[20px] lg:leading-[32px] text-center tracking-wider mt-[18px] px-[16px] md:px-[12px]">
        Our technology performing fast blockchain (120K TPS) and it has
        guaranteed AI-based data security. Proof of Stake, its consensus
        algorithm enables unlimited speeds.
      </p>
      <div className="flex mt-[32px] gap-[12px]">
        <Button className="w-[160px] md:w-[180px] h-auto flex rounded-full bg-transparent bg-gradient p-[2px] text-[20px] leading-[26px] tracking-wider">
          <span className="flex justify-center items-center w-full h-full rounded-full bg-black px-[30px] py-[20px]">
            Get Started
          </span>
        </Button>
        <Button className="w-[160px] md:w-[180px] h-auto flex rounded-full border-[2px] border-white bg-black text-[20px] leading-[26px] tracking-wider hover:bg-black">
          Ecosystems
        </Button>
      </div>
    </section>
  );
};

export default Hero;
