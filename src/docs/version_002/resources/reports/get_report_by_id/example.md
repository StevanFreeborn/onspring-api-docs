# Retrieving data from a report

{% code method="GET" heading="/Reports/{reportId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Reports/id/613' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.GetReportAsync(613);
Console.WriteLine(string.Join(", ", response.Value.Columns));

foreach (var row in response.Value.Rows)
{
  Console.WriteLine(string.Join(", ", row.Cells));
}
```

```javascript
import { OnspringClient } from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const res = await client.getReportById(613);
const report = res.data;

console.log(report);
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from OnspringApiSdk.Models import GetReportByIdRequest
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
request = GetReportByIdRequest(reportId=613)
response = client.GetReportById(request)

print(f'Status Code: {response.statusCode}')
print('Columns:')
print(f'{", ".join(response.data.columns)}')
print('Rows:')

for row in response.data.rows:
  print(f'Record Id {row.recordId}: {", ".join([str(cell) for cell in row.cells])}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "columns": [
    "Name",
    "Owner",
    "Due Date",
    "Status",
    "Description"
  ],
  "rows": [
    {
      "recordId": 72,
      "cells": [
        "A New Test Task",
        null,
        null,
        null,
        "<p>This is a test task.</p>"
      ]
    },
    {
      "recordId": 73,
      "cells": [
        "A New Test Task",
        "Severus",
        "12/25/2021 12:00 AM",
        "In Progress",
        "<p>This is a test task.</p>"
      ]
    }
  ]
}
```

{% /code %}
