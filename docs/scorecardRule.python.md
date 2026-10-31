# `scorecardRule` Submodule <a name="`scorecardRule` Submodule" id="@cdktn/provider-newrelic.scorecardRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScorecardRule <a name="ScorecardRule" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule newrelic_scorecard_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  name: str,
  nrql_engine: ScorecardRuleNrqlEngine,
  description: str = None,
  id: str = None,
  impact_weight: typing.Union[int, float] = None,
  progress_level: str = None,
  run_interval: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[ScorecardRuleTags] = None,
  timeouts: ScorecardRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this rule is active. Set to false to pause evaluation without deleting the rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the scorecard rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.nrqlEngine">nrql_engine</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | nrql_engine block. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#id ScorecardRule#id}. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.impactWeight">impact_weight</a></code> | <code>typing.Union[int, float]</code> | Relative weight of this rule's contribution to the overall scorecard score. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.progressLevel">progress_level</a></code> | <code>str</code> | The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.runInterval">run_interval</a></code> | <code>typing.Union[int, float]</code> | Evaluation frequency in minutes. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>]</code> | tags block. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether this rule is active. Set to false to pause evaluation without deleting the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#enabled ScorecardRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the scorecard rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#name ScorecardRule#name}

---

##### `nrql_engine`<sup>Required</sup> <a name="nrql_engine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.nrqlEngine"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

nrql_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#nrql_engine ScorecardRule#nrql_engine}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.description"></a>

- *Type:* str

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#description ScorecardRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#id ScorecardRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `impact_weight`<sup>Optional</sup> <a name="impact_weight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.impactWeight"></a>

- *Type:* typing.Union[int, float]

Relative weight of this rule's contribution to the overall scorecard score.

Must be a non-negative integer. Omit for equal weighting across all rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#impact_weight ScorecardRule#impact_weight}

---

##### `progress_level`<sup>Optional</sup> <a name="progress_level" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.progressLevel"></a>

- *Type:* str

The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#progress_level ScorecardRule#progress_level}

---

##### `run_interval`<sup>Optional</sup> <a name="run_interval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.runInterval"></a>

- *Type:* typing.Union[int, float]

Evaluation frequency in minutes.

Must be one of: 60 (hourly), 360 (6h), 720 (12h), 1440 (daily). Omit to use the API default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#run_interval ScorecardRule#run_interval}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#tags ScorecardRule#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#timeouts ScorecardRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine">put_nrql_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetImpactWeight">reset_impact_weight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetProgressLevel">reset_progress_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetRunInterval">reset_run_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_nrql_engine` <a name="put_nrql_engine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine"></a>

```python
def put_nrql_engine(
  accounts: typing.List[typing.Union[int, float]],
  query: str,
  join_accounts: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine.parameter.accounts"></a>

- *Type:* typing.List[typing.Union[int, float]]

Account IDs where this rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#accounts ScorecardRule#accounts}

---

###### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine.parameter.query"></a>

- *Type:* str

The NRQL query. Must be FACET-ed and alias the result as 'score'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#query ScorecardRule#query}

---

###### `join_accounts`<sup>Optional</sup> <a name="join_accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine.parameter.joinAccounts"></a>

- *Type:* typing.List[typing.Union[int, float]]

Additional account IDs to join with the query accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#join_accounts ScorecardRule#join_accounts}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ScorecardRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#create ScorecardRule#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#update ScorecardRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_impact_weight` <a name="reset_impact_weight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetImpactWeight"></a>

```python
def reset_impact_weight() -> None
```

##### `reset_progress_level` <a name="reset_progress_level" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetProgressLevel"></a>

```python
def reset_progress_level() -> None
```

##### `reset_run_interval` <a name="reset_run_interval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetRunInterval"></a>

```python
def reset_run_interval() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ScorecardRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ScorecardRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ScorecardRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ScorecardRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ScorecardRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngine">nrql_engine</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference">ScorecardRuleNrqlEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList">ScorecardRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference">ScorecardRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeightInput">impact_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngineInput">nrql_engine_input</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevelInput">progress_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runIntervalInput">run_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeight">impact_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevel">progress_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runInterval">run_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `nrql_engine`<sup>Required</sup> <a name="nrql_engine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngine"></a>

```python
nrql_engine: ScorecardRuleNrqlEngineOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference">ScorecardRuleNrqlEngineOutputReference</a>

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tags"></a>

```python
tags: ScorecardRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList">ScorecardRuleTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeouts"></a>

```python
timeouts: ScorecardRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference">ScorecardRuleTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `impact_weight_input`<sup>Optional</sup> <a name="impact_weight_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeightInput"></a>

```python
impact_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nrql_engine_input`<sup>Optional</sup> <a name="nrql_engine_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngineInput"></a>

```python
nrql_engine_input: ScorecardRuleNrqlEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---

##### `progress_level_input`<sup>Optional</sup> <a name="progress_level_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevelInput"></a>

```python
progress_level_input: str
```

- *Type:* str

---

##### `run_interval_input`<sup>Optional</sup> <a name="run_interval_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runIntervalInput"></a>

```python
run_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ScorecardRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ScorecardRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `impact_weight`<sup>Required</sup> <a name="impact_weight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeight"></a>

```python
impact_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `progress_level`<sup>Required</sup> <a name="progress_level" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevel"></a>

```python
progress_level: str
```

- *Type:* str

---

##### `run_interval`<sup>Required</sup> <a name="run_interval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runInterval"></a>

```python
run_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ScorecardRuleConfig <a name="ScorecardRuleConfig" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  name: str,
  nrql_engine: ScorecardRuleNrqlEngine,
  description: str = None,
  id: str = None,
  impact_weight: typing.Union[int, float] = None,
  progress_level: str = None,
  run_interval: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[ScorecardRuleTags] = None,
  timeouts: ScorecardRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this rule is active. Set to false to pause evaluation without deleting the rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the scorecard rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.nrqlEngine">nrql_engine</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | nrql_engine block. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.description">description</a></code> | <code>str</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#id ScorecardRule#id}. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.impactWeight">impact_weight</a></code> | <code>typing.Union[int, float]</code> | Relative weight of this rule's contribution to the overall scorecard score. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.progressLevel">progress_level</a></code> | <code>str</code> | The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.runInterval">run_interval</a></code> | <code>typing.Union[int, float]</code> | Evaluation frequency in minutes. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>]</code> | tags block. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this rule is active. Set to false to pause evaluation without deleting the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#enabled ScorecardRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the scorecard rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#name ScorecardRule#name}

---

##### `nrql_engine`<sup>Required</sup> <a name="nrql_engine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.nrqlEngine"></a>

```python
nrql_engine: ScorecardRuleNrqlEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

nrql_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#nrql_engine ScorecardRule#nrql_engine}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#description ScorecardRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#id ScorecardRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `impact_weight`<sup>Optional</sup> <a name="impact_weight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.impactWeight"></a>

```python
impact_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Relative weight of this rule's contribution to the overall scorecard score.

Must be a non-negative integer. Omit for equal weighting across all rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#impact_weight ScorecardRule#impact_weight}

---

##### `progress_level`<sup>Optional</sup> <a name="progress_level" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.progressLevel"></a>

```python
progress_level: str
```

- *Type:* str

The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#progress_level ScorecardRule#progress_level}

---

##### `run_interval`<sup>Optional</sup> <a name="run_interval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.runInterval"></a>

```python
run_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Evaluation frequency in minutes.

Must be one of: 60 (hourly), 360 (6h), 720 (12h), 1440 (daily). Omit to use the API default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#run_interval ScorecardRule#run_interval}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ScorecardRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#tags ScorecardRule#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.timeouts"></a>

```python
timeouts: ScorecardRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#timeouts ScorecardRule#timeouts}

---

### ScorecardRuleNrqlEngine <a name="ScorecardRuleNrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRuleNrqlEngine(
  accounts: typing.List[typing.Union[int, float]],
  query: str,
  join_accounts: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.accounts">accounts</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Account IDs where this rule runs. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.query">query</a></code> | <code>str</code> | The NRQL query. Must be FACET-ed and alias the result as 'score'. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.joinAccounts">join_accounts</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Additional account IDs to join with the query accounts. |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.accounts"></a>

```python
accounts: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Account IDs where this rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#accounts ScorecardRule#accounts}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.query"></a>

```python
query: str
```

- *Type:* str

The NRQL query. Must be FACET-ed and alias the result as 'score'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#query ScorecardRule#query}

---

##### `join_accounts`<sup>Optional</sup> <a name="join_accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.joinAccounts"></a>

```python
join_accounts: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Additional account IDs to join with the query accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#join_accounts ScorecardRule#join_accounts}

---

### ScorecardRuleTags <a name="ScorecardRuleTags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRuleTags(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.values">values</a></code> | <code>typing.List[str]</code> | The tag values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#key ScorecardRule#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#values ScorecardRule#values}

---

### ScorecardRuleTimeouts <a name="ScorecardRuleTimeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRuleTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#create ScorecardRule#create}. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#update ScorecardRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#create ScorecardRule#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#update ScorecardRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScorecardRuleNrqlEngineOutputReference <a name="ScorecardRuleNrqlEngineOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRuleNrqlEngineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resetJoinAccounts">reset_join_accounts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_join_accounts` <a name="reset_join_accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resetJoinAccounts"></a>

```python
def reset_join_accounts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accountsInput">accounts_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccountsInput">join_accounts_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accounts">accounts</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccounts">join_accounts</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accounts_input`<sup>Optional</sup> <a name="accounts_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accountsInput"></a>

```python
accounts_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `join_accounts_input`<sup>Optional</sup> <a name="join_accounts_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccountsInput"></a>

```python
join_accounts_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accounts"></a>

```python
accounts: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `join_accounts`<sup>Required</sup> <a name="join_accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccounts"></a>

```python
join_accounts: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.internalValue"></a>

```python
internal_value: ScorecardRuleNrqlEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---


### ScorecardRuleTagsList <a name="ScorecardRuleTagsList" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ScorecardRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ScorecardRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>]

---


### ScorecardRuleTagsOutputReference <a name="ScorecardRuleTagsOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScorecardRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>

---


### ScorecardRuleTimeoutsOutputReference <a name="ScorecardRuleTimeoutsOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import scorecard_rule

scorecardRule.ScorecardRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScorecardRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

---



