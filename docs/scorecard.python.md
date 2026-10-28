# `scorecard` Submodule <a name="`scorecard` Submodule" id="@cdktn/provider-newrelic.scorecard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Scorecard <a name="Scorecard" id="@cdktn/provider-newrelic.scorecard.Scorecard"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard newrelic_scorecard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.Scorecard(
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
  description: str = None,
  id: str = None,
  progress_levels: IResolvable | typing.List[ScorecardProgressLevels] = None,
  rule_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[ScorecardTags] = None,
  timeouts: ScorecardTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#id Scorecard#id}. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.progressLevels">progress_levels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a>]</code> | progress_levels block. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.ruleIds">rule_ids</a></code> | <code>typing.List[str]</code> | Set of newrelic_scorecard_rule GUIDs to attach to this scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a>]</code> | tags block. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeouts">ScorecardTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.name"></a>

- *Type:* str

The name of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#name Scorecard#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.description"></a>

- *Type:* str

A description of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#description Scorecard#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#id Scorecard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `progress_levels`<sup>Optional</sup> <a name="progress_levels" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.progressLevels"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a>]

progress_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#progress_levels Scorecard#progress_levels}

---

##### `rule_ids`<sup>Optional</sup> <a name="rule_ids" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.ruleIds"></a>

- *Type:* typing.List[str]

Set of newrelic_scorecard_rule GUIDs to attach to this scorecard.

Rules must exist before being attached. Removing a GUID detaches the rule without deleting it — rules are standalone entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#rule_ids Scorecard#rule_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a>]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#tags Scorecard#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.scorecard.Scorecard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeouts">ScorecardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#timeouts Scorecard#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.putProgressLevels">put_progress_levels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.resetProgressLevels">reset_progress_levels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.resetRuleIds">reset_rule_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecard.Scorecard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.scorecard.Scorecard.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.scorecard.Scorecard.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.scorecard.Scorecard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.scorecard.Scorecard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecard.Scorecard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.scorecard.Scorecard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.scorecard.Scorecard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.scorecard.Scorecard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.scorecard.Scorecard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.scorecard.Scorecard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.scorecard.Scorecard.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.scorecard.Scorecard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecard.Scorecard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecard.Scorecard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.Scorecard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecard.Scorecard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.scorecard.Scorecard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.scorecard.Scorecard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.scorecard.Scorecard.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecard.Scorecard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_progress_levels` <a name="put_progress_levels" id="@cdktn/provider-newrelic.scorecard.Scorecard.putProgressLevels"></a>

```python
def put_progress_levels(
  value: IResolvable | typing.List[ScorecardProgressLevels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecard.Scorecard.putProgressLevels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-newrelic.scorecard.Scorecard.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ScorecardTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecard.Scorecard.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-newrelic.scorecard.Scorecard.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-newrelic.scorecard.Scorecard.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#create Scorecard#create}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-newrelic.scorecard.Scorecard.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_progress_levels` <a name="reset_progress_levels" id="@cdktn/provider-newrelic.scorecard.Scorecard.resetProgressLevels"></a>

```python
def reset_progress_levels() -> None
```

##### `reset_rule_ids` <a name="reset_rule_ids" id="@cdktn/provider-newrelic.scorecard.Scorecard.resetRuleIds"></a>

```python
def reset_rule_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-newrelic.scorecard.Scorecard.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-newrelic.scorecard.Scorecard.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Scorecard resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.scorecard.Scorecard.isConstruct"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.Scorecard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecard.Scorecard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.scorecard.Scorecard.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.Scorecard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecard.Scorecard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.scorecard.Scorecard.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.Scorecard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecard.Scorecard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.scorecard.Scorecard.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.Scorecard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Scorecard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.scorecard.Scorecard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Scorecard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Scorecard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecard.Scorecard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Scorecard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.progressLevels">progress_levels</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList">ScorecardProgressLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.rulesCollectionId">rules_collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList">ScorecardTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference">ScorecardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.progressLevelsInput">progress_levels_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.ruleIdsInput">rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeouts">ScorecardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.ruleIds">rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `progress_levels`<sup>Required</sup> <a name="progress_levels" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.progressLevels"></a>

```python
progress_levels: ScorecardProgressLevelsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList">ScorecardProgressLevelsList</a>

---

##### `rules_collection_id`<sup>Required</sup> <a name="rules_collection_id" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.rulesCollectionId"></a>

```python
rules_collection_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.tags"></a>

```python
tags: ScorecardTagsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList">ScorecardTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.timeouts"></a>

```python
timeouts: ScorecardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference">ScorecardTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `progress_levels_input`<sup>Optional</sup> <a name="progress_levels_input" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.progressLevelsInput"></a>

```python
progress_levels_input: IResolvable | typing.List[ScorecardProgressLevels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a>]

---

##### `rule_ids_input`<sup>Optional</sup> <a name="rule_ids_input" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.ruleIdsInput"></a>

```python
rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ScorecardTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ScorecardTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeouts">ScorecardTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule_ids`<sup>Required</sup> <a name="rule_ids" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.ruleIds"></a>

```python
rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.Scorecard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.scorecard.Scorecard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ScorecardConfig <a name="ScorecardConfig" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.ScorecardConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  id: str = None,
  progress_levels: IResolvable | typing.List[ScorecardProgressLevels] = None,
  rule_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[ScorecardTags] = None,
  timeouts: ScorecardTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.name">name</a></code> | <code>str</code> | The name of the scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.description">description</a></code> | <code>str</code> | A description of the scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#id Scorecard#id}. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.progressLevels">progress_levels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a>]</code> | progress_levels block. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.ruleIds">rule_ids</a></code> | <code>typing.List[str]</code> | Set of newrelic_scorecard_rule GUIDs to attach to this scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a>]</code> | tags block. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeouts">ScorecardTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#name Scorecard#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#description Scorecard#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#id Scorecard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `progress_levels`<sup>Optional</sup> <a name="progress_levels" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.progressLevels"></a>

```python
progress_levels: IResolvable | typing.List[ScorecardProgressLevels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a>]

progress_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#progress_levels Scorecard#progress_levels}

---

##### `rule_ids`<sup>Optional</sup> <a name="rule_ids" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.ruleIds"></a>

```python
rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

Set of newrelic_scorecard_rule GUIDs to attach to this scorecard.

Rules must exist before being attached. Removing a GUID detaches the rule without deleting it — rules are standalone entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#rule_ids Scorecard#rule_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ScorecardTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a>]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#tags Scorecard#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.scorecard.ScorecardConfig.property.timeouts"></a>

```python
timeouts: ScorecardTimeouts
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeouts">ScorecardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#timeouts Scorecard#timeouts}

---

### ScorecardProgressLevels <a name="ScorecardProgressLevels" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.ScorecardProgressLevels(
  id: str,
  name: str,
  description: str = None,
  hex_color_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels.property.id">id</a></code> | <code>str</code> | A unique identifier for this level (e.g. 'red', 'green'). |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels.property.name">name</a></code> | <code>str</code> | Display name of the level. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels.property.description">description</a></code> | <code>str</code> | Description of what this level means. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels.property.hexColorCode">hex_color_code</a></code> | <code>str</code> | Hex colour for this level, e.g. '#FF0000'. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels.property.id"></a>

```python
id: str
```

- *Type:* str

A unique identifier for this level (e.g. 'red', 'green').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#id Scorecard#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels.property.name"></a>

```python
name: str
```

- *Type:* str

Display name of the level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#name Scorecard#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels.property.description"></a>

```python
description: str
```

- *Type:* str

Description of what this level means.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#description Scorecard#description}

---

##### `hex_color_code`<sup>Optional</sup> <a name="hex_color_code" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels.property.hexColorCode"></a>

```python
hex_color_code: str
```

- *Type:* str

Hex colour for this level, e.g. '#FF0000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#hex_color_code Scorecard#hex_color_code}

---

### ScorecardTags <a name="ScorecardTags" id="@cdktn/provider-newrelic.scorecard.ScorecardTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecard.ScorecardTags.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.ScorecardTags(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags.property.values">values</a></code> | <code>typing.List[str]</code> | The tag values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.scorecard.ScorecardTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#key Scorecard#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-newrelic.scorecard.ScorecardTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#values Scorecard#values}

---

### ScorecardTimeouts <a name="ScorecardTimeouts" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeouts.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.ScorecardTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#create Scorecard#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/scorecard#create Scorecard#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScorecardProgressLevelsList <a name="ScorecardProgressLevelsList" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.ScorecardProgressLevelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ScorecardProgressLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ScorecardProgressLevels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a>]

---


### ScorecardProgressLevelsOutputReference <a name="ScorecardProgressLevelsOutputReference" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.ScorecardProgressLevelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.resetHexColorCode">reset_hex_color_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_hex_color_code` <a name="reset_hex_color_code" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.resetHexColorCode"></a>

```python
def reset_hex_color_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.hexColorCodeInput">hex_color_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.hexColorCode">hex_color_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hex_color_code_input`<sup>Optional</sup> <a name="hex_color_code_input" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.hexColorCodeInput"></a>

```python
hex_color_code_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hex_color_code`<sup>Required</sup> <a name="hex_color_code" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.hexColorCode"></a>

```python
hex_color_code: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.scorecard.ScorecardProgressLevelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScorecardProgressLevels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecard.ScorecardProgressLevels">ScorecardProgressLevels</a>

---


### ScorecardTagsList <a name="ScorecardTagsList" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.ScorecardTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ScorecardTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ScorecardTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a>]

---


### ScorecardTagsOutputReference <a name="ScorecardTagsOutputReference" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.ScorecardTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.scorecard.ScorecardTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScorecardTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecard.ScorecardTags">ScorecardTags</a>

---


### ScorecardTimeoutsOutputReference <a name="ScorecardTimeoutsOutputReference" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard

scorecard.ScorecardTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeouts">ScorecardTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.scorecard.ScorecardTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScorecardTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecard.ScorecardTimeouts">ScorecardTimeouts</a>

---



