# `pathpointFlow` Submodule <a name="`pathpointFlow` Submodule" id="@cdktn/provider-newrelic.pathpointFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PathpointFlow <a name="PathpointFlow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow newrelic_pathpoint_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlow(
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
  account_id: typing.Union[int, float] = None,
  category: str = None,
  description: str = None,
  health_rollup: str = None,
  id: str = None,
  kpis: IResolvable | typing.List[PathpointFlowKpis] = None,
  refresh_interval: str = None,
  stages: IResolvable | typing.List[PathpointFlowStages] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.name">name</a></code> | <code>str</code> | Display name of the Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID that owns this Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.category">category</a></code> | <code>str</code> | Optional category used to group flows (e.g. Marketing, Checkout). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional description of the flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.healthRollup">health_rollup</a></code> | <code>str</code> | Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#id PathpointFlow#id}. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.kpis">kpis</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>]</code> | kpis block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.refreshInterval">refresh_interval</a></code> | <code>str</code> | How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.stages">stages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>]</code> | stages block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.name"></a>

- *Type:* str

Display name of the Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID that owns this Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.category"></a>

- *Type:* str

Optional category used to group flows (e.g. Marketing, Checkout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.description"></a>

- *Type:* str

Optional description of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

##### `health_rollup`<sup>Optional</sup> <a name="health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.healthRollup"></a>

- *Type:* str

Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#id PathpointFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpis`<sup>Optional</sup> <a name="kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.kpis"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>]

kpis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#kpis PathpointFlow#kpis}

---

##### `refresh_interval`<sup>Optional</sup> <a name="refresh_interval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.refreshInterval"></a>

- *Type:* str

How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#refresh_interval PathpointFlow#refresh_interval}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.stages"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#stages PathpointFlow#stages}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis">put_kpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages">put_stages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetHealthRollup">reset_health_rollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetKpis">reset_kpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetRefreshInterval">reset_refresh_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetStages">reset_stages</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_kpis` <a name="put_kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis"></a>

```python
def put_kpis(
  value: IResolvable | typing.List[PathpointFlowKpis]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>]

---

##### `put_stages` <a name="put_stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages"></a>

```python
def put_stages(
  value: IResolvable | typing.List[PathpointFlowStages]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_category` <a name="reset_category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_health_rollup` <a name="reset_health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetHealthRollup"></a>

```python
def reset_health_rollup() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kpis` <a name="reset_kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetKpis"></a>

```python
def reset_kpis() -> None
```

##### `reset_refresh_interval` <a name="reset_refresh_interval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetRefreshInterval"></a>

```python
def reset_refresh_interval() -> None
```

##### `reset_stages` <a name="reset_stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetStages"></a>

```python
def reset_stages() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PathpointFlow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PathpointFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PathpointFlow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PathpointFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PathpointFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpis">kpis</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList">PathpointFlowKpisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList">PathpointFlowStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollupInput">health_rollup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpisInput">kpis_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshIntervalInput">refresh_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stagesInput">stages_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollup">health_rollup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `kpis`<sup>Required</sup> <a name="kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpis"></a>

```python
kpis: PathpointFlowKpisList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList">PathpointFlowKpisList</a>

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stages"></a>

```python
stages: PathpointFlowStagesList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList">PathpointFlowStagesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `health_rollup_input`<sup>Optional</sup> <a name="health_rollup_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollupInput"></a>

```python
health_rollup_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kpis_input`<sup>Optional</sup> <a name="kpis_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpisInput"></a>

```python
kpis_input: IResolvable | typing.List[PathpointFlowKpis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `refresh_interval_input`<sup>Optional</sup> <a name="refresh_interval_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshIntervalInput"></a>

```python
refresh_interval_input: str
```

- *Type:* str

---

##### `stages_input`<sup>Optional</sup> <a name="stages_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stagesInput"></a>

```python
stages_input: IResolvable | typing.List[PathpointFlowStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `health_rollup`<sup>Required</sup> <a name="health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollup"></a>

```python
health_rollup: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PathpointFlowConfig <a name="PathpointFlowConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  account_id: typing.Union[int, float] = None,
  category: str = None,
  description: str = None,
  health_rollup: str = None,
  id: str = None,
  kpis: IResolvable | typing.List[PathpointFlowKpis] = None,
  refresh_interval: str = None,
  stages: IResolvable | typing.List[PathpointFlowStages] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.name">name</a></code> | <code>str</code> | Display name of the Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID that owns this Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.category">category</a></code> | <code>str</code> | Optional category used to group flows (e.g. Marketing, Checkout). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.description">description</a></code> | <code>str</code> | Optional description of the flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.healthRollup">health_rollup</a></code> | <code>str</code> | Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#id PathpointFlow#id}. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.kpis">kpis</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>]</code> | kpis block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.stages">stages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>]</code> | stages block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Display name of the Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID that owns this Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Optional category used to group flows (e.g. Marketing, Checkout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

##### `health_rollup`<sup>Optional</sup> <a name="health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.healthRollup"></a>

```python
health_rollup: str
```

- *Type:* str

Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#id PathpointFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpis`<sup>Optional</sup> <a name="kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.kpis"></a>

```python
kpis: IResolvable | typing.List[PathpointFlowKpis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>]

kpis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#kpis PathpointFlow#kpis}

---

##### `refresh_interval`<sup>Optional</sup> <a name="refresh_interval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#refresh_interval PathpointFlow#refresh_interval}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.stages"></a>

```python
stages: IResolvable | typing.List[PathpointFlowStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#stages PathpointFlow#stages}

---

### PathpointFlowKpis <a name="PathpointFlowKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpis(
  name: str,
  query: PathpointFlowKpisQuery,
  account_id: typing.Union[int, float] = None,
  category: str = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.name">name</a></code> | <code>str</code> | Display name of the KPI. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | Account ID this KPI belongs to. Defaults to the flow's account_id. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.category">category</a></code> | <code>str</code> | Optional category to group KPIs. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.description">description</a></code> | <code>str</code> | Optional description. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.name"></a>

```python
name: str
```

- *Type:* str

Display name of the KPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.query"></a>

```python
query: PathpointFlowKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Account ID this KPI belongs to. Defaults to the flow's account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.category"></a>

```python
category: str
```

- *Type:* str

Optional category to group KPIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

### PathpointFlowKpisQuery <a name="PathpointFlowKpisQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpisQuery(
  from: str,
  select: PathpointFlowKpisQuerySelect,
  time_window: PathpointFlowKpisQueryTimeWindow = None,
  where: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.from">from</a></code> | <code>str</code> | Data source to query from (e.g., Transaction, Metric, Log). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | select block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.timeWindow">time_window</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.where">where</a></code> | <code>str</code> | Optional WHERE clause to filter data. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.from"></a>

```python
from: str
```

- *Type:* str

Data source to query from (e.g., Transaction, Metric, Log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#from PathpointFlow#from}

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.select"></a>

```python
select: PathpointFlowKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#select PathpointFlow#select}

---

##### `time_window`<sup>Optional</sup> <a name="time_window" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.timeWindow"></a>

```python
time_window: PathpointFlowKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.where"></a>

```python
where: str
```

- *Type:* str

Optional WHERE clause to filter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#where PathpointFlow#where}

---

### PathpointFlowKpisQuerySelect <a name="PathpointFlowKpisQuerySelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpisQuerySelect(
  aggregation_type: str,
  alias: str = None,
  attribute: str = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.aggregationType">aggregation_type</a></code> | <code>str</code> | Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.alias">alias</a></code> | <code>str</code> | Optional alias for the aggregated value. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.attribute">attribute</a></code> | <code>str</code> | Attribute name to aggregate. Required for all functions except COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Threshold used in the selected function. |

---

##### `aggregation_type`<sup>Required</sup> <a name="aggregation_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.aggregationType"></a>

```python
aggregation_type: str
```

- *Type:* str

Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.alias"></a>

```python
alias: str
```

- *Type:* str

Optional alias for the aggregated value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#alias PathpointFlow#alias}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Attribute name to aggregate. Required for all functions except COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Threshold used in the selected function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}

---

### PathpointFlowKpisQueryTimeWindow <a name="PathpointFlowKpisQueryTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpisQueryTimeWindow(
  custom_range: str = None,
  relative_range: PathpointFlowKpisQueryTimeWindowRelativeRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.customRange">custom_range</a></code> | <code>str</code> | Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.relativeRange">relative_range</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | relative_range block. |

---

##### `custom_range`<sup>Optional</sup> <a name="custom_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.customRange"></a>

```python
custom_range: str
```

- *Type:* str

Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}

---

##### `relative_range`<sup>Optional</sup> <a name="relative_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.relativeRange"></a>

```python
relative_range: PathpointFlowKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

relative_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}

---

### PathpointFlowKpisQueryTimeWindowRelativeRange <a name="PathpointFlowKpisQueryTimeWindowRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange(
  since: str,
  compare_against: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.since">since</a></code> | <code>str</code> | How far back the KPI is evaluated. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.compareAgainst">compare_against</a></code> | <code>str</code> | The earlier window to compare against. |

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.since"></a>

```python
since: str
```

- *Type:* str

How far back the KPI is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#since PathpointFlow#since}

---

##### `compare_against`<sup>Optional</sup> <a name="compare_against" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.compareAgainst"></a>

```python
compare_against: str
```

- *Type:* str

The earlier window to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}

---

### PathpointFlowStages <a name="PathpointFlowStages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStages(
  name: str,
  health_rollup: str = None,
  is_excluded: bool | IResolvable = None,
  levels: IResolvable | typing.List[PathpointFlowStagesLevels] = None,
  link: str = None,
  related: PathpointFlowStagesRelated = None,
  stage_kpis: IResolvable | typing.List[PathpointFlowStagesStageKpis] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.name">name</a></code> | <code>str</code> | Display name of the stage. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.healthRollup">health_rollup</a></code> | <code>str</code> | Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.isExcluded">is_excluded</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, this stage is excluded from flow health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.levels">levels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>]</code> | levels block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.link">link</a></code> | <code>str</code> | Optional URL to an external resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.related">related</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | related block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.stageKpis">stage_kpis</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>]</code> | stage_kpis block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.name"></a>

```python
name: str
```

- *Type:* str

Display name of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `health_rollup`<sup>Optional</sup> <a name="health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.healthRollup"></a>

```python
health_rollup: str
```

- *Type:* str

Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `is_excluded`<sup>Optional</sup> <a name="is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.isExcluded"></a>

```python
is_excluded: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, this stage is excluded from flow health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `levels`<sup>Optional</sup> <a name="levels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.levels"></a>

```python
levels: IResolvable | typing.List[PathpointFlowStagesLevels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>]

levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#levels PathpointFlow#levels}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.link"></a>

```python
link: str
```

- *Type:* str

Optional URL to an external resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#link PathpointFlow#link}

---

##### `related`<sup>Optional</sup> <a name="related" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.related"></a>

```python
related: PathpointFlowStagesRelated
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

related block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#related PathpointFlow#related}

---

##### `stage_kpis`<sup>Optional</sup> <a name="stage_kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.stageKpis"></a>

```python
stage_kpis: IResolvable | typing.List[PathpointFlowStagesStageKpis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>]

stage_kpis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#stage_kpis PathpointFlow#stage_kpis}

---

### PathpointFlowStagesLevels <a name="PathpointFlowStagesLevels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevels(
  steps: IResolvable | typing.List[PathpointFlowStagesLevelsSteps] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.property.steps">steps</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>]</code> | steps block. |

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.property.steps"></a>

```python
steps: IResolvable | typing.List[PathpointFlowStagesLevelsSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#steps PathpointFlow#steps}

---

### PathpointFlowStagesLevelsSteps <a name="PathpointFlowStagesLevelsSteps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsSteps(
  name: str,
  config: PathpointFlowStagesLevelsStepsConfig = None,
  entity_search_query: PathpointFlowStagesLevelsStepsEntitySearchQuery = None,
  is_excluded: bool | IResolvable = None,
  link: str = None,
  scoped_accounts: typing.List[typing.Union[int, float]] = None,
  signals: IResolvable | typing.List[PathpointFlowStagesLevelsStepsSignals] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.name">name</a></code> | <code>str</code> | Display name of the step. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.entitySearchQuery">entity_search_query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | entity_search_query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.isExcluded">is_excluded</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, this step is excluded from level health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.link">link</a></code> | <code>str</code> | Optional URL to an external resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.scopedAccounts">scoped_accounts</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Account IDs whose data is scoped to this step. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.signals">signals</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>]</code> | signals block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.name"></a>

```python
name: str
```

- *Type:* str

Display name of the step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.config"></a>

```python
config: PathpointFlowStagesLevelsStepsConfig
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#config PathpointFlow#config}

---

##### `entity_search_query`<sup>Optional</sup> <a name="entity_search_query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.entitySearchQuery"></a>

```python
entity_search_query: PathpointFlowStagesLevelsStepsEntitySearchQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

entity_search_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#entity_search_query PathpointFlow#entity_search_query}

---

##### `is_excluded`<sup>Optional</sup> <a name="is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.isExcluded"></a>

```python
is_excluded: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, this step is excluded from level health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.link"></a>

```python
link: str
```

- *Type:* str

Optional URL to an external resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#link PathpointFlow#link}

---

##### `scoped_accounts`<sup>Optional</sup> <a name="scoped_accounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.scopedAccounts"></a>

```python
scoped_accounts: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Account IDs whose data is scoped to this step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#scoped_accounts PathpointFlow#scoped_accounts}

---

##### `signals`<sup>Optional</sup> <a name="signals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.signals"></a>

```python
signals: IResolvable | typing.List[PathpointFlowStagesLevelsStepsSignals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>]

signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#signals PathpointFlow#signals}

---

### PathpointFlowStagesLevelsStepsConfig <a name="PathpointFlowStagesLevelsStepsConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsStepsConfig(
  health_rollup: str = None,
  threshold_type: str = None,
  threshold_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.healthRollup">health_rollup</a></code> | <code>str</code> | How step health is rolled up: BEST_STATUS_WINS or WORST_STATUS_WINS. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdType">threshold_type</a></code> | <code>str</code> | Whether threshold is FIXED or PERCENTAGE. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdValue">threshold_value</a></code> | <code>typing.Union[int, float]</code> | Numeric threshold value for step health evaluation. |

---

##### `health_rollup`<sup>Optional</sup> <a name="health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.healthRollup"></a>

```python
health_rollup: str
```

- *Type:* str

How step health is rolled up: BEST_STATUS_WINS or WORST_STATUS_WINS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `threshold_type`<sup>Optional</sup> <a name="threshold_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

Whether threshold is FIXED or PERCENTAGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold_type PathpointFlow#threshold_type}

---

##### `threshold_value`<sup>Optional</sup> <a name="threshold_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdValue"></a>

```python
threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Numeric threshold value for step health evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold_value PathpointFlow#threshold_value}

---

### PathpointFlowStagesLevelsStepsEntitySearchQuery <a name="PathpointFlowStagesLevelsStepsEntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery(
  query: str,
  is_excluded: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.query">query</a></code> | <code>str</code> | Filter query for signals, e.g. domain='NR1' AND type='APPLICATION'. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.isExcluded">is_excluded</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, this query is excluded from health calculation. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.query"></a>

```python
query: str
```

- *Type:* str

Filter query for signals, e.g. domain='NR1' AND type='APPLICATION'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `is_excluded`<sup>Optional</sup> <a name="is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.isExcluded"></a>

```python
is_excluded: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, this query is excluded from health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

### PathpointFlowStagesLevelsStepsSignals <a name="PathpointFlowStagesLevelsStepsSignals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsStepsSignals(
  guid: str,
  is_excluded: bool | IResolvable = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.guid">guid</a></code> | <code>str</code> | Entity GUID of the signal. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.isExcluded">is_excluded</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, this signal is excluded from step health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.name">name</a></code> | <code>str</code> | Display name of the signal. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.type">type</a></code> | <code>str</code> | Whether this GUID belongs to an entity or an alert condition: ENTITY or ALERT. |

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.guid"></a>

```python
guid: str
```

- *Type:* str

Entity GUID of the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#guid PathpointFlow#guid}

---

##### `is_excluded`<sup>Optional</sup> <a name="is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.isExcluded"></a>

```python
is_excluded: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, this signal is excluded from step health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.name"></a>

```python
name: str
```

- *Type:* str

Display name of the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.type"></a>

```python
type: str
```

- *Type:* str

Whether this GUID belongs to an entity or an alert condition: ENTITY or ALERT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#type PathpointFlow#type}

---

### PathpointFlowStagesRelated <a name="PathpointFlowStagesRelated" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesRelated(
  source: bool | IResolvable = None,
  target: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.source">source</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, this stage acts as a source to other stages. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.target">target</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, this stage acts as a target to other stages. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.source"></a>

```python
source: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, this stage acts as a source to other stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#source PathpointFlow#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.target"></a>

```python
target: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, this stage acts as a target to other stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#target PathpointFlow#target}

---

### PathpointFlowStagesStageKpis <a name="PathpointFlowStagesStageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpis(
  name: str,
  query: PathpointFlowStagesStageKpisQuery,
  account_id: typing.Union[int, float] = None,
  category: str = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.name">name</a></code> | <code>str</code> | Display name of the KPI. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | Account ID this KPI belongs to. Defaults to the flow's account_id. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.category">category</a></code> | <code>str</code> | Optional category to group KPIs. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.description">description</a></code> | <code>str</code> | Optional description. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.name"></a>

```python
name: str
```

- *Type:* str

Display name of the KPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.query"></a>

```python
query: PathpointFlowStagesStageKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Account ID this KPI belongs to. Defaults to the flow's account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.category"></a>

```python
category: str
```

- *Type:* str

Optional category to group KPIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

### PathpointFlowStagesStageKpisQuery <a name="PathpointFlowStagesStageKpisQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpisQuery(
  from: str,
  select: PathpointFlowStagesStageKpisQuerySelect,
  time_window: PathpointFlowStagesStageKpisQueryTimeWindow = None,
  where: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.from">from</a></code> | <code>str</code> | Data source to query from (e.g., Transaction, Metric, Log). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | select block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.timeWindow">time_window</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.where">where</a></code> | <code>str</code> | Optional WHERE clause to filter data. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.from"></a>

```python
from: str
```

- *Type:* str

Data source to query from (e.g., Transaction, Metric, Log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#from PathpointFlow#from}

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.select"></a>

```python
select: PathpointFlowStagesStageKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#select PathpointFlow#select}

---

##### `time_window`<sup>Optional</sup> <a name="time_window" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.timeWindow"></a>

```python
time_window: PathpointFlowStagesStageKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.where"></a>

```python
where: str
```

- *Type:* str

Optional WHERE clause to filter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#where PathpointFlow#where}

---

### PathpointFlowStagesStageKpisQuerySelect <a name="PathpointFlowStagesStageKpisQuerySelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpisQuerySelect(
  aggregation_type: str,
  alias: str = None,
  attribute: str = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.aggregationType">aggregation_type</a></code> | <code>str</code> | Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.alias">alias</a></code> | <code>str</code> | Optional alias for the aggregated value. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.attribute">attribute</a></code> | <code>str</code> | Attribute name to aggregate. Required for all functions except COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Threshold used in the selected function. |

---

##### `aggregation_type`<sup>Required</sup> <a name="aggregation_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.aggregationType"></a>

```python
aggregation_type: str
```

- *Type:* str

Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.alias"></a>

```python
alias: str
```

- *Type:* str

Optional alias for the aggregated value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#alias PathpointFlow#alias}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Attribute name to aggregate. Required for all functions except COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Threshold used in the selected function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}

---

### PathpointFlowStagesStageKpisQueryTimeWindow <a name="PathpointFlowStagesStageKpisQueryTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow(
  custom_range: str = None,
  relative_range: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.customRange">custom_range</a></code> | <code>str</code> | Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.relativeRange">relative_range</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | relative_range block. |

---

##### `custom_range`<sup>Optional</sup> <a name="custom_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.customRange"></a>

```python
custom_range: str
```

- *Type:* str

Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}

---

##### `relative_range`<sup>Optional</sup> <a name="relative_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.relativeRange"></a>

```python
relative_range: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

relative_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}

---

### PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange <a name="PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange(
  since: str,
  compare_against: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.since">since</a></code> | <code>str</code> | How far back the KPI is evaluated. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.compareAgainst">compare_against</a></code> | <code>str</code> | The earlier window to compare against. |

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.since"></a>

```python
since: str
```

- *Type:* str

How far back the KPI is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#since PathpointFlow#since}

---

##### `compare_against`<sup>Optional</sup> <a name="compare_against" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.compareAgainst"></a>

```python
compare_against: str
```

- *Type:* str

The earlier window to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}

---

## Classes <a name="Classes" id="Classes"></a>

### PathpointFlowKpisList <a name="PathpointFlowKpisList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PathpointFlowKpisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PathpointFlowKpis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>]

---


### PathpointFlowKpisOutputReference <a name="PathpointFlowKpisOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_query` <a name="put_query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery"></a>

```python
def put_query(
  from: str,
  select: PathpointFlowKpisQuerySelect,
  time_window: PathpointFlowKpisQueryTimeWindow = None,
  where: str = None
) -> None
```

###### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery.parameter.from"></a>

- *Type:* str

Data source to query from (e.g., Transaction, Metric, Log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#from PathpointFlow#from}

---

###### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery.parameter.select"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#select PathpointFlow#select}

---

###### `time_window`<sup>Optional</sup> <a name="time_window" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery.parameter.timeWindow"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}

---

###### `where`<sup>Optional</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery.parameter.where"></a>

- *Type:* str

Optional WHERE clause to filter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#where PathpointFlow#where}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_category` <a name="reset_category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.metricQuery">metric_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference">PathpointFlowKpisQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.queryInput">query_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_query`<sup>Required</sup> <a name="metric_query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.metricQuery"></a>

```python
metric_query: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.query"></a>

```python
query: PathpointFlowKpisQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference">PathpointFlowKpisQueryOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.queryInput"></a>

```python
query_input: PathpointFlowKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PathpointFlowKpis
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>

---


### PathpointFlowKpisQueryOutputReference <a name="PathpointFlowKpisQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpisQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect">put_select</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow">put_time_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetTimeWindow">reset_time_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetWhere">reset_where</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_select` <a name="put_select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect"></a>

```python
def put_select(
  aggregation_type: str,
  alias: str = None,
  attribute: str = None,
  threshold: typing.Union[int, float] = None
) -> None
```

###### `aggregation_type`<sup>Required</sup> <a name="aggregation_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect.parameter.aggregationType"></a>

- *Type:* str

Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}

---

###### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect.parameter.alias"></a>

- *Type:* str

Optional alias for the aggregated value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#alias PathpointFlow#alias}

---

###### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect.parameter.attribute"></a>

- *Type:* str

Attribute name to aggregate. Required for all functions except COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

Threshold used in the selected function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}

---

##### `put_time_window` <a name="put_time_window" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow"></a>

```python
def put_time_window(
  custom_range: str = None,
  relative_range: PathpointFlowKpisQueryTimeWindowRelativeRange = None
) -> None
```

###### `custom_range`<sup>Optional</sup> <a name="custom_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow.parameter.customRange"></a>

- *Type:* str

Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}

---

###### `relative_range`<sup>Optional</sup> <a name="relative_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow.parameter.relativeRange"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

relative_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}

---

##### `reset_time_window` <a name="reset_time_window" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetTimeWindow"></a>

```python
def reset_time_window() -> None
```

##### `reset_where` <a name="reset_where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetWhere"></a>

```python
def reset_where() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference">PathpointFlowKpisQuerySelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindow">time_window</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference">PathpointFlowKpisQueryTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.selectInput">select_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindowInput">time_window_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.whereInput">where_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.where">where</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.select"></a>

```python
select: PathpointFlowKpisQuerySelectOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference">PathpointFlowKpisQuerySelectOutputReference</a>

---

##### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindow"></a>

```python
time_window: PathpointFlowKpisQueryTimeWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference">PathpointFlowKpisQueryTimeWindowOutputReference</a>

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `select_input`<sup>Optional</sup> <a name="select_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.selectInput"></a>

```python
select_input: PathpointFlowKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---

##### `time_window_input`<sup>Optional</sup> <a name="time_window_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindowInput"></a>

```python
time_window_input: PathpointFlowKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---

##### `where_input`<sup>Optional</sup> <a name="where_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.whereInput"></a>

```python
where_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.where"></a>

```python
where: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---


### PathpointFlowKpisQuerySelectOutputReference <a name="PathpointFlowKpisQuerySelectOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpisQuerySelectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationTypeInput">aggregation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationType">aggregation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_type_input`<sup>Optional</sup> <a name="aggregation_type_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationTypeInput"></a>

```python
aggregation_type_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregation_type`<sup>Required</sup> <a name="aggregation_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationType"></a>

```python
aggregation_type: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---


### PathpointFlowKpisQueryTimeWindowOutputReference <a name="PathpointFlowKpisQueryTimeWindowOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange">put_relative_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetCustomRange">reset_custom_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetRelativeRange">reset_relative_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_relative_range` <a name="put_relative_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange"></a>

```python
def put_relative_range(
  since: str,
  compare_against: str = None
) -> None
```

###### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange.parameter.since"></a>

- *Type:* str

How far back the KPI is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#since PathpointFlow#since}

---

###### `compare_against`<sup>Optional</sup> <a name="compare_against" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange.parameter.compareAgainst"></a>

- *Type:* str

The earlier window to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}

---

##### `reset_custom_range` <a name="reset_custom_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetCustomRange"></a>

```python
def reset_custom_range() -> None
```

##### `reset_relative_range` <a name="reset_relative_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetRelativeRange"></a>

```python
def reset_relative_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRange">relative_range</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRangeInput">custom_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRangeInput">relative_range_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRange">custom_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `relative_range`<sup>Required</sup> <a name="relative_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRange"></a>

```python
relative_range: PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference</a>

---

##### `custom_range_input`<sup>Optional</sup> <a name="custom_range_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRangeInput"></a>

```python
custom_range_input: str
```

- *Type:* str

---

##### `relative_range_input`<sup>Optional</sup> <a name="relative_range_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRangeInput"></a>

```python
relative_range_input: PathpointFlowKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---

##### `custom_range`<sup>Required</sup> <a name="custom_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRange"></a>

```python
custom_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---


### PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference <a name="PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst">reset_compare_against</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compare_against` <a name="reset_compare_against" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst"></a>

```python
def reset_compare_against() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput">compare_against_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput">since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst">compare_against</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.since">since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compare_against_input`<sup>Optional</sup> <a name="compare_against_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput"></a>

```python
compare_against_input: str
```

- *Type:* str

---

##### `since_input`<sup>Optional</sup> <a name="since_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput"></a>

```python
since_input: str
```

- *Type:* str

---

##### `compare_against`<sup>Required</sup> <a name="compare_against" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst"></a>

```python
compare_against: str
```

- *Type:* str

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.since"></a>

```python
since: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---


### PathpointFlowStagesLevelsList <a name="PathpointFlowStagesLevelsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PathpointFlowStagesLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PathpointFlowStagesLevels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>]

---


### PathpointFlowStagesLevelsOutputReference <a name="PathpointFlowStagesLevelsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resetSteps">reset_steps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_steps` <a name="put_steps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps"></a>

```python
def put_steps(
  value: IResolvable | typing.List[PathpointFlowStagesLevelsSteps]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>]

---

##### `reset_steps` <a name="reset_steps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resetSteps"></a>

```python
def reset_steps() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList">PathpointFlowStagesLevelsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.stepsInput">steps_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.steps"></a>

```python
steps: PathpointFlowStagesLevelsStepsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList">PathpointFlowStagesLevelsStepsList</a>

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.stepsInput"></a>

```python
steps_input: IResolvable | typing.List[PathpointFlowStagesLevelsSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PathpointFlowStagesLevels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>

---


### PathpointFlowStagesLevelsStepsConfigOutputReference <a name="PathpointFlowStagesLevelsStepsConfigOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetHealthRollup">reset_health_rollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdType">reset_threshold_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdValue">reset_threshold_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_health_rollup` <a name="reset_health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetHealthRollup"></a>

```python
def reset_health_rollup() -> None
```

##### `reset_threshold_type` <a name="reset_threshold_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdType"></a>

```python
def reset_threshold_type() -> None
```

##### `reset_threshold_value` <a name="reset_threshold_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdValue"></a>

```python
def reset_threshold_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollupInput">health_rollup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdTypeInput">threshold_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValueInput">threshold_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollup">health_rollup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdType">threshold_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValue">threshold_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_rollup_input`<sup>Optional</sup> <a name="health_rollup_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollupInput"></a>

```python
health_rollup_input: str
```

- *Type:* str

---

##### `threshold_type_input`<sup>Optional</sup> <a name="threshold_type_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdTypeInput"></a>

```python
threshold_type_input: str
```

- *Type:* str

---

##### `threshold_value_input`<sup>Optional</sup> <a name="threshold_value_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValueInput"></a>

```python
threshold_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_rollup`<sup>Required</sup> <a name="health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollup"></a>

```python
health_rollup: str
```

- *Type:* str

---

##### `threshold_type`<sup>Required</sup> <a name="threshold_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

---

##### `threshold_value`<sup>Required</sup> <a name="threshold_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValue"></a>

```python
threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowStagesLevelsStepsConfig
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---


### PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference <a name="PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resetIsExcluded">reset_is_excluded</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_excluded` <a name="reset_is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resetIsExcluded"></a>

```python
def reset_is_excluded() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcludedInput">is_excluded_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcluded">is_excluded</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_excluded_input`<sup>Optional</sup> <a name="is_excluded_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcludedInput"></a>

```python
is_excluded_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `is_excluded`<sup>Required</sup> <a name="is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcluded"></a>

```python
is_excluded: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowStagesLevelsStepsEntitySearchQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---


### PathpointFlowStagesLevelsStepsList <a name="PathpointFlowStagesLevelsStepsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PathpointFlowStagesLevelsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PathpointFlowStagesLevelsSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>]

---


### PathpointFlowStagesLevelsStepsOutputReference <a name="PathpointFlowStagesLevelsStepsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery">put_entity_search_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals">put_signals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetEntitySearchQuery">reset_entity_search_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetIsExcluded">reset_is_excluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetLink">reset_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetScopedAccounts">reset_scoped_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetSignals">reset_signals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig"></a>

```python
def put_config(
  health_rollup: str = None,
  threshold_type: str = None,
  threshold_value: typing.Union[int, float] = None
) -> None
```

###### `health_rollup`<sup>Optional</sup> <a name="health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig.parameter.healthRollup"></a>

- *Type:* str

How step health is rolled up: BEST_STATUS_WINS or WORST_STATUS_WINS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

###### `threshold_type`<sup>Optional</sup> <a name="threshold_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig.parameter.thresholdType"></a>

- *Type:* str

Whether threshold is FIXED or PERCENTAGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold_type PathpointFlow#threshold_type}

---

###### `threshold_value`<sup>Optional</sup> <a name="threshold_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig.parameter.thresholdValue"></a>

- *Type:* typing.Union[int, float]

Numeric threshold value for step health evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold_value PathpointFlow#threshold_value}

---

##### `put_entity_search_query` <a name="put_entity_search_query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery"></a>

```python
def put_entity_search_query(
  query: str,
  is_excluded: bool | IResolvable = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery.parameter.query"></a>

- *Type:* str

Filter query for signals, e.g. domain='NR1' AND type='APPLICATION'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

###### `is_excluded`<sup>Optional</sup> <a name="is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery.parameter.isExcluded"></a>

- *Type:* bool | cdktn.IResolvable

When true, this query is excluded from health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `put_signals` <a name="put_signals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals"></a>

```python
def put_signals(
  value: IResolvable | typing.List[PathpointFlowStagesLevelsStepsSignals]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>]

---

##### `reset_config` <a name="reset_config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_entity_search_query` <a name="reset_entity_search_query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetEntitySearchQuery"></a>

```python
def reset_entity_search_query() -> None
```

##### `reset_is_excluded` <a name="reset_is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetIsExcluded"></a>

```python
def reset_is_excluded() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetLink"></a>

```python
def reset_link() -> None
```

##### `reset_scoped_accounts` <a name="reset_scoped_accounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetScopedAccounts"></a>

```python
def reset_scoped_accounts() -> None
```

##### `reset_signals` <a name="reset_signals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetSignals"></a>

```python
def reset_signals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference">PathpointFlowStagesLevelsStepsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQuery">entity_search_query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference">PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signals">signals</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList">PathpointFlowStagesLevelsStepsSignalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.configInput">config_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQueryInput">entity_search_query_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcludedInput">is_excluded_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccountsInput">scoped_accounts_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signalsInput">signals_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcluded">is_excluded</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccounts">scoped_accounts</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.config"></a>

```python
config: PathpointFlowStagesLevelsStepsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference">PathpointFlowStagesLevelsStepsConfigOutputReference</a>

---

##### `entity_search_query`<sup>Required</sup> <a name="entity_search_query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQuery"></a>

```python
entity_search_query: PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference">PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `signals`<sup>Required</sup> <a name="signals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signals"></a>

```python
signals: PathpointFlowStagesLevelsStepsSignalsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList">PathpointFlowStagesLevelsStepsSignalsList</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.configInput"></a>

```python
config_input: PathpointFlowStagesLevelsStepsConfig
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---

##### `entity_search_query_input`<sup>Optional</sup> <a name="entity_search_query_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQueryInput"></a>

```python
entity_search_query_input: PathpointFlowStagesLevelsStepsEntitySearchQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---

##### `is_excluded_input`<sup>Optional</sup> <a name="is_excluded_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcludedInput"></a>

```python
is_excluded_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scoped_accounts_input`<sup>Optional</sup> <a name="scoped_accounts_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccountsInput"></a>

```python
scoped_accounts_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `signals_input`<sup>Optional</sup> <a name="signals_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signalsInput"></a>

```python
signals_input: IResolvable | typing.List[PathpointFlowStagesLevelsStepsSignals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>]

---

##### `is_excluded`<sup>Required</sup> <a name="is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcluded"></a>

```python
is_excluded: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scoped_accounts`<sup>Required</sup> <a name="scoped_accounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccounts"></a>

```python
scoped_accounts: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PathpointFlowStagesLevelsSteps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>

---


### PathpointFlowStagesLevelsStepsSignalsList <a name="PathpointFlowStagesLevelsStepsSignalsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PathpointFlowStagesLevelsStepsSignalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PathpointFlowStagesLevelsStepsSignals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>]

---


### PathpointFlowStagesLevelsStepsSignalsOutputReference <a name="PathpointFlowStagesLevelsStepsSignalsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetIsExcluded">reset_is_excluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_excluded` <a name="reset_is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetIsExcluded"></a>

```python
def reset_is_excluded() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guidInput">guid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcludedInput">is_excluded_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcluded">is_excluded</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guid_input`<sup>Optional</sup> <a name="guid_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guidInput"></a>

```python
guid_input: str
```

- *Type:* str

---

##### `is_excluded_input`<sup>Optional</sup> <a name="is_excluded_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcludedInput"></a>

```python
is_excluded_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `is_excluded`<sup>Required</sup> <a name="is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcluded"></a>

```python
is_excluded: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PathpointFlowStagesLevelsStepsSignals
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>

---


### PathpointFlowStagesList <a name="PathpointFlowStagesList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PathpointFlowStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PathpointFlowStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>]

---


### PathpointFlowStagesOutputReference <a name="PathpointFlowStagesOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels">put_levels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated">put_related</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis">put_stage_kpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetHealthRollup">reset_health_rollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetIsExcluded">reset_is_excluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLevels">reset_levels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLink">reset_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetRelated">reset_related</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetStageKpis">reset_stage_kpis</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_levels` <a name="put_levels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels"></a>

```python
def put_levels(
  value: IResolvable | typing.List[PathpointFlowStagesLevels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>]

---

##### `put_related` <a name="put_related" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated"></a>

```python
def put_related(
  source: bool | IResolvable = None,
  target: bool | IResolvable = None
) -> None
```

###### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated.parameter.source"></a>

- *Type:* bool | cdktn.IResolvable

When true, this stage acts as a source to other stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#source PathpointFlow#source}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated.parameter.target"></a>

- *Type:* bool | cdktn.IResolvable

When true, this stage acts as a target to other stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#target PathpointFlow#target}

---

##### `put_stage_kpis` <a name="put_stage_kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis"></a>

```python
def put_stage_kpis(
  value: IResolvable | typing.List[PathpointFlowStagesStageKpis]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>]

---

##### `reset_health_rollup` <a name="reset_health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetHealthRollup"></a>

```python
def reset_health_rollup() -> None
```

##### `reset_is_excluded` <a name="reset_is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetIsExcluded"></a>

```python
def reset_is_excluded() -> None
```

##### `reset_levels` <a name="reset_levels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLevels"></a>

```python
def reset_levels() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLink"></a>

```python
def reset_link() -> None
```

##### `reset_related` <a name="reset_related" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetRelated"></a>

```python
def reset_related() -> None
```

##### `reset_stage_kpis` <a name="reset_stage_kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetStageKpis"></a>

```python
def reset_stage_kpis() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levels">levels</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList">PathpointFlowStagesLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.related">related</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference">PathpointFlowStagesRelatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpis">stage_kpis</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList">PathpointFlowStagesStageKpisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollupInput">health_rollup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcludedInput">is_excluded_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levelsInput">levels_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.relatedInput">related_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpisInput">stage_kpis_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollup">health_rollup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcluded">is_excluded</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `levels`<sup>Required</sup> <a name="levels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levels"></a>

```python
levels: PathpointFlowStagesLevelsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList">PathpointFlowStagesLevelsList</a>

---

##### `related`<sup>Required</sup> <a name="related" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.related"></a>

```python
related: PathpointFlowStagesRelatedOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference">PathpointFlowStagesRelatedOutputReference</a>

---

##### `stage_kpis`<sup>Required</sup> <a name="stage_kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpis"></a>

```python
stage_kpis: PathpointFlowStagesStageKpisList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList">PathpointFlowStagesStageKpisList</a>

---

##### `health_rollup_input`<sup>Optional</sup> <a name="health_rollup_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollupInput"></a>

```python
health_rollup_input: str
```

- *Type:* str

---

##### `is_excluded_input`<sup>Optional</sup> <a name="is_excluded_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcludedInput"></a>

```python
is_excluded_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `levels_input`<sup>Optional</sup> <a name="levels_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levelsInput"></a>

```python
levels_input: IResolvable | typing.List[PathpointFlowStagesLevels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>]

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `related_input`<sup>Optional</sup> <a name="related_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.relatedInput"></a>

```python
related_input: PathpointFlowStagesRelated
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---

##### `stage_kpis_input`<sup>Optional</sup> <a name="stage_kpis_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpisInput"></a>

```python
stage_kpis_input: IResolvable | typing.List[PathpointFlowStagesStageKpis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>]

---

##### `health_rollup`<sup>Required</sup> <a name="health_rollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollup"></a>

```python
health_rollup: str
```

- *Type:* str

---

##### `is_excluded`<sup>Required</sup> <a name="is_excluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcluded"></a>

```python
is_excluded: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PathpointFlowStages
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>

---


### PathpointFlowStagesRelatedOutputReference <a name="PathpointFlowStagesRelatedOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesRelatedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source` <a name="reset_source" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.sourceInput">source_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.targetInput">target_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.source">source</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.target">target</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.sourceInput"></a>

```python
source_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.targetInput"></a>

```python
target_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.source"></a>

```python
source: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.target"></a>

```python
target: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowStagesRelated
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---


### PathpointFlowStagesStageKpisList <a name="PathpointFlowStagesStageKpisList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PathpointFlowStagesStageKpisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PathpointFlowStagesStageKpis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>]

---


### PathpointFlowStagesStageKpisOutputReference <a name="PathpointFlowStagesStageKpisOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_query` <a name="put_query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery"></a>

```python
def put_query(
  from: str,
  select: PathpointFlowStagesStageKpisQuerySelect,
  time_window: PathpointFlowStagesStageKpisQueryTimeWindow = None,
  where: str = None
) -> None
```

###### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery.parameter.from"></a>

- *Type:* str

Data source to query from (e.g., Transaction, Metric, Log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#from PathpointFlow#from}

---

###### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery.parameter.select"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#select PathpointFlow#select}

---

###### `time_window`<sup>Optional</sup> <a name="time_window" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery.parameter.timeWindow"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}

---

###### `where`<sup>Optional</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery.parameter.where"></a>

- *Type:* str

Optional WHERE clause to filter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#where PathpointFlow#where}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_category` <a name="reset_category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.metricQuery">metric_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference">PathpointFlowStagesStageKpisQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.queryInput">query_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_query`<sup>Required</sup> <a name="metric_query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.metricQuery"></a>

```python
metric_query: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.query"></a>

```python
query: PathpointFlowStagesStageKpisQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference">PathpointFlowStagesStageKpisQueryOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.queryInput"></a>

```python
query_input: PathpointFlowStagesStageKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PathpointFlowStagesStageKpis
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>

---


### PathpointFlowStagesStageKpisQueryOutputReference <a name="PathpointFlowStagesStageKpisQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect">put_select</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow">put_time_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetTimeWindow">reset_time_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetWhere">reset_where</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_select` <a name="put_select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect"></a>

```python
def put_select(
  aggregation_type: str,
  alias: str = None,
  attribute: str = None,
  threshold: typing.Union[int, float] = None
) -> None
```

###### `aggregation_type`<sup>Required</sup> <a name="aggregation_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect.parameter.aggregationType"></a>

- *Type:* str

Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}

---

###### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect.parameter.alias"></a>

- *Type:* str

Optional alias for the aggregated value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#alias PathpointFlow#alias}

---

###### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect.parameter.attribute"></a>

- *Type:* str

Attribute name to aggregate. Required for all functions except COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

Threshold used in the selected function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}

---

##### `put_time_window` <a name="put_time_window" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow"></a>

```python
def put_time_window(
  custom_range: str = None,
  relative_range: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange = None
) -> None
```

###### `custom_range`<sup>Optional</sup> <a name="custom_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow.parameter.customRange"></a>

- *Type:* str

Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}

---

###### `relative_range`<sup>Optional</sup> <a name="relative_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow.parameter.relativeRange"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

relative_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}

---

##### `reset_time_window` <a name="reset_time_window" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetTimeWindow"></a>

```python
def reset_time_window() -> None
```

##### `reset_where` <a name="reset_where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetWhere"></a>

```python
def reset_where() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference">PathpointFlowStagesStageKpisQuerySelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindow">time_window</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.selectInput">select_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindowInput">time_window_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.whereInput">where_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.where">where</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.select"></a>

```python
select: PathpointFlowStagesStageKpisQuerySelectOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference">PathpointFlowStagesStageKpisQuerySelectOutputReference</a>

---

##### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindow"></a>

```python
time_window: PathpointFlowStagesStageKpisQueryTimeWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowOutputReference</a>

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `select_input`<sup>Optional</sup> <a name="select_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.selectInput"></a>

```python
select_input: PathpointFlowStagesStageKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---

##### `time_window_input`<sup>Optional</sup> <a name="time_window_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindowInput"></a>

```python
time_window_input: PathpointFlowStagesStageKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---

##### `where_input`<sup>Optional</sup> <a name="where_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.whereInput"></a>

```python
where_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.where"></a>

```python
where: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowStagesStageKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---


### PathpointFlowStagesStageKpisQuerySelectOutputReference <a name="PathpointFlowStagesStageKpisQuerySelectOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationTypeInput">aggregation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationType">aggregation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_type_input`<sup>Optional</sup> <a name="aggregation_type_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationTypeInput"></a>

```python
aggregation_type_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregation_type`<sup>Required</sup> <a name="aggregation_type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationType"></a>

```python
aggregation_type: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowStagesStageKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---


### PathpointFlowStagesStageKpisQueryTimeWindowOutputReference <a name="PathpointFlowStagesStageKpisQueryTimeWindowOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange">put_relative_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetCustomRange">reset_custom_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetRelativeRange">reset_relative_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_relative_range` <a name="put_relative_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange"></a>

```python
def put_relative_range(
  since: str,
  compare_against: str = None
) -> None
```

###### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange.parameter.since"></a>

- *Type:* str

How far back the KPI is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#since PathpointFlow#since}

---

###### `compare_against`<sup>Optional</sup> <a name="compare_against" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange.parameter.compareAgainst"></a>

- *Type:* str

The earlier window to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}

---

##### `reset_custom_range` <a name="reset_custom_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetCustomRange"></a>

```python
def reset_custom_range() -> None
```

##### `reset_relative_range` <a name="reset_relative_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetRelativeRange"></a>

```python
def reset_relative_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRange">relative_range</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRangeInput">custom_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRangeInput">relative_range_input</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRange">custom_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `relative_range`<sup>Required</sup> <a name="relative_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRange"></a>

```python
relative_range: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference</a>

---

##### `custom_range_input`<sup>Optional</sup> <a name="custom_range_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRangeInput"></a>

```python
custom_range_input: str
```

- *Type:* str

---

##### `relative_range_input`<sup>Optional</sup> <a name="relative_range_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRangeInput"></a>

```python
relative_range_input: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---

##### `custom_range`<sup>Required</sup> <a name="custom_range" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRange"></a>

```python
custom_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowStagesStageKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---


### PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference <a name="PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import pathpoint_flow

pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst">reset_compare_against</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compare_against` <a name="reset_compare_against" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst"></a>

```python
def reset_compare_against() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput">compare_against_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput">since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst">compare_against</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.since">since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compare_against_input`<sup>Optional</sup> <a name="compare_against_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput"></a>

```python
compare_against_input: str
```

- *Type:* str

---

##### `since_input`<sup>Optional</sup> <a name="since_input" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput"></a>

```python
since_input: str
```

- *Type:* str

---

##### `compare_against`<sup>Required</sup> <a name="compare_against" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst"></a>

```python
compare_against: str
```

- *Type:* str

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.since"></a>

```python
since: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue"></a>

```python
internal_value: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---



