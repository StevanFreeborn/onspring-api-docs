# Delete Records by Ids {% #delete-records-by-ids %}

This endpoint deletes multiple records by their ids. When successful, a `204` response will be returned with no body.

## Request Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- appId
- `number`
- The id that contains the records to delete.

---

- recordIds
- `number[]`
- The ids of the records to delete.

{% table %}
