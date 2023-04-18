# Add a list value

{% code method="PUT" heading="/Lists/id/{listId}/items" defaultLanguage="bash" %}

```bash
curl --location --request PUT 'https://api.onspring.com/Lists/id/906/items' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
--header 'Content-Type: application/json' \
--data '{
  "id": null,
  "name": "Not Started",
  "numericValue": 0,
  "color": "#ffffff",
  "weight": 0
}'
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "id": "4118d53a-9121-4345-8682-07f23d606daa"
}
```

{% /code %}
