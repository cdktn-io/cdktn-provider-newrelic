# `dataNewrelicApiAccessKey` Submodule <a name="`dataNewrelicApiAccessKey` Submodule" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicApiAccessKey <a name="DataNewrelicApiAccessKey" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key newrelic_api_access_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_api_access_key

dataNewrelicApiAccessKey.DataNewrelicApiAccessKey(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_type: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  ingest_type: str = None,
  key_id: str = None,
  name: str = None,
  user_id: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.keyType">key_type</a></code> | <code>str</code> | The type of the key, one of INGEST or USER. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID the key belongs to. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.ingestType">ingest_type</a></code> | <code>str</code> | The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.keyId">key_id</a></code> | <code>str</code> | The ID of the key. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the key. Used to narrow down the search when `key_id` is not specified. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user that owns the key. Only applies when `key_type` is USER. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.keyType"></a>

- *Type:* str

The type of the key, one of INGEST or USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#key_type DataNewrelicApiAccessKey#key_type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID the key belongs to.

Defaults to the account ID configured on the provider when not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#account_id DataNewrelicApiAccessKey#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingest_type`<sup>Optional</sup> <a name="ingest_type" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.ingestType"></a>

- *Type:* str

The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#ingest_type DataNewrelicApiAccessKey#ingest_type}

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.keyId"></a>

- *Type:* str

The ID of the key.

When specified, the key is fetched directly by its ID instead of searching by other attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#key_id DataNewrelicApiAccessKey#key_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.name"></a>

- *Type:* str

The name of the key. Used to narrow down the search when `key_id` is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#name DataNewrelicApiAccessKey#name}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.userId"></a>

- *Type:* typing.Union[int, float]

The ID of the user that owns the key. Only applies when `key_type` is USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#user_id DataNewrelicApiAccessKey#user_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetIngestType">reset_ingest_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetKeyId">reset_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingest_type` <a name="reset_ingest_type" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetIngestType"></a>

```python
def reset_ingest_type() -> None
```

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetKeyId"></a>

```python
def reset_key_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetUserId"></a>

```python
def reset_user_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataNewrelicApiAccessKey resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct"></a>

```python
from cdktn_provider_newrelic import data_newrelic_api_access_key

dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import data_newrelic_api_access_key

dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource"></a>

```python
from cdktn_provider_newrelic import data_newrelic_api_access_key

dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import data_newrelic_api_access_key

dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataNewrelicApiAccessKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNewrelicApiAccessKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNewrelicApiAccessKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicApiAccessKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestTypeInput">ingest_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestType">ingest_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingest_type_input`<sup>Optional</sup> <a name="ingest_type_input" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestTypeInput"></a>

```python
ingest_type_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingest_type`<sup>Required</sup> <a name="ingest_type" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestType"></a>

```python
ingest_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicApiAccessKeyConfig <a name="DataNewrelicApiAccessKeyConfig" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_api_access_key

dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_type: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  ingest_type: str = None,
  key_id: str = None,
  name: str = None,
  user_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyType">key_type</a></code> | <code>str</code> | The type of the key, one of INGEST or USER. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID the key belongs to. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.ingestType">ingest_type</a></code> | <code>str</code> | The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyId">key_id</a></code> | <code>str</code> | The ID of the key. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.name">name</a></code> | <code>str</code> | The name of the key. Used to narrow down the search when `key_id` is not specified. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user that owns the key. Only applies when `key_type` is USER. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The type of the key, one of INGEST or USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#key_type DataNewrelicApiAccessKey#key_type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID the key belongs to.

Defaults to the account ID configured on the provider when not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#account_id DataNewrelicApiAccessKey#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingest_type`<sup>Optional</sup> <a name="ingest_type" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.ingestType"></a>

```python
ingest_type: str
```

- *Type:* str

The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#ingest_type DataNewrelicApiAccessKey#ingest_type}

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The ID of the key.

When specified, the key is fetched directly by its ID instead of searching by other attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#key_id DataNewrelicApiAccessKey#key_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the key. Used to narrow down the search when `key_id` is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#name DataNewrelicApiAccessKey#name}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the user that owns the key. Only applies when `key_type` is USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/data-sources/api_access_key#user_id DataNewrelicApiAccessKey#user_id}

---



