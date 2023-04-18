# Get Fields by Ids {% #get-fields-by-ids %}

This endpoint returns a batch of [Fields](#fields) by their ids. The max number of fields that can be requested is 100.

## Request Body

{% code heading="REQUEST" defaultLanguage="json" %}

```json
[6983, 6986, 6987, 6985, 6984]
```

{% /code %}

## Response Body Properties

{% table %}

- Property Name
- Data Type
- Description

---

- count
- `number`
- The number of fields returned.

---

- items
- `object[]`
- The [fields](#fields) returned.

{% /table %}
