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
- A [Time Span](#time-span-value) value.
- `object`

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
- A list of [Attachment](#attachment-value) values.
- `object[]`

---

- ScoringGroupList
- A list of [Scoring Group](#scoring-group-value) values.
- `object[]`

---

- FileList
- A list of file values.
- `number[]`

{% /table %}

### Time Span Value {% #time-span-value %}

{% table .propertiesTable %}

- Property Name
- Data Type
- Description

---

- quantity
- number
- The number of the specified increment.

---

- increment
- string
- The increment of time. Can be one of the following values: `Years`, `Months`, `Days`, `Hours`, `Minutes`, `Seconds`.

---

- recurrence
- string
- The recurrence of the time span. Can be one of the following values: `None`, `EndByDate`, `EndAfterOccurrences`.

---

- endByDate
- string
- The end date of the time span. Used if `recurrence` is set to `EndByDate`.

{% /table %}

### Attachment Value {% #attachment-value %}

{% table .propertiesTable %}

- Property Name
- Data Type
- Description

---

- fileId
- number
- The id of the file.

---

- fileName
- string
- The name of the file.

---

- notes
- string
- The notes for the attachment.

---

- storageLocation
- string
- The storage location of the file. Can be one of the following values: `Internal`, `OneDrive`, `GoogleDrive`.

{% /table %}
