# Data Format {% #data-format %}

When retrieving data via the Onspring API using certain endpoints you can specify the format of the data being retrieved. The format will be specified either in a query parameter or in the request body. These endpoints are:

- [Get Records by App](#get-records-by-app)
- [Get Record by Id](#get-record-by-id)
- [Get Report by Id](#get-report-by-id)

The format values can be either `Raw` or `Formatted`. If the format is not specified then the default format is `Raw`. The format specified will be applied to all the data being retrieved. The impact of the format on the data retrieve will depend on the type of field. The following tables shows the impact of the format on the data retrieved for each field type.

## Raw Format {% #raw-format %}

{% table  %}

- Field Type
- Return Data Type
- Description

---

- AutoNumber
- `number`
- The field value will be returned as a number.

---

- Date/Time
- `string`
- The field value will be returned as a string in the format `YYYY-MM-DDTHH:MM:SSZ`.

---

- List
- `string` or `string[]`
- The field value will be returned as a string or an array of strings where the strings are the GUID ids of the selected list items.

---

- Number
- `number`
- The field value will be returned as a number.

---

- Text
- `string`
- The field value will be returned as a string including any HTML markup.

---

- Time Span
- `object`
- The field value will be returned as a [Time Span](#time-span-field-value) object.

---

{% /table %}

## Formatted Format {% #formatted-format %}

{% table  %}

- Field Type
- Return Data Type
- Description

---

- AutoNumber
- `string`
- The field value will be returned as a string including any configured formatting.

---

- Date/Time
- `string`
- The field value will be returned as a string including any configured formatting.

---

- List
- `string` or `string[]`
- The field value will be returned as a string or an array of strings where the strings are the names of the selected list items.

---

- Number
- `string`
- The field value will be returned as a string including any configured formatting.

---

- Text
- `string`
- The field value will be returned as a string without any HTML markup.

---

- Time Span
- `string`
- The field value will be returned as a string which represents the time span entered.

---

{% /table %}
