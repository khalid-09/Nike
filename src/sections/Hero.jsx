import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex gap-16 mt-20 w-full flex-wrap justify-start items-start">
          {statistics.map(stat => (
            <Statistics
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center flex-1 relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="bigshoe"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div>
          {shoes.map(shoe => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={() => {}}
                bigShoeImg=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Statistics = ({ value, label }) => {
  return (
    <div>
      <p className="text-4xl font-palanquin font-bold">{value}</p>
      <p className="leading-7 font-montserrat text-slate-gray">{label}</p>
    </div>
  );
};

export default Hero;
