# Get Records by Ids {% #get-records-by-ids %}

This endpoint returns a batch of [records](#records) that match the given ids.

## Request Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- appId
- `number`
- The id of the app or survey that contains the records.

---

- recordIds
- `number[]`
- The ids of the records to return.

---

- fieldIds
- `number[]`
- The ids of the fields to return in the records.

---

- dataFormat
- `string`
- The [format](#data-format) of the field data in the response. Valid values are `raw` and `formatted`. If not specified, `raw` will be used.

{% /table %}

## Response Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- count
- `number`
- The number of records returned.

---

- items
- `object[]`
- The [records](#records) returned.

{% /table %}
