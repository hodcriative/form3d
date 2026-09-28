FORJ3D - Produtos em destaque e cadastro de produtos

PRODUTOS EM DESTAQUE (carrossel da Home)
----------------------------------------
Os destaques são controlados pela lista de IDs em JS/index.js:

    const featuredIds = [80, 108, 5, 4, 3, 45, 78];

Para trocar os destaques, basta colocar os IDs desejados nessa lista,
na ordem em que devem aparecer. Os IDs são os mesmos do campo "id"
de cada produto em JS/products-data.js.

Não é necessário editar o index.html. A Home e o catálogo usam a
mesma base de produtos (JS/products-data.js).

CADASTRANDO UM PRODUTO NOVO
---------------------------
1. Coloque as fotos em uma pasta dentro de IMG/produtos/.
2. Adicione o produto no final da lista em JS/products-data.js,
   usando um "id" que ainda não exista (o próximo número livre).
3. Use em "category" uma das categorias do filtro:
   "Decoração", "Colecionáveis", "Utilidades" ou "Organizadores".
4. Rode o otimizador de imagens antes de publicar:

       npm install          (só na primeira vez)
       npm run optimize-images

   Ele gera as versões .webp (galeria) e -thumb.webp (cards) de cada
   foto, que são as que o site carrega. Sem isso, o site carrega a
   foto original, muito mais pesada.

Obs.: no código, os caminhos das fotos podem ficar com a extensão em
minúsculo (.png, .gif) mesmo que o arquivo esteja em maiúsculo (.PNG,
.GIF); o site troca a extensão por .webp automaticamente.
