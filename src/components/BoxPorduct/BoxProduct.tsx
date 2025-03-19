import { FC } from "react";
import { Skeleton } from "primereact/skeleton";

interface BoxProductProps {
  name: string;
  price: number;
  stock: number;
  description: string;
  create: Date;
  delete: () => void;
}

const BoxProduct: FC<BoxProductProps> = ({ name, price, stock, description, create, delete: onDelete }) => {
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Área de imagen con Skeleton y botón de borrar */}
      <div className="relative">
        <Skeleton shape="rectangle" width="100%" height="200px" />
        <button
          onClick={onDelete}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 focus:outline-none"
        >
          <i className="pi pi-trash" />
        </button>
      </div>
      {/* Detalles del producto */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-green-600">${price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">Stock: {stock}</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Creado: {create.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default BoxProduct;
