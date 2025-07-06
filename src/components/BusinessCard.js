import { FaStar, FaRegStickyNote, FaQuoteLeft, FaQuoteRight, FaRedo } from 'react-icons/fa';

function BusinessCard({ data, onRegenerate }) {
  return (
    <div className="mt-6 bg-white p-4 rounded shadow-md max-w-md w-full">
      <h2 className="text-xl font-semibold mb-2">{data.name} - {data.location}</h2>

      <p className="flex items-center gap-2 text-gray-800">
        <FaStar className="text-yellow-500" />
        Rating: {data.rating}
      </p>

      <p className="flex items-center gap-2 text-gray-800 mt-1">
        <FaRegStickyNote className="text-blue-500" />
        Reviews: {data.reviews}
      </p>

      <div className="mt-4 text-gray-700 italic flex items-start gap-2">
        <FaQuoteLeft className="text-gray-400 mt-1" />
        <p className="flex-1">{data.headline}</p>
        <FaQuoteRight className="text-gray-400 mt-1" />
      </div>

      <button
        onClick={onRegenerate}
        className="mt-6 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        <FaRedo />
        Regenerate SEO Headline
      </button>
    </div>
  );
}

export default BusinessCard;
