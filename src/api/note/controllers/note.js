'use strict';

/**
 *  note controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::note.note', ({ strapi }) => ({

    /**
     * 
     * @param {*} note 
     * @returns note that create
     */
    async createNote(note) {
        try {
            const response = await strapi.db.query('api::note.note').create({
                data: {
                    itemId: note.itemId,
                    userId: note.userId,
                    recommendation: note.recommendation,
                    critique: note.critique,
                    ressenti: note.ressenti,
                    critere: note.critere,
                    note: '',
                }
            });
            return response;
        } catch (error) {
            console.log('Error de creation de la note : ,', error);
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
    async addNote(note) {
        const { itemId, userId } = note.request.body;
        try {
            const noteExist = await strapi.db.query('api::note.note').findOne({ where: { userId: userId, itemId: itemId } });
            if (!noteExist) {
                const itemExist = await strapi.db.query('api::item.item').findOne({ where: { id: itemId } });
                if (itemExist) {
                    const createNote = await this.createNote(note.request.body);
                    return { reponse: createNote };
                } else {
                    const createItem = await this.createItem(note.request.body);
                    const createNote = await this.createNote(note.request.body);
                    return { reponse: createNote };
                }
            } else {
                return { response: "You are already noted" };
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
    async itemNotes(item) {
        const itemId = item.params.id;
        try {
            const response = await strapi.db.query('api::note.note').findMany({
                where: { itemId: itemId }
            });
            let noteCritere = [];
            let noteFinale = 0;
            for (var i = 0; i < response.length; i++) { // parcours de toutes les notes d'un item
                for(var crit = 0; crit < response[i].critere.length; crit++){ // parcours de toutes les critères d'une note
                    let notes = 0;
                    notes = response[i].critere[crit].note;
                    noteCritere.push(notes); // on ajoute les note dans un tableau
                }
            }
            for(var i = 0; i < noteCritere.length; i++){ // parcours du tableau de note
                noteFinale += noteCritere[i]; // on additionne les notes
            }
            noteFinale = noteFinale / noteCritere.length; // on divise par le nombre de note
            return { note: noteFinale };
        } catch (error) {
            console.log('Erreur : ', error);
        }
    },


}));
