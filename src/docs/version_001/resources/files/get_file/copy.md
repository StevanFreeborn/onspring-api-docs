# Get File {% #get-file %}

This endpoint allows you to retrieve a file that is held in an attachment or image field on a record in an app.

## Path Parameters

{% table %}

- Parameter Name
- Data Type
- Description

---

- appId
- `number`
- The id of the app or survey where the file is held.

---

- recordId
- `number`
- The id of the record where the file is held.

---

- fieldId
- `number`
- The id of the field where the file is held.

{% /table %}

## Query Parameters

{% table %}

- Parameter Name
- Data Type
- Description

---

- fileId
- `number`
- The id of the file to be retrieved.

{% /table %}
