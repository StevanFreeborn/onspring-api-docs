# Get Apps by Ids {% #get-apps-by-ids %}

This endpoint returns a batch of [apps](#apps) based on the given app ids. The max number of apps that can be requested is 100.

## Request Body

{% code heading="REQUEST" defaultLanguage="json" %}

```json
[8, 79, 137, 193, 183]
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
- The number of apps returned.

---

- items
- `object[]`
- The [apps](#apps) returned.

{% /table %}
