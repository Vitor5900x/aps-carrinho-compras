import React, { useState } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const dadosProdutos = [ // Imagens correspondentes aos produtos do carrinho de compras
  { id: 1, nome: "Maçã", preco: 1.5, imagem: "https://www.paulistaflores.com.br/image/cache/data/produtos/monte-sua-cesta/frutas/maca01---maca/maca-gala-1-926x926.jpg"},
  { id: 2, nome: "Banana", preco: 1.0, imagem: "https://upload.wikimedia.org/wikipedia/commons/6/69/Banana.png" },
  { id: 3, nome: "Laranja", preco: 2.0, imagem: "https://parspng.com/wp-content/uploads/2022/05/orangepng.parspng.com_-1-600x600.png" },
  { id: 4, nome: "Leite", preco: 3.0, imagem: "https://phygital-files.mercafacil.com/pajeu/uploads/produto/leite_elege_integral_1l_944223f2-0cfa-4018-843b-0066d59e1e18.png" },
  { id: 5, nome: "Pão", preco: 2.5, imagem: "https://ibassets.com.br/ib.item.image.big/b-25dee6c5888e4631ae23f43aa9a0b5bf.png" },
  { id: 6, nome: "Refrigerante", preco: 7.0, imagem: "https://supermercadobomdemais.com.br/wp-content/uploads/2020/05/Refrigerante-Guaran%C3%A1-Antarctica-2l-300x300.png" },
  { id: 7, nome: "Pizza", preco: 12.0, imagem: "https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/8/7893000632073-hotsite.png" },
  { id: 8, nome: "Ovos", preco: 15.0, imagem: "https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7896658409561/img_500_1.png" },
  { id: 9, nome: "Carne", preco: 35.0, imagem: "https://supermercadobomdemais.com.br/wp-content/uploads/2020/05/Ponta-de-Alcatra.png" },
  { id: 10, nome: "Frango", preco: 21.0, imagem: "https://static.paodeacucar.com/img/uploads/1/999/28039999.png" },
  { id: 11, nome: "Alho", preco: 8.0, imagem: "https://phygital-files.mercafacil.com/superparaense/uploads/produto/alho_kg_12046895-b3e1-473e-a26b-6a2313ef77f3.png" },
  { id: 12, nome: "Cebola", preco: 9.0, imagem: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/15124/medium/cebola-kg_10838.jpg" },
  { id: 13, nome: "Molho de Tomate", preco: 3.0, imagem: "https://gerenciadorpd.com.br/assets/images/produtos/7896292333000_3300_Molho%20Refogado%20Tradicional_300%20g_StandUp_0096_8693.png" },
  { id: 14, nome: "Arroz", preco: 7.0, imagem: "https://superprix.vteximg.com.br/arquivos/ids/174487/Arroz-Tio-Joao-Branco-1kg.png?v=636209529502870000" },
  { id: 15, nome: "Feijão", preco: 6.0, imagem: "https://superprix.vteximg.com.br/arquivos/ids/174489-600-600/Feijao-Preto-Combrasil-1kg.png?v=636209534633930000" },
  { id: 16, nome: "Macarrão", preco: 5.0, imagem: "https://piraque.com.br/wp-content/uploads/2020/11/Massa-Aldente-Piraque-Espaguete-500g-1.png" },
  { id: 17, nome: "Azeite", preco: 40.00, imagem: "https://emporio4estrelas.vtexassets.com/arquivos/ids/184288/Azeite-de-Oliva-Extra-Virgem-Borges-500ml-ProImagem-2123.jpg?v=637914423702570000" },
  { id: 18, nome: "Iogurte", preco: 15.0, imagem: "https://carliatto.com.br/wp-content/uploads/2021/02/Iogurte-Batavo-Morango-900g.jpg" },
  { id: 19, nome: "Mistura para bolo", preco: 7.0, imagem: "https://www.cozinhadonabenta.com.br/wp-content/uploads/2018/11/site-jmacedo-mistura-para-bolo-dona-benta-bolo-CHOCOLATE-450G-2023.jpg" },
  { id: 20, nome: "Shampoo", preco: 29.00, imagem: "https://drogariasp.vteximg.com.br/arquivos/ids/1064862-1000-1000/275409---shampoo-clear-ice-cool-menthol-200ml_0003_7891150007406_1.png?v=638454273516100000" },
  { id: 21, nome: "Pasta de dente", preco: 10.0, imagem: "https://io.convertiez.com.br/m/farmaponte/shop/products/images/17350/medium/creme-dental-colgate-total-12-advanced-fresh-90g_10613.jpg" },
  { id: 22, nome: "Fermento em pó", preco: 6.0, imagem: "https://www.caboclodistribuidor.com.br/imagens/produtos/605x605/PO%20ROYAL%20POTE%201X100G.jpg" },
  { id: 24, nome: "Manteiga", preco: 11.0, imagem: "https://superprix.vteximg.com.br/arquivos/ids/169858-600-600/Manteiga-Elege-Extra-com-Sal-200g.jpg?v=636094530876370000" },
  { id: 25, nome: "Cacau em pó", preco: 6.8, imagem: "https://lojasantoantonio.vtexassets.com/arquivos/ids/220303/89_Nestle-Chocolate-em-Po-200g.jpg?v=638330669144570000" },
];

function formatarPreco(preco) {
  return `R$ ${preco.toFixed(2)}`;
}

function ListaProdutos({ produtos, adicionarAoCarrinho, atualizarQuantidade }) {
  const [quantidade, setQuantidade] = useState(0);
  
   const handleAdicionar = () => { // Tentativa de adicionar botões de aumento ou diminuição da quantidade de produtos ao carrinho
    if (quantidade === 0) {
      adicionarAoCarrinho(produto);
    }
    setQuantidade(quantidade + 1);
    atualizarQuantidade(produto.id, quantidade + 1);
  };

  const handleRemover = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
      atualizarQuantidade(produto.id, quantidade - 1);
    }
  };
  
  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}  style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            
            <img
              src={produto.imagem}
              alt={produto.nome}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            
            {produto.nome} - {formatarPreco(produto.preco)}
            {quantidade === 0 ? (
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao carrinho</button>
             )}
            <div>
              ⠀
              <button onClick={handleRemover}>-</button>
              ⠀
              <button onClick={handleAdicionar}>+</button>
              ⠀
              <span >{quantidade}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Carrinho({ itensCarrinho, removerDoCarrinho }) {
  const total = itensCarrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {itensCarrinho.map((item, index) => (
          <li key={index}>
            {item.nome} - {formatarPreco(item.preco)}
            <button onClick={() => removerDoCarrinho(index)} className="remove-btn">Remover</button>
          </li>
        ))}
      </ul>
      <h3>Total: {formatarPreco(total)}</h3>
    </div>
  );
}

function App() {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setItensCarrinho([...itensCarrinho, produto]);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = itensCarrinho.filter((_, i) => i !== index);
    setItensCarrinho(novoCarrinho);
  };

  return (
    <div>
      <h1>Aplicativo de Carrinho de Compras</h1>
      <div className="container">
        <ListaProdutos produtos={dadosProdutos} adicionarAoCarrinho={adicionarAoCarrinho} />
        <Carrinho itensCarrinho={itensCarrinho} removerDoCarrinho={removerDoCarrinho} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
