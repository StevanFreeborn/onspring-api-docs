# Get Records by App {% #get-records-by-app %}

This endpoint returns a [paged](#pagination) collection of [records](#records) for a given app or survey.

## Path Parameters

{% table %}

- Parameter Name
- Data Type
- Description

---

- appId
- `number`
- The id of the app or survey that contains the records.

{% /table %}

## Query Parameters

**Note:** [Pagination](#pagination) query parameters can be used to control the number of records returned.

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
- The [format](#record-data-format) of the field data in the response. Valid values are `Raw` and `Formatted`. If not specified, `Raw` will be used.

{% /table %}
