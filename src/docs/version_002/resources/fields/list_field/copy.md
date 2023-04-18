# List Field {% #list-field %}

List fields are a special type of field that allow you to define a list of values that can be selected for the field. These fields have the following additional properties in addition to the standard [Field](#fields) properties.

## List Field Properties

{% table %}

- Property Name
- Data Type
- Description

---

- multiplicity
- `string`
- Indicates whether the field is single or multi select. Possible values are: `MultiSelect` or `SingleSelect`.

---

- listId
- `number`
- The id of the list that the list values are associated with.

---

- values
- `object[]`
- An array of [List Value](#list-values) objects that define the possible values of the list field.

-
