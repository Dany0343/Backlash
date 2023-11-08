import Image from "next/image";

function Card({ image, title, description, user }) {
  return (
    <div className="m-4 w-64 border-4 border-white transform transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden hover:shadow-xl lg:w-70 hover:bg-yellow-400">
      <Image
        src={image}
        alt={title}
        width={256}
        height={160}
        className="object-cover"
      />
      <div className="p-4 text-white">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm mb-2">{description}</p>
        <span className="text-xs">Por: {user}</span>
      </div>
    </div>
  );
}

export default Card;
