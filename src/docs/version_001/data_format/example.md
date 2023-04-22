# The Values in a Raw Response

{% code heading="RAW" defaultLanguage="json" %}

```json
{
  "AppId": 130,
  "RecordId": 11,
  "FieldData": [
    {
      "Type": 1,
      "FieldId": 4745, // AutoNumber Field
      "Value": 11
    },
    {
      "Type": 3,
      "FieldId": 4800, // Date/Time Field
      "Value": "2023-04-22T05:00:00Z"
    },
    {
      "Type": 5,
      "FieldId": 4801, // Single Select List Field
      "Value": "2c1af5b1-0f90-4378-b9a5-8b7e22f2bc84"
    },
    {
      "Type": 15,
      "FieldId": 4802, // Multi Select List Field
      "Value": [
        "71afe161-34f9-49d0-b45e-968b764c884c",
        "d40a74dd-abb5-4fbb-82c0-5766e871e2a4"
      ]
    },
    {
      "Type": 2,
      "FieldId": 4803, // Number Field
      "Value": 10.0
    },
    {
      "Type": 0,
      "FieldId": 4805, // Text Field
      "Value": "<p>This is a test</p>"
    },
    {
      "Type": 4,
      "FieldId": 4810, // TimeSpan Field
      "Value": {
        "Quantity": 1.0,
        "Increment": 2,
        "Recurrence": 2,
        "EndByDate": null,
        "EndAfterOccurrences": 1
      }
    }
  ]
}
```

{% /code %}

# The Values in a Formatted Response

{% code heading="RAW" defaultLanguage="json" %}

```json
{
  "AppId": 130,
  "RecordId": 11,
  "FieldData": [
    {
      "Type": 0,
      "FieldId": 4745, // AutoNumber Field
      "Value": "recordId-11"
    },
    {
      "Type": 0,
      "FieldId": 4800, // Date/Time Field
      "Value": "Saturday, April 22, 2023 5:00 AM"
    },
    {
      "Type": 0,
      "FieldId": 4801, // Single Select List Field
      "Value": "list_value_1"
    },
    {
      "Type": 10,
      "FieldId": 4802, // Multi Select List Field
      "Value": ["list_value_1", "list_value_2"]
    },
    {
      "Type": 0,
      "FieldId": 4803, // Number Field
      "Value": "$10 dollars"
    },
    {
      "Type": 0,
      "FieldId": 4805, // Text Field
      "Value": "This is a test"
    },
    {
      "Type": 0,
      "FieldId": 4810, // TimeSpan Field
      "Value": "Every 1 Second(s) End After 1 Occurrences"
    }
  ]
}
```

{% /code %}
