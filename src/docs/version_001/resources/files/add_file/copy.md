# Add File {% #add-file %}

This endpoint allows you to add a file to an image or attachment field on a record in an app.

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

- fileName
- `string`
- The name of the file being added.

---

- modifiedTime
- `string`
- The modified date and time to be stored with the file. The value should be in this format: `yyyy-mm-dd hh:mm:ssZ`.

---

- fileNotes
- `string`
- The notes to be stored with the file.

{% /table %}

## Request Headers

{% table %}

- Header
- Description

---

- Content-Type
- The content type for the file being added.

---

- Content-Length
- The number of bytes in the file.

{% table %}

## Request Body

The body of the request should include only the bytes that represent the files content.

## Response Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- fileId
- `number`
- The id of the created file.

{% /table %}
