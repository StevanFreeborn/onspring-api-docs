# Get Record by Id {% #get-record-by-id %}

This endpoint returns a single [record](#records) based on the given record id.

## Path Parameters

{% table %}

- Parameter Name
- Data Type
- Description

---

- appId
- `number`
- The id of the app or survey that contains the record.

---

- recordId
- `number`
- The id of the record.

{% /table %}

## Query Parameters

{% table %}

- Parameter Name
- Data Type
- Description

---

- fieldIds
- `string`
- A comma-separated list of field ids to include in the response. If not specified, all fields will be returned.

---

- dataFormat
- `string`
- The [format](#data-format) of the field data in the response. Valid values are `raw` and `formatted`. If not specified, `raw` will be used.

{% /table %}
