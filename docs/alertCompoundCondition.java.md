# `alertCompoundCondition` Submodule <a name="`alertCompoundCondition` Submodule" id="@cdktn/provider-newrelic.alertCompoundCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertCompoundCondition <a name="AlertCompoundCondition" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition newrelic_alert_compound_condition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundCondition;

AlertCompoundCondition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .componentConditions(IResolvable|java.util.List<AlertCompoundConditionComponentConditions>)
    .enabled(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .policyId(java.lang.Number)
    .triggerExpression(java.lang.String)
//  .accountId(java.lang.Number)
//  .facetMatchingBehavior(java.lang.String)
//  .id(java.lang.String)
//  .runbookUrl(java.lang.String)
//  .thresholdDuration(java.lang.Number)
//  .timeouts(AlertCompoundConditionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.componentConditions">componentConditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>></code> | component_conditions block. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The title of the compound alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.triggerExpression">triggerExpression</a></code> | <code>java.lang.String</code> | Expression that defines how component condition evaluations are combined. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID for managing your compound alert conditions. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.facetMatchingBehavior">facetMatchingBehavior</a></code> | <code>java.lang.String</code> | How the compound condition will take into account the component conditions' facets during evaluation. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.thresholdDuration">thresholdDuration</a></code> | <code>java.lang.Number</code> | The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `componentConditions`<sup>Required</sup> <a name="componentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.componentConditions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>>

component_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#component_conditions AlertCompoundCondition#component_conditions}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#enabled AlertCompoundCondition#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The title of the compound alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#name AlertCompoundCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.policyId"></a>

- *Type:* java.lang.Number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#policy_id AlertCompoundCondition#policy_id}

---

##### `triggerExpression`<sup>Required</sup> <a name="triggerExpression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.triggerExpression"></a>

- *Type:* java.lang.String

Expression that defines how component condition evaluations are combined.

Valid operators are 'AND', 'OR', 'NOT'. For more complex expressions, use parentheses. Simple example: 'A AND B'. Complex example: 'A AND (B OR C) AND NOT D'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#trigger_expression AlertCompoundCondition#trigger_expression}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID for managing your compound alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#account_id AlertCompoundCondition#account_id}

---

##### `facetMatchingBehavior`<sup>Optional</sup> <a name="facetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.facetMatchingBehavior"></a>

- *Type:* java.lang.String

How the compound condition will take into account the component conditions' facets during evaluation.

Valid values: 'FACETS_IGNORED' (default) - facets are not taken into consideration when determining when the compound alert condition activates; 'FACETS_MATCH' - the compound alert condition will activate only when shared facets have matching values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#facet_matching_behavior AlertCompoundCondition#facet_matching_behavior}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#runbook_url AlertCompoundCondition#runbook_url}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="thresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.thresholdDuration"></a>

- *Type:* java.lang.Number

The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate.

Between 30-86400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#threshold_duration AlertCompoundCondition#threshold_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#timeouts AlertCompoundCondition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions">putComponentConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetFacetMatchingBehavior">resetFacetMatchingBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetRunbookUrl">resetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetThresholdDuration">resetThresholdDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentConditions` <a name="putComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions"></a>

```java
public void putComponentConditions(IResolvable|java.util.List<AlertCompoundConditionComponentConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts"></a>

```java
public void putTimeouts(AlertCompoundConditionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetFacetMatchingBehavior` <a name="resetFacetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetFacetMatchingBehavior"></a>

```java
public void resetFacetMatchingBehavior()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetId"></a>

```java
public void resetId()
```

##### `resetRunbookUrl` <a name="resetRunbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetRunbookUrl"></a>

```java
public void resetRunbookUrl()
```

##### `resetThresholdDuration` <a name="resetThresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetThresholdDuration"></a>

```java
public void resetThresholdDuration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundCondition;

AlertCompoundCondition.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundCondition;

AlertCompoundCondition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundCondition;

AlertCompoundCondition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundCondition;

AlertCompoundCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AlertCompoundCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AlertCompoundCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AlertCompoundCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AlertCompoundCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditions">componentConditions</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList">AlertCompoundConditionComponentConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.entityGuid">entityGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference">AlertCompoundConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditionsInput">componentConditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehaviorInput">facetMatchingBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrlInput">runbookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDurationInput">thresholdDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpressionInput">triggerExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehavior">facetMatchingBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDuration">thresholdDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpression">triggerExpression</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `componentConditions`<sup>Required</sup> <a name="componentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditions"></a>

```java
public AlertCompoundConditionComponentConditionsList getComponentConditions();
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList">AlertCompoundConditionComponentConditionsList</a>

---

##### `entityGuid`<sup>Required</sup> <a name="entityGuid" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.entityGuid"></a>

```java
public java.lang.String getEntityGuid();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeouts"></a>

```java
public AlertCompoundConditionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference">AlertCompoundConditionTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `componentConditionsInput`<sup>Optional</sup> <a name="componentConditionsInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditionsInput"></a>

```java
public IResolvable|java.util.List<AlertCompoundConditionComponentConditions> getComponentConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `facetMatchingBehaviorInput`<sup>Optional</sup> <a name="facetMatchingBehaviorInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehaviorInput"></a>

```java
public java.lang.String getFacetMatchingBehaviorInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyIdInput"></a>

```java
public java.lang.Number getPolicyIdInput();
```

- *Type:* java.lang.Number

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="runbookUrlInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrlInput"></a>

```java
public java.lang.String getRunbookUrlInput();
```

- *Type:* java.lang.String

---

##### `thresholdDurationInput`<sup>Optional</sup> <a name="thresholdDurationInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDurationInput"></a>

```java
public java.lang.Number getThresholdDurationInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeoutsInput"></a>

```java
public IResolvable|AlertCompoundConditionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---

##### `triggerExpressionInput`<sup>Optional</sup> <a name="triggerExpressionInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpressionInput"></a>

```java
public java.lang.String getTriggerExpressionInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `facetMatchingBehavior`<sup>Required</sup> <a name="facetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehavior"></a>

```java
public java.lang.String getFacetMatchingBehavior();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

---

##### `runbookUrl`<sup>Required</sup> <a name="runbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

---

##### `thresholdDuration`<sup>Required</sup> <a name="thresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDuration"></a>

```java
public java.lang.Number getThresholdDuration();
```

- *Type:* java.lang.Number

---

##### `triggerExpression`<sup>Required</sup> <a name="triggerExpression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpression"></a>

```java
public java.lang.String getTriggerExpression();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlertCompoundConditionComponentConditions <a name="AlertCompoundConditionComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.Initializer"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundConditionComponentConditions;

AlertCompoundConditionComponentConditions.builder()
    .alias(java.lang.String)
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.alias">alias</a></code> | <code>java.lang.String</code> | The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C'). |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the existing alert condition to use as a component. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#alias AlertCompoundCondition#alias}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the existing alert condition to use as a component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AlertCompoundConditionConfig <a name="AlertCompoundConditionConfig" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundConditionConfig;

AlertCompoundConditionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .componentConditions(IResolvable|java.util.List<AlertCompoundConditionComponentConditions>)
    .enabled(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .policyId(java.lang.Number)
    .triggerExpression(java.lang.String)
//  .accountId(java.lang.Number)
//  .facetMatchingBehavior(java.lang.String)
//  .id(java.lang.String)
//  .runbookUrl(java.lang.String)
//  .thresholdDuration(java.lang.Number)
//  .timeouts(AlertCompoundConditionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.componentConditions">componentConditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>></code> | component_conditions block. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The title of the compound alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.triggerExpression">triggerExpression</a></code> | <code>java.lang.String</code> | Expression that defines how component condition evaluations are combined. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID for managing your compound alert conditions. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.facetMatchingBehavior">facetMatchingBehavior</a></code> | <code>java.lang.String</code> | How the compound condition will take into account the component conditions' facets during evaluation. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.thresholdDuration">thresholdDuration</a></code> | <code>java.lang.Number</code> | The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `componentConditions`<sup>Required</sup> <a name="componentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.componentConditions"></a>

```java
public IResolvable|java.util.List<AlertCompoundConditionComponentConditions> getComponentConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>>

component_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#component_conditions AlertCompoundCondition#component_conditions}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#enabled AlertCompoundCondition#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The title of the compound alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#name AlertCompoundCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#policy_id AlertCompoundCondition#policy_id}

---

##### `triggerExpression`<sup>Required</sup> <a name="triggerExpression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.triggerExpression"></a>

```java
public java.lang.String getTriggerExpression();
```

- *Type:* java.lang.String

Expression that defines how component condition evaluations are combined.

Valid operators are 'AND', 'OR', 'NOT'. For more complex expressions, use parentheses. Simple example: 'A AND B'. Complex example: 'A AND (B OR C) AND NOT D'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#trigger_expression AlertCompoundCondition#trigger_expression}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID for managing your compound alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#account_id AlertCompoundCondition#account_id}

---

##### `facetMatchingBehavior`<sup>Optional</sup> <a name="facetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.facetMatchingBehavior"></a>

```java
public java.lang.String getFacetMatchingBehavior();
```

- *Type:* java.lang.String

How the compound condition will take into account the component conditions' facets during evaluation.

Valid values: 'FACETS_IGNORED' (default) - facets are not taken into consideration when determining when the compound alert condition activates; 'FACETS_MATCH' - the compound alert condition will activate only when shared facets have matching values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#facet_matching_behavior AlertCompoundCondition#facet_matching_behavior}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#runbook_url AlertCompoundCondition#runbook_url}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="thresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.thresholdDuration"></a>

```java
public java.lang.Number getThresholdDuration();
```

- *Type:* java.lang.Number

The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate.

Between 30-86400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#threshold_duration AlertCompoundCondition#threshold_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.timeouts"></a>

```java
public AlertCompoundConditionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#timeouts AlertCompoundCondition#timeouts}

---

### AlertCompoundConditionTimeouts <a name="AlertCompoundConditionTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundConditionTimeouts;

AlertCompoundConditionTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertCompoundConditionComponentConditionsList <a name="AlertCompoundConditionComponentConditionsList" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundConditionComponentConditionsList;

new AlertCompoundConditionComponentConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get"></a>

```java
public AlertCompoundConditionComponentConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AlertCompoundConditionComponentConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>>

---


### AlertCompoundConditionComponentConditionsOutputReference <a name="AlertCompoundConditionComponentConditionsOutputReference" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundConditionComponentConditionsOutputReference;

new AlertCompoundConditionComponentConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AlertCompoundConditionComponentConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>

---


### AlertCompoundConditionTimeoutsOutputReference <a name="AlertCompoundConditionTimeoutsOutputReference" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.alert_compound_condition.AlertCompoundConditionTimeoutsOutputReference;

new AlertCompoundConditionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AlertCompoundConditionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---



