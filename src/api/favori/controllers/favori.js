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
     * @param {*} favoris 
     * @returns favoris that create
     */
    async createFavorites(favoris) {
        try {
            const response = await strapi.db.query('api::favori.favori').create({
                data: { itemID: favoris.itemId, userID: favoris.userId }
            });
            return response;
        } catch (error) {
            console.log('Error de creation du favoris : ,', error);
        }

    },
    /**
     * 
     * @param {*} item 
     * @returns item that create
     */
    async createItem(item) {
        try {
            const response = await strapi.db.query('api::item.item').create({
                data: {
                    id: item.itemId,
                    title: item.title,
                    description: item.description,
                    poster_path: item.poster_path,
                    overview: item.overview,
                    genres: item.genres,
                    vote_average: item.vote_average,
                    vote_count: item.vote_count,
                    name: item.name
                }
            });
            return response;
        } catch (error) {
            console.log('Error de creation de l\'item : ,', error);
        }
    },

    /**
     * 
     * @param {* contains itemID and userID who is in} favoris  
     * @returns data that contains favoris infos if success and error
     * message when error
     */
    async addToFavorites(favoris) {
        const { itemId, userId } = favoris.request.body;
        try {
            const favoriExist = await strapi.db.query('api::favori.favori').findOne({ where: { userID: userId, itemID: itemId } });
            if (!favoriExist) {
                const itemExist = await strapi.db.query('api::item.item').findOne({ where: { id: itemId } });
                if (itemExist) {
                    const createFav = await this.createFavorites(favoris.request.body);
                    return {reponse : createFav};
                } else {
                    const createItem = await this.createItem(favoris.request.body);
                    const createFav = await this.createFavorites(favoris.request.body);
                    return {reponse : createFav};
                }
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
                    item: items,
                };
                favoris.push(itemModel);
            }
            return { items: favoris };
        } catch (error) {
            console.log('Erreur : ', error);
        }
    },
}));
