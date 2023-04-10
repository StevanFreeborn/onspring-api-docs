# Authentication

The Onpsring API uses API keys to authenticate requests. You can view and manage your API keys your instance.

The API key needs to be provided in every request. This is done by adding the `X-ApiKey` header to the request.

API Keys are specific to an instance. If you are using the API to access data from multiple instances, you will need to create an API key for each instance. The API key must be in an `Enabled` status and it must be assigned a role that will control the permissions for requests made by the API key. The role assigned should be in an `Active` status.

If the role assigned to the API key does not have sufficient permissions to perform the requested action, an error will be returned. Onspring administrators may configure roles for API keys just as they would any other role in Onspring. However each API key can have only one assigned role.
