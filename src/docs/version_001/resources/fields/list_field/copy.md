# List Field {% #list-field %}

List fields are a special type of field that allow you to define a list of values that can be selected for the field. These fields have the following additional properties in addition to the standard [Field](#fields) properties.

## List Field Properties

{% table %}

- Property Name
- Data Type
- Description

---

- Multiplicity
- `number`
- Indicates whether the field is single or multi select. Possible values are: `0` or `1`.

---

- Values
- `object[]`
- An array of [List Value](#list-values) objects that define the possible values of the list field.

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
