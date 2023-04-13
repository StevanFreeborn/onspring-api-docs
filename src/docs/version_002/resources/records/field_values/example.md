# The Field Value Object

The following snippet contains an example of field value objects for each of the possible field value types.

{% code heading="FIELD VALUES" defaultLanguage="json" %}

```json
{
  "type": "Integer",
  "fieldId": 6976,
  "value": 1
},
{
  "type": "Date",
  "fieldId": 4746,
  "value": "2023-02-16T05:14:14Z"
},
{
  "type": "String",
  "fieldId": 4753,
  "value": "test@test.com"
},
{
  "type": "Decimal",
  "fieldId": 4756,
  "value": 15.3
},
{
  "type": "ScoringGroupList",
  "fieldId": 4762,
  "value": [
    {
      "listValueId": "c9e4d695-184c-48ec-a8ef-01a52b2bce39",
      "name": "scoring_group_list_1",
      "score": 5,
      "maximumScore": 6
    },
  ]
},
{
  "type": "IntegerList",
  "fieldId": 4792,
  "value": [
    1,
    2,
  ]
},
{
  "type": "Guid",
  "fieldId": 4801,
  "value": "2c1af5b1-0f90-4378-b9a5-8b7e22f2bc84"
},
{
  "type": "GuidList",
  "fieldId": 4802,
  "value": [
    "71afe161-34f9-49d0-b45e-968b764c884c",
    "d40a74dd-abb5-4fbb-82c0-5766e871e2a4"
  ]
},
{
  "type": "AttachmentList",
  "fieldId": 4806,
  "value": [
    {
      "fileId": 909,
      "fileName": "test-attachment.txt",
      "notes": "This is a test",
      "storageLocation": "Internal"
    },
  ]
},
{
  "type": "TimeSpan",
  "fieldId": 4811,
  "value": {
    "quantity": 10,
    "increment": "Minutes",
    "recurrence": "None"
  }
},
{
  "type": "StringList",
  "fieldId": 4999,
  "value": [
    "list_value_1",
    "list_value_2"
  ]
},
{
  "type": "FileList",
  "fieldId": 4807,
  "value": [
    910,
    911,
  ]
}
```

{% /code %}
