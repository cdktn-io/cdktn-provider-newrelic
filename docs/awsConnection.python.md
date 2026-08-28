# `awsConnection` Submodule <a name="`awsConnection` Submodule" id="@cdktn/provider-newrelic.awsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsConnection <a name="AwsConnection" id="@cdktn/provider-newrelic.awsConnection.AwsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection newrelic_aws_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  credential: AwsConnectionCredential,
  name: str,
  account_id: typing.Union[int, float] = None,
  description: str = None,
  enabled: bool | IResolvable = None,
  external_id: str = None,
  id: str = None,
  region: str = None,
  scope_id: str = None,
  scope_type: str = None,
  settings: IResolvable | typing.List[AwsConnectionSettings] = None,
  tag: IResolvable | typing.List[AwsConnectionTag] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.credential">credential</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a></code> | credential block. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the AWS connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account ID where the AWS connection will be created. Used when scope_type is ACCOUNT. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the AWS connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to indicate if the connection is enabled. True by default. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Optional field representing an identifier managed by the consumer. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#id AwsConnection#id}. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.region">region</a></code> | <code>str</code> | Default region for this connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope ID (account ID or organization ID) for the AWS connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.scopeType">scope_type</a></code> | <code>str</code> | The scope type for the AWS connection. Valid values are ACCOUNT and ORGANIZATION. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.settings">settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>]</code> | settings block. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.tag">tag</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>]</code> | tag block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.credential"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#credential AwsConnection#credential}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.name"></a>

- *Type:* str

The name of the AWS connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#name AwsConnection#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The account ID where the AWS connection will be created. Used when scope_type is ACCOUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#account_id AwsConnection#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.description"></a>

- *Type:* str

The description of the AWS connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#description AwsConnection#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Flag to indicate if the connection is enabled. True by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#enabled AwsConnection#enabled}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.externalId"></a>

- *Type:* str

Optional field representing an identifier managed by the consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#external_id AwsConnection#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#id AwsConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.region"></a>

- *Type:* str

Default region for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#region AwsConnection#region}

---

##### `scope_id`<sup>Optional</sup> <a name="scope_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope ID (account ID or organization ID) for the AWS connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#scope_id AwsConnection#scope_id}

---

##### `scope_type`<sup>Optional</sup> <a name="scope_type" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.scopeType"></a>

- *Type:* str

The scope type for the AWS connection. Valid values are ACCOUNT and ORGANIZATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#scope_type AwsConnection#scope_type}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.settings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#settings AwsConnection#settings}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.tag"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#tag AwsConnection#tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.putCredential">put_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetScopeId">reset_scope_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetScopeType">reset_scope_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetTag">reset_tag</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_credential` <a name="put_credential" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putCredential"></a>

```python
def put_credential(
  assume_role: AwsConnectionCredentialAssumeRole
) -> None
```

###### `assume_role`<sup>Required</sup> <a name="assume_role" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putCredential.parameter.assumeRole"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a>

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#assume_role AwsConnection#assume_role}

---

##### `put_settings` <a name="put_settings" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putSettings"></a>

```python
def put_settings(
  value: IResolvable | typing.List[AwsConnectionSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>]

---

##### `put_tag` <a name="put_tag" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putTag"></a>

```python
def put_tag(
  value: IResolvable | typing.List[AwsConnectionTag]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putTag.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scope_id` <a name="reset_scope_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetScopeId"></a>

```python
def reset_scope_id() -> None
```

##### `reset_scope_type` <a name="reset_scope_type" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetScopeType"></a>

```python
def reset_scope_type() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetTag"></a>

```python
def reset_tag() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AwsConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isConstruct"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AwsConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AwsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.credential">credential</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference">AwsConnectionCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList">AwsConnectionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList">AwsConnectionTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.credentialInput">credential_input</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeTypeInput">scope_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tagInput">tag_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeType">scope_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.credential"></a>

```python
credential: AwsConnectionCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference">AwsConnectionCredentialOutputReference</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.settings"></a>

```python
settings: AwsConnectionSettingsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList">AwsConnectionSettingsList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tag"></a>

```python
tag: AwsConnectionTagList
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList">AwsConnectionTagList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `credential_input`<sup>Optional</sup> <a name="credential_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.credentialInput"></a>

```python
credential_input: AwsConnectionCredential
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `scope_type_input`<sup>Optional</sup> <a name="scope_type_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeTypeInput"></a>

```python
scope_type_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.settingsInput"></a>

```python
settings_input: IResolvable | typing.List[AwsConnectionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tagInput"></a>

```python
tag_input: IResolvable | typing.List[AwsConnectionTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `scope_type`<sup>Required</sup> <a name="scope_type" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsConnectionConfig <a name="AwsConnectionConfig" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  credential: AwsConnectionCredential,
  name: str,
  account_id: typing.Union[int, float] = None,
  description: str = None,
  enabled: bool | IResolvable = None,
  external_id: str = None,
  id: str = None,
  region: str = None,
  scope_id: str = None,
  scope_type: str = None,
  settings: IResolvable | typing.List[AwsConnectionSettings] = None,
  tag: IResolvable | typing.List[AwsConnectionTag] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.credential">credential</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a></code> | credential block. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.name">name</a></code> | <code>str</code> | The name of the AWS connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account ID where the AWS connection will be created. Used when scope_type is ACCOUNT. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.description">description</a></code> | <code>str</code> | The description of the AWS connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to indicate if the connection is enabled. True by default. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.externalId">external_id</a></code> | <code>str</code> | Optional field representing an identifier managed by the consumer. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#id AwsConnection#id}. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.region">region</a></code> | <code>str</code> | Default region for this connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope ID (account ID or organization ID) for the AWS connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.scopeType">scope_type</a></code> | <code>str</code> | The scope type for the AWS connection. Valid values are ACCOUNT and ORGANIZATION. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.settings">settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>]</code> | settings block. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.tag">tag</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>]</code> | tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.credential"></a>

```python
credential: AwsConnectionCredential
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#credential AwsConnection#credential}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the AWS connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#name AwsConnection#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The account ID where the AWS connection will be created. Used when scope_type is ACCOUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#account_id AwsConnection#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the AWS connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#description AwsConnection#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to indicate if the connection is enabled. True by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#enabled AwsConnection#enabled}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Optional field representing an identifier managed by the consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#external_id AwsConnection#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#id AwsConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Default region for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#region AwsConnection#region}

---

##### `scope_id`<sup>Optional</sup> <a name="scope_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope ID (account ID or organization ID) for the AWS connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#scope_id AwsConnection#scope_id}

---

##### `scope_type`<sup>Optional</sup> <a name="scope_type" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

The scope type for the AWS connection. Valid values are ACCOUNT and ORGANIZATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#scope_type AwsConnection#scope_type}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.settings"></a>

```python
settings: IResolvable | typing.List[AwsConnectionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#settings AwsConnection#settings}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.tag"></a>

```python
tag: IResolvable | typing.List[AwsConnectionTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#tag AwsConnection#tag}

---

### AwsConnectionCredential <a name="AwsConnectionCredential" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionCredential(
  assume_role: AwsConnectionCredentialAssumeRole
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential.property.assumeRole">assume_role</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a></code> | assume_role block. |

---

##### `assume_role`<sup>Required</sup> <a name="assume_role" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential.property.assumeRole"></a>

```python
assume_role: AwsConnectionCredentialAssumeRole
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a>

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#assume_role AwsConnection#assume_role}

---

### AwsConnectionCredentialAssumeRole <a name="AwsConnectionCredentialAssumeRole" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionCredentialAssumeRole(
  role_arn: str,
  external_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole.property.roleArn">role_arn</a></code> | <code>str</code> | ARN of the IAM role New Relic should assume. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole.property.externalId">external_id</a></code> | <code>str</code> | External ID supplied by New Relic during AssumeRole. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

ARN of the IAM role New Relic should assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#role_arn AwsConnection#role_arn}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

External ID supplied by New Relic during AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#external_id AwsConnection#external_id}

---

### AwsConnectionSettings <a name="AwsConnectionSettings" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionSettings(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings.property.key">key</a></code> | <code>str</code> | The key or name of the setting. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings.property.value">value</a></code> | <code>str</code> | The value of the setting. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings.property.key"></a>

```python
key: str
```

- *Type:* str

The key or name of the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#key AwsConnection#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#value AwsConnection#value}

---

### AwsConnectionTag <a name="AwsConnectionTag" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTag.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionTag(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag.property.values">values</a></code> | <code>typing.List[str]</code> | The tag values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTag.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#key AwsConnection#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTag.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#values AwsConnection#values}

---

## Classes <a name="Classes" id="Classes"></a>

### AwsConnectionCredentialAssumeRoleOutputReference <a name="AwsConnectionCredentialAssumeRoleOutputReference" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionCredentialAssumeRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.internalValue"></a>

```python
internal_value: AwsConnectionCredentialAssumeRole
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a>

---


### AwsConnectionCredentialOutputReference <a name="AwsConnectionCredentialOutputReference" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.putAssumeRole">put_assume_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_assume_role` <a name="put_assume_role" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.putAssumeRole"></a>

```python
def put_assume_role(
  role_arn: str,
  external_id: str = None
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.putAssumeRole.parameter.roleArn"></a>

- *Type:* str

ARN of the IAM role New Relic should assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#role_arn AwsConnection#role_arn}

---

###### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.putAssumeRole.parameter.externalId"></a>

- *Type:* str

External ID supplied by New Relic during AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/aws_connection#external_id AwsConnection#external_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.assumeRole">assume_role</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference">AwsConnectionCredentialAssumeRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.assumeRoleInput">assume_role_input</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assume_role`<sup>Required</sup> <a name="assume_role" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.assumeRole"></a>

```python
assume_role: AwsConnectionCredentialAssumeRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference">AwsConnectionCredentialAssumeRoleOutputReference</a>

---

##### `assume_role_input`<sup>Optional</sup> <a name="assume_role_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.assumeRoleInput"></a>

```python
assume_role_input: AwsConnectionCredentialAssumeRole
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.internalValue"></a>

```python
internal_value: AwsConnectionCredential
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a>

---


### AwsConnectionSettingsList <a name="AwsConnectionSettingsList" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AwsConnectionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AwsConnectionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>]

---


### AwsConnectionSettingsOutputReference <a name="AwsConnectionSettingsOutputReference" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AwsConnectionSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>

---


### AwsConnectionTagList <a name="AwsConnectionTagList" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AwsConnectionTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AwsConnectionTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>]

---


### AwsConnectionTagOutputReference <a name="AwsConnectionTagOutputReference" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import aws_connection

awsConnection.AwsConnectionTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AwsConnectionTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>

---



