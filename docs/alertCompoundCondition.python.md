# `alertCompoundCondition` Submodule <a name="`alertCompoundCondition` Submodule" id="@cdktn/provider-newrelic.alertCompoundCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertCompoundCondition <a name="AlertCompoundCondition" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition newrelic_alert_compound_condition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundCondition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  component_conditions: IResolvable | typing.List[AlertCompoundConditionComponentConditions],
  enabled: bool | IResolvable,
  name: str,
  policy_id: typing.Union[int, float],
  trigger_expression: str,
  account_id: typing.Union[int, float] = None,
  facet_matching_behavior: str = None,
  id: str = None,
  runbook_url: str = None,
  threshold_duration: typing.Union[int, float] = None,
  timeouts: AlertCompoundConditionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.componentConditions">component_conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>]</code> | component_conditions block. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.name">name</a></code> | <code>str</code> | The title of the compound alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.triggerExpression">trigger_expression</a></code> | <code>str</code> | Expression that defines how component condition evaluations are combined. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID for managing your compound alert conditions. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.facetMatchingBehavior">facet_matching_behavior</a></code> | <code>str</code> | How the compound condition will take into account the component conditions' facets during evaluation. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.runbookUrl">runbook_url</a></code> | <code>str</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.thresholdDuration">threshold_duration</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `component_conditions`<sup>Required</sup> <a name="component_conditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.componentConditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>]

component_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#component_conditions AlertCompoundCondition#component_conditions}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#enabled AlertCompoundCondition#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.name"></a>

- *Type:* str

The title of the compound alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#name AlertCompoundCondition#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.policyId"></a>

- *Type:* typing.Union[int, float]

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#policy_id AlertCompoundCondition#policy_id}

---

##### `trigger_expression`<sup>Required</sup> <a name="trigger_expression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.triggerExpression"></a>

- *Type:* str

Expression that defines how component condition evaluations are combined.

Valid operators are 'AND', 'OR', 'NOT'. For more complex expressions, use parentheses. Simple example: 'A AND B'. Complex example: 'A AND (B OR C) AND NOT D'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#trigger_expression AlertCompoundCondition#trigger_expression}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID for managing your compound alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#account_id AlertCompoundCondition#account_id}

---

##### `facet_matching_behavior`<sup>Optional</sup> <a name="facet_matching_behavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.facetMatchingBehavior"></a>

- *Type:* str

How the compound condition will take into account the component conditions' facets during evaluation.

Valid values: 'FACETS_IGNORED' (default) - facets are not taken into consideration when determining when the compound alert condition activates; 'FACETS_MATCH' - the compound alert condition will activate only when shared facets have matching values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#facet_matching_behavior AlertCompoundCondition#facet_matching_behavior}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbook_url`<sup>Optional</sup> <a name="runbook_url" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* str

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#runbook_url AlertCompoundCondition#runbook_url}

---

##### `threshold_duration`<sup>Optional</sup> <a name="threshold_duration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.thresholdDuration"></a>

- *Type:* typing.Union[int, float]

The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate.

Between 30-86400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#threshold_duration AlertCompoundCondition#threshold_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#timeouts AlertCompoundCondition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions">put_component_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetFacetMatchingBehavior">reset_facet_matching_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetRunbookUrl">reset_runbook_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetThresholdDuration">reset_threshold_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_component_conditions` <a name="put_component_conditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions"></a>

```python
def put_component_conditions(
  value: IResolvable | typing.List[AlertCompoundConditionComponentConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_facet_matching_behavior` <a name="reset_facet_matching_behavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetFacetMatchingBehavior"></a>

```python
def reset_facet_matching_behavior() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_runbook_url` <a name="reset_runbook_url" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetRunbookUrl"></a>

```python
def reset_runbook_url() -> None
```

##### `reset_threshold_duration` <a name="reset_threshold_duration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetThresholdDuration"></a>

```python
def reset_threshold_duration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundCondition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundCondition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundCondition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundCondition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AlertCompoundCondition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AlertCompoundCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AlertCompoundCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditions">component_conditions</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList">AlertCompoundConditionComponentConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference">AlertCompoundConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditionsInput">component_conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehaviorInput">facet_matching_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyIdInput">policy_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrlInput">runbook_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDurationInput">threshold_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpressionInput">trigger_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehavior">facet_matching_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrl">runbook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDuration">threshold_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpression">trigger_expression</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `component_conditions`<sup>Required</sup> <a name="component_conditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditions"></a>

```python
component_conditions: AlertCompoundConditionComponentConditionsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList">AlertCompoundConditionComponentConditionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeouts"></a>

```python
timeouts: AlertCompoundConditionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference">AlertCompoundConditionTimeoutsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `component_conditions_input`<sup>Optional</sup> <a name="component_conditions_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditionsInput"></a>

```python
component_conditions_input: IResolvable | typing.List[AlertCompoundConditionComponentConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `facet_matching_behavior_input`<sup>Optional</sup> <a name="facet_matching_behavior_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehaviorInput"></a>

```python
facet_matching_behavior_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyIdInput"></a>

```python
policy_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runbook_url_input`<sup>Optional</sup> <a name="runbook_url_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrlInput"></a>

```python
runbook_url_input: str
```

- *Type:* str

---

##### `threshold_duration_input`<sup>Optional</sup> <a name="threshold_duration_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDurationInput"></a>

```python
threshold_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | AlertCompoundConditionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---

##### `trigger_expression_input`<sup>Optional</sup> <a name="trigger_expression_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpressionInput"></a>

```python
trigger_expression_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `facet_matching_behavior`<sup>Required</sup> <a name="facet_matching_behavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehavior"></a>

```python
facet_matching_behavior: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyId"></a>

```python
policy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runbook_url`<sup>Required</sup> <a name="runbook_url" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrl"></a>

```python
runbook_url: str
```

- *Type:* str

---

##### `threshold_duration`<sup>Required</sup> <a name="threshold_duration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDuration"></a>

```python
threshold_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_expression`<sup>Required</sup> <a name="trigger_expression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpression"></a>

```python
trigger_expression: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertCompoundConditionComponentConditions <a name="AlertCompoundConditionComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.Initializer"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundConditionComponentConditions(
  alias: str,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.alias">alias</a></code> | <code>str</code> | The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C'). |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.id">id</a></code> | <code>str</code> | The ID of the existing alert condition to use as a component. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.alias"></a>

```python
alias: str
```

- *Type:* str

The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#alias AlertCompoundCondition#alias}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the existing alert condition to use as a component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AlertCompoundConditionConfig <a name="AlertCompoundConditionConfig" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundConditionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  component_conditions: IResolvable | typing.List[AlertCompoundConditionComponentConditions],
  enabled: bool | IResolvable,
  name: str,
  policy_id: typing.Union[int, float],
  trigger_expression: str,
  account_id: typing.Union[int, float] = None,
  facet_matching_behavior: str = None,
  id: str = None,
  runbook_url: str = None,
  threshold_duration: typing.Union[int, float] = None,
  timeouts: AlertCompoundConditionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.componentConditions">component_conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>]</code> | component_conditions block. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.name">name</a></code> | <code>str</code> | The title of the compound alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.triggerExpression">trigger_expression</a></code> | <code>str</code> | Expression that defines how component condition evaluations are combined. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID for managing your compound alert conditions. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.facetMatchingBehavior">facet_matching_behavior</a></code> | <code>str</code> | How the compound condition will take into account the component conditions' facets during evaluation. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.runbookUrl">runbook_url</a></code> | <code>str</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.thresholdDuration">threshold_duration</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `component_conditions`<sup>Required</sup> <a name="component_conditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.componentConditions"></a>

```python
component_conditions: IResolvable | typing.List[AlertCompoundConditionComponentConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>]

component_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#component_conditions AlertCompoundCondition#component_conditions}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#enabled AlertCompoundCondition#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The title of the compound alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#name AlertCompoundCondition#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.policyId"></a>

```python
policy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#policy_id AlertCompoundCondition#policy_id}

---

##### `trigger_expression`<sup>Required</sup> <a name="trigger_expression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.triggerExpression"></a>

```python
trigger_expression: str
```

- *Type:* str

Expression that defines how component condition evaluations are combined.

Valid operators are 'AND', 'OR', 'NOT'. For more complex expressions, use parentheses. Simple example: 'A AND B'. Complex example: 'A AND (B OR C) AND NOT D'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#trigger_expression AlertCompoundCondition#trigger_expression}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID for managing your compound alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#account_id AlertCompoundCondition#account_id}

---

##### `facet_matching_behavior`<sup>Optional</sup> <a name="facet_matching_behavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.facetMatchingBehavior"></a>

```python
facet_matching_behavior: str
```

- *Type:* str

How the compound condition will take into account the component conditions' facets during evaluation.

Valid values: 'FACETS_IGNORED' (default) - facets are not taken into consideration when determining when the compound alert condition activates; 'FACETS_MATCH' - the compound alert condition will activate only when shared facets have matching values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#facet_matching_behavior AlertCompoundCondition#facet_matching_behavior}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbook_url`<sup>Optional</sup> <a name="runbook_url" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.runbookUrl"></a>

```python
runbook_url: str
```

- *Type:* str

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#runbook_url AlertCompoundCondition#runbook_url}

---

##### `threshold_duration`<sup>Optional</sup> <a name="threshold_duration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.thresholdDuration"></a>

```python
threshold_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate.

Between 30-86400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#threshold_duration AlertCompoundCondition#threshold_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.timeouts"></a>

```python
timeouts: AlertCompoundConditionTimeouts
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#timeouts AlertCompoundCondition#timeouts}

---

### AlertCompoundConditionTimeouts <a name="AlertCompoundConditionTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.Initializer"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundConditionTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertCompoundConditionComponentConditionsList <a name="AlertCompoundConditionComponentConditionsList" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundConditionComponentConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlertCompoundConditionComponentConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AlertCompoundConditionComponentConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>]

---


### AlertCompoundConditionComponentConditionsOutputReference <a name="AlertCompoundConditionComponentConditionsOutputReference" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AlertCompoundConditionComponentConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>

---


### AlertCompoundConditionTimeoutsOutputReference <a name="AlertCompoundConditionTimeoutsOutputReference" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import alert_compound_condition

alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AlertCompoundConditionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---



