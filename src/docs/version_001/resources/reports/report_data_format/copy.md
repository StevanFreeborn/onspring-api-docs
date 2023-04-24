# Report Data Format {% #report-data-format %}

When retrieving data for [reports](#reports) via the Onspring API using certain endpoints you can specify the format of the data being retrieved. The format will be specified in a query parameter. These endpoints are:

- [Get Report by Id](#get-report-by-id)

The format values can be either `Raw` or `Formatted`. If the format is not specified then the default format is `Raw`. The format specified will be applied to all the data being retrieved. The impact of the format on the data retrieve will depend on the type of field. The following tables shows the impact of the format on the data retrieved for each field type.

## Raw Format {% #raw-format %}

{% table  %}

- Field Type
- Return Data Type
- Description

---

- Attachment
- `string`
- A pipe (|) separated list of file names.

---

- AutoNumber
- `number`
- The field value will be returned as a number.

---

- Date/Time
- `string`
- The field value will be returned as a string in the format `m/d/yyyy h:mm tt`.

---

- Image
- `string`
- A pipe (|) separated list of file names.

---

- List
- `string`
- A pipe (|) separated list of list value names.

---

- Matrix
- `string`
- A pipe (|) separated list of matrix values in the format "row list value name / column list value name".

---

- Number
- `number`
- The field value will be returned as a number.

---

- Reference
- `string`
- A pipe (|) separated list of display link field values.

---

- Survey Campaign
- `string`
- The campaign name.

---

- Survey Group Scoring
- `string`
- A pipe (|) separated list of survey scoring groups in the format "group name: group value"

---

- Text
- `string`
- The field value will be returned as a string including any HTML markup.

---

- Time Span
- `string`
- The field value will be returned as a string which represents the time span entered.

---

{% /table %}

## Formatted Format {% #formatted-format %}

{% table  %}

- Field Type
- Return Data Type
- Description

---

- Attachment
- `string`
- A newline (\r\n) separated list of file names.

---

- AutoNumber
- `string`
- The field value will be returned as a string including any configured formatting.

---

- Date/Time
- `string`
- The field value will be returned as a string including any configured formatting.

---

- Image
- `string`
- A newline (\r\n) separated list of file names.

---

- List
- `string`
- A newline (\r\n) separated list of list value names.

---

- Matrix
- `string`
- A newline (\r\n) separated list of matrix values in the format "row list value name / column list value name".

---

- Number
- `string`
- The field value will be returned as a string including any configured formatting.

---

- Reference
- `string`
- A newline (\r\n) separated list of display link field values.

---

- Survey Campaign
- `string`
- The campaign name.

---

- Survey Group Scoring
- `string`
- A newline (\r\n) separated list of survey scoring groups in the format "group name: group value"

---

- Text
- `string`
- The field value will be returned as a string excluding any HTML markup.

---

- Time Span
- `string`
- The field value will be returned as a string which represents the time span entered.

---

{% /table %}
