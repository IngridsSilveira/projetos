/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import items from "../../../assets/data.json";
import ItemCard from "../ItemCard/ItemCard";

interface ItemListProps {
  carrinho: any;
  setItemSelecionado: (id: number) => void;
  adicionarCompra: (id: number) => void;
  removerCompra: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({
  carrinho,
  setItemSelecionado,
  adicionarCompra,
  removerCompra,
}) => {
  return (
    <article className="flex flex-col">
      <h1 className="text-3xl font-mono font-bold mb-2">Sobremesas</h1>
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1 ">
        {items.map((item) => {
          const itemCarrinho = carrinho.find((c: { id: number; }) => c.id === item.id);
          const quantidade = itemCarrinho ? itemCarrinho.quantidade : 0;

          return (
            <ItemCard
              key={item.id}
              item={item}
              quantidade={quantidade}
              setItemSelecionado={setItemSelecionado}
              adicionarCompra={adicionarCompra}
              removerCompra={removerCompra}
            />
          );
        })}
      </div>
    </article>
  );
};

export default ItemList;
