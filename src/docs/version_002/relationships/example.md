# Resolving relationships between records

{% code heading="GET GROUP RECORD" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Records/appId/3/recordId/3' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

{% /code %}

{% code heading="GROUP" defaultLanguage="json" %}

```json
{
  "appId": 3,
  "recordId": 3,
  "fieldData": [
    {
      "type": "IntegerList",
      "fieldId": 21, // Users multi select reference field
      "value": [2216]
    }
  ]
}
```

{% /code %}

{% code heading="GET USERS REFERENCE FIELD" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Fields/id/21' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

{% /code %}

{% code heading="REFERENCE FIELD" defaultLanguage="json" %}

```json
{
  "multiplicity": "MultiSelect",
  "referencedAppId": 2, // Users app id
  "id": 21,
  "appId": 3,
  "name": "Users",
  "type": "Reference",
  "status": "Enabled",
  "isRequired": false,
  "isUnique": false
}
```

{% /code %}

{% code heading="GET USER RECORD" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Records/appId/2/recordId/2216' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

{% /code %}

{% code heading="USER" defaultLanguage="json" %}

```json
{
  "appId": 2,
  "recordId": 2216,
  "fieldData": [
    {
      "type": "String",
      "fieldId": 36,
      "value": "TestUser"
    },
    {
      "type": "String",
      "fieldId": 33,
      "value": "stevan.freeborn@onspring.com"
    }
  ]
}
```

{% /code %}
