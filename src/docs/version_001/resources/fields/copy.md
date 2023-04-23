# Fields {% #fields %}

These are objects representing a field in an app or survey in your instance. You can retrieve a list of fields in an app or survey or retrieve a specific field to see the properties of the field(s).

## Field Properties

{% table %}

- Property Name
- Data Type
- Description

---

- Id
- `number`
- The id of the field.

---

- AppId
- `number`
- The id of the app or survey.

---

- Name
- `string`
- The name of the field.

---

- Type
- `number`
- The type of the field. Possible values are: `100`, `200`, `204`, `300`, `307`, `400`, `500`, `502`, `600`, `601`, `602`, `800`, `801`, or `900`.

---

- Status
- `number`
- The status of the field. Possible values are: `0` or `1`.

---

- IsRequired
- `boolean`
- Indicates whether the field is configured to be required.

---

- IsUnique
- `boolean`
- Indicates whether the field is configured to be unique.

{% /table %}

### Field Types

{% table %}

- Type Value
- Description

---

- 100
- Attachment Field

---

- 200
- Number Field

---

- 204
- Auto Number Field

---

- 300
- Date/Time Field

---

- 307
- Time Span Field

---

- 400
- List Field

---

- 500
- Reference or Parallel Reference Field

---

- 502
- Survey Reference Field

---

- 600
- Survey Scoring Group Field

---

- 601
- Survey Campaign Field

---

- 602
- Survey Unified Answer Field

---

- 800
- Attachment Field

---

- 801
- Image Field

---

- 900
- Formula Field

{% /table %}

### Field Statuses

{% table %}

- Status Value
- Description

---

- 0
- Enabled

---

- 1
- Disabled

{% /table %}
