# Retrieving records for an app

{% code method="GET" heading="/Records/appId/{appId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Records/appId/195' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
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
import {
  GetRecordsByAppIdRequest,
  OnspringClient,
} from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const request = new GetRecordsByAppIdRequest(195);
const res = await client.getRecordsByAppId(request);
const apps = res.data.items;

for (const app of apps) {
  console.log(app);
}
```

```python
from onspring_api_sdk import OnspringClient
from onspring_api_sdk.models import GetRecordsByAppRequest
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
request = GetRecordsByAppRequest(appId=195)
response = client.get_records_by_app_id(request)

print(f'Status Code: {response.status_code}')
print(f'Page Size: {response.data.page_size}')
print(f'Page Number: {response.data.page_number}')
print(f'Total Pages: {response.data.total_pages}')
print(f'Total Records: {response.data.total_records}')

for record in response.data.records:
  print(f'AppId: {record.app_id}')
  print(f'RecordId: {record.record_id}')

  for field in record.fields:
    print(f'Type: {field.type}')
    print(f'FieldId: {field.field_id}')
    print(f'Value: {field.value}')

```

```rust
use onspring::{OnspringClient, PagingRequest};

let client = OnspringClient::builder(
  "000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000"
)
.build();

let paging = PagingRequest {
  page_number: 1,
  page_size: 10,
};

let response = client
  .list_records(195, Some(paging), None, None)
  .await?;

for record in response.items.unwrap_or_default() {
  println!(
    "AppId: {}, RecordId: {}",
    record.app_id,
    record.record_id
  );
}
```

```go
import onspring "github.com/StevanFreeborn/onspring-api-sdk-go"

client := onspring.NewClient(
  "000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000",
)

page, _ := client.Records.List(
  context.Background(),
  195,
)

for _, record := range page.Items {
  fmt.Printf(
    "AppId: %d, RecordId: %d\n",
    record.AppId,
    record.RecordId,
  )
}
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
