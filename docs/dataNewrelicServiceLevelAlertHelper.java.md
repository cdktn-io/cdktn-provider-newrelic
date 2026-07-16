# `dataNewrelicServiceLevelAlertHelper` Submodule <a name="`dataNewrelicServiceLevelAlertHelper` Submodule" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicServiceLevelAlertHelper <a name="DataNewrelicServiceLevelAlertHelper" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper newrelic_service_level_alert_helper}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_service_level_alert_helper.DataNewrelicServiceLevelAlertHelper;

DataNewrelicServiceLevelAlertHelper.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alertType(java.lang.String)
    .sliGuid(java.lang.String)
    .sloPeriod(java.lang.Number)
    .sloTarget(java.lang.Number)
//  .customEvaluationPeriod(java.lang.Number)
//  .customToleratedBudgetConsumption(java.lang.Number)
//  .id(java.lang.String)
//  .isBadEvents(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.alertType">alertType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#alert_type DataNewrelicServiceLevelAlertHelper#alert_type}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.sliGuid">sliGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#sli_guid DataNewrelicServiceLevelAlertHelper#sli_guid}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.sloPeriod">sloPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#slo_period DataNewrelicServiceLevelAlertHelper#slo_period}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.sloTarget">sloTarget</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#slo_target DataNewrelicServiceLevelAlertHelper#slo_target}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.customEvaluationPeriod">customEvaluationPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#custom_evaluation_period DataNewrelicServiceLevelAlertHelper#custom_evaluation_period}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.customToleratedBudgetConsumption">customToleratedBudgetConsumption</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#custom_tolerated_budget_consumption DataNewrelicServiceLevelAlertHelper#custom_tolerated_budget_consumption}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#id DataNewrelicServiceLevelAlertHelper#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.isBadEvents">isBadEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#is_bad_events DataNewrelicServiceLevelAlertHelper#is_bad_events}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.alertType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#alert_type DataNewrelicServiceLevelAlertHelper#alert_type}.

---

##### `sliGuid`<sup>Required</sup> <a name="sliGuid" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.sliGuid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#sli_guid DataNewrelicServiceLevelAlertHelper#sli_guid}.

---

##### `sloPeriod`<sup>Required</sup> <a name="sloPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.sloPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#slo_period DataNewrelicServiceLevelAlertHelper#slo_period}.

---

##### `sloTarget`<sup>Required</sup> <a name="sloTarget" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.sloTarget"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#slo_target DataNewrelicServiceLevelAlertHelper#slo_target}.

---

##### `customEvaluationPeriod`<sup>Optional</sup> <a name="customEvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.customEvaluationPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#custom_evaluation_period DataNewrelicServiceLevelAlertHelper#custom_evaluation_period}.

---

##### `customToleratedBudgetConsumption`<sup>Optional</sup> <a name="customToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.customToleratedBudgetConsumption"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#custom_tolerated_budget_consumption DataNewrelicServiceLevelAlertHelper#custom_tolerated_budget_consumption}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#id DataNewrelicServiceLevelAlertHelper#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isBadEvents`<sup>Optional</sup> <a name="isBadEvents" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.isBadEvents"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#is_bad_events DataNewrelicServiceLevelAlertHelper#is_bad_events}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomEvaluationPeriod">resetCustomEvaluationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomToleratedBudgetConsumption">resetCustomToleratedBudgetConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetIsBadEvents">resetIsBadEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCustomEvaluationPeriod` <a name="resetCustomEvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomEvaluationPeriod"></a>

```java
public void resetCustomEvaluationPeriod()
```

##### `resetCustomToleratedBudgetConsumption` <a name="resetCustomToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomToleratedBudgetConsumption"></a>

```java
public void resetCustomToleratedBudgetConsumption()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetId"></a>

```java
public void resetId()
```

##### `resetIsBadEvents` <a name="resetIsBadEvents" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetIsBadEvents"></a>

```java
public void resetIsBadEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicServiceLevelAlertHelper resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_service_level_alert_helper.DataNewrelicServiceLevelAlertHelper;

DataNewrelicServiceLevelAlertHelper.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_service_level_alert_helper.DataNewrelicServiceLevelAlertHelper;

DataNewrelicServiceLevelAlertHelper.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformDataSource"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_service_level_alert_helper.DataNewrelicServiceLevelAlertHelper;

DataNewrelicServiceLevelAlertHelper.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_service_level_alert_helper.DataNewrelicServiceLevelAlertHelper;

DataNewrelicServiceLevelAlertHelper.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataNewrelicServiceLevelAlertHelper.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataNewrelicServiceLevelAlertHelper resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataNewrelicServiceLevelAlertHelper to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataNewrelicServiceLevelAlertHelper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicServiceLevelAlertHelper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.evaluationPeriod">evaluationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.nrql">nrql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.toleratedBudgetConsumption">toleratedBudgetConsumption</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertTypeInput">alertTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriodInput">customEvaluationPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumptionInput">customToleratedBudgetConsumptionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEventsInput">isBadEventsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuidInput">sliGuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriodInput">sloPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTargetInput">sloTargetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertType">alertType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriod">customEvaluationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumption">customToleratedBudgetConsumption</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEvents">isBadEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuid">sliGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriod">sloPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTarget">sloTarget</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `evaluationPeriod`<sup>Required</sup> <a name="evaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.evaluationPeriod"></a>

```java
public java.lang.Number getEvaluationPeriod();
```

- *Type:* java.lang.Number

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.nrql"></a>

```java
public java.lang.String getNrql();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `toleratedBudgetConsumption`<sup>Required</sup> <a name="toleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.toleratedBudgetConsumption"></a>

```java
public java.lang.Number getToleratedBudgetConsumption();
```

- *Type:* java.lang.Number

---

##### `alertTypeInput`<sup>Optional</sup> <a name="alertTypeInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertTypeInput"></a>

```java
public java.lang.String getAlertTypeInput();
```

- *Type:* java.lang.String

---

##### `customEvaluationPeriodInput`<sup>Optional</sup> <a name="customEvaluationPeriodInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriodInput"></a>

```java
public java.lang.Number getCustomEvaluationPeriodInput();
```

- *Type:* java.lang.Number

---

##### `customToleratedBudgetConsumptionInput`<sup>Optional</sup> <a name="customToleratedBudgetConsumptionInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumptionInput"></a>

```java
public java.lang.Number getCustomToleratedBudgetConsumptionInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isBadEventsInput`<sup>Optional</sup> <a name="isBadEventsInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getIsBadEventsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sliGuidInput`<sup>Optional</sup> <a name="sliGuidInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuidInput"></a>

```java
public java.lang.String getSliGuidInput();
```

- *Type:* java.lang.String

---

##### `sloPeriodInput`<sup>Optional</sup> <a name="sloPeriodInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriodInput"></a>

```java
public java.lang.Number getSloPeriodInput();
```

- *Type:* java.lang.Number

---

##### `sloTargetInput`<sup>Optional</sup> <a name="sloTargetInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTargetInput"></a>

```java
public java.lang.Number getSloTargetInput();
```

- *Type:* java.lang.Number

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertType"></a>

```java
public java.lang.String getAlertType();
```

- *Type:* java.lang.String

---

##### `customEvaluationPeriod`<sup>Required</sup> <a name="customEvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriod"></a>

```java
public java.lang.Number getCustomEvaluationPeriod();
```

- *Type:* java.lang.Number

---

##### `customToleratedBudgetConsumption`<sup>Required</sup> <a name="customToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumption"></a>

```java
public java.lang.Number getCustomToleratedBudgetConsumption();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isBadEvents`<sup>Required</sup> <a name="isBadEvents" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEvents"></a>

```java
public java.lang.Boolean|IResolvable getIsBadEvents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sliGuid`<sup>Required</sup> <a name="sliGuid" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuid"></a>

```java
public java.lang.String getSliGuid();
```

- *Type:* java.lang.String

---

##### `sloPeriod`<sup>Required</sup> <a name="sloPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriod"></a>

```java
public java.lang.Number getSloPeriod();
```

- *Type:* java.lang.Number

---

##### `sloTarget`<sup>Required</sup> <a name="sloTarget" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTarget"></a>

```java
public java.lang.Number getSloTarget();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicServiceLevelAlertHelperConfig <a name="DataNewrelicServiceLevelAlertHelperConfig" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_service_level_alert_helper.DataNewrelicServiceLevelAlertHelperConfig;

DataNewrelicServiceLevelAlertHelperConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alertType(java.lang.String)
    .sliGuid(java.lang.String)
    .sloPeriod(java.lang.Number)
    .sloTarget(java.lang.Number)
//  .customEvaluationPeriod(java.lang.Number)
//  .customToleratedBudgetConsumption(java.lang.Number)
//  .id(java.lang.String)
//  .isBadEvents(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.alertType">alertType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#alert_type DataNewrelicServiceLevelAlertHelper#alert_type}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sliGuid">sliGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#sli_guid DataNewrelicServiceLevelAlertHelper#sli_guid}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloPeriod">sloPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#slo_period DataNewrelicServiceLevelAlertHelper#slo_period}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloTarget">sloTarget</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#slo_target DataNewrelicServiceLevelAlertHelper#slo_target}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customEvaluationPeriod">customEvaluationPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#custom_evaluation_period DataNewrelicServiceLevelAlertHelper#custom_evaluation_period}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customToleratedBudgetConsumption">customToleratedBudgetConsumption</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#custom_tolerated_budget_consumption DataNewrelicServiceLevelAlertHelper#custom_tolerated_budget_consumption}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#id DataNewrelicServiceLevelAlertHelper#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.isBadEvents">isBadEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#is_bad_events DataNewrelicServiceLevelAlertHelper#is_bad_events}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.alertType"></a>

```java
public java.lang.String getAlertType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#alert_type DataNewrelicServiceLevelAlertHelper#alert_type}.

---

##### `sliGuid`<sup>Required</sup> <a name="sliGuid" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sliGuid"></a>

```java
public java.lang.String getSliGuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#sli_guid DataNewrelicServiceLevelAlertHelper#sli_guid}.

---

##### `sloPeriod`<sup>Required</sup> <a name="sloPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloPeriod"></a>

```java
public java.lang.Number getSloPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#slo_period DataNewrelicServiceLevelAlertHelper#slo_period}.

---

##### `sloTarget`<sup>Required</sup> <a name="sloTarget" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloTarget"></a>

```java
public java.lang.Number getSloTarget();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#slo_target DataNewrelicServiceLevelAlertHelper#slo_target}.

---

##### `customEvaluationPeriod`<sup>Optional</sup> <a name="customEvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customEvaluationPeriod"></a>

```java
public java.lang.Number getCustomEvaluationPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#custom_evaluation_period DataNewrelicServiceLevelAlertHelper#custom_evaluation_period}.

---

##### `customToleratedBudgetConsumption`<sup>Optional</sup> <a name="customToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customToleratedBudgetConsumption"></a>

```java
public java.lang.Number getCustomToleratedBudgetConsumption();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#custom_tolerated_budget_consumption DataNewrelicServiceLevelAlertHelper#custom_tolerated_budget_consumption}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#id DataNewrelicServiceLevelAlertHelper#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isBadEvents`<sup>Optional</sup> <a name="isBadEvents" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.isBadEvents"></a>

```java
public java.lang.Boolean|IResolvable getIsBadEvents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.1/docs/data-sources/service_level_alert_helper#is_bad_events DataNewrelicServiceLevelAlertHelper#is_bad_events}.

---



