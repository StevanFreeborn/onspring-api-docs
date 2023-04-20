# Add a file to a record

{% code method="POST" heading="/Files" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Files' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
--form 'recordId="140"' \
--form 'fieldId="6989"' \
--form 'notes="Updating record with attachment."' \
--form 'modifiedDate=""' \
--form 'file=@"test-attachment.txt"'
```

```csharp
using Onspring.API.SDK;
using Onspring.API.SDK.Models;
using System.IO;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var filePath = "test-attachment.txt";
var saveFileRequest = new SaveFileRequest
{
  FieldId = 6989,
  RecordId = 140,
  FileStream = File.OpenRead(filePath),
  FileName = Path.GetFileName(filePath),
  ModifiedDate = DateTime.UtcNow,
  Notes = "Updating record with attachment.",
  ContentType = "text/plain"
};

var saveResponse = await onspringClient.SaveFileAsync(saveFileRequest);
Console.WriteLine($"New File Id is: {saveResponse.Value.Id}");
```

```javascript
import {
  OnspringClient,
  SaveFileRequest,
} from 'onspring-api-sdk';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const request = new SaveFileRequest(
  140,
  6989,
  'notes',
  new Date(),
  'test-attachment.txt',
  'text/plain',
  fs.createReadStream('test-attachment.txt')
);

const res = await client.saveFile(request);
const fileId = res.data.id;

console.log(fileId);
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from OnspringApiSdk.Models import SaveFileRequest
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
request = SaveFileRequest(
  recordId=140,
  fieldId=6989,
  fileName='test-attachment.txt',
  filePath='test-attachment.txt',
  contentType='text/plain',
  notes='Updating record with attachment.',
  modifiedDate=datetime.now()
)

response = client.SaveFile(request)

print(f'Status Code: {response.statusCode}')
print(f'File Id: {response.data.id}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "id": 1904
}
```

{% /code %}
