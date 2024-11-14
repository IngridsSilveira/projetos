/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import items from "../assets/data.json";
import ItemList from "./components/ItemList/ItemList";
import Carrinho from "./components/Carrinho/Carrinho";
import { Footer } from "./index";

interface ItemCarrinho {
  id: number;
  name: string;
  price: number;
  quantidade: number;
}

function App() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [itemSelecionado, setItemSelecionado] = useState<number | null>(null);
  const [total, setTotal] = useState(0);

  // Função para calcular o total do carrinho
  const calcularTotal = () => {
    const novoTotal = carrinho.reduce((acc, itemCarrinho) => {
      // Busca o item completo no data.json para obter o preço
      const itemData = items.find((item) => item.id === itemCarrinho.id);
      const itemPrice = itemData ? itemData.price : 0;

      return acc + itemCarrinho.quantidade * itemPrice;
    }, 0);

    setTotal(novoTotal);
  };

  useEffect(() => {
    calcularTotal();
  }, [calcularTotal, carrinho]);

  const adicionarCompra = (itemId: number) => {
    setItemSelecionado(itemId);
    setCarrinho((carrinhoAtual) => {
      const itemExistente = carrinhoAtual.find((item) => item.id === itemId);
      if (itemExistente) {
        return carrinhoAtual.map((item) =>
          item.id === itemId
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        const novoItem = {
          id: itemId,
          name: `Item ${itemId}`,
          price: 10,
          quantidade: 1,
        };
        return [...carrinhoAtual, novoItem];
      }
    });
  };

  const removerCompra = (itemId: number) => {
    setCarrinho((carrinhoAtual) => {
      const itemExistente = carrinhoAtual.find((item) => item.id === itemId);
      if (itemExistente && itemExistente.quantidade > 1) {
        return carrinhoAtual.map((item) =>
          item.id === itemId
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        );
      } else {
        return carrinhoAtual.filter((item) => item.id !== itemId);
      }
    });
  };

  const removerTodoMundo = (itemId: number) => {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.filter((item) => item.id !== itemId)
    );
  };

  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  // const total = carrinho.reduce(
  //   (soma, item) => soma + item.price * item.quantidade,
  //   0
  // );

  return (
    <section className="flex flex-col bg-pink-50">
      <div className="flex justify-evenly p-6">
        <ItemList
          carrinho={carrinho}
          setItemSelecionado={setItemSelecionado}
          adicionarCompra={adicionarCompra}
          removerCompra={removerCompra}
        />
        <Carrinho
          carrinho={carrinho}
          totalItens={totalItens}
          total={total}
          removerTodoMundo={removerTodoMundo}
        />
      </div>
      <Footer />
    </section>
  );
}

export default App;
