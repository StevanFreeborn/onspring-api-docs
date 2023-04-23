# Reference Field {% #reference-field %}

Reference fields are a special type of field that allow you to create relationships between one or more content records. These fields have the following additional properties in addition to the standard [Field](#fields) properties.

## Reference Field Properties

{% table %}

- Property Name
- Data Type
- Description

---

- multiplicity
- `number`
- Indicates whether the field is single or multi select. Possible values are: `0` or `1`.

{% /table %}

### Multiplicity Types

{% table %}

- Multiplicity Type Value
- Multiplicity Type Description

---

- 0
- Indicates the reference field is single select and will only ever hold one value.

---

- 1
- Indicates the reference field is multi select and can contain more than one value.

{% /table %}
