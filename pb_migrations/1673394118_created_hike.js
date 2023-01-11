migrate((db) => {
  const collection = new Collection({
    "id": "w61vuqskat1gi2m",
    "created": "2023-01-10 23:41:58.101Z",
    "updated": "2023-01-10 23:41:58.101Z",
    "name": "hike",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u38yzkmg",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w61vuqskat1gi2m");

  return dao.deleteCollection(collection);
})
