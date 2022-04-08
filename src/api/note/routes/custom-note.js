module.exports = {
    routes:[{
       method: 'GET',
       path: '/notes/:id',
       handler: 'note.itemNotes'
    },
    {
       method: 'POST',
       path: '/note/add',
       handler: 'note.addNote'
    },
  ]
 }