# Retrieve a file from a record in an app

{% code method="GET" heading="/Files/{appId}/{recordId}/{fieldId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/v1/Files/195/1/6989?fileId=89' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK.Helpers;

var httpHelper = new HttpHelper(
  config.baseUrl,
  config.apiKey
);

using (var result = httpHelper.GetFileFromRecord(195, 1, 6989, 89))
{
  Console.WriteLine($"FileName is: {result.FileName}");
  Console.WriteLine($"ContentType: {result.ContentType}");
  Console.WriteLine($"ContentLength: {result.ContentLength}");

  using (var fileStream = new FileStream($"C:\Users\Public\Documents\{result.FileName}", FileMode.Create))
  {
    result.Stream.CopyTo(fileStream);
  }
}
```

{% /code %}
