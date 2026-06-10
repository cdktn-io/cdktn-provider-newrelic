# `cardinalityManagement` Submodule <a name="`cardinalityManagement` Submodule" id="@cdktn/provider-newrelic.cardinalityManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CardinalityManagement <a name="CardinalityManagement" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management newrelic_cardinality_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer"></a>

```python
from cdktn_provider_newrelic import cardinality_management

cardinalityManagement.CardinalityManagement(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mode: str,
  cardinality_limit: typing.Union[int, float] = None,
  id: str = None,
  metric: IResolvable | typing.List[CardinalityManagementMetric] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.mode">mode</a></code> | <code>str</code> | The override mode. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.cardinalityLimit">cardinality_limit</a></code> | <code>typing.Union[int, float]</code> | The account-wide cardinality limit — the maximum number of unique dimension-value combinations allowed per metric per day. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#id CardinalityManagement#id}. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.metric">metric</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a>]</code> | metric block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.mode"></a>

- *Type:* str

The override mode.

Use `DEFAULT` to set a single account-wide limit that applies to all metrics, or `PER_METRIC` to set individual limits for one or more named metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#mode CardinalityManagement#mode}

---

##### `cardinality_limit`<sup>Optional</sup> <a name="cardinality_limit" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.cardinalityLimit"></a>

- *Type:* typing.Union[int, float]

The account-wide cardinality limit — the maximum number of unique dimension-value combinations allowed per metric per day.

Required when `mode` is `DEFAULT`; must not be set when `mode` is `PER_METRIC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#cardinality_limit CardinalityManagement#cardinality_limit}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#id CardinalityManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.Initializer.parameter.metric"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a>]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#metric CardinalityManagement#metric}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.resetCardinalityLimit">reset_cardinality_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.resetMetric">reset_metric</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metric` <a name="put_metric" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.putMetric"></a>

```python
def put_metric(
  value: IResolvable | typing.List[CardinalityManagementMetric]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.putMetric.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a>]

---

##### `reset_cardinality_limit` <a name="reset_cardinality_limit" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.resetCardinalityLimit"></a>

```python
def reset_cardinality_limit() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.resetMetric"></a>

```python
def reset_metric() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CardinalityManagement resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.isConstruct"></a>

```python
from cdktn_provider_newrelic import cardinality_management

cardinalityManagement.CardinalityManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import cardinality_management

cardinalityManagement.CardinalityManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import cardinality_management

cardinalityManagement.CardinalityManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import cardinality_management

cardinalityManagement.CardinalityManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CardinalityManagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CardinalityManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CardinalityManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CardinalityManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList">CardinalityManagementMetricList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.cardinalityLimitInput">cardinality_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.metricInput">metric_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.cardinalityLimit">cardinality_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.mode">mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.metric"></a>

```python
metric: CardinalityManagementMetricList
```

- *Type:* <a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList">CardinalityManagementMetricList</a>

---

##### `cardinality_limit_input`<sup>Optional</sup> <a name="cardinality_limit_input" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.cardinalityLimitInput"></a>

```python
cardinality_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.metricInput"></a>

```python
metric_input: IResolvable | typing.List[CardinalityManagementMetric]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a>]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `cardinality_limit`<sup>Required</sup> <a name="cardinality_limit" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.cardinalityLimit"></a>

```python
cardinality_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CardinalityManagementConfig <a name="CardinalityManagementConfig" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import cardinality_management

cardinalityManagement.CardinalityManagementConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mode: str,
  cardinality_limit: typing.Union[int, float] = None,
  id: str = None,
  metric: IResolvable | typing.List[CardinalityManagementMetric] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.mode">mode</a></code> | <code>str</code> | The override mode. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.cardinalityLimit">cardinality_limit</a></code> | <code>typing.Union[int, float]</code> | The account-wide cardinality limit — the maximum number of unique dimension-value combinations allowed per metric per day. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#id CardinalityManagement#id}. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.metric">metric</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a>]</code> | metric block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

The override mode.

Use `DEFAULT` to set a single account-wide limit that applies to all metrics, or `PER_METRIC` to set individual limits for one or more named metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#mode CardinalityManagement#mode}

---

##### `cardinality_limit`<sup>Optional</sup> <a name="cardinality_limit" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.cardinalityLimit"></a>

```python
cardinality_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The account-wide cardinality limit — the maximum number of unique dimension-value combinations allowed per metric per day.

Required when `mode` is `DEFAULT`; must not be set when `mode` is `PER_METRIC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#cardinality_limit CardinalityManagement#cardinality_limit}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#id CardinalityManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementConfig.property.metric"></a>

```python
metric: IResolvable | typing.List[CardinalityManagementMetric]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a>]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#metric CardinalityManagement#metric}

---

### CardinalityManagementMetric <a name="CardinalityManagementMetric" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric.Initializer"></a>

```python
from cdktn_provider_newrelic import cardinality_management

cardinalityManagement.CardinalityManagementMetric(
  cardinality_limit: typing.Union[int, float],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric.property.cardinalityLimit">cardinality_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum number of unique dimension-value combinations allowed per day for this metric. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric.property.name">name</a></code> | <code>str</code> | The full name of the metric (e.g. `http.server.duration`). |

---

##### `cardinality_limit`<sup>Required</sup> <a name="cardinality_limit" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric.property.cardinalityLimit"></a>

```python
cardinality_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of unique dimension-value combinations allowed per day for this metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#cardinality_limit CardinalityManagement#cardinality_limit}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric.property.name"></a>

```python
name: str
```

- *Type:* str

The full name of the metric (e.g. `http.server.duration`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#name CardinalityManagement#name}

---

## Classes <a name="Classes" id="Classes"></a>

### CardinalityManagementMetricList <a name="CardinalityManagementMetricList" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.Initializer"></a>

```python
from cdktn_provider_newrelic import cardinality_management

cardinalityManagement.CardinalityManagementMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CardinalityManagementMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CardinalityManagementMetric]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a>]

---


### CardinalityManagementMetricOutputReference <a name="CardinalityManagementMetricOutputReference" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cardinality_management

cardinalityManagement.CardinalityManagementMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.cardinalityLimitInput">cardinality_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.cardinalityLimit">cardinality_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cardinality_limit_input`<sup>Optional</sup> <a name="cardinality_limit_input" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.cardinalityLimitInput"></a>

```python
cardinality_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `cardinality_limit`<sup>Required</sup> <a name="cardinality_limit" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.cardinalityLimit"></a>

```python
cardinality_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetricOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CardinalityManagementMetric
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.cardinalityManagement.CardinalityManagementMetric">CardinalityManagementMetric</a>

---



