# Retrieve all fields for an app

{% code method="GET" heading="/Fields/appId/{appId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Fields/appId/195' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.GetFieldsForAppAsync(195);

foreach (var field in response.Value.Items)
{
  Console.WriteLine($"{field.Id}");
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

const res = await client.getFieldsByAppId(195);
const fields = res.data.items;

for (const field of fields) {
  console.log(field);
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
response = client.GetFieldsByAppId(appId=195)

print(f'Status Code: {response.statusCode}')
print(f'Page Size: {response.data.pageSize}')
print(f'Page Number: {response.data.pageNumber}')
print(f'Total Pages: {response.data.totalPages}')
print(f'Total Records: {response.data.totalRecords}')

for field in response.data.fields:
  print(f'Field Id: {field.id}')
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

let response = client.list_fields(195, Some(paging)).await?;

for field in response.items.unwrap_or_default() {
  println!("Field Id: {}", field.id);
}
```

```go
import onspring "github.com/StevanFreeborn/onspring-api-sdk-go"

client := onspring.NewClient(
  "000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000",
)

page, _ := client.Fields.List(
  context.Background(),
  195,
)

for _, field := range page.Items {
  fmt.Printf("Field Id: %d\n", field.Id)
}
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "pageNumber": 1,
  "pageSize": 2,
  "totalPages": 1,
  "totalRecords": 2,
  "items": [
    {
      "id": 6989,
      "appId": 195,
      "name": "Attachments",
      "type": "Attachment",
      "status": "Enabled",
      "isRequired": false,
      "isUnique": false
    },
    {
      "multiplicity": "SingleSelect",
      "referencedAppId": 2,
      "id": 6980,
      "appId": 195,
      "name": "Created By",
      "type": "Reference",
      "status": "Enabled",
      "isRequired": false,
      "isUnique": false
    }
  ]
}
```

{% /code %}
