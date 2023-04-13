# Field Values {% #field-values %}

These are objects representing a field value in a record. They will comprise the `fieldData` array in a [Record](#records) object. The `type` property will determine what the type and structure of the `value` property will be.

## Field Value Properties

{% table .propertiesTable %}

- Property Name
- Data Type
- Description

---

- type
- string
- The type of the field.

---

- fieldId
- number
- The id of the field.

---

- value
- object
- The value of the field.

{% /table %}

### Field Value Types

{% table .propertiesTable %}

- Type
- Description
- Value Data Type

---

- String
- A string value.
- `string`

---

- Integer
- An integer value.
- `number`

---

- Decimal
- A decimal value.
- `number`

---

- Date
- A date value.
- `string`

---

- TimeSpan
- A time span value.
- `string`

---

- Guid
- A GUID value.
- `string`

---

- StringList
- A list of string values.
- `string[]`

---

- IntegerList
- A list of integer values.
- `number[]`

---

- GuidList
- A list of GUID values.
- `string[]`

---

- AttachmentList
- A list of [Attachment](#attachment) values.
- `object[]`

---

- ScoringGroupList
- A list of [Scoring Group](#scoring-group) values.
- `object[]`

---

- FileList
- A list of file values.
- `number[]`
