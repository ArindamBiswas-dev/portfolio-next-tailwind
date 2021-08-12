function SmallCard({ icon, name, topic }) {
  return (
    <div
      className="flex space-x-2 items-center cursor-pointer 
            hover:bg-gray-200 p-2 rounded-lg hover:scale-105
            transition transform duration-200 ease-out"
    >
      {icon}
      <div>
        <p className="text-md font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-400 font-medium">{topic}</p>
      </div>
    </div>
  );
}

export default SmallCard;
