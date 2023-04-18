# Reference Field {% #reference-field %}

Reference fields are a special type of field that allow you to create relationships between one or more content records. These fields identify the app or survey that the related content records are held in therefore they have the following additional properties in addition to the standard [Field](#fields) properties.

## Reference Field Properties

{% table %}

- Property Name
- Data Type
- Description

---

- multiplicity
- `string`
- Indicates whether the field is single or multi select. Possible values are: `MultiSelect` or `SingleSelect`.

---

- referenceAppId
- `number`
- The id of the app that the related content records are held in.

{% /table %}
