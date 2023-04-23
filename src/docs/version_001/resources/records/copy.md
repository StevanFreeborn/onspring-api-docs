# Records {% #records %}

These are objects representing a content record in your instance. You can create new records in your instance, retrieve existing records to see the data that has been entered into a record, you can update a record to change the data in it, and you can delete a record to remove it from the instance.

## Record Properties

{% table  %}

- Property Name
- Data Type
- Description

---

- AppId
- `number`
- The id of the app or survey.

---

- RecordId
- `number`
- The id of the record.

---

- FieldData
- `object[]`
- An array of [Field Value](#field-values) objects.

{% /table %}
