import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface TechItem {
  id: string;
  name: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  badge?: {
    label: string;
    bgColor: string;
    textColor: string;
  };
  iconUrl: string;
}

const tasksData: TechItem[] = [
  {
    id: '1',
    name: 'React',
    description:
      'A declarative, component-based JavaScript library for building modern user interfaces.',
    category: 'Frontend',
    level: 'Beginner-Friendly',
    rating: 4.9,
    badge: {
      label: 'Popular',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-500',
    },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    id: '2',
    name: 'Vue.js',
    description:
      'An approachable, performant, and versatile framework for building web user interfaces.',
    category: 'Frontend',
    level: 'Beginner-Friendly',
    rating: 4.8,
    badge: {
      label: 'Versatile',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-500',
    },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    id: '3',
    name: 'Svelte',
    description:
      'Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.',
    category: 'Frontend',
    level: 'Intermediate',
    rating: 4.8,
    badge: {
      label: 'Fast',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-500',
    },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
  },
  {
    id: '4',
    name: 'Next.js',
    description:
      'The React framework for full-stack web applications with hybrid static & server rendering.',
    category: 'Frontend',
    level: 'Intermediate',
    rating: 4.9,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    id: '5',
    name: 'Node.js',
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: 'Backend',
    level: 'Intermediate',
    rating: 4.8,
    badge: {
      label: 'Standard',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-500',
    },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    id: '6',
    name: 'PostgreSQL',
    description:
      'A powerful, open-source object-relational database system with proven reliability.',
    category: 'Database',
    level: 'Intermediate',
    rating: 4.9,
    badge: {
      label: 'Top SQL',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600',
    },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    id: '7',
    name: 'Redis',
    description:
      'In-memory data structure store used as a high-speed database, cache, and message broker.',
    category: 'Database',
    level: 'Intermediate',
    rating: 4.8,
    badge: { label: 'Cache', bgColor: 'bg-red-50', textColor: 'text-red-500' },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
  {
    id: '8',
    name: 'JavaScript',
    description:
      'The versatile, ubiquitous scripting language powering dynamic behavior across the web.',
    category: 'Language',
    level: 'Beginner-Friendly',
    rating: 4.9,
    badge: {
      label: 'Ubiquitous',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
    },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    id: '9',
    name: 'TypeScript',
    description:
      'A strongly typed programming language that builds on JavaScript for robust tooling.',
    category: 'Language',
    level: 'Intermediate',
    rating: 4.9,
    badge: {
      label: 'Essential',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-500',
    },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    id: '10',
    name: 'Java',
    description:
      'A secure, object-oriented programming language designed for portability and scale.',
    category: 'Language',
    level: 'Intermediate',
    rating: 4.6,
    badge: { label: 'Robust', bgColor: 'bg-sky-50', textColor: 'text-sky-500' },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    id: '11',
    name: 'Tailwind CSS',
    description:
      'A utility-first CSS framework packed with classes that can be composed to build custom UI.',
    category: 'Styling',
    level: 'Beginner-Friendly',
    rating: 4.9,
    badge: {
      label: 'Modern',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-500',
    },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    id: '12',
    name: 'Docker',
    description:
      'A platform designed to build, share, and run containerized applications reliably.',
    category: 'DevOps',
    level: 'Intermediate',
    rating: 4.9,
    badge: {
      label: 'Containers',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-500',
    },
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
];

export const TaskSection = () => {
  const [selectedStack, setSelectedStack] = useState<TechItem[]>([]);

  const handleAddToStack = (item: TechItem) => {
    if (!selectedStack.some(s => s.id === item.id)) {
      setSelectedStack([...selectedStack, item]);
      toast.success(`${item.name} added to stack!`);
    } else {
      toast.info(`${item.name} is already in your stack!`);
    }
  };

  const handleRemove = (id: string) => {
    setSelectedStack(selectedStack.filter(item => item.id !== id));
    toast.warn('Item removed from stack!');
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('All items removed!');
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasksData.map(item => {
            const isSelected = selectedStack.some(s => s.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between h-[300px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <img
                      src={item.iconUrl}
                      alt={item.name}
                      className="w-9 h-9 object-contain"
                    />
                    {item.badge && (
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${item.badge.bgColor} ${item.badge.textColor}`}
                      >
                        {item.badge.label}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-50 text-gray-500 px-2.5 py-1 rounded-md border border-gray-100">
                        {item.category}
                      </span>
                      <span>{item.level}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-700 font-bold">
                      <span className="text-amber-400">★</span>
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToStack(item)}
                    disabled={isSelected}
                    className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all ${
                      isSelected
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-[#0b0f19] text-white hover:bg-black active:scale-[0.98]'
                    }`}
                  >
                    {isSelected ? 'Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1 sticky top-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-xs">
            <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
            <p className="text-gray-400 text-xs font-medium mb-4">
              {selectedStack.length} Technology Selected
            </p>

            <div className="space-y-3 mb-6 min-h-[100px]">
              {selectedStack.map(item => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border border-gray-100 p-3 rounded-xl bg-white hover:border-gray-200 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.iconUrl}
                      alt={item.name}
                      className="w-6 h-6 object-contain"
                    />
                    <div>
                      <p className="text-xs font-bold text-gray-900 leading-tight">
                        {item.name}
                      </p>
                      <span className="text-[10px] text-gray-400">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-gray-300 hover:text-gray-500 font-normal text-sm p-1"
                  >
                    ✕
                  </button>
                </div>
              ))}

              {selectedStack.length === 0 && (
                <p className="text-xs text-gray-300 text-center py-8">
                  No technologies added yet.
                </p>
              )}
            </div>

            {selectedStack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="w-full py-2.5 border border-red-200 text-red-500 hover:bg-red-50/50 rounded-xl font-semibold text-xs transition-all"
              >
                Remove All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
