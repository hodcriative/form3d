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

"VOCÊ TAMBÉM PODE GOSTAR" (sugestões no detalhe do produto)
-----------------------------------------------------------
Por padrão, o site sorteia 3 produtos da mesma categoria a cada vez
que o produto é aberto.

Para escolher as sugestões de um produto, adicione o campo "related"
no cadastro dele em JS/products-data.js, com os IDs desejados:

    {
      id: 108,
      name: "Pato Donald o Gangster",
      ...
      related: [155, 3, 5],
    },

- Aparecem exatamente esses produtos, na ordem da lista.
- Se a lista tiver menos de 3, o restante é completado com produtos
  sorteados da mesma categoria.
- IDs que não existem (ex.: produto removido) são ignorados.

CADASTRANDO UM PRODUTO NOVO
---------------------------
1. Coloque as fotos em uma pasta dentro de IMG/produtos/.
2. Adicione o produto no final da lista em JS/products-data.js,
   usando um "id" que ainda não exista (o próximo número livre).
3. Use em "category" uma das categorias do filtro:
   "Decoração", "Colecionáveis", "Utilidades" ou "Organizadores".
4. Faça o commit e o push para o main. O GitHub gera sozinho as
   versões .webp das fotos novas e publica o site (ver "PUBLICAÇÃO").

   Se quiser gerar os .webp no seu computador (opcional):

       npm install          (só na primeira vez)
       npm run optimize-images

   O site carrega só as versões .webp (galeria) e -thumb.webp (cards).
   As fotos originais ficam apenas no repositório, como matéria-prima.

Obs.: no código, os caminhos das fotos podem ficar com a extensão em
minúsculo (.png, .gif) mesmo que o arquivo esteja em maiúsculo (.PNG,
.GIF); o site troca a extensão por .webp automaticamente.

PUBLICAÇÃO (Hostinger)
----------------------
O site publicado vem do branch "producao", que é gerado automaticamente
pelo GitHub (Actions > "Publicar produção") a cada push no main:
  - gera os .webp de fotos novas;
  - copia só o que o site usa (sem as fotos originais, ~2 GB);
  - cria .htaccess (HTTPS, segurança, cache), robots.txt e sitemap.xml.
Nunca edite o branch "producao" à mão: ele é recriado a cada publicação.

Na Hostinger (hPanel > Avançado > Git), use:
  Repositório: hodcriative/form3d   Branch: producao   Diretório: public_html

Domínio: o endereço do site fica em deploy/site-url.txt (uma linha).
Ao definir o domínio definitivo, troque só essa linha — o card do
WhatsApp, o sitemap e as tags de SEO são atualizados na próxima
publicação. Configurações do servidor ficam em deploy/htaccess.
