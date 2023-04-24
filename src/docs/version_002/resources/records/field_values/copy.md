# Field Values {% #field-values %}

These are objects representing a field value in a record. They will comprise the `fieldData` array in a [Record](#records) object. The `type` property will determine what the type and structure of the `value` property will be.

## Field Value Properties

{% table  %}

- Property Name
- Data Type
- Description

---

- type
- `string`
- The type of the field.

---

- fieldId
- `number`
- The id of the field.

---

- value
- `object`
- The value of the field.

{% /table %}

### Field Value Types

{% table  %}

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
- A [Time Span](#time-span-field-value) value.
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
- A list of [Attachment](#attachment-field-value) values.
- `object[]`

---

- ScoringGroupList
- A list of [Scoring Group](#scoring-group-field-value) values.
- `object[]`

---

- FileList
- A list of file values.
- `number[]`

{% /table %}

### Time Span Field Value {% #time-field-span-value %}

{% table  %}

- Property Name
- Data Type
- Description

---

- quantity
- `number`
- The number of the specified increment.

---

- increment
- `string`
- The increment of time. Can be one of the following values: `Years`, `Months`, `Weeks`, `Days`, `Hours`, `Minutes`, `Seconds`.

---

- recurrence
- `string`
- The recurrence of the time span. Can be one of the following values: `None`, `EndByDate`, `EndAfterOccurrences`.

---

- endByDate
- `string`
- The end date of the time span. This will only be set if `recurrence` is set to `EndByDate`.

---

- endAfterOccurrences
- `number`
- The number of occurrences of the time span. This will only be set if `recurrence` is set to `EndAfterOccurrences`.

{% /table %}

### Attachment Field Value {% #attachment-field-value %}

{% table  %}

- Property Name
- Data Type
- Description

---

- fileId
- `number`
- The id of the file.

---

- fileName
- `string`
- The name of the file.

---

- notes
- `string`
- The notes for the attachment.

---

- storageLocation
- `string`
- The storage location of the file. Can be one of the following values: `Internal`, `OneDrive`, `GoogleDrive`.

---

- downloadLink
- `string`
- The download link for the file. This will only be returned if the `storageLocation` is not `Internal`.

---

- quickEditLink
- `string`
- The quick edit link for the file. This will only be returned if the `storageLocation` is not `Internal`.

{% /table %}

### Scoring Group Field Value {% #scoring-group-field-value %}

{% table  %}

- Property Name
- Data Type
- Description

---

- listValueId
- `string`
- The id of the list value.

---

- name
- `string`
- The name of the scoring group.

---

- score
- `number`
- The score of the scoring group.

---

- maximumScore
- `number`
- The maximum score of the scoring group.

{% /table %}
