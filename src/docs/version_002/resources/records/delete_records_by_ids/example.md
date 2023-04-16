# Deleting a batch of records from an app

{% code method="DELETE" heading="Records/batch-delete" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Records/batch-delete' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
--header 'Content-Type: application/json' \
--data '{
  "appId": 195,
  "recordIds": [138,139]
}'
```

```csharp
using Onspring.API.SDK;
using Onspring.API.SDK.Models;
using System.Net;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.DeleteRecordsAsync(
  new DeleteRecordsRequest
  {
    AppId = 195,
    RecordIds = new List<int> { 138, 139, },
  }
);

if (response.StatusCode == HttpStatusCode.NoContent)
{
  Console.WriteLine("Records deleted successfully");
}
```

```javascript
import { OnspringClient } from 'onspring-api-sdk';

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const res = await client.deleteRecordsByIds(
  195,
  [138, 139]
);

res.statusCode === 204
  ? console.log('Records deleted')
  : console.log('Error deleting records');
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from OnspringApiSdk.Models import DeleteBatchRecordsRequest
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
request = DeleteBatchRecordsRequest(appId=195, recordIds=[138, 139])
response = client.DeleteRecordsByIds(request)

print(f'Status Code: {response.statusCode}')
print(f'Message: {response.message}')
```

{% /code %}
