# Files {% #files %}

Files represent the information held in `Attachment` and `Image` fields. The Onspring API can be used to retrieve the information a file and the file themselves. The Onspring API can also be used to add and remove files to and from `Attachment` and `Image` fields.

## File Information Properties {% #file-information-properties %}

{% table %}

- Property Name
- Data Type
- Description

---

- type
- `string`
- The type of the file. This will be either `Attachment` or `Image`.

---

- contentType
- `string`
- The MIME type of the file.

---

- name
- `string`
- The name of the file.

---

- createdDate
- `string`
- The date and time the file was created.

---

- modifiedDate
- `string`
- The date and time the file was last modified.

---

- owner
- `string`
- The id of the user who owns the file.

---

- notes
- `string`
- The notes associated with the file.

---

- fileHref
- `string`
- The URL of the file.

{% /table %}
