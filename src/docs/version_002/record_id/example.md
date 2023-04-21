# Internal Record Id vs External Record Id

{% code heading="RECORD" defaultLanguage="json" %}

```json
{
  "appId": 130,
  "recordId": 2, // Internal Record Id
  "fieldData": [
    {
      "type": "Integer",
      "fieldId": 4745,
      "value": 3 // External Record Id
    }
  ]
}
```

{% /code %}

{% code heading="REPORT" defaultLanguage="json" %}

```json
{
  "columns": ["Record Id"],
  "rows": [
    {
      "recordId": 2, // Internal Record Id
      "cells": [
        3 // External Record Id
      ]
    }
  ]
}
```

{% /code %}
