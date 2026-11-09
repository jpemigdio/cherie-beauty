//colocar as informações em um arquivo JavaScript e deixar o proprio codigo criar os cards automaticamente
const produtos = [
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
 }
];

// função que gera os cards 
function renderizarProdutos() {
    const secaoProdutos = document.querySelector(".products");

    const gradeProdutos = document.querySelector(".products-grid");

    const categoriaAtual = secaoProdutos.dataset.category;

    const produtosFiltrados = produtos.filter(function(produto){
        return produto.categoria === categoriaAtual;
    });


}