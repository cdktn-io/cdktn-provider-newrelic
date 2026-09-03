# `federatedLogsSetup` Submodule <a name="`federatedLogsSetup` Submodule" id="@cdktn/provider-newrelic.federatedLogsSetup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedLogsSetup <a name="FederatedLogsSetup" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup newrelic_federated_logs_setup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_partition: FederatedLogsSetupDefaultPartition,
  name: str,
  storage: FederatedLogsSetupStorage,
  account_id: typing.Union[int, float] = None,
  active: bool | IResolvable = None,
  description: str = None,
  forwarder: FederatedLogsSetupForwarder = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.defaultPartition">default_partition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | default_partition block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where the federated logs setup will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the setup is active. When false, log routing to this setup is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.forwarder">forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | forwarder block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_partition`<sup>Required</sup> <a name="default_partition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.defaultPartition"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

default_partition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#default_partition FederatedLogsSetup#default_partition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.name"></a>

- *Type:* str

The name of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#name FederatedLogsSetup#name}

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID where the federated logs setup will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#account_id FederatedLogsSetup#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.active"></a>

- *Type:* bool | cdktn.IResolvable

Whether the setup is active. When false, log routing to this setup is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#active FederatedLogsSetup#active}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.description"></a>

- *Type:* str

The description of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#description FederatedLogsSetup#description}

---

##### `forwarder`<sup>Optional</sup> <a name="forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.forwarder"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#forwarder FederatedLogsSetup#forwarder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition">put_default_partition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder">put_forwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetForwarder">reset_forwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_partition` <a name="put_default_partition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition"></a>

```python
def put_default_partition(
  storage: FederatedLogsSetupDefaultPartitionStorage,
  data_retention_policy: FederatedLogsSetupDefaultPartitionDataRetentionPolicy = None
) -> None
```

###### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition.parameter.storage"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

###### `data_retention_policy`<sup>Optional</sup> <a name="data_retention_policy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition.parameter.dataRetentionPolicy"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#data_retention_policy FederatedLogsSetup#data_retention_policy}

---

##### `put_forwarder` <a name="put_forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder"></a>

```python
def put_forwarder(
  type: str,
  pipeline_control: FederatedLogsSetupForwarderPipelineControl = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder.parameter.type"></a>

- *Type:* str

The type of forwarder. Currently only PIPELINE_CONTROL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#type FederatedLogsSetup#type}

---

###### `pipeline_control`<sup>Optional</sup> <a name="pipeline_control" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder.parameter.pipelineControl"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#pipeline_control FederatedLogsSetup#pipeline_control}

---

##### `put_storage` <a name="put_storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage"></a>

```python
def put_storage(
  cloud_provider_configuration: FederatedLogsSetupStorageCloudProviderConfiguration,
  database: str,
  data_ingest_connection_id: str,
  data_location_bucket: str,
  query_connection_id: str
) -> None
```

###### `cloud_provider_configuration`<sup>Required</sup> <a name="cloud_provider_configuration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage.parameter.cloudProviderConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

cloud_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#cloud_provider_configuration FederatedLogsSetup#cloud_provider_configuration}

---

###### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage.parameter.database"></a>

- *Type:* str

The database name associated with the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#database FederatedLogsSetup#database}

---

###### `data_ingest_connection_id`<sup>Required</sup> <a name="data_ingest_connection_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage.parameter.dataIngestConnectionId"></a>

- *Type:* str

The connection manager entity GUID used for writing data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#data_ingest_connection_id FederatedLogsSetup#data_ingest_connection_id}

---

###### `data_location_bucket`<sup>Required</sup> <a name="data_location_bucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage.parameter.dataLocationBucket"></a>

- *Type:* str

The object storage bucket where log data is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#data_location_bucket FederatedLogsSetup#data_location_bucket}

---

###### `query_connection_id`<sup>Required</sup> <a name="query_connection_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage.parameter.queryConnectionId"></a>

- *Type:* str

The connection manager entity GUID used by query workers for reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#query_connection_id FederatedLogsSetup#query_connection_id}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_active` <a name="reset_active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_forwarder` <a name="reset_forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetForwarder"></a>

```python
def reset_forwarder() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FederatedLogsSetup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FederatedLogsSetup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FederatedLogsSetup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FederatedLogsSetup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FederatedLogsSetup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartition">default_partition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference">FederatedLogsSetupDefaultPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionId">default_partition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarder">forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference">FederatedLogsSetupForwarderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList">FederatedLogsSetupHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycleStatus">lifecycle_status</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList">FederatedLogsSetupLifecycleStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference">FederatedLogsSetupStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.activeInput">active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionInput">default_partition_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarderInput">forwarder_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storageInput">storage_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `default_partition`<sup>Required</sup> <a name="default_partition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartition"></a>

```python
default_partition: FederatedLogsSetupDefaultPartitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference">FederatedLogsSetupDefaultPartitionOutputReference</a>

---

##### `default_partition_id`<sup>Required</sup> <a name="default_partition_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionId"></a>

```python
default_partition_id: str
```

- *Type:* str

---

##### `forwarder`<sup>Required</sup> <a name="forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarder"></a>

```python
forwarder: FederatedLogsSetupForwarderOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference">FederatedLogsSetupForwarderOutputReference</a>

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.healthCheck"></a>

```python
health_check: FederatedLogsSetupHealthCheckList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList">FederatedLogsSetupHealthCheckList</a>

---

##### `lifecycle_status`<sup>Required</sup> <a name="lifecycle_status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycleStatus"></a>

```python
lifecycle_status: FederatedLogsSetupLifecycleStatusList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList">FederatedLogsSetupLifecycleStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storage"></a>

```python
storage: FederatedLogsSetupStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference">FederatedLogsSetupStorageOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.activeInput"></a>

```python
active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `default_partition_input`<sup>Optional</sup> <a name="default_partition_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionInput"></a>

```python
default_partition_input: FederatedLogsSetupDefaultPartition
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `forwarder_input`<sup>Optional</sup> <a name="forwarder_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarderInput"></a>

```python
forwarder_input: FederatedLogsSetupForwarder
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storageInput"></a>

```python
storage_input: FederatedLogsSetupStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedLogsSetupConfig <a name="FederatedLogsSetupConfig" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_partition: FederatedLogsSetupDefaultPartition,
  name: str,
  storage: FederatedLogsSetupStorage,
  account_id: typing.Union[int, float] = None,
  active: bool | IResolvable = None,
  description: str = None,
  forwarder: FederatedLogsSetupForwarder = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.defaultPartition">default_partition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | default_partition block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.name">name</a></code> | <code>str</code> | The name of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where the federated logs setup will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the setup is active. When false, log routing to this setup is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.description">description</a></code> | <code>str</code> | The description of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forwarder">forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | forwarder block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_partition`<sup>Required</sup> <a name="default_partition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.defaultPartition"></a>

```python
default_partition: FederatedLogsSetupDefaultPartition
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

default_partition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#default_partition FederatedLogsSetup#default_partition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#name FederatedLogsSetup#name}

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.storage"></a>

```python
storage: FederatedLogsSetupStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID where the federated logs setup will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#account_id FederatedLogsSetup#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the setup is active. When false, log routing to this setup is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#active FederatedLogsSetup#active}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#description FederatedLogsSetup#description}

---

##### `forwarder`<sup>Optional</sup> <a name="forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forwarder"></a>

```python
forwarder: FederatedLogsSetupForwarder
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#forwarder FederatedLogsSetup#forwarder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FederatedLogsSetupDefaultPartition <a name="FederatedLogsSetupDefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupDefaultPartition(
  storage: FederatedLogsSetupDefaultPartitionStorage,
  data_retention_policy: FederatedLogsSetupDefaultPartitionDataRetentionPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.dataRetentionPolicy">data_retention_policy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.storage"></a>

```python
storage: FederatedLogsSetupDefaultPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `data_retention_policy`<sup>Optional</sup> <a name="data_retention_policy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.dataRetentionPolicy"></a>

```python
data_retention_policy: FederatedLogsSetupDefaultPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#data_retention_policy FederatedLogsSetup#data_retention_policy}

---

### FederatedLogsSetupDefaultPartitionDataRetentionPolicy <a name="FederatedLogsSetupDefaultPartitionDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy(
  duration: typing.Union[int, float],
  unit: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | The duration value for retention. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.unit">unit</a></code> | <code>str</code> | The time unit for the retention duration. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#duration FederatedLogsSetup#duration}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#unit FederatedLogsSetup#unit}

---

### FederatedLogsSetupDefaultPartitionStorage <a name="FederatedLogsSetupDefaultPartitionStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage(
  data_location_uri: str,
  table: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.dataLocationUri">data_location_uri</a></code> | <code>str</code> | The URI location of the partition in object storage. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.table">table</a></code> | <code>str</code> | The table name associated with the default partition. |

---

##### `data_location_uri`<sup>Required</sup> <a name="data_location_uri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.dataLocationUri"></a>

```python
data_location_uri: str
```

- *Type:* str

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#data_location_uri FederatedLogsSetup#data_location_uri}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.table"></a>

```python
table: str
```

- *Type:* str

The table name associated with the default partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#table FederatedLogsSetup#table}

---

### FederatedLogsSetupForwarder <a name="FederatedLogsSetupForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupForwarder(
  type: str,
  pipeline_control: FederatedLogsSetupForwarderPipelineControl = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.type">type</a></code> | <code>str</code> | The type of forwarder. Currently only PIPELINE_CONTROL is supported. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.pipelineControl">pipeline_control</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | pipeline_control block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.type"></a>

```python
type: str
```

- *Type:* str

The type of forwarder. Currently only PIPELINE_CONTROL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#type FederatedLogsSetup#type}

---

##### `pipeline_control`<sup>Optional</sup> <a name="pipeline_control" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.pipelineControl"></a>

```python
pipeline_control: FederatedLogsSetupForwarderPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#pipeline_control FederatedLogsSetup#pipeline_control}

---

### FederatedLogsSetupForwarderPipelineControl <a name="FederatedLogsSetupForwarderPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl(
  fleet_id: str,
  routing_rule: FederatedLogsSetupForwarderPipelineControlRoutingRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.fleetId">fleet_id</a></code> | <code>str</code> | The fleet entity GUID used for deploying the pipeline configuration. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.routingRule">routing_rule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | routing_rule block. |

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

The fleet entity GUID used for deploying the pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#fleet_id FederatedLogsSetup#fleet_id}

---

##### `routing_rule`<sup>Optional</sup> <a name="routing_rule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.routingRule"></a>

```python
routing_rule: FederatedLogsSetupForwarderPipelineControlRoutingRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#routing_rule FederatedLogsSetup#routing_rule}

---

### FederatedLogsSetupForwarderPipelineControlRoutingRule <a name="FederatedLogsSetupForwarderPipelineControlRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.property.expression">expression</a></code> | <code>str</code> | OTTL expression for routing logs to this setup. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.property.expression"></a>

```python
expression: str
```

- *Type:* str

OTTL expression for routing logs to this setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#expression FederatedLogsSetup#expression}

---

### FederatedLogsSetupHealthCheck <a name="FederatedLogsSetupHealthCheck" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupHealthCheck()
```


### FederatedLogsSetupHealthCheckEnd2EndDataFlow <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow()
```


### FederatedLogsSetupHealthCheckQueryConnection <a name="FederatedLogsSetupHealthCheckQueryConnection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection()
```


### FederatedLogsSetupLifecycleStatus <a name="FederatedLogsSetupLifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupLifecycleStatus()
```


### FederatedLogsSetupStorage <a name="FederatedLogsSetupStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupStorage(
  cloud_provider_configuration: FederatedLogsSetupStorageCloudProviderConfiguration,
  database: str,
  data_ingest_connection_id: str,
  data_location_bucket: str,
  query_connection_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.cloudProviderConfiguration">cloud_provider_configuration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | cloud_provider_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.database">database</a></code> | <code>str</code> | The database name associated with the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataIngestConnectionId">data_ingest_connection_id</a></code> | <code>str</code> | The connection manager entity GUID used for writing data. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataLocationBucket">data_location_bucket</a></code> | <code>str</code> | The object storage bucket where log data is stored. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.queryConnectionId">query_connection_id</a></code> | <code>str</code> | The connection manager entity GUID used by query workers for reading data. |

---

##### `cloud_provider_configuration`<sup>Required</sup> <a name="cloud_provider_configuration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.cloudProviderConfiguration"></a>

```python
cloud_provider_configuration: FederatedLogsSetupStorageCloudProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

cloud_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#cloud_provider_configuration FederatedLogsSetup#cloud_provider_configuration}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.database"></a>

```python
database: str
```

- *Type:* str

The database name associated with the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#database FederatedLogsSetup#database}

---

##### `data_ingest_connection_id`<sup>Required</sup> <a name="data_ingest_connection_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataIngestConnectionId"></a>

```python
data_ingest_connection_id: str
```

- *Type:* str

The connection manager entity GUID used for writing data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#data_ingest_connection_id FederatedLogsSetup#data_ingest_connection_id}

---

##### `data_location_bucket`<sup>Required</sup> <a name="data_location_bucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataLocationBucket"></a>

```python
data_location_bucket: str
```

- *Type:* str

The object storage bucket where log data is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#data_location_bucket FederatedLogsSetup#data_location_bucket}

---

##### `query_connection_id`<sup>Required</sup> <a name="query_connection_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.queryConnectionId"></a>

```python
query_connection_id: str
```

- *Type:* str

The connection manager entity GUID used by query workers for reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#query_connection_id FederatedLogsSetup#query_connection_id}

---

### FederatedLogsSetupStorageCloudProviderConfiguration <a name="FederatedLogsSetupStorageCloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration(
  provider: str,
  region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.provider">provider</a></code> | <code>str</code> | The cloud provider. Currently only AWS is supported. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.region">region</a></code> | <code>str</code> | The cloud provider region. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.provider"></a>

```python
provider: str
```

- *Type:* str

The cloud provider. Currently only AWS is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#provider FederatedLogsSetup#provider}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

The cloud provider region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#region FederatedLogsSetup#region}

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference <a name="FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupDefaultPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---


### FederatedLogsSetupDefaultPartitionOutputReference <a name="FederatedLogsSetupDefaultPartitionOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy">put_data_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resetDataRetentionPolicy">reset_data_retention_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_retention_policy` <a name="put_data_retention_policy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy"></a>

```python
def put_data_retention_policy(
  duration: typing.Union[int, float],
  unit: str
) -> None
```

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy.parameter.duration"></a>

- *Type:* typing.Union[int, float]

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#duration FederatedLogsSetup#duration}

---

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy.parameter.unit"></a>

- *Type:* str

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#unit FederatedLogsSetup#unit}

---

##### `put_storage` <a name="put_storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage"></a>

```python
def put_storage(
  data_location_uri: str,
  table: str
) -> None
```

###### `data_location_uri`<sup>Required</sup> <a name="data_location_uri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage.parameter.dataLocationUri"></a>

- *Type:* str

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#data_location_uri FederatedLogsSetup#data_location_uri}

---

###### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage.parameter.table"></a>

- *Type:* str

The table name associated with the default partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#table FederatedLogsSetup#table}

---

##### `reset_data_retention_policy` <a name="reset_data_retention_policy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resetDataRetentionPolicy"></a>

```python
def reset_data_retention_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicy">data_retention_policy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference">FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference">FederatedLogsSetupDefaultPartitionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicyInput">data_retention_policy_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storageInput">storage_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_retention_policy`<sup>Required</sup> <a name="data_retention_policy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicy"></a>

```python
data_retention_policy: FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference">FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storage"></a>

```python
storage: FederatedLogsSetupDefaultPartitionStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference">FederatedLogsSetupDefaultPartitionStorageOutputReference</a>

---

##### `data_retention_policy_input`<sup>Optional</sup> <a name="data_retention_policy_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicyInput"></a>

```python
data_retention_policy_input: FederatedLogsSetupDefaultPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storageInput"></a>

```python
storage_input: FederatedLogsSetupDefaultPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupDefaultPartition
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---


### FederatedLogsSetupDefaultPartitionStorageOutputReference <a name="FederatedLogsSetupDefaultPartitionStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUriInput">data_location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUri">data_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.table">table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_location_uri_input`<sup>Optional</sup> <a name="data_location_uri_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUriInput"></a>

```python
data_location_uri_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `data_location_uri`<sup>Required</sup> <a name="data_location_uri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUri"></a>

```python
data_location_uri: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.table"></a>

```python
table: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupDefaultPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---


### FederatedLogsSetupForwarderOutputReference <a name="FederatedLogsSetupForwarderOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupForwarderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl">put_pipeline_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resetPipelineControl">reset_pipeline_control</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pipeline_control` <a name="put_pipeline_control" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl"></a>

```python
def put_pipeline_control(
  fleet_id: str,
  routing_rule: FederatedLogsSetupForwarderPipelineControlRoutingRule = None
) -> None
```

###### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl.parameter.fleetId"></a>

- *Type:* str

The fleet entity GUID used for deploying the pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#fleet_id FederatedLogsSetup#fleet_id}

---

###### `routing_rule`<sup>Optional</sup> <a name="routing_rule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl.parameter.routingRule"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#routing_rule FederatedLogsSetup#routing_rule}

---

##### `reset_pipeline_control` <a name="reset_pipeline_control" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resetPipelineControl"></a>

```python
def reset_pipeline_control() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControl">pipeline_control</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference">FederatedLogsSetupForwarderPipelineControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControlInput">pipeline_control_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_control`<sup>Required</sup> <a name="pipeline_control" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControl"></a>

```python
pipeline_control: FederatedLogsSetupForwarderPipelineControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference">FederatedLogsSetupForwarderPipelineControlOutputReference</a>

---

##### `pipeline_control_input`<sup>Optional</sup> <a name="pipeline_control_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControlInput"></a>

```python
pipeline_control_input: FederatedLogsSetupForwarderPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupForwarder
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---


### FederatedLogsSetupForwarderPipelineControlOutputReference <a name="FederatedLogsSetupForwarderPipelineControlOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule">put_routing_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resetRoutingRule">reset_routing_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_routing_rule` <a name="put_routing_rule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule"></a>

```python
def put_routing_rule(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule.parameter.expression"></a>

- *Type:* str

OTTL expression for routing logs to this setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#expression FederatedLogsSetup#expression}

---

##### `reset_routing_rule` <a name="reset_routing_rule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resetRoutingRule"></a>

```python
def reset_routing_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRule">routing_rule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference">FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRuleInput">routing_rule_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `routing_rule`<sup>Required</sup> <a name="routing_rule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRule"></a>

```python
routing_rule: FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference">FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference</a>

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `routing_rule_input`<sup>Optional</sup> <a name="routing_rule_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRuleInput"></a>

```python
routing_rule_input: FederatedLogsSetupForwarderPipelineControlRoutingRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupForwarderPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---


### FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference <a name="FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupForwarderPipelineControlRoutingRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---


### FederatedLogsSetupHealthCheckEnd2EndDataFlowList <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlowList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow">FederatedLogsSetupHealthCheckEnd2EndDataFlow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupHealthCheckEnd2EndDataFlow
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow">FederatedLogsSetupHealthCheckEnd2EndDataFlow</a>

---


### FederatedLogsSetupHealthCheckList <a name="FederatedLogsSetupHealthCheckList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupHealthCheckList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FederatedLogsSetupHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FederatedLogsSetupHealthCheckOutputReference <a name="FederatedLogsSetupHealthCheckOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.end2EndDataFlow">end2_end_data_flow</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList">FederatedLogsSetupHealthCheckEnd2EndDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.queryConnection">query_connection</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList">FederatedLogsSetupHealthCheckQueryConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck">FederatedLogsSetupHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end2_end_data_flow`<sup>Required</sup> <a name="end2_end_data_flow" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.end2EndDataFlow"></a>

```python
end2_end_data_flow: FederatedLogsSetupHealthCheckEnd2EndDataFlowList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList">FederatedLogsSetupHealthCheckEnd2EndDataFlowList</a>

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `query_connection`<sup>Required</sup> <a name="query_connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.queryConnection"></a>

```python
query_connection: FederatedLogsSetupHealthCheckQueryConnectionList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList">FederatedLogsSetupHealthCheckQueryConnectionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupHealthCheck
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck">FederatedLogsSetupHealthCheck</a>

---


### FederatedLogsSetupHealthCheckQueryConnectionList <a name="FederatedLogsSetupHealthCheckQueryConnectionList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FederatedLogsSetupHealthCheckQueryConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FederatedLogsSetupHealthCheckQueryConnectionOutputReference <a name="FederatedLogsSetupHealthCheckQueryConnectionOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection">FederatedLogsSetupHealthCheckQueryConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupHealthCheckQueryConnection
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection">FederatedLogsSetupHealthCheckQueryConnection</a>

---


### FederatedLogsSetupLifecycleStatusList <a name="FederatedLogsSetupLifecycleStatusList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupLifecycleStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FederatedLogsSetupLifecycleStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FederatedLogsSetupLifecycleStatusOutputReference <a name="FederatedLogsSetupLifecycleStatusOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus">FederatedLogsSetupLifecycleStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupLifecycleStatus
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus">FederatedLogsSetupLifecycleStatus</a>

---


### FederatedLogsSetupStorageCloudProviderConfigurationOutputReference <a name="FederatedLogsSetupStorageCloudProviderConfigurationOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupStorageCloudProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---


### FederatedLogsSetupStorageOutputReference <a name="FederatedLogsSetupStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import federated_logs_setup

federatedLogsSetup.FederatedLogsSetupStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration">put_cloud_provider_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_provider_configuration` <a name="put_cloud_provider_configuration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration"></a>

```python
def put_cloud_provider_configuration(
  provider: str,
  region: str
) -> None
```

###### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration.parameter.provider"></a>

- *Type:* str

The cloud provider. Currently only AWS is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#provider FederatedLogsSetup#provider}

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration.parameter.region"></a>

- *Type:* str

The cloud provider region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/resources/federated_logs_setup#region FederatedLogsSetup#region}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfiguration">cloud_provider_configuration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference">FederatedLogsSetupStorageCloudProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfigurationInput">cloud_provider_configuration_input</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionIdInput">data_ingest_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucketInput">data_location_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionIdInput">query_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionId">data_ingest_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucket">data_location_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionId">query_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_provider_configuration`<sup>Required</sup> <a name="cloud_provider_configuration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfiguration"></a>

```python
cloud_provider_configuration: FederatedLogsSetupStorageCloudProviderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference">FederatedLogsSetupStorageCloudProviderConfigurationOutputReference</a>

---

##### `cloud_provider_configuration_input`<sup>Optional</sup> <a name="cloud_provider_configuration_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfigurationInput"></a>

```python
cloud_provider_configuration_input: FederatedLogsSetupStorageCloudProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `data_ingest_connection_id_input`<sup>Optional</sup> <a name="data_ingest_connection_id_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionIdInput"></a>

```python
data_ingest_connection_id_input: str
```

- *Type:* str

---

##### `data_location_bucket_input`<sup>Optional</sup> <a name="data_location_bucket_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucketInput"></a>

```python
data_location_bucket_input: str
```

- *Type:* str

---

##### `query_connection_id_input`<sup>Optional</sup> <a name="query_connection_id_input" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionIdInput"></a>

```python
query_connection_id_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `data_ingest_connection_id`<sup>Required</sup> <a name="data_ingest_connection_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionId"></a>

```python
data_ingest_connection_id: str
```

- *Type:* str

---

##### `data_location_bucket`<sup>Required</sup> <a name="data_location_bucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucket"></a>

```python
data_location_bucket: str
```

- *Type:* str

---

##### `query_connection_id`<sup>Required</sup> <a name="query_connection_id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionId"></a>

```python
query_connection_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.internalValue"></a>

```python
internal_value: FederatedLogsSetupStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---



