# `federatedLogsPartition` Submodule <a name="`federatedLogsPartition` Submodule" id="@cdktn/provider-newrelic.federatedLogsPartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedLogsPartition <a name="FederatedLogsPartition" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition newrelic_federated_logs_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  setup_id: str,
  storage: FederatedLogsPartitionStorage,
  account_id: typing.Union[int, float] = None,
  active: bool | IResolvable = None,
  data_retention_policy: FederatedLogsPartitionDataRetentionPolicy = None,
  description: str = None,
  forwarder_configuration: FederatedLogsPartitionForwarderConfiguration = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.setupId">setup_id</a></code> | <code>str</code> | The ID of the federated log setup this partition belongs to. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where the federated logs partition will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the partition is active. When false, log routing to this partition is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.dataRetentionPolicy">data_retention_policy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.forwarderConfiguration">forwarder_configuration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | forwarder_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.name"></a>

- *Type:* str

The name of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#name FederatedLogsPartition#name}

---

##### `setup_id`<sup>Required</sup> <a name="setup_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.setupId"></a>

- *Type:* str

The ID of the federated log setup this partition belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#setup_id FederatedLogsPartition#setup_id}

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#storage FederatedLogsPartition#storage}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID where the federated logs partition will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#account_id FederatedLogsPartition#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.active"></a>

- *Type:* bool | cdktn.IResolvable

Whether the partition is active. When false, log routing to this partition is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#active FederatedLogsPartition#active}

---

##### `data_retention_policy`<sup>Optional</sup> <a name="data_retention_policy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.dataRetentionPolicy"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#data_retention_policy FederatedLogsPartition#data_retention_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.description"></a>

- *Type:* str

The description of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#description FederatedLogsPartition#description}

---

##### `forwarder_configuration`<sup>Optional</sup> <a name="forwarder_configuration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.forwarderConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

forwarder_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#forwarder_configuration FederatedLogsPartition#forwarder_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy">put_data_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration">put_forwarder_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDataRetentionPolicy">reset_data_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetForwarderConfiguration">reset_forwarder_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_retention_policy` <a name="put_data_retention_policy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy"></a>

```python
def put_data_retention_policy(
  duration: typing.Union[int, float],
  unit: str
) -> None
```

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy.parameter.duration"></a>

- *Type:* typing.Union[int, float]

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#duration FederatedLogsPartition#duration}

---

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy.parameter.unit"></a>

- *Type:* str

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#unit FederatedLogsPartition#unit}

---

##### `put_forwarder_configuration` <a name="put_forwarder_configuration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration"></a>

```python
def put_forwarder_configuration(
  type: str,
  pipeline_control: FederatedLogsPartitionForwarderConfigurationPipelineControl = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration.parameter.type"></a>

- *Type:* str

The type of forwarder. Must match the parent setup's forwarder type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#type FederatedLogsPartition#type}

---

###### `pipeline_control`<sup>Optional</sup> <a name="pipeline_control" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration.parameter.pipelineControl"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#pipeline_control FederatedLogsPartition#pipeline_control}

---

##### `put_storage` <a name="put_storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage"></a>

```python
def put_storage(
  data_location_uri: str,
  table: str
) -> None
```

###### `data_location_uri`<sup>Required</sup> <a name="data_location_uri" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage.parameter.dataLocationUri"></a>

- *Type:* str

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#data_location_uri FederatedLogsPartition#data_location_uri}

---

###### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage.parameter.table"></a>

- *Type:* str

The table name associated with the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#table FederatedLogsPartition#table}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_active` <a name="reset_active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_data_retention_policy` <a name="reset_data_retention_policy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDataRetentionPolicy"></a>

```python
def reset_data_retention_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_forwarder_configuration` <a name="reset_forwarder_configuration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetForwarderConfiguration"></a>

```python
def reset_forwarder_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FederatedLogsPartition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FederatedLogsPartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FederatedLogsPartition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FederatedLogsPartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FederatedLogsPartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicy">data_retention_policy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference">FederatedLogsPartitionDataRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfiguration">forwarder_configuration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference">FederatedLogsPartitionForwarderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList">FederatedLogsPartitionHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycleStatus">lifecycle_status</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList">FederatedLogsPartitionLifecycleStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference">FederatedLogsPartitionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.activeInput">active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicyInput">data_retention_policy_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfigurationInput">forwarder_configuration_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupIdInput">setup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storageInput">storage_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupId">setup_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data_retention_policy`<sup>Required</sup> <a name="data_retention_policy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicy"></a>

```python
data_retention_policy: FederatedLogsPartitionDataRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference">FederatedLogsPartitionDataRetentionPolicyOutputReference</a>

---

##### `forwarder_configuration`<sup>Required</sup> <a name="forwarder_configuration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfiguration"></a>

```python
forwarder_configuration: FederatedLogsPartitionForwarderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference">FederatedLogsPartitionForwarderConfigurationOutputReference</a>

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.healthCheck"></a>

```python
health_check: FederatedLogsPartitionHealthCheckList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList">FederatedLogsPartitionHealthCheckList</a>

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `lifecycle_status`<sup>Required</sup> <a name="lifecycle_status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycleStatus"></a>

```python
lifecycle_status: FederatedLogsPartitionLifecycleStatusList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList">FederatedLogsPartitionLifecycleStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storage"></a>

```python
storage: FederatedLogsPartitionStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference">FederatedLogsPartitionStorageOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.activeInput"></a>

```python
active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_retention_policy_input`<sup>Optional</sup> <a name="data_retention_policy_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicyInput"></a>

```python
data_retention_policy_input: FederatedLogsPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `forwarder_configuration_input`<sup>Optional</sup> <a name="forwarder_configuration_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfigurationInput"></a>

```python
forwarder_configuration_input: FederatedLogsPartitionForwarderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `setup_id_input`<sup>Optional</sup> <a name="setup_id_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupIdInput"></a>

```python
setup_id_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storageInput"></a>

```python
storage_input: FederatedLogsPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `setup_id`<sup>Required</sup> <a name="setup_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupId"></a>

```python
setup_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedLogsPartitionConfig <a name="FederatedLogsPartitionConfig" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  setup_id: str,
  storage: FederatedLogsPartitionStorage,
  account_id: typing.Union[int, float] = None,
  active: bool | IResolvable = None,
  data_retention_policy: FederatedLogsPartitionDataRetentionPolicy = None,
  description: str = None,
  forwarder_configuration: FederatedLogsPartitionForwarderConfiguration = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.name">name</a></code> | <code>str</code> | The name of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.setupId">setup_id</a></code> | <code>str</code> | The ID of the federated log setup this partition belongs to. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where the federated logs partition will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the partition is active. When false, log routing to this partition is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dataRetentionPolicy">data_retention_policy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.description">description</a></code> | <code>str</code> | The description of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forwarderConfiguration">forwarder_configuration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | forwarder_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#name FederatedLogsPartition#name}

---

##### `setup_id`<sup>Required</sup> <a name="setup_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.setupId"></a>

```python
setup_id: str
```

- *Type:* str

The ID of the federated log setup this partition belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#setup_id FederatedLogsPartition#setup_id}

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.storage"></a>

```python
storage: FederatedLogsPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#storage FederatedLogsPartition#storage}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID where the federated logs partition will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#account_id FederatedLogsPartition#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the partition is active. When false, log routing to this partition is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#active FederatedLogsPartition#active}

---

##### `data_retention_policy`<sup>Optional</sup> <a name="data_retention_policy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dataRetentionPolicy"></a>

```python
data_retention_policy: FederatedLogsPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#data_retention_policy FederatedLogsPartition#data_retention_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#description FederatedLogsPartition#description}

---

##### `forwarder_configuration`<sup>Optional</sup> <a name="forwarder_configuration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forwarderConfiguration"></a>

```python
forwarder_configuration: FederatedLogsPartitionForwarderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

forwarder_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#forwarder_configuration FederatedLogsPartition#forwarder_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FederatedLogsPartitionDataRetentionPolicy <a name="FederatedLogsPartitionDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy(
  duration: typing.Union[int, float],
  unit: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | The duration value for retention. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.unit">unit</a></code> | <code>str</code> | The time unit for the retention duration. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#duration FederatedLogsPartition#duration}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#unit FederatedLogsPartition#unit}

---

### FederatedLogsPartitionForwarderConfiguration <a name="FederatedLogsPartitionForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration(
  type: str,
  pipeline_control: FederatedLogsPartitionForwarderConfigurationPipelineControl = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.type">type</a></code> | <code>str</code> | The type of forwarder. Must match the parent setup's forwarder type. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.pipelineControl">pipeline_control</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | pipeline_control block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

The type of forwarder. Must match the parent setup's forwarder type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#type FederatedLogsPartition#type}

---

##### `pipeline_control`<sup>Optional</sup> <a name="pipeline_control" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.pipelineControl"></a>

```python
pipeline_control: FederatedLogsPartitionForwarderConfigurationPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#pipeline_control FederatedLogsPartition#pipeline_control}

---

### FederatedLogsPartitionForwarderConfigurationPipelineControl <a name="FederatedLogsPartitionForwarderConfigurationPipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl(
  partition_rule: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.property.partitionRule">partition_rule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | partition_rule block. |

---

##### `partition_rule`<sup>Optional</sup> <a name="partition_rule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.property.partitionRule"></a>

```python
partition_rule: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

partition_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#partition_rule FederatedLogsPartition#partition_rule}

---

### FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.property.expression">expression</a></code> | <code>str</code> | OTTL expression for routing logs to this partition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.property.expression"></a>

```python
expression: str
```

- *Type:* str

OTTL expression for routing logs to this partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#expression FederatedLogsPartition#expression}

---

### FederatedLogsPartitionHealthCheck <a name="FederatedLogsPartitionHealthCheck" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionHealthCheck()
```


### FederatedLogsPartitionHealthCheckEnd2EndDataFlow <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow()
```


### FederatedLogsPartitionHealthCheckQueryConnection <a name="FederatedLogsPartitionHealthCheckQueryConnection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection()
```


### FederatedLogsPartitionLifecycleStatus <a name="FederatedLogsPartitionLifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionLifecycleStatus()
```


### FederatedLogsPartitionStorage <a name="FederatedLogsPartitionStorage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionStorage(
  data_location_uri: str,
  table: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.dataLocationUri">data_location_uri</a></code> | <code>str</code> | The URI location of the partition in object storage. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.table">table</a></code> | <code>str</code> | The table name associated with the partition. |

---

##### `data_location_uri`<sup>Required</sup> <a name="data_location_uri" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.dataLocationUri"></a>

```python
data_location_uri: str
```

- *Type:* str

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#data_location_uri FederatedLogsPartition#data_location_uri}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.table"></a>

```python
table: str
```

- *Type:* str

The table name associated with the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#table FederatedLogsPartition#table}

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedLogsPartitionDataRetentionPolicyOutputReference <a name="FederatedLogsPartitionDataRetentionPolicyOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---


### FederatedLogsPartitionForwarderConfigurationOutputReference <a name="FederatedLogsPartitionForwarderConfigurationOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl">put_pipeline_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resetPipelineControl">reset_pipeline_control</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pipeline_control` <a name="put_pipeline_control" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl"></a>

```python
def put_pipeline_control(
  partition_rule: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule = None
) -> None
```

###### `partition_rule`<sup>Optional</sup> <a name="partition_rule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl.parameter.partitionRule"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

partition_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#partition_rule FederatedLogsPartition#partition_rule}

---

##### `reset_pipeline_control` <a name="reset_pipeline_control" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resetPipelineControl"></a>

```python
def reset_pipeline_control() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControl">pipeline_control</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControlInput">pipeline_control_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_control`<sup>Required</sup> <a name="pipeline_control" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControl"></a>

```python
pipeline_control: FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference</a>

---

##### `pipeline_control_input`<sup>Optional</sup> <a name="pipeline_control_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControlInput"></a>

```python
pipeline_control_input: FederatedLogsPartitionForwarderConfigurationPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsPartitionForwarderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---


### FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule">put_partition_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resetPartitionRule">reset_partition_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition_rule` <a name="put_partition_rule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule"></a>

```python
def put_partition_rule(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule.parameter.expression"></a>

- *Type:* str

OTTL expression for routing logs to this partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/federated_logs_partition#expression FederatedLogsPartition#expression}

---

##### `reset_partition_rule` <a name="reset_partition_rule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resetPartitionRule"></a>

```python
def reset_partition_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRule">partition_rule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRuleInput">partition_rule_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_rule`<sup>Required</sup> <a name="partition_rule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRule"></a>

```python
partition_rule: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference</a>

---

##### `partition_rule_input`<sup>Optional</sup> <a name="partition_rule_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRuleInput"></a>

```python
partition_rule_input: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsPartitionForwarderConfigurationPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---


### FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---


### FederatedLogsPartitionHealthCheckEnd2EndDataFlowList <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlowList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow">FederatedLogsPartitionHealthCheckEnd2EndDataFlow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsPartitionHealthCheckEnd2EndDataFlow
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow">FederatedLogsPartitionHealthCheckEnd2EndDataFlow</a>

---


### FederatedLogsPartitionHealthCheckList <a name="FederatedLogsPartitionHealthCheckList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionHealthCheckList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FederatedLogsPartitionHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FederatedLogsPartitionHealthCheckOutputReference <a name="FederatedLogsPartitionHealthCheckOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.end2EndDataFlow">end2_end_data_flow</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList">FederatedLogsPartitionHealthCheckEnd2EndDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.queryConnection">query_connection</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList">FederatedLogsPartitionHealthCheckQueryConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck">FederatedLogsPartitionHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end2_end_data_flow`<sup>Required</sup> <a name="end2_end_data_flow" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.end2EndDataFlow"></a>

```python
end2_end_data_flow: FederatedLogsPartitionHealthCheckEnd2EndDataFlowList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList">FederatedLogsPartitionHealthCheckEnd2EndDataFlowList</a>

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `query_connection`<sup>Required</sup> <a name="query_connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.queryConnection"></a>

```python
query_connection: FederatedLogsPartitionHealthCheckQueryConnectionList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList">FederatedLogsPartitionHealthCheckQueryConnectionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsPartitionHealthCheck
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck">FederatedLogsPartitionHealthCheck</a>

---


### FederatedLogsPartitionHealthCheckQueryConnectionList <a name="FederatedLogsPartitionHealthCheckQueryConnectionList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FederatedLogsPartitionHealthCheckQueryConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FederatedLogsPartitionHealthCheckQueryConnectionOutputReference <a name="FederatedLogsPartitionHealthCheckQueryConnectionOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection">FederatedLogsPartitionHealthCheckQueryConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsPartitionHealthCheckQueryConnection
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection">FederatedLogsPartitionHealthCheckQueryConnection</a>

---


### FederatedLogsPartitionLifecycleStatusList <a name="FederatedLogsPartitionLifecycleStatusList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FederatedLogsPartitionLifecycleStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FederatedLogsPartitionLifecycleStatusOutputReference <a name="FederatedLogsPartitionLifecycleStatusOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus">FederatedLogsPartitionLifecycleStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsPartitionLifecycleStatus
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus">FederatedLogsPartitionLifecycleStatus</a>

---


### FederatedLogsPartitionStorageOutputReference <a name="FederatedLogsPartitionStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_partition

federatedLogsPartition.FederatedLogsPartitionStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUriInput">data_location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUri">data_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.table">table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_location_uri_input`<sup>Optional</sup> <a name="data_location_uri_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUriInput"></a>

```python
data_location_uri_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `data_location_uri`<sup>Required</sup> <a name="data_location_uri" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUri"></a>

```python
data_location_uri: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.table"></a>

```python
table: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---



