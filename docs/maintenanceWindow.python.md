# `maintenanceWindow` Submodule <a name="`maintenanceWindow` Submodule" id="@cdktn/provider-newrelic.maintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceWindow <a name="MaintenanceWindow" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window newrelic_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer"></a>

```python
from cdktn_provider_newrelic import maintenance_window

maintenanceWindow.MaintenanceWindow(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  affected_entities: typing.List[str],
  affected_entity_type: str,
  duration: str,
  name: str,
  scope: MaintenanceWindowScope,
  start_time: str,
  timezone: str,
  description: str = None,
  id: str = None,
  rrule: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.affectedEntities">affected_entities</a></code> | <code>typing.List[str]</code> | The list of entity IDs affected by the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.affectedEntityType">affected_entity_type</a></code> | <code>str</code> | The type of the entities affected by the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.duration">duration</a></code> | <code>str</code> | The duration of the maintenance window, in ISO 8601 duration format (e.g. PT1H for one hour). Capped at 24 hours when `rrule` is set. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | The start time of the maintenance window, as an ISO 8601 date-time without a time zone (e.g. 2026-11-05T21:00:00). |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | The timezone in which the maintenance window is scheduled (e.g. America/Los_Angeles). |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.rrule">rrule</a></code> | <code>str</code> | The recurrence rule of the maintenance window, in RRULE format, for recurring maintenance windows. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `affected_entities`<sup>Required</sup> <a name="affected_entities" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.affectedEntities"></a>

- *Type:* typing.List[str]

The list of entity IDs affected by the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#affected_entities MaintenanceWindow#affected_entities}

---

##### `affected_entity_type`<sup>Required</sup> <a name="affected_entity_type" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.affectedEntityType"></a>

- *Type:* str

The type of the entities affected by the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#affected_entity_type MaintenanceWindow#affected_entity_type}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.duration"></a>

- *Type:* str

The duration of the maintenance window, in ISO 8601 duration format (e.g. PT1H for one hour). Capped at 24 hours when `rrule` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#duration MaintenanceWindow#duration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.name"></a>

- *Type:* str

The name of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#name MaintenanceWindow#name}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#scope MaintenanceWindow#scope}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.startTime"></a>

- *Type:* str

The start time of the maintenance window, as an ISO 8601 date-time without a time zone (e.g. 2026-11-05T21:00:00).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#start_time MaintenanceWindow#start_time}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.timezone"></a>

- *Type:* str

The timezone in which the maintenance window is scheduled (e.g. America/Los_Angeles).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#timezone MaintenanceWindow#timezone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.description"></a>

- *Type:* str

The description of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#description MaintenanceWindow#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.rrule"></a>

- *Type:* str

The recurrence rule of the maintenance window, in RRULE format, for recurring maintenance windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#rrule MaintenanceWindow#rrule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetRrule">reset_rrule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scope` <a name="put_scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.putScope"></a>

```python
def put_scope(
  id: str,
  type: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.putScope.parameter.id"></a>

- *Type:* str

The unique identifier of the object within the given scope (e.g. an account ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.putScope.parameter.type"></a>

- *Type:* str

The kind of scope `id` refers to. Valid values are `ACCOUNT` and `ORGANIZATION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#type MaintenanceWindow#type}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rrule` <a name="reset_rrule" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetRrule"></a>

```python
def reset_rrule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MaintenanceWindow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isConstruct"></a>

```python
from cdktn_provider_newrelic import maintenance_window

maintenanceWindow.MaintenanceWindow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import maintenance_window

maintenanceWindow.MaintenanceWindow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import maintenance_window

maintenanceWindow.MaintenanceWindow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import maintenance_window

maintenanceWindow.MaintenanceWindow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MaintenanceWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MaintenanceWindow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference">MaintenanceWindowScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntitiesInput">affected_entities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntityTypeInput">affected_entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.rruleInput">rrule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.scopeInput">scope_input</a></code> | <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntities">affected_entities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntityType">affected_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.rrule">rrule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.scope"></a>

```python
scope: MaintenanceWindowScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference">MaintenanceWindowScopeOutputReference</a>

---

##### `affected_entities_input`<sup>Optional</sup> <a name="affected_entities_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntitiesInput"></a>

```python
affected_entities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_entity_type_input`<sup>Optional</sup> <a name="affected_entity_type_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntityTypeInput"></a>

```python
affected_entity_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rrule_input`<sup>Optional</sup> <a name="rrule_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.rruleInput"></a>

```python
rrule_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.scopeInput"></a>

```python
scope_input: MaintenanceWindowScope
```

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `affected_entities`<sup>Required</sup> <a name="affected_entities" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntities"></a>

```python
affected_entities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_entity_type`<sup>Required</sup> <a name="affected_entity_type" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntityType"></a>

```python
affected_entity_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceWindowConfig <a name="MaintenanceWindowConfig" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import maintenance_window

maintenanceWindow.MaintenanceWindowConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  affected_entities: typing.List[str],
  affected_entity_type: str,
  duration: str,
  name: str,
  scope: MaintenanceWindowScope,
  start_time: str,
  timezone: str,
  description: str = None,
  id: str = None,
  rrule: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.affectedEntities">affected_entities</a></code> | <code>typing.List[str]</code> | The list of entity IDs affected by the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.affectedEntityType">affected_entity_type</a></code> | <code>str</code> | The type of the entities affected by the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.duration">duration</a></code> | <code>str</code> | The duration of the maintenance window, in ISO 8601 duration format (e.g. PT1H for one hour). Capped at 24 hours when `rrule` is set. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.name">name</a></code> | <code>str</code> | The name of the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.startTime">start_time</a></code> | <code>str</code> | The start time of the maintenance window, as an ISO 8601 date-time without a time zone (e.g. 2026-11-05T21:00:00). |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.timezone">timezone</a></code> | <code>str</code> | The timezone in which the maintenance window is scheduled (e.g. America/Los_Angeles). |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.description">description</a></code> | <code>str</code> | The description of the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.rrule">rrule</a></code> | <code>str</code> | The recurrence rule of the maintenance window, in RRULE format, for recurring maintenance windows. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `affected_entities`<sup>Required</sup> <a name="affected_entities" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.affectedEntities"></a>

```python
affected_entities: typing.List[str]
```

- *Type:* typing.List[str]

The list of entity IDs affected by the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#affected_entities MaintenanceWindow#affected_entities}

---

##### `affected_entity_type`<sup>Required</sup> <a name="affected_entity_type" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.affectedEntityType"></a>

```python
affected_entity_type: str
```

- *Type:* str

The type of the entities affected by the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#affected_entity_type MaintenanceWindow#affected_entity_type}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration of the maintenance window, in ISO 8601 duration format (e.g. PT1H for one hour). Capped at 24 hours when `rrule` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#duration MaintenanceWindow#duration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#name MaintenanceWindow#name}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.scope"></a>

```python
scope: MaintenanceWindowScope
```

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#scope MaintenanceWindow#scope}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The start time of the maintenance window, as an ISO 8601 date-time without a time zone (e.g. 2026-11-05T21:00:00).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#start_time MaintenanceWindow#start_time}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The timezone in which the maintenance window is scheduled (e.g. America/Los_Angeles).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#timezone MaintenanceWindow#timezone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#description MaintenanceWindow#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

The recurrence rule of the maintenance window, in RRULE format, for recurring maintenance windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#rrule MaintenanceWindow#rrule}

---

### MaintenanceWindowScope <a name="MaintenanceWindowScope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope.Initializer"></a>

```python
from cdktn_provider_newrelic import maintenance_window

maintenanceWindow.MaintenanceWindowScope(
  id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope.property.id">id</a></code> | <code>str</code> | The unique identifier of the object within the given scope (e.g. an account ID). |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope.property.type">type</a></code> | <code>str</code> | The kind of scope `id` refers to. Valid values are `ACCOUNT` and `ORGANIZATION`. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of the object within the given scope (e.g. an account ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope.property.type"></a>

```python
type: str
```

- *Type:* str

The kind of scope `id` refers to. Valid values are `ACCOUNT` and `ORGANIZATION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#type MaintenanceWindow#type}

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceWindowScopeOutputReference <a name="MaintenanceWindowScopeOutputReference" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import maintenance_window

maintenanceWindow.MaintenanceWindowScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.internalValue"></a>

```python
internal_value: MaintenanceWindowScope
```

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a>

---



