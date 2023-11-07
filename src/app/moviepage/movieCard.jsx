import Image from "next/image";

function MovieCard({ image, title, description, director, duration }) {
    return (
        <div className="h-2/5 max-w-full border-4 border-white transform transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden hover:shadow-xl lg:w-70 flex">
          <div className="w-1/2 relative">
            <Image
              src={image}
              alt={title}
              width={690}
              height={500}
              className="object-cover h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <a href="#" class="w-12 h-12 bg-gray-950 rounded-full ring-4 ring-white grid place-items-center hover:bg-neutral-800 transition">
                    <div class="bg-white text-black p-5 rounded-full text-4xl">
                    <i class="fas fa-play"></i>
                    </div>
                </a>

            </div>
          </div>
          <div className="w-1/2 p-4 text-white">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <h3 className="text-3xl font-bold mb-2">{duration}</h3>
            <p className="text-lg mb-2">{description}</p>
            <span className="text-md">Por: {director}</span>
          </div>
        </div>
      );
      
}

export default MovieCard;
