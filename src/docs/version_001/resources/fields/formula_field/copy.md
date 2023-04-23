# Formula Field {% #formula-field %}

Formula fields are a special type of field that can be used to calculate values based on other fields. These fields can have different output types and therefore have the following additional properties in addition to the standard [Field](#fields) properties.

## Formula Field Properties

{% table %}

- Property Name
- Data Type
- Description

---

- outputType
- `number`
- Indicates the type of the output of the formula field. Possible values are: `0`,`1`, `2`, or `3`.

---

- values
- `object[]`
- An array of [List Value](#list-values) objects that define the possible values of the formula field. This array will only be populated with values if the `outputType` is set to `ListValue`.

{% /table %}

### Formula Field Output Types

{% table %}

- Output Type Value
- Output Type Description

---

- 0
- Text

---

- 1
- Numeric

---

- 2
- Date/Time

---

- 3
- List Value

{% /table %}
