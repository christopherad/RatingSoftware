'use strict';

const { response } = require('express');
const { forEach } = require('lodash');
const { where } = require('lodash/fp');
const { number } = require('prop-types');

/**
 *  favori controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::favori.favori', ({ strapi }) => ({

    /**
     * 
     * @param {* contains itemID and userID who is in} favoris  
     * @returns data who contains favoris infos if success and error
     * message when error
     */
    async addToFavorites(favoris) {
        const { itemId, userId } = favoris.request.body;
        try {
            const favoriExist = await strapi.db.query('api::favori.favori').findOne({ where: { userID: userId, itemID: itemId } });
            if (!favoriExist) {
                const response = await strapi.db.query('api::favori.favori').create({
                    data: { itemID: itemId, userID: userId }
                });
                return { response: response };
            } else {
                return { response: "Already in your favorites" };
            }
        } catch (error) {
            console.log('Erreur : ', error);
        }

    },

    /**
     * 
     * @param {*} user is id parameter 
     * @returns all items of this user
     */
    async userFavoritesItems(user) {
        const userId = user.params.id;
        try {
            const response = await strapi.db.query('api::favori.favori').findMany({
                where: { userID: userId }
            });
            let favoris = [];
            for (var i = 0; i < response.length; i++) {
                const items = await strapi.db.query('api::item.item').findMany({ where: { id: response[i].itemID } });
                const itemModel = {
                    idFavorites: response[i].id,
                    item:items,
                };
                favoris.push(itemModel);
            }
            return { items: favoris };
        } catch (error) {
            console.log('Erreur : ', error);
        }
    },
}));
