// Carrinho.tsx
import React from "react";
import items from "../../../assets/data.json"; // Importa os dados dos itens do JSON

interface ItemCarrinho {
  id: number;
  quantidade: number;
}

interface CarrinhoProps {
  carrinho: ItemCarrinho[];
  totalItens: number;
  total: number;
  removerTodoMundo: (id: number) => void;
}

const Carrinho: React.FC<CarrinhoProps> = ({
  carrinho,
  totalItens,
  total,
  removerTodoMundo,
}) => {
  // Função para buscar os dados completos do item usando o ID
  const getItemData = (id: number) => items.find((item) => item.id === id);

  return (
    <article
      className={`bg-white w-80 ${
        totalItens === 0 ? "h-72" : "min-h-72"
      } rounded-lg p-4 flex flex-col gap-3`}
    >
      <h1 className="text-2xl font-serif text-red-700 font-bold mb-2">
        Seu carrinho ({totalItens})
      </h1>
      {totalItens > 0 ? (
        <>
          {carrinho.map((itemCarrinho) => {
            const itemData = getItemData(itemCarrinho.id);

            // Se não encontrar os dados do item, não exibe nada
            if (!itemData) return null;

            return (
              <div
                key={itemCarrinho.id}
                className="flex items-center justify-between border-b-2 pb-2"
              >
                <div>
                  <p className="font-bold tracking-wider">{itemData.name}</p>
                  <div className="flex flex-row gap-2 text-sm">
                    <p className="text-red-600">{itemCarrinho.quantidade}x</p>
                    <p className="text-gray-400">@R${itemData.price}</p>
                    <p className="text-gray-500">
                      R${itemData.price * itemCarrinho.quantidade}
                    </p>
                  </div>
                </div>
                <button
                  className="border rounded-full p-1 hover:border-black"
                  onClick={() => removerTodoMundo(itemCarrinho.id)}
                >
                  <img
                    className="w-3"
                    src="/assets/images/icon-remove-item.svg"
                    alt="botão remover formato x"
                  />
                </button>
              </div>
            );
          })}
          <p className="flex justify-between mt-5 mb-5 text-gray-700">
            Total <span className="font-bold text-2xl">R${total}</span>
          </p>
          <button className="py-3 bg-red-600 text-white rounded-3xl transition duration-200 ease-in-out">
            Confirmar
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img
            src={"/assets/images/illustration-empty-cart.svg"}
            alt="carrinho vazio"
          />
          <p className="font-mono text-red-700">Seu carrinho está vazio.</p>
        </div>
      )}
    </article>
  );
};

export default Carrinho;
