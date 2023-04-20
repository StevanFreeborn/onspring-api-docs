# Add File {% #add-file %}

This endpoint allows you to add a file to a record. The request body must be of type `multipart/form-data`.

## Request Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- recordId
- `number`
- The id of the record to which the file will be added.

---

- fieldId
- `number`
- The id of the field to which the file will be added.

---

- notes
- `string`
- The notes to be added to the file.

---

- modifiedDate
- `string`
- The date the file was last modified.

---

- file
- `binary`
- The file to be added.

{% /table %}

## Response Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- id
- `number`
- The id of the file that was added.

{% /table %}
