module.exports = {
   routes:[{
      method: 'GET',
      path: '/items/favorites/:id',
      handler: 'item.userFavoritesItems'
   },
   {
      method: 'POST',
      path: '/items/favorites/add',
      handler: 'item.addToFavorites'
   },
   {
      method: 'DELETE',
      path: '/items/favorites/remove',
      handler: 'item.removeFromFavorites'
   },
  
 ]
}
