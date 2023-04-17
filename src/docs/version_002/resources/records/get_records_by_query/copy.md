# Get Records by Query {% #get-records-by-query %}

This endpoint returns a [paged](#pagination) collection of [records](#records) for a given app or survey.

## Query Parameters

**Note:** [Pagination](#pagination) query parameters can be used to control the number of records returned.

## Request Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- appId
- `number`
- The id of the app or survey that contains the records.

---

- filter
- `string`
- A [filter](#filter) expression that will be used to filter the records returned.

---

- fieldIds
- `number[]`
- The ids of the fields to return in the records.

---

- dataFormat
- `string`
- The [format](#data-format) of the field data in the response. Valid values are `Raw` and `Formatted`. If not specified, `Raw` will be used.

{% /table %}

## Filter {% #filter %}

A filter expression is a string that is used to filter records returned by the [Get Records by Query](#get-records-by-query) endpoint. The filter operators available, the fields they are applicable to, and the syntax for each operator are described below.

{% table %}

- Operator
- Description
- Applicable Fields

---

- eq
- Determines if the field equals a value.
- `Text`, `number`, `date`, and `auto-number` fields and formula fields that have an output type of `text`, `number`, or `date`.

---

- ne
- Determines if the field does not equal a value.
- `Text`, `number`, `date`, and `auto-number` fields and formula fields that have an output type of `text`, `number`, or `date`.

---

- contains
- Determines if the field contains a list value. List value can be its id or name.
- `List` fields and formulas with output type of `list`.

---

- isnull
- Determines if the field is null.
- `Text`, `number`, `date`, and `auto-number` fields and formula fields that have an output type of `text`, `number`, or `date`.

---

- notnull
- Determines if the field is not null.
- `Text`, `number`, `date`, and `auto-number` fields and formula fields that have an output type of `text`, `number`, or `date`.

---

- lt
- Determines if the field is less than a value.
- `Number`, `date`, and `auto-number` fields and formula fields that have an output type of `number` or `date`.

---

- gt
- Determines if the field is greater than a value.
- `Number`, `date`, and `auto-number` fields and formula fields that have an output type of `number` or `date`.

---

{% /table %}

### Delimiters

When using a string value in a filter expression you must use single quotes (`'`) to delimit the string value. When using a date value in a filter expression you must use single quotes (`'`) to delimit the date value and the delimited value should be preceded by the word `datetime`.

### Combining Filters

You can combine multiple filters using the `and` and `or` operators as well as parentheses to control the order of operations. The `not` operator can be used to negate a filter.
