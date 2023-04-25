# Add a file to a record in an app

{% code method="POST" heading="files/{appId}/{recordId}/{fieldId}" defaultLanguage="bash" }

```bash

curl --location 'https://api.onspring.com/v1/files/362/196/10365?fileName=test-attachment.txt&modifiedTime=2022-10-14%2000%3A00%3A00Z&fileNotes=These%20are%20some%20notes' \
--header 'Content-Type: text/plain' \
--header 'Content-Length: 20' \
--data '@test-attachment.txt'
```

```csharp
// Option 1: File you want to add physically exists on disk
var filePath = "C:\Users\Public\Documents\Contract.pdf";
var contentType = "application/pdf";
var fileNotes = "Initial revision";
var result = httpHelper.AddFileToRecord(362, 196, 10365, filePath, contentType, fileNotes);
Console.WriteLine($"New File Id is: {result.CreatedId}");

// Option 2: Use file stream
var fileName = "Contract.pdf";
var contentType = "application/pdf";
var modifiedTime = DateTime.UtcNow;
var fileNotes = "Initial revision";
using (Stream stream = new MemoryStream())
{
  AddEditResult result = httpHelper.AddFileToRecord(362, 196, 10365, stream, fileName, contentType, modifiedTime, fileNotes);
  Console.WriteLine($"New File Id is: {result.CreatedId}");
}
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "fileId": 7346
}
```

{% /code %}
