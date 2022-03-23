'use strict';

/**
 *  item controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::item.item',({ strapi }) => ({

	async userFavoritesItems(user){
	 const userId = user.params.id;
	  try{
	    const response =  await strapi.db.query('api::item.item').findMany({where:{users:{id:userId}},populate:{
		users:{ where: {id:userId} }
	    }});
	    return response;
	  }catch(error){
	    console.log('Erreur : ', error);
	  }
	},

	async addToFavorites(item){
	   const {itemId,userId} = item.request.body;
	   try{
		const response = await strapi.db.query('api::item.item').update({
		   populate:{users:true}, 
		   where:{id:itemId},
		   data:{users:{id:userId}}
		});
		return response;
	   }catch(error){
	      console.log('Erreur : ', error); 
	   }

	},

	async removeFromFavorites(item){
	}

}));
