# Record Id {% #record-id %}

The `Record Id` is a unique identifier for a record in an Onspring app. You will use the `Record Id` to retrieve, update, and delete records. However you should not confuse this `Record Id` with the value that is held and displayed in the **Record Id** field within the Onspring GUI. The value held in the **Record Id** field is also a unique identifier for a record in an Onspring app, but it is not guaranteed to be the same as the value of the `Record Id` property returned via the API.

For the purpose of clarity it can be helpful to think of the `Record Id` value retrieved via the API as being the record's internal identifier, and the value held in the **Record Id** field as being the record's external identifier. The internal `Record Id` is the value you will want to use at all times when working with records via the API. The external **Record Id** is only useful when working with records via the Onspring GUI.

If you are ever encountering an anomaly where the data being retrieved or updated via the API does not match the data being displayed in the Onspring GUI, you will want to make sure that you are not using the **Record Id** field value to identify the record to be retrieved or updated.

**Note:** The internal `Record Id` is the value that will be used to represent records in a [reference field value](#field-values).
