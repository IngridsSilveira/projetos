/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface ItemCardProps {
  item: any;
  quantidade: number;
  setItemSelecionado: (id: number) => void;
  adicionarCompra: (id: number) => void;
  removerCompra: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  quantidade,
  setItemSelecionado,
  adicionarCompra,
  removerCompra,
}) => {
  return (
    <div key={item.id} className="flex flex-col gap-1">
      <div className="relative mb-4">
        <img
          src={item.image.desktop}
          alt={item.name}
          className="rounded-md w-64"
        />
        {quantidade > 0 ? (
          <div
            className="bg-red-500 rounded-full py-1 w-44 font-semibold text-sm absolute left-12 -bottom-3 flex items-center justify-center gap-2 cursor-pointer transition duration-200 ease-in-out"
            onClick={() => setItemSelecionado(item.id)}
          >
            <div className="flex justify-between gap-10 text-white">
              <CiCircleMinus
                className="rounded-full hover:text-red-500 hover:bg-white text-3xl transition duration-200 ease-in-out"
                onClick={(e) => {
                  e.stopPropagation();
                  removerCompra(item.id);
                }}
              />
              <span className="text-lg text-white">{quantidade}</span>
              <CiCirclePlus
                className="rounded-full hover:text-red-500 hover:bg-white text-3xl transition duration-200 ease-in-out"
                onClick={(e) => {
                  e.stopPropagation();
                  adicionarCompra(item.id);
                }}
              />
            </div>
          </div>
        ) : (
          <div
            className="rounded-full border bg-white border-red-400 py-2 w-44 font-semibold text-sm absolute left-12 -bottom-3 flex items-center justify-center gap-2 cursor-pointer transition duration-200 ease-in-out"
            onClick={() => adicionarCompra(item.id)}
          >
            <img
              src={"/assets/images/icon-add-to-cart.svg"}
              alt="add to cart"
            />
            <span>Adicionar</span>
          </div>
        )}
      </div>
      <h1 className="font-sans font-semibold text-md">{item.name}</h1>
      <p className="text-red-500 text-sm font-bold font-mono">R${item.price}</p>
    </div>
  );
};

export default ItemCard;
