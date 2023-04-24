# Field Values {% #field-values %}

These are objects representing a field value in a record. They will comprise the `fieldData` array in a [Record](#records) object. The `type` property will determine what the type and structure of the `value` property will be.

## Field Value Properties

{% table  %}

- Property Name
- Data Type
- Description

---

- Type
- `number`
- The type of the field.

---

- FieldId
- `number`
- The id of the field.

---

- Value
- `object`
- The value of the field.

{% /table %}

### Field Value Types

{% table  %}

- Type
- Description
- Value Data Type

---

- 0
- A string value.
- `string`

---

- 1
- An integer value.
- `number`

---

- 2
- A decimal value.
- `number`

---

- 3
- A date value.
- `string`

---

- 4
- A [Time Span](#time-span-field-value) value.
- `object`

---

- 5
- A GUID value.
- `string`

---

- 10
- A list of string values.
- `string[]`

---

- 11
- A list of integer values.
- `number[]`

---

- 15
- A list of GUID values.
- `string[]`

---

- 16
- A list of [Attachment](#attachment-field-value) values.
- `object[]`

---

- 17
- A list of [Scoring Group](#scoring-group-field-value) values.
- `object[]`

{% /table %}

### Time Span Field Value {% #time-field-span-value %}

{% table  %}

- Property Name
- Data Type
- Description

---

- Quantity
- `number`
- The number of the specified increment.

---

- Increment
- `number`
- The increment of time. Can be one of the following values: `128`, `64`, `32`, `16`, `8`, `4`, `2`.

---

- Recurrence
- `number`
- The recurrence of the time span. Can be one of the following values: `0`, `1`, `2`.

---

- EndByDate
- `string`
- The end date of the time span. This will only be set if `recurrence` is set to `1`.

---

- EndAfterOccurrences
- `number`
- The number of occurrences of the time span. This will only be set if `recurrence` is set to `2`.

{% /table %}

#### Increment Types

{% table %}

- Type Value
- Description

---

- 2
- Seconds

---

- 4
- Minutes

---

- 8
- Hours

---

- 16
- Days

---

- 32
- Weeks

---

- 64
- Months

---

- 128
- Years

{% /table %}

#### Recurrence Types

{% table %}

- Type Value
- Description

---

- 0
- None

---

- 1
- EndByDate

---

- 2
- EndAfterOccurrences

{% /table %}

### Attachment Field Value {% #attachment-field-value %}

{% table  %}

- Property Name
- Data Type
- Description

---

- FileId
- `number`
- The id of the file.

---

- FileName
- `string`
- The name of the file.

---

- Notes
- `string`
- The notes for the attachment.

---

- StorageLocation
- `number`
- The storage location of the file. Can be one of the following values: `0`, `1`, `2`.

---

- DownloadLink
- `string`
- The download link for the file. This will only be returned if the `storageLocation` is not `Internal`.

---

- QuickEditLink
- `string`
- The quick edit link for the file. This will only be returned if the `storageLocation` is not `Internal`.

{% /table %}

#### Storage Location Types

{% table %}

- Type Value
- Description

---

- 0
- Internal

---

- 1
- OneDrive

---

- 2
- Google Drive

{% /table %}

### Scoring Group Field Value {% #scoring-group-field-value %}

{% table  %}

- Property Name
- Data Type
- Description

---

- ListValueId
- `string`
- The id of the list value.

---

- Name
- `string`
- The name of the scoring group.

---

- Score
- `number`
- The score of the scoring group.

---

- MaximumScore
- `number`
- The maximum score of the scoring group.

{% /table %}
