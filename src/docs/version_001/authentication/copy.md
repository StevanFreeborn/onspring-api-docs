# Authentication {% #authentication %}

The Onpsring API uses API keys to authenticate requests. These keys are specific to a given Onspring instance. You can view and manage your API keys from within your instance.

An API key needs to be provided with every request. This is done by adding the `X-ApiKey` header to the request. The API key provided should be in an `Enabled` status and it should be assigned a role that has the proper permissions for the request made by the API key. The role assigned should also be in an `Active` status.

If the role assigned to the API key does not have sufficient permissions to perform the requested action or is in n `Inactive` status, an error will be returned. Onspring administrators may configure roles for API keys just as they would any other role in Onspring. However each API key can have only one assigned role.
