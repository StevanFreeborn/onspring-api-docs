{% code heading="GET /Records/appId/{appID}" language="text" %}

```curl
curl --location 'https://api.onspring.com/Records/appId/195' \
--header 'X-ApiKey: 61642d8c686f9e8747e42af8/52cae9a9-4c49-48b6-a3fe-10a48d46ac69'
```

{% /code %}

{% code heading="RESPONSE" language="json" %}

```json
{
  "pageNumber": 1,
  "pageSize": 1,
  "totalPages": 1,
  "totalRecords": 1,
  "items": [
    {
      "appId": 195,
      "recordId": 1,
      "fieldData": [
        {
          "type": "Integer",
          "fieldId": 6976,
          "value": 1
        }
      ]
    }
  ]
}
```

{% /code %}
