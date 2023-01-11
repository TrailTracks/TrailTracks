migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w61vuqskat1gi2m")

  collection.name = "hikes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w61vuqskat1gi2m")

  collection.name = "hike"

  return dao.saveCollection(collection)
})
