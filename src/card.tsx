import React from 'react';

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

interface CardProps {
  item: TechItem;
  isSelected: boolean;
  onAdd: (item: TechItem) => void;
}

export const Card: React.FC<CardProps> = ({ item, isSelected, onAdd }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between h-[300px]">
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

        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
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
          onClick={() => onAdd(item)}
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
};

export default Card;
