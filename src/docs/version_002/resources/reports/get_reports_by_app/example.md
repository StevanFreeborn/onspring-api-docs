# Retrieving reports for the given app

{% code method="GET" heading="/Reports/appId/{appId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Reports/appId/195' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var getReportsResponse = await onspringClient.GetReportsForAppAsync(195);

foreach (var report in getReportsResponse.Value.Items)
{
  Console.WriteLine($"{report.Id}, {report.AppId}, {report.Name}");
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

const res = await client.getReportsByAppId(130);
const reports = res.data.items;

for (const report of reports) {
  console.log(report);
}
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
response = client.GetReportsByAppId(appId=195)

print(f'Status Code: {response.statusCode}')
print(f'App Id: {appId}')
print('Reports:')

for report in response.data.reports:
  print(f' Id: {report.id}')
  print(f' Name: {report.name}')
  print(f' Description: {report.description}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "pageNumber": 1,
  "pageSize": 1,
  "totalPages": 1,
  "totalRecords": 1,
  "items": [
    {
      "appId": 195,
      "id": 613,
      "name": "Test 1"
    }
  ]
}
```

{% /code %}
