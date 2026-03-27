# Add a record to an app

{% code method="PUT" heading="/Records" defaultLanguage="bash" %}

```bash
curl --location --request PUT 'https://api.onspring.com/Records' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
--header 'Content-Type: application/json' \
--data '{
  "appId": 195,
  "recordId": null,
  "fields": {
    "6983": "A New Test Task",
    "6984": "This is a test task.",
    "6985": "12/25/2021",
    "6986: "4118d53a-9121-4345-8682-07f23d606daa",
    "6987": [4]
  }
}'
```

```csharp
using Onspring.API.SDK;
using Onspring.API.SDK.Models;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var record = new ResultRecord
{
  AppId = 195,
  FieldData = new List<RecordFieldValue>
  {
    new StringFieldValue(6983, "A New Test Task"),
    new StringFieldValue(6984, "This is a test task."),
    new DateFieldValue(6985, DateTime.Parse("12/25/2021")),
    new GuidFieldValue(6986, Guid.Parse("4118d53a-9121-4345-8682-07f23d606daa")),
    new IntegerListFieldValue(6987, new List<int> { 4 }),
  },
};

var saveResponse = await onspringClient.SaveRecordAsync(record);

Console.WriteLine($"New Record Id is: {saveResponse.Value.Id}");

foreach (string warning in saveResponse.Value.Warnings)
{
  Console.WriteLine($"Warning: {warning}");
}
```

```javascript
import {
  DateRecordValue,
  GuidRecordValue,
  IntegerListRecordValue,
  OnspringClient,
  Record,
  StringRecordValue,
} from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const record = new Record(195, null);
record.addValues([
  new StringRecordValue(6983, 'A New Test Task'),
  new StringRecordValue(6984, 'This is a test task.'),
  new DateRecordValue(6985, new Date('12/25/2021')),
  new GuidRecordValue(
    6986,
    '4118d53a-9121-4345-8682-07f23d606daa'
  ),
  new IntegerListRecordValue(6987, [4]),
]);

const res = await client.saveRecord(record);
const newRecordId = res.data.id;

console.log(newRecordId);
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from OnspringApiSdk.Models import StringFieldValue, GuidFieldValue, DateFieldValue, IntegerListValue, Record
from configparser import ConfigParser

fields = []

fields.append(StringFieldValue(6983, 'A New Test Task'))
fields.append(StringFieldValue(6984, 'This is a test task.'))
fields.append(
  GuidFieldValue(
    6986,
    uuid.UUID('4118d53a-9121-4345-8682-07f23d606daa')
  )
)
fields.append(
  DateFieldValue(
    6985,
    datetime.datetime(2021, 12, 25)
  )
)
fields.append(IntegerListValue(6987, [4]))

record = Record(
  appId=195,
  fields
)

response = client.AddOrUpdateRecord(record)

print(f'Status Code: {response.statusCode}')
print(f'Id: {response.data.id}')

for warning in response.data.warnings:
  print(f'Warning: {warning}')
```

```rust
use onspring::{OnspringClient, SaveRecordRequest};
use std::collections::HashMap;

let client = OnspringClient::builder(
  "000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000"
)
.build();

let mut fields = HashMap::new();
fields.insert(
  "6983".to_string(),
  serde_json::json!("A New Test Task"),
);
fields.insert(
  "6984".to_string(),
  serde_json::json!("This is a test task."),
);
fields.insert(
  "6985".to_string(),
  serde_json::json!("12/25/2021"),
);
fields.insert(
  "6986".to_string(),
  serde_json::json!("4118d53a-9121-4345-8682-07f23d606daa"),
);
fields.insert(
  "6987".to_string(),
  serde_json::json!([4]),
);

let request = SaveRecordRequest {
  app_id: 195,
  record_id: None,
  fields,
};

let response = client.save_record(request).await?;

println!("New Record Id is: {}", response.id);
```

```go
import onspring "github.com/StevanFreeborn/onspring-api-sdk-go"

client := onspring.NewClient(
  "000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000",
)

response, _ := client.Records.Save(
  context.Background(),
  onspring.SaveRecordRequest{
    AppId: 195,
    Fields: map[string]any{
      "6983": "A New Test Task",
      "6984": "This is a test task.",
      "6985": "12/25/2021",
      "6986": "4118d53a-9121-4345-8682-07f23d606daa",
      "6987": []int{4},
    },
  },
)

fmt.Printf("New Record Id is: %d\n", response.Id)
```

{% /code %}

{% code heading="Response" defaultLanguage="json" %}

```json
{
  "warnings": [],
  "id": 140
}
```

{% /code %}
