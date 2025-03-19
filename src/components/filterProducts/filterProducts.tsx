import { FC } from "react";
import { tpProducts } from "../../types/store";
import { InputText } from "primereact/inputtext";

interface ProductSearchProps {
    data: tpProducts[];
    onSearch: (filteredData: tpProducts[]) => void;
    placeholder?: string;
  }
  
  const FilterProducts: FC<ProductSearchProps> = ({
    data,
    onSearch,
    placeholder = "Buscar productos..."
  }) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchText = e.target.value.toLowerCase();
      const filtered = data.filter(product =>
        product.id.toString().includes(searchText) ||
        product.codigo.toString().includes(searchText) ||
        product.name.toLowerCase().includes(searchText) ||
        product.price.toString().includes(searchText) ||
        product.stock.toString().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) ||
        product.create.toLocaleDateString().toLowerCase().includes(searchText)
      );
      onSearch(filtered);
    };
  
    return (
      <div className="flex items-center">
        <span className="p-input-icon-left w-full">
          <i className="pi pi-search" />
          <InputText onChange={handleSearch} placeholder={placeholder} className="w-full" />
        </span>
      </div>
    );
  };
  
  export default FilterProducts