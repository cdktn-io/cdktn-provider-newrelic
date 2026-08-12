# `fleetConfiguration` Submodule <a name="`fleetConfiguration` Submodule" id="@cdktn/provider-newrelic.fleetConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetConfiguration <a name="FleetConfiguration" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration newrelic_fleet_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer"></a>

```python
from cdktn_provider_newrelic import fleet_configuration

fleetConfiguration.FleetConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_type: str,
  configuration_content: str,
  managed_entity_type: str,
  name: str,
  id: str = None,
  operating_system: str = None,
  organization_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.agentType">agent_type</a></code> | <code>str</code> | The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.configurationContent">configuration_content</a></code> | <code>str</code> | The configuration content (YAML or JSON). |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.managedEntityType">managed_entity_type</a></code> | <code>str</code> | The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the configuration. Changing this forces resource recreation because the API does not support renaming. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#id FleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.operatingSystem">operating_system</a></code> | <code>str</code> | The operating system this configuration targets. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | The organization ID. Auto-fetched from the account if not provided. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_type`<sup>Required</sup> <a name="agent_type" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.agentType"></a>

- *Type:* str

The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#agent_type FleetConfiguration#agent_type}

---

##### `configuration_content`<sup>Required</sup> <a name="configuration_content" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.configurationContent"></a>

- *Type:* str

The configuration content (YAML or JSON).

Use file() to load from a file. Each change to this field creates a new immutable version on the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#configuration_content FleetConfiguration#configuration_content}

---

##### `managed_entity_type`<sup>Required</sup> <a name="managed_entity_type" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.managedEntityType"></a>

- *Type:* str

The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#managed_entity_type FleetConfiguration#managed_entity_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.name"></a>

- *Type:* str

The name of the configuration. Changing this forces resource recreation because the API does not support renaming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#name FleetConfiguration#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#id FleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operating_system`<sup>Optional</sup> <a name="operating_system" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.operatingSystem"></a>

- *Type:* str

The operating system this configuration targets.

Required for HOST configurations. Allowed values: LINUX, WINDOWS. Must not be set for KUBERNETESCLUSTER configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#operating_system FleetConfiguration#operating_system}

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.organizationId"></a>

- *Type:* str

The organization ID. Auto-fetched from the account if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#organization_id FleetConfiguration#organization_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOperatingSystem">reset_operating_system</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOrganizationId">reset_organization_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_operating_system` <a name="reset_operating_system" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOperatingSystem"></a>

```python
def reset_operating_system() -> None
```

##### `reset_organization_id` <a name="reset_organization_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOrganizationId"></a>

```python
def reset_organization_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FleetConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct"></a>

```python
from cdktn_provider_newrelic import fleet_configuration

fleetConfiguration.FleetConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import fleet_configuration

fleetConfiguration.FleetConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import fleet_configuration

fleetConfiguration.FleetConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import fleet_configuration

fleetConfiguration.FleetConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FleetConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FleetConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FleetConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FleetConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionEntityId">latest_version_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.totalVersions">total_versions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.versionEntityIds">version_entity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentTypeInput">agent_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationContentInput">configuration_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityTypeInput">managed_entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystemInput">operating_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentType">agent_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationContent">configuration_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityType">managed_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `latest_version_entity_id`<sup>Required</sup> <a name="latest_version_entity_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionEntityId"></a>

```python
latest_version_entity_id: str
```

- *Type:* str

---

##### `latest_version_number`<sup>Required</sup> <a name="latest_version_number" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionNumber"></a>

```python
latest_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_versions`<sup>Required</sup> <a name="total_versions" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.totalVersions"></a>

```python
total_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_entity_ids`<sup>Required</sup> <a name="version_entity_ids" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.versionEntityIds"></a>

```python
version_entity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `agent_type_input`<sup>Optional</sup> <a name="agent_type_input" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentTypeInput"></a>

```python
agent_type_input: str
```

- *Type:* str

---

##### `configuration_content_input`<sup>Optional</sup> <a name="configuration_content_input" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationContentInput"></a>

```python
configuration_content_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_entity_type_input`<sup>Optional</sup> <a name="managed_entity_type_input" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityTypeInput"></a>

```python
managed_entity_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operating_system_input`<sup>Optional</sup> <a name="operating_system_input" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystemInput"></a>

```python
operating_system_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `agent_type`<sup>Required</sup> <a name="agent_type" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentType"></a>

```python
agent_type: str
```

- *Type:* str

---

##### `configuration_content`<sup>Required</sup> <a name="configuration_content" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationContent"></a>

```python
configuration_content: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_entity_type`<sup>Required</sup> <a name="managed_entity_type" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityType"></a>

```python
managed_entity_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FleetConfigurationConfig <a name="FleetConfigurationConfig" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import fleet_configuration

fleetConfiguration.FleetConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_type: str,
  configuration_content: str,
  managed_entity_type: str,
  name: str,
  id: str = None,
  operating_system: str = None,
  organization_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.agentType">agent_type</a></code> | <code>str</code> | The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.configurationContent">configuration_content</a></code> | <code>str</code> | The configuration content (YAML or JSON). |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.managedEntityType">managed_entity_type</a></code> | <code>str</code> | The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.name">name</a></code> | <code>str</code> | The name of the configuration. Changing this forces resource recreation because the API does not support renaming. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#id FleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.operatingSystem">operating_system</a></code> | <code>str</code> | The operating system this configuration targets. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.organizationId">organization_id</a></code> | <code>str</code> | The organization ID. Auto-fetched from the account if not provided. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_type`<sup>Required</sup> <a name="agent_type" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.agentType"></a>

```python
agent_type: str
```

- *Type:* str

The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#agent_type FleetConfiguration#agent_type}

---

##### `configuration_content`<sup>Required</sup> <a name="configuration_content" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.configurationContent"></a>

```python
configuration_content: str
```

- *Type:* str

The configuration content (YAML or JSON).

Use file() to load from a file. Each change to this field creates a new immutable version on the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#configuration_content FleetConfiguration#configuration_content}

---

##### `managed_entity_type`<sup>Required</sup> <a name="managed_entity_type" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.managedEntityType"></a>

```python
managed_entity_type: str
```

- *Type:* str

The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#managed_entity_type FleetConfiguration#managed_entity_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the configuration. Changing this forces resource recreation because the API does not support renaming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#name FleetConfiguration#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#id FleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operating_system`<sup>Optional</sup> <a name="operating_system" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

The operating system this configuration targets.

Required for HOST configurations. Allowed values: LINUX, WINDOWS. Must not be set for KUBERNETESCLUSTER configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#operating_system FleetConfiguration#operating_system}

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

The organization ID. Auto-fetched from the account if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/fleet_configuration#organization_id FleetConfiguration#organization_id}

---



