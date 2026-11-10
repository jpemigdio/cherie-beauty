//colocar as informações em um arquivo JavaScript e deixar o proprio codigo criar os cards automaticamente
const produtos = [
    //Base de dados dos produtos da CHERIE BEAUTY
    {
        id: 1,
        nome: "Beauty Essentials",
        categoria: "maquiagem",
        descricao: "Uma seleção especial para realçar sua beleza",
        preco: 129.90,
        imagem: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000"
    },
{
        id: 2,
        nome: "Glow Facial",
        categoria: "skincare",
        descricao: "Cuidados essenciais para uma pele radiante",
        preco: 89.90,
        imagem: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1000"
},
 {
        id: 3,
        nome: "Essence Collection",
        categoria: "perfumes",
        descricao: "Uma fragrância marcante e sofisticada.",
        preco: 199.90,
        imagem: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1000"
 },

 {
    id: 4,
    nome: "Velvet Lips",
    categoria: "maquiagem",
    descricao: "Lábios marcantes com acabamento sofisticado.",
    preco: 49.90,
    imagem: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=1000"
 },

 {
    id: 5,
    nome: "Glow Collection",
    categoria: "maquiagem",
    descricao: "Realce sua beleza com uma coleção iluminada.",
    preco: 89.90,
    imagem: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000"
 },

 {
    id: 6,
    nome: "Hydra Cream",
    categoria: "skincare",
    descricao: "Hidratação e cuidado para uma pele macia.",
    preco: 69.90,
    imagem: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=1000"
 },

 {
    id: 7,
    nome: "Radiance Serum",
    categoria: "skincare",
    descricao: "Um cuidado especial para uma pele radiante.",
    preco: 99.90,
    imagem: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1000"
 },

{
    id: 8,
    nome: "Velvet Rose",
    categoria: "perfumes",
    descricao: "Uma fragância elegante com notas delicadas e marcantes.",
    preco: 179.90,
    imagem: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1000"
    },

    {
    id: 9,
    nome: "Golden Essence",
    categoria: "perfumes",
    descricao: "Uma essência sofisticada para momentos especiais.",
    preco: 219.90,
    imagem: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1000"
    }
];

// função que gera os cards 
function renderizarProdutos() {
    const secaoProdutos = document.querySelector(".products");

    const gradeProdutos = document.querySelector(".products-grid");

    if(!secaoProdutos || !gradeProdutos || !secaoProdutos.dataset.category){
        return;
    }

    const categoriaAtual = secaoProdutos.dataset.category;

    const produtosFiltrados = produtos.filter(function(produto){
        return produto.categoria === categoriaAtual;
    });

    console.log("Categoria atual:", categoriaAtual);
    console.log("Produtos encontrados:", produtosFiltrados);

    gradeProdutos.innerHTML = produtosFiltrados.map(function(produto){
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>

                <div class="product-info">
                    <span class="product-category">
                        ${produto.categoria}
                    </span>
                    
                    <h3>${produto.nome}</h3>

                    <p>${produto.descricao}</p>

                    <strong>
                        ${produto.preco.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}

                    </strong>

                    <a href="#" class="product-button">
                        Ver produto
                    </a>
                </div>
            </div>
    `;
    }).join("");
}

renderizarProdutos();