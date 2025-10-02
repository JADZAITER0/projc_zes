import Image from "next/image";

type ProductCardProps = {
  src: string;
  title?: string;
  price?: string;
  number?: string;
  id?: number;
};

export default function ProductCard({
  src,
  title = "Product",
  price = "—",
  number,
  id,
}: ProductCardProps) {
  return (
  <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-3 flex flex-col">
      <div className="relative w-full h-48 sm:h-40 md:h-44 lg:h-52">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain"
        />
      </div>

      <div className="mt-3 flex flex-col gap-1">
  <h3 className="text-sm sm:text-base font-medium text-gray-800 truncate">
          {title}
        </h3>
        {number && (
          <span className="text-xs text-gray-500">{number}</span>
        )}
  <div className="text-lg font-semibold text-blue-600">
          {price}
        </div>
      </div>
    </article>
  );
}
