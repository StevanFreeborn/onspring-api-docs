# The Values in a Raw Response

{% code heading="RAW" defaultLanguage="json" %}

```json
{
  "appId": 130,
  "recordId": 1,
  "fieldData": [
    {
      "type": "Integer",
      "fieldId": 4745, // AutoNumber Field
      "value": 1
    },
    {
      "type": "Date",
      "fieldId": 4800, // Date/Time Field
      "value": "2023-02-15T06:00:00Z"
    },
    {
      "type": "Guid",
      "fieldId": 4833, // Single Select List Field
      "value": "9a08da5e-db5d-447f-9be9-ce8d7d7e61a7"
    },
    {
      "type": "GuidList",
      "fieldId": 4830, // Multi Select List Field
      "value": [
        "624714d7-d22d-414f-ab62-9071d993e796",
        "46f87c6b-be0a-46a2-b7de-e100779e1643"
      ]
    },
    {
      "type": "Decimal",
      "fieldId": 4803, // Number Field
      "value": 100
    },
    {
      "type": "String",
      "fieldId": 4805, // Text Field
      "value": "<p>This is a test</p>"
    },
    {
      "type": "TimeSpan",
      "fieldId": 4810, // TimeSpan Field
      "value": {
        "quantity": 11,
        "increment": "Seconds",
        "recurrence": "EndAfterOccurrences",
        "endAfterOccurrences": 1
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
  "appId": 130,
  "recordId": 1,
  "fieldData": [
    {
      "type": "String",
      "fieldId": 4745, // AutoNumber Field
      "value": "recordId-1"
    },
    {
      "type": "String",
      "fieldId": 4800, // Date/Time Field
      "value": "Wednesday, February 15, 2023 6:00 AM"
    },
    {
      "type": "String",
      "fieldId": 4833, // Single Select List Field
      "value": "list_value_1"
    },
    {
      "type": "StringList",
      "fieldId": 4830, // Multi Select List Field
      "value": ["list_value_1", "list_value_2"]
    },
    {
      "type": "String",
      "fieldId": 4803, // Number Field
      "value": "$100 dollars"
    },
    {
      "type": "String",
      "fieldId": 4805, // Text Field
      "value": "This is a test"
    },
    {
      "type": "String",
      "fieldId": 4810, // TimeSpan Field
      "value": "Every 11 Second(s) End After 1 Occurrences"
    }
  ]
}
```

{% /code %}
