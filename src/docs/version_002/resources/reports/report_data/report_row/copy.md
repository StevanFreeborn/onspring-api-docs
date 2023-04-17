# Report Row {% #report-row %}

These are objects representing a row in a report. They will comprise the `rows` array in the [Report Data](#report-data) object. Each row contains the data for a record in the report.

## Report Row Properties

{% table %}

- Property Name
- Data Type
- Description

---

- recordId
- `number`
- The id of the record that the row represents.

---

- cells
- `string[]`
- An array of strings representing the data for each field in the report. The order of the strings in the array will match the order of the fields in the `columns` array in the [Report Data](#report-data) object.

{% /table %}
