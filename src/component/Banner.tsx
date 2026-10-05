import type { TTask } from '../types/task';

import bannerImg from '../assets/banner-stack.png';

type TBannerProps = {
  inProgressTask: any[];
  completedTask: any[];
};

const Banner = ({ inProgressTask, completedTask }: TBannerProps) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-base leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
              Explore Technologies
            </button>
            <button className="border border-gray-300 text-gray-700 font-medium px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bannerImg}
            alt="Development Stack"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
    </div>
  );
};

export default Banner;
