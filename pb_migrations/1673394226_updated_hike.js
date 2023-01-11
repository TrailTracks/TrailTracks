migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w61vuqskat1gi2m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v2bdxwyr",
    "name": "location",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "captiyst",
    "name": "lat",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zqpcwo97",
    "name": "lng",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dqqovgb7",
    "name": "category",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3zeb5njb",
    "name": "distance",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5l4fp549",
    "name": "note",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kkqcflsl",
    "name": "completed",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aetzw1vb",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w61vuqskat1gi2m")

  // remove
  collection.schema.removeField("v2bdxwyr")

  // remove
  collection.schema.removeField("captiyst")

  // remove
  collection.schema.removeField("zqpcwo97")

  // remove
  collection.schema.removeField("dqqovgb7")

  // remove
  collection.schema.removeField("3zeb5njb")

  // remove
  collection.schema.removeField("5l4fp549")

  // remove
  collection.schema.removeField("kkqcflsl")

  // remove
  collection.schema.removeField("aetzw1vb")

  return dao.saveCollection(collection)
})
