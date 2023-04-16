# Save Record {% #save-record %}

This endpoint allows you to add or update a record in an app. If a record id is provided in the request, the record will be updated and a `200` response will be returned. If no record id is provided, a new record will be created and a `201` response will be returned. When successful the response will contain the record id of the record that was created or updated and any warnings that were encountered.

## Request Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- appId
- `number`
- The id of the app that contains or will contain the record.

---

- recordId
- `number`
- The id of the record to update. If this property is not provided, a new record will be created.

---

- fields
- `object`
- An object containing the field values to save. The keys of the object should be the field ids and the values should be the field values. The field values should be in the format that is expected by the field type.

{% /table %}

## Response Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- recordId
- `number`
- The id of the record that was created or updated.

---

- warnings
- `string[]`
- An array of warnings that were encountered while saving the record.

{% /table %}
