# Report Data {% #report-data %}

These are objects that represent the data for a report in an Onspring instance. They will be returned when you request a specific report by id.

## Report Data Properties {% #reports-data-properties %}

{% table %}

- Property Name
- Data Type
- Description

---

- Columns
- `string[]`
- The names of the [fields](#fields) in the report.

---

- Rows
- `object[][]`
- The data for each row in the report.

{% /table %}
