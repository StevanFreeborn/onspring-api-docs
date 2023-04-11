{% code heading="GET /Records/appId/{appID}" language="text" %}

```curl
curl --location 'https://api.onspring.com/Records/appId/195' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

{% /code %}

{% code heading="RESPONSE" language="json" %}

```json {% .language-json %}
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
