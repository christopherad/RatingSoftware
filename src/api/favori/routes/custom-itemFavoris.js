module.exports = {
    routes:[{
       method: 'GET',
       path: '/favoris/:id',
       handler: 'favori.userFavoritesItems'
    },
    {
       method: 'POST',
       path: '/favoris/add',
       handler: 'favori.addToFavorites'
    },
  ]
 }