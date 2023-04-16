# Delete Record by Id {% #delete-record-by-id %}

This endpoint allows you to delete a record from an app. When successful, a `204` response will be returned with no body.

## Path Parameters

{% table %}

- Parameter Name
- Data Type
- Description

---

- appId
- `number`
- The id of the app that contains the record.

---

- recordId
- `number`
- The id of the record to delete.

{% /table %}
