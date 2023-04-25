# Delete Record {% #delete-record %}

This endpoint allows you to delete a record in an app. If the record deletion is successful a `204` response will be returned with an empty body.

## Path Parameters

{% table %}

- Parameter Name
- Data Type
- Description

---

- appId
- `number`
- The id of the app or survey that contains the record to be deleted.

---

- recordId
- `number`
- The id of the record that will be deleted.

{% /table %}
