# Save List Value {% #save-list-value %}

This endpoint adds or updates a list value. If a list value id is provided, the list value will be updated. If no list value id is provided, a new list value will be created. When request is successful a `200` status code will be returned if updating a list value or a `201` status code will be returned if creating a new list value.

## Path Parameters

{% table %}

- Property Name
- Data Type
- Description

---

- `listId`
- `number`
- The id of the list to which the list value belongs.

{% /table %}

## Request Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- id
- `number`
- The id of the list value to update. If no id is provided, a new list value will be created.

---

- name
- `string`
- The name of the list value.

---

- numericValue
- `number`
- The numeric value of the list value.

---

- color
- `string`
- The color of the list value.

{% /table %}

## Response Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- id
- `string`
- The id of the list value.

{% /table %}
