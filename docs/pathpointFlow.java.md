# `pathpointFlow` Submodule <a name="`pathpointFlow` Submodule" id="@cdktn/provider-newrelic.pathpointFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PathpointFlow <a name="PathpointFlow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow newrelic_pathpoint_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlow;

PathpointFlow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accountId(java.lang.Number)
//  .category(java.lang.String)
//  .description(java.lang.String)
//  .healthRollup(java.lang.String)
//  .id(java.lang.String)
//  .kpis(IResolvable|java.util.List<PathpointFlowKpis>)
//  .refreshInterval(java.lang.String)
//  .stages(IResolvable|java.util.List<PathpointFlowStages>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Display name of the Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID that owns this Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.category">category</a></code> | <code>java.lang.String</code> | Optional category used to group flows (e.g. Marketing, Checkout). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional description of the flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.healthRollup">healthRollup</a></code> | <code>java.lang.String</code> | Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#id PathpointFlow#id}. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.kpis">kpis</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>></code> | kpis block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.stages">stages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>></code> | stages block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Display name of the Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID that owns this Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.category"></a>

- *Type:* java.lang.String

Optional category used to group flows (e.g. Marketing, Checkout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional description of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

##### `healthRollup`<sup>Optional</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.healthRollup"></a>

- *Type:* java.lang.String

Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#id PathpointFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpis`<sup>Optional</sup> <a name="kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.kpis"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>>

kpis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#kpis PathpointFlow#kpis}

---

##### `refreshInterval`<sup>Optional</sup> <a name="refreshInterval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.refreshInterval"></a>

- *Type:* java.lang.String

How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#refresh_interval PathpointFlow#refresh_interval}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.stages"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>>

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#stages PathpointFlow#stages}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis">putKpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetHealthRollup">resetHealthRollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetKpis">resetKpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetRefreshInterval">resetRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetStages">resetStages</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKpis` <a name="putKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis"></a>

```java
public void putKpis(IResolvable|java.util.List<PathpointFlowKpis> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>>

---

##### `putStages` <a name="putStages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages"></a>

```java
public void putStages(IResolvable|java.util.List<PathpointFlowStages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHealthRollup` <a name="resetHealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetHealthRollup"></a>

```java
public void resetHealthRollup()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetId"></a>

```java
public void resetId()
```

##### `resetKpis` <a name="resetKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetKpis"></a>

```java
public void resetKpis()
```

##### `resetRefreshInterval` <a name="resetRefreshInterval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetRefreshInterval"></a>

```java
public void resetRefreshInterval()
```

##### `resetStages` <a name="resetStages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetStages"></a>

```java
public void resetStages()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PathpointFlow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlow;

PathpointFlow.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlow;

PathpointFlow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlow;

PathpointFlow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlow;

PathpointFlow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PathpointFlow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PathpointFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PathpointFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PathpointFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PathpointFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpis">kpis</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList">PathpointFlowKpisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList">PathpointFlowStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollupInput">healthRollupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpisInput">kpisInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stagesInput">stagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollup">healthRollup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `kpis`<sup>Required</sup> <a name="kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpis"></a>

```java
public PathpointFlowKpisList getKpis();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList">PathpointFlowKpisList</a>

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stages"></a>

```java
public PathpointFlowStagesList getStages();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList">PathpointFlowStagesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `healthRollupInput`<sup>Optional</sup> <a name="healthRollupInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollupInput"></a>

```java
public java.lang.String getHealthRollupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kpisInput`<sup>Optional</sup> <a name="kpisInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpisInput"></a>

```java
public IResolvable|java.util.List<PathpointFlowKpis> getKpisInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshIntervalInput"></a>

```java
public java.lang.String getRefreshIntervalInput();
```

- *Type:* java.lang.String

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stagesInput"></a>

```java
public IResolvable|java.util.List<PathpointFlowStages> getStagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `healthRollup`<sup>Required</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollup"></a>

```java
public java.lang.String getHealthRollup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PathpointFlowConfig <a name="PathpointFlowConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowConfig;

PathpointFlowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accountId(java.lang.Number)
//  .category(java.lang.String)
//  .description(java.lang.String)
//  .healthRollup(java.lang.String)
//  .id(java.lang.String)
//  .kpis(IResolvable|java.util.List<PathpointFlowKpis>)
//  .refreshInterval(java.lang.String)
//  .stages(IResolvable|java.util.List<PathpointFlowStages>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.name">name</a></code> | <code>java.lang.String</code> | Display name of the Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID that owns this Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.category">category</a></code> | <code>java.lang.String</code> | Optional category used to group flows (e.g. Marketing, Checkout). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional description of the flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.healthRollup">healthRollup</a></code> | <code>java.lang.String</code> | Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#id PathpointFlow#id}. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.kpis">kpis</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>></code> | kpis block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.stages">stages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>></code> | stages block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Display name of the Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID that owns this Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Optional category used to group flows (e.g. Marketing, Checkout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

##### `healthRollup`<sup>Optional</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.healthRollup"></a>

```java
public java.lang.String getHealthRollup();
```

- *Type:* java.lang.String

Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#id PathpointFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpis`<sup>Optional</sup> <a name="kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.kpis"></a>

```java
public IResolvable|java.util.List<PathpointFlowKpis> getKpis();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>>

kpis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#kpis PathpointFlow#kpis}

---

##### `refreshInterval`<sup>Optional</sup> <a name="refreshInterval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#refresh_interval PathpointFlow#refresh_interval}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.stages"></a>

```java
public IResolvable|java.util.List<PathpointFlowStages> getStages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>>

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#stages PathpointFlow#stages}

---

### PathpointFlowKpis <a name="PathpointFlowKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpis;

PathpointFlowKpis.builder()
    .name(java.lang.String)
    .query(PathpointFlowKpisQuery)
//  .accountId(java.lang.Number)
//  .category(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.name">name</a></code> | <code>java.lang.String</code> | Display name of the KPI. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | Account ID this KPI belongs to. Defaults to the flow's account_id. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.category">category</a></code> | <code>java.lang.String</code> | Optional category to group KPIs. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.description">description</a></code> | <code>java.lang.String</code> | Optional description. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Display name of the KPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.query"></a>

```java
public PathpointFlowKpisQuery getQuery();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

Account ID this KPI belongs to. Defaults to the flow's account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Optional category to group KPIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

### PathpointFlowKpisQuery <a name="PathpointFlowKpisQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpisQuery;

PathpointFlowKpisQuery.builder()
    .from(java.lang.String)
    .select(PathpointFlowKpisQuerySelect)
//  .timeWindow(PathpointFlowKpisQueryTimeWindow)
//  .where(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.from">from</a></code> | <code>java.lang.String</code> | Data source to query from (e.g., Transaction, Metric, Log). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | select block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.where">where</a></code> | <code>java.lang.String</code> | Optional WHERE clause to filter data. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Data source to query from (e.g., Transaction, Metric, Log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#from PathpointFlow#from}

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.select"></a>

```java
public PathpointFlowKpisQuerySelect getSelect();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#select PathpointFlow#select}

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.timeWindow"></a>

```java
public PathpointFlowKpisQueryTimeWindow getTimeWindow();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

Optional WHERE clause to filter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#where PathpointFlow#where}

---

### PathpointFlowKpisQuerySelect <a name="PathpointFlowKpisQuerySelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpisQuerySelect;

PathpointFlowKpisQuerySelect.builder()
    .aggregationType(java.lang.String)
//  .alias(java.lang.String)
//  .attribute(java.lang.String)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.aggregationType">aggregationType</a></code> | <code>java.lang.String</code> | Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.alias">alias</a></code> | <code>java.lang.String</code> | Optional alias for the aggregated value. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Attribute name to aggregate. Required for all functions except COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Threshold used in the selected function. |

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.aggregationType"></a>

```java
public java.lang.String getAggregationType();
```

- *Type:* java.lang.String

Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Optional alias for the aggregated value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#alias PathpointFlow#alias}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Attribute name to aggregate. Required for all functions except COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Threshold used in the selected function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}

---

### PathpointFlowKpisQueryTimeWindow <a name="PathpointFlowKpisQueryTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpisQueryTimeWindow;

PathpointFlowKpisQueryTimeWindow.builder()
//  .customRange(java.lang.String)
//  .relativeRange(PathpointFlowKpisQueryTimeWindowRelativeRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.customRange">customRange</a></code> | <code>java.lang.String</code> | Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.relativeRange">relativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | relative_range block. |

---

##### `customRange`<sup>Optional</sup> <a name="customRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.customRange"></a>

```java
public java.lang.String getCustomRange();
```

- *Type:* java.lang.String

Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}

---

##### `relativeRange`<sup>Optional</sup> <a name="relativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.relativeRange"></a>

```java
public PathpointFlowKpisQueryTimeWindowRelativeRange getRelativeRange();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

relative_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}

---

### PathpointFlowKpisQueryTimeWindowRelativeRange <a name="PathpointFlowKpisQueryTimeWindowRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpisQueryTimeWindowRelativeRange;

PathpointFlowKpisQueryTimeWindowRelativeRange.builder()
    .since(java.lang.String)
//  .compareAgainst(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.since">since</a></code> | <code>java.lang.String</code> | How far back the KPI is evaluated. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.compareAgainst">compareAgainst</a></code> | <code>java.lang.String</code> | The earlier window to compare against. |

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.since"></a>

```java
public java.lang.String getSince();
```

- *Type:* java.lang.String

How far back the KPI is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#since PathpointFlow#since}

---

##### `compareAgainst`<sup>Optional</sup> <a name="compareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.compareAgainst"></a>

```java
public java.lang.String getCompareAgainst();
```

- *Type:* java.lang.String

The earlier window to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}

---

### PathpointFlowStages <a name="PathpointFlowStages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStages;

PathpointFlowStages.builder()
    .name(java.lang.String)
//  .healthRollup(java.lang.String)
//  .isExcluded(java.lang.Boolean|IResolvable)
//  .levels(IResolvable|java.util.List<PathpointFlowStagesLevels>)
//  .link(java.lang.String)
//  .related(PathpointFlowStagesRelated)
//  .stageKpis(IResolvable|java.util.List<PathpointFlowStagesStageKpis>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.name">name</a></code> | <code>java.lang.String</code> | Display name of the stage. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.healthRollup">healthRollup</a></code> | <code>java.lang.String</code> | Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.isExcluded">isExcluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, this stage is excluded from flow health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.levels">levels</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>></code> | levels block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.link">link</a></code> | <code>java.lang.String</code> | Optional URL to an external resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.related">related</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | related block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.stageKpis">stageKpis</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>></code> | stage_kpis block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Display name of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `healthRollup`<sup>Optional</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.healthRollup"></a>

```java
public java.lang.String getHealthRollup();
```

- *Type:* java.lang.String

Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `isExcluded`<sup>Optional</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.isExcluded"></a>

```java
public java.lang.Boolean|IResolvable getIsExcluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, this stage is excluded from flow health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `levels`<sup>Optional</sup> <a name="levels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.levels"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesLevels> getLevels();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>>

levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#levels PathpointFlow#levels}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

Optional URL to an external resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#link PathpointFlow#link}

---

##### `related`<sup>Optional</sup> <a name="related" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.related"></a>

```java
public PathpointFlowStagesRelated getRelated();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

related block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#related PathpointFlow#related}

---

##### `stageKpis`<sup>Optional</sup> <a name="stageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.stageKpis"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesStageKpis> getStageKpis();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>>

stage_kpis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#stage_kpis PathpointFlow#stage_kpis}

---

### PathpointFlowStagesLevels <a name="PathpointFlowStagesLevels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevels;

PathpointFlowStagesLevels.builder()
//  .steps(IResolvable|java.util.List<PathpointFlowStagesLevelsSteps>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.property.steps">steps</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>></code> | steps block. |

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.property.steps"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesLevelsSteps> getSteps();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>>

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#steps PathpointFlow#steps}

---

### PathpointFlowStagesLevelsSteps <a name="PathpointFlowStagesLevelsSteps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsSteps;

PathpointFlowStagesLevelsSteps.builder()
    .name(java.lang.String)
//  .config(PathpointFlowStagesLevelsStepsConfig)
//  .entitySearchQuery(PathpointFlowStagesLevelsStepsEntitySearchQuery)
//  .isExcluded(java.lang.Boolean|IResolvable)
//  .link(java.lang.String)
//  .scopedAccounts(java.util.List<java.lang.Number>)
//  .signals(IResolvable|java.util.List<PathpointFlowStagesLevelsStepsSignals>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.name">name</a></code> | <code>java.lang.String</code> | Display name of the step. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.entitySearchQuery">entitySearchQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | entity_search_query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.isExcluded">isExcluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, this step is excluded from level health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.link">link</a></code> | <code>java.lang.String</code> | Optional URL to an external resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.scopedAccounts">scopedAccounts</a></code> | <code>java.util.List<java.lang.Number></code> | Account IDs whose data is scoped to this step. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.signals">signals</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>></code> | signals block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Display name of the step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.config"></a>

```java
public PathpointFlowStagesLevelsStepsConfig getConfig();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#config PathpointFlow#config}

---

##### `entitySearchQuery`<sup>Optional</sup> <a name="entitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.entitySearchQuery"></a>

```java
public PathpointFlowStagesLevelsStepsEntitySearchQuery getEntitySearchQuery();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

entity_search_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#entity_search_query PathpointFlow#entity_search_query}

---

##### `isExcluded`<sup>Optional</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.isExcluded"></a>

```java
public java.lang.Boolean|IResolvable getIsExcluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, this step is excluded from level health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

Optional URL to an external resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#link PathpointFlow#link}

---

##### `scopedAccounts`<sup>Optional</sup> <a name="scopedAccounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.scopedAccounts"></a>

```java
public java.util.List<java.lang.Number> getScopedAccounts();
```

- *Type:* java.util.List<java.lang.Number>

Account IDs whose data is scoped to this step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#scoped_accounts PathpointFlow#scoped_accounts}

---

##### `signals`<sup>Optional</sup> <a name="signals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.signals"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesLevelsStepsSignals> getSignals();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>>

signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#signals PathpointFlow#signals}

---

### PathpointFlowStagesLevelsStepsConfig <a name="PathpointFlowStagesLevelsStepsConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsStepsConfig;

PathpointFlowStagesLevelsStepsConfig.builder()
//  .healthRollup(java.lang.String)
//  .thresholdType(java.lang.String)
//  .thresholdValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.healthRollup">healthRollup</a></code> | <code>java.lang.String</code> | How step health is rolled up: BEST_STATUS_WINS or WORST_STATUS_WINS. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdType">thresholdType</a></code> | <code>java.lang.String</code> | Whether threshold is FIXED or PERCENTAGE. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdValue">thresholdValue</a></code> | <code>java.lang.Number</code> | Numeric threshold value for step health evaluation. |

---

##### `healthRollup`<sup>Optional</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.healthRollup"></a>

```java
public java.lang.String getHealthRollup();
```

- *Type:* java.lang.String

How step health is rolled up: BEST_STATUS_WINS or WORST_STATUS_WINS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `thresholdType`<sup>Optional</sup> <a name="thresholdType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdType"></a>

```java
public java.lang.String getThresholdType();
```

- *Type:* java.lang.String

Whether threshold is FIXED or PERCENTAGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#threshold_type PathpointFlow#threshold_type}

---

##### `thresholdValue`<sup>Optional</sup> <a name="thresholdValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdValue"></a>

```java
public java.lang.Number getThresholdValue();
```

- *Type:* java.lang.Number

Numeric threshold value for step health evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#threshold_value PathpointFlow#threshold_value}

---

### PathpointFlowStagesLevelsStepsEntitySearchQuery <a name="PathpointFlowStagesLevelsStepsEntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsStepsEntitySearchQuery;

PathpointFlowStagesLevelsStepsEntitySearchQuery.builder()
    .query(java.lang.String)
//  .isExcluded(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.query">query</a></code> | <code>java.lang.String</code> | Filter query for signals, e.g. domain='NR1' AND type='APPLICATION'. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.isExcluded">isExcluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, this query is excluded from health calculation. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Filter query for signals, e.g. domain='NR1' AND type='APPLICATION'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `isExcluded`<sup>Optional</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.isExcluded"></a>

```java
public java.lang.Boolean|IResolvable getIsExcluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, this query is excluded from health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

### PathpointFlowStagesLevelsStepsSignals <a name="PathpointFlowStagesLevelsStepsSignals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsStepsSignals;

PathpointFlowStagesLevelsStepsSignals.builder()
    .guid(java.lang.String)
//  .isExcluded(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.guid">guid</a></code> | <code>java.lang.String</code> | Entity GUID of the signal. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.isExcluded">isExcluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, this signal is excluded from step health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.name">name</a></code> | <code>java.lang.String</code> | Display name of the signal. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.type">type</a></code> | <code>java.lang.String</code> | Whether this GUID belongs to an entity or an alert condition: ENTITY or ALERT. |

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

Entity GUID of the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#guid PathpointFlow#guid}

---

##### `isExcluded`<sup>Optional</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.isExcluded"></a>

```java
public java.lang.Boolean|IResolvable getIsExcluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, this signal is excluded from step health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Display name of the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Whether this GUID belongs to an entity or an alert condition: ENTITY or ALERT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#type PathpointFlow#type}

---

### PathpointFlowStagesRelated <a name="PathpointFlowStagesRelated" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesRelated;

PathpointFlowStagesRelated.builder()
//  .source(java.lang.Boolean|IResolvable)
//  .target(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.source">source</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, this stage acts as a source to other stages. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.target">target</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, this stage acts as a target to other stages. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.source"></a>

```java
public java.lang.Boolean|IResolvable getSource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, this stage acts as a source to other stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#source PathpointFlow#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.target"></a>

```java
public java.lang.Boolean|IResolvable getTarget();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, this stage acts as a target to other stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#target PathpointFlow#target}

---

### PathpointFlowStagesStageKpis <a name="PathpointFlowStagesStageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpis;

PathpointFlowStagesStageKpis.builder()
    .name(java.lang.String)
    .query(PathpointFlowStagesStageKpisQuery)
//  .accountId(java.lang.Number)
//  .category(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.name">name</a></code> | <code>java.lang.String</code> | Display name of the KPI. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | Account ID this KPI belongs to. Defaults to the flow's account_id. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.category">category</a></code> | <code>java.lang.String</code> | Optional category to group KPIs. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.description">description</a></code> | <code>java.lang.String</code> | Optional description. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Display name of the KPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.query"></a>

```java
public PathpointFlowStagesStageKpisQuery getQuery();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

Account ID this KPI belongs to. Defaults to the flow's account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Optional category to group KPIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

### PathpointFlowStagesStageKpisQuery <a name="PathpointFlowStagesStageKpisQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpisQuery;

PathpointFlowStagesStageKpisQuery.builder()
    .from(java.lang.String)
    .select(PathpointFlowStagesStageKpisQuerySelect)
//  .timeWindow(PathpointFlowStagesStageKpisQueryTimeWindow)
//  .where(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.from">from</a></code> | <code>java.lang.String</code> | Data source to query from (e.g., Transaction, Metric, Log). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | select block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.where">where</a></code> | <code>java.lang.String</code> | Optional WHERE clause to filter data. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Data source to query from (e.g., Transaction, Metric, Log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#from PathpointFlow#from}

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.select"></a>

```java
public PathpointFlowStagesStageKpisQuerySelect getSelect();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#select PathpointFlow#select}

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.timeWindow"></a>

```java
public PathpointFlowStagesStageKpisQueryTimeWindow getTimeWindow();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

Optional WHERE clause to filter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#where PathpointFlow#where}

---

### PathpointFlowStagesStageKpisQuerySelect <a name="PathpointFlowStagesStageKpisQuerySelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpisQuerySelect;

PathpointFlowStagesStageKpisQuerySelect.builder()
    .aggregationType(java.lang.String)
//  .alias(java.lang.String)
//  .attribute(java.lang.String)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.aggregationType">aggregationType</a></code> | <code>java.lang.String</code> | Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.alias">alias</a></code> | <code>java.lang.String</code> | Optional alias for the aggregated value. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Attribute name to aggregate. Required for all functions except COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Threshold used in the selected function. |

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.aggregationType"></a>

```java
public java.lang.String getAggregationType();
```

- *Type:* java.lang.String

Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Optional alias for the aggregated value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#alias PathpointFlow#alias}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Attribute name to aggregate. Required for all functions except COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Threshold used in the selected function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}

---

### PathpointFlowStagesStageKpisQueryTimeWindow <a name="PathpointFlowStagesStageKpisQueryTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpisQueryTimeWindow;

PathpointFlowStagesStageKpisQueryTimeWindow.builder()
//  .customRange(java.lang.String)
//  .relativeRange(PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.customRange">customRange</a></code> | <code>java.lang.String</code> | Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.relativeRange">relativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | relative_range block. |

---

##### `customRange`<sup>Optional</sup> <a name="customRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.customRange"></a>

```java
public java.lang.String getCustomRange();
```

- *Type:* java.lang.String

Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}

---

##### `relativeRange`<sup>Optional</sup> <a name="relativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.relativeRange"></a>

```java
public PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange getRelativeRange();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

relative_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}

---

### PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange <a name="PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange;

PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.builder()
    .since(java.lang.String)
//  .compareAgainst(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.since">since</a></code> | <code>java.lang.String</code> | How far back the KPI is evaluated. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.compareAgainst">compareAgainst</a></code> | <code>java.lang.String</code> | The earlier window to compare against. |

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.since"></a>

```java
public java.lang.String getSince();
```

- *Type:* java.lang.String

How far back the KPI is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#since PathpointFlow#since}

---

##### `compareAgainst`<sup>Optional</sup> <a name="compareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.compareAgainst"></a>

```java
public java.lang.String getCompareAgainst();
```

- *Type:* java.lang.String

The earlier window to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}

---

## Classes <a name="Classes" id="Classes"></a>

### PathpointFlowKpisList <a name="PathpointFlowKpisList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpisList;

new PathpointFlowKpisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get"></a>

```java
public PathpointFlowKpisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PathpointFlowKpis> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>>

---


### PathpointFlowKpisOutputReference <a name="PathpointFlowKpisOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpisOutputReference;

new PathpointFlowKpisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuery` <a name="putQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery"></a>

```java
public void putQuery(PathpointFlowKpisQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.metricQuery">metricQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference">PathpointFlowKpisQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.queryInput">queryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricQuery`<sup>Required</sup> <a name="metricQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.metricQuery"></a>

```java
public java.lang.String getMetricQuery();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.query"></a>

```java
public PathpointFlowKpisQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference">PathpointFlowKpisQueryOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.queryInput"></a>

```java
public PathpointFlowKpisQuery getQueryInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.internalValue"></a>

```java
public IResolvable|PathpointFlowKpis getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>

---


### PathpointFlowKpisQueryOutputReference <a name="PathpointFlowKpisQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpisQueryOutputReference;

new PathpointFlowKpisQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect">putSelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelect` <a name="putSelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect"></a>

```java
public void putSelect(PathpointFlowKpisQuerySelect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow"></a>

```java
public void putTimeWindow(PathpointFlowKpisQueryTimeWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetTimeWindow"></a>

```java
public void resetTimeWindow()
```

##### `resetWhere` <a name="resetWhere" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetWhere"></a>

```java
public void resetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference">PathpointFlowKpisQuerySelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference">PathpointFlowKpisQueryTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.selectInput">selectInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.whereInput">whereInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.where">where</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.select"></a>

```java
public PathpointFlowKpisQuerySelectOutputReference getSelect();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference">PathpointFlowKpisQuerySelectOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindow"></a>

```java
public PathpointFlowKpisQueryTimeWindowOutputReference getTimeWindow();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference">PathpointFlowKpisQueryTimeWindowOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.selectInput"></a>

```java
public PathpointFlowKpisQuerySelect getSelectInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindowInput"></a>

```java
public PathpointFlowKpisQueryTimeWindow getTimeWindowInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.whereInput"></a>

```java
public java.lang.String getWhereInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.internalValue"></a>

```java
public PathpointFlowKpisQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---


### PathpointFlowKpisQuerySelectOutputReference <a name="PathpointFlowKpisQuerySelectOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpisQuerySelectOutputReference;

new PathpointFlowKpisQuerySelectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationTypeInput">aggregationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationType">aggregationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationTypeInput`<sup>Optional</sup> <a name="aggregationTypeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationTypeInput"></a>

```java
public java.lang.String getAggregationTypeInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationType"></a>

```java
public java.lang.String getAggregationType();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.internalValue"></a>

```java
public PathpointFlowKpisQuerySelect getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---


### PathpointFlowKpisQueryTimeWindowOutputReference <a name="PathpointFlowKpisQueryTimeWindowOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpisQueryTimeWindowOutputReference;

new PathpointFlowKpisQueryTimeWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange">putRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetCustomRange">resetCustomRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetRelativeRange">resetRelativeRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRelativeRange` <a name="putRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange"></a>

```java
public void putRelativeRange(PathpointFlowKpisQueryTimeWindowRelativeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---

##### `resetCustomRange` <a name="resetCustomRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetCustomRange"></a>

```java
public void resetCustomRange()
```

##### `resetRelativeRange` <a name="resetRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetRelativeRange"></a>

```java
public void resetRelativeRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRange">relativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRangeInput">customRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRangeInput">relativeRangeInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRange">customRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relativeRange`<sup>Required</sup> <a name="relativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRange"></a>

```java
public PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference getRelativeRange();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference</a>

---

##### `customRangeInput`<sup>Optional</sup> <a name="customRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRangeInput"></a>

```java
public java.lang.String getCustomRangeInput();
```

- *Type:* java.lang.String

---

##### `relativeRangeInput`<sup>Optional</sup> <a name="relativeRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRangeInput"></a>

```java
public PathpointFlowKpisQueryTimeWindowRelativeRange getRelativeRangeInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---

##### `customRange`<sup>Required</sup> <a name="customRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRange"></a>

```java
public java.lang.String getCustomRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.internalValue"></a>

```java
public PathpointFlowKpisQueryTimeWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---


### PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference <a name="PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference;

new PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst">resetCompareAgainst</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompareAgainst` <a name="resetCompareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst"></a>

```java
public void resetCompareAgainst()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput">compareAgainstInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput">sinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst">compareAgainst</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.since">since</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compareAgainstInput`<sup>Optional</sup> <a name="compareAgainstInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput"></a>

```java
public java.lang.String getCompareAgainstInput();
```

- *Type:* java.lang.String

---

##### `sinceInput`<sup>Optional</sup> <a name="sinceInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput"></a>

```java
public java.lang.String getSinceInput();
```

- *Type:* java.lang.String

---

##### `compareAgainst`<sup>Required</sup> <a name="compareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst"></a>

```java
public java.lang.String getCompareAgainst();
```

- *Type:* java.lang.String

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.since"></a>

```java
public java.lang.String getSince();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue"></a>

```java
public PathpointFlowKpisQueryTimeWindowRelativeRange getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---


### PathpointFlowStagesLevelsList <a name="PathpointFlowStagesLevelsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsList;

new PathpointFlowStagesLevelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get"></a>

```java
public PathpointFlowStagesLevelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesLevels> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>>

---


### PathpointFlowStagesLevelsOutputReference <a name="PathpointFlowStagesLevelsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsOutputReference;

new PathpointFlowStagesLevelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resetSteps">resetSteps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps"></a>

```java
public void putSteps(IResolvable|java.util.List<PathpointFlowStagesLevelsSteps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>>

---

##### `resetSteps` <a name="resetSteps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resetSteps"></a>

```java
public void resetSteps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList">PathpointFlowStagesLevelsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.stepsInput">stepsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.steps"></a>

```java
public PathpointFlowStagesLevelsStepsList getSteps();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList">PathpointFlowStagesLevelsStepsList</a>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.stepsInput"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesLevelsSteps> getStepsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.internalValue"></a>

```java
public IResolvable|PathpointFlowStagesLevels getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>

---


### PathpointFlowStagesLevelsStepsConfigOutputReference <a name="PathpointFlowStagesLevelsStepsConfigOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsStepsConfigOutputReference;

new PathpointFlowStagesLevelsStepsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetHealthRollup">resetHealthRollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdType">resetThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdValue">resetThresholdValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthRollup` <a name="resetHealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetHealthRollup"></a>

```java
public void resetHealthRollup()
```

##### `resetThresholdType` <a name="resetThresholdType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdType"></a>

```java
public void resetThresholdType()
```

##### `resetThresholdValue` <a name="resetThresholdValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdValue"></a>

```java
public void resetThresholdValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollupInput">healthRollupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdTypeInput">thresholdTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValueInput">thresholdValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollup">healthRollup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdType">thresholdType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValue">thresholdValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthRollupInput`<sup>Optional</sup> <a name="healthRollupInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollupInput"></a>

```java
public java.lang.String getHealthRollupInput();
```

- *Type:* java.lang.String

---

##### `thresholdTypeInput`<sup>Optional</sup> <a name="thresholdTypeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdTypeInput"></a>

```java
public java.lang.String getThresholdTypeInput();
```

- *Type:* java.lang.String

---

##### `thresholdValueInput`<sup>Optional</sup> <a name="thresholdValueInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValueInput"></a>

```java
public java.lang.Number getThresholdValueInput();
```

- *Type:* java.lang.Number

---

##### `healthRollup`<sup>Required</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollup"></a>

```java
public java.lang.String getHealthRollup();
```

- *Type:* java.lang.String

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdType"></a>

```java
public java.lang.String getThresholdType();
```

- *Type:* java.lang.String

---

##### `thresholdValue`<sup>Required</sup> <a name="thresholdValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValue"></a>

```java
public java.lang.Number getThresholdValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.internalValue"></a>

```java
public PathpointFlowStagesLevelsStepsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---


### PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference <a name="PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference;

new PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resetIsExcluded">resetIsExcluded</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsExcluded` <a name="resetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resetIsExcluded"></a>

```java
public void resetIsExcluded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcludedInput">isExcludedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcluded">isExcluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isExcludedInput`<sup>Optional</sup> <a name="isExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcludedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsExcludedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `isExcluded`<sup>Required</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcluded"></a>

```java
public java.lang.Boolean|IResolvable getIsExcluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.internalValue"></a>

```java
public PathpointFlowStagesLevelsStepsEntitySearchQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---


### PathpointFlowStagesLevelsStepsList <a name="PathpointFlowStagesLevelsStepsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsStepsList;

new PathpointFlowStagesLevelsStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get"></a>

```java
public PathpointFlowStagesLevelsStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesLevelsSteps> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>>

---


### PathpointFlowStagesLevelsStepsOutputReference <a name="PathpointFlowStagesLevelsStepsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsStepsOutputReference;

new PathpointFlowStagesLevelsStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery">putEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals">putSignals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetEntitySearchQuery">resetEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetIsExcluded">resetIsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetScopedAccounts">resetScopedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetSignals">resetSignals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig"></a>

```java
public void putConfig(PathpointFlowStagesLevelsStepsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---

##### `putEntitySearchQuery` <a name="putEntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery"></a>

```java
public void putEntitySearchQuery(PathpointFlowStagesLevelsStepsEntitySearchQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---

##### `putSignals` <a name="putSignals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals"></a>

```java
public void putSignals(IResolvable|java.util.List<PathpointFlowStagesLevelsStepsSignals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetEntitySearchQuery` <a name="resetEntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetEntitySearchQuery"></a>

```java
public void resetEntitySearchQuery()
```

##### `resetIsExcluded` <a name="resetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetIsExcluded"></a>

```java
public void resetIsExcluded()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetLink"></a>

```java
public void resetLink()
```

##### `resetScopedAccounts` <a name="resetScopedAccounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetScopedAccounts"></a>

```java
public void resetScopedAccounts()
```

##### `resetSignals` <a name="resetSignals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetSignals"></a>

```java
public void resetSignals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference">PathpointFlowStagesLevelsStepsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQuery">entitySearchQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference">PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signals">signals</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList">PathpointFlowStagesLevelsStepsSignalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQueryInput">entitySearchQueryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcludedInput">isExcludedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.linkInput">linkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccountsInput">scopedAccountsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signalsInput">signalsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcluded">isExcluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccounts">scopedAccounts</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.config"></a>

```java
public PathpointFlowStagesLevelsStepsConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference">PathpointFlowStagesLevelsStepsConfigOutputReference</a>

---

##### `entitySearchQuery`<sup>Required</sup> <a name="entitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQuery"></a>

```java
public PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference getEntitySearchQuery();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference">PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `signals`<sup>Required</sup> <a name="signals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signals"></a>

```java
public PathpointFlowStagesLevelsStepsSignalsList getSignals();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList">PathpointFlowStagesLevelsStepsSignalsList</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.configInput"></a>

```java
public PathpointFlowStagesLevelsStepsConfig getConfigInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---

##### `entitySearchQueryInput`<sup>Optional</sup> <a name="entitySearchQueryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQueryInput"></a>

```java
public PathpointFlowStagesLevelsStepsEntitySearchQuery getEntitySearchQueryInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---

##### `isExcludedInput`<sup>Optional</sup> <a name="isExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcludedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsExcludedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.linkInput"></a>

```java
public java.lang.String getLinkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopedAccountsInput`<sup>Optional</sup> <a name="scopedAccountsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccountsInput"></a>

```java
public java.util.List<java.lang.Number> getScopedAccountsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `signalsInput`<sup>Optional</sup> <a name="signalsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signalsInput"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesLevelsStepsSignals> getSignalsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>>

---

##### `isExcluded`<sup>Required</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcluded"></a>

```java
public java.lang.Boolean|IResolvable getIsExcluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopedAccounts`<sup>Required</sup> <a name="scopedAccounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccounts"></a>

```java
public java.util.List<java.lang.Number> getScopedAccounts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.internalValue"></a>

```java
public IResolvable|PathpointFlowStagesLevelsSteps getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>

---


### PathpointFlowStagesLevelsStepsSignalsList <a name="PathpointFlowStagesLevelsStepsSignalsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsStepsSignalsList;

new PathpointFlowStagesLevelsStepsSignalsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get"></a>

```java
public PathpointFlowStagesLevelsStepsSignalsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesLevelsStepsSignals> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>>

---


### PathpointFlowStagesLevelsStepsSignalsOutputReference <a name="PathpointFlowStagesLevelsStepsSignalsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesLevelsStepsSignalsOutputReference;

new PathpointFlowStagesLevelsStepsSignalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetIsExcluded">resetIsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsExcluded` <a name="resetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetIsExcluded"></a>

```java
public void resetIsExcluded()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guidInput">guidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcludedInput">isExcludedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcluded">isExcluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guidInput"></a>

```java
public java.lang.String getGuidInput();
```

- *Type:* java.lang.String

---

##### `isExcludedInput`<sup>Optional</sup> <a name="isExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcludedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsExcludedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `isExcluded`<sup>Required</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcluded"></a>

```java
public java.lang.Boolean|IResolvable getIsExcluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.internalValue"></a>

```java
public IResolvable|PathpointFlowStagesLevelsStepsSignals getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>

---


### PathpointFlowStagesList <a name="PathpointFlowStagesList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesList;

new PathpointFlowStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get"></a>

```java
public PathpointFlowStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PathpointFlowStages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>>

---


### PathpointFlowStagesOutputReference <a name="PathpointFlowStagesOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesOutputReference;

new PathpointFlowStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels">putLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated">putRelated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis">putStageKpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetHealthRollup">resetHealthRollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetIsExcluded">resetIsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLevels">resetLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetRelated">resetRelated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetStageKpis">resetStageKpis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLevels` <a name="putLevels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels"></a>

```java
public void putLevels(IResolvable|java.util.List<PathpointFlowStagesLevels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>>

---

##### `putRelated` <a name="putRelated" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated"></a>

```java
public void putRelated(PathpointFlowStagesRelated value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---

##### `putStageKpis` <a name="putStageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis"></a>

```java
public void putStageKpis(IResolvable|java.util.List<PathpointFlowStagesStageKpis> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>>

---

##### `resetHealthRollup` <a name="resetHealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetHealthRollup"></a>

```java
public void resetHealthRollup()
```

##### `resetIsExcluded` <a name="resetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetIsExcluded"></a>

```java
public void resetIsExcluded()
```

##### `resetLevels` <a name="resetLevels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLevels"></a>

```java
public void resetLevels()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLink"></a>

```java
public void resetLink()
```

##### `resetRelated` <a name="resetRelated" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetRelated"></a>

```java
public void resetRelated()
```

##### `resetStageKpis` <a name="resetStageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetStageKpis"></a>

```java
public void resetStageKpis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levels">levels</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList">PathpointFlowStagesLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.related">related</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference">PathpointFlowStagesRelatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpis">stageKpis</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList">PathpointFlowStagesStageKpisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollupInput">healthRollupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcludedInput">isExcludedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levelsInput">levelsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.linkInput">linkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.relatedInput">relatedInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpisInput">stageKpisInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollup">healthRollup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcluded">isExcluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `levels`<sup>Required</sup> <a name="levels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levels"></a>

```java
public PathpointFlowStagesLevelsList getLevels();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList">PathpointFlowStagesLevelsList</a>

---

##### `related`<sup>Required</sup> <a name="related" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.related"></a>

```java
public PathpointFlowStagesRelatedOutputReference getRelated();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference">PathpointFlowStagesRelatedOutputReference</a>

---

##### `stageKpis`<sup>Required</sup> <a name="stageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpis"></a>

```java
public PathpointFlowStagesStageKpisList getStageKpis();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList">PathpointFlowStagesStageKpisList</a>

---

##### `healthRollupInput`<sup>Optional</sup> <a name="healthRollupInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollupInput"></a>

```java
public java.lang.String getHealthRollupInput();
```

- *Type:* java.lang.String

---

##### `isExcludedInput`<sup>Optional</sup> <a name="isExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcludedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsExcludedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `levelsInput`<sup>Optional</sup> <a name="levelsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levelsInput"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesLevels> getLevelsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>>

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.linkInput"></a>

```java
public java.lang.String getLinkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `relatedInput`<sup>Optional</sup> <a name="relatedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.relatedInput"></a>

```java
public PathpointFlowStagesRelated getRelatedInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---

##### `stageKpisInput`<sup>Optional</sup> <a name="stageKpisInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpisInput"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesStageKpis> getStageKpisInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>>

---

##### `healthRollup`<sup>Required</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollup"></a>

```java
public java.lang.String getHealthRollup();
```

- *Type:* java.lang.String

---

##### `isExcluded`<sup>Required</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcluded"></a>

```java
public java.lang.Boolean|IResolvable getIsExcluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.internalValue"></a>

```java
public IResolvable|PathpointFlowStages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>

---


### PathpointFlowStagesRelatedOutputReference <a name="PathpointFlowStagesRelatedOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesRelatedOutputReference;

new PathpointFlowStagesRelatedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSource` <a name="resetSource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.source">source</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.target">target</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.sourceInput"></a>

```java
public java.lang.Boolean|IResolvable getSourceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.targetInput"></a>

```java
public java.lang.Boolean|IResolvable getTargetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.source"></a>

```java
public java.lang.Boolean|IResolvable getSource();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.target"></a>

```java
public java.lang.Boolean|IResolvable getTarget();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.internalValue"></a>

```java
public PathpointFlowStagesRelated getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---


### PathpointFlowStagesStageKpisList <a name="PathpointFlowStagesStageKpisList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpisList;

new PathpointFlowStagesStageKpisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get"></a>

```java
public PathpointFlowStagesStageKpisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PathpointFlowStagesStageKpis> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>>

---


### PathpointFlowStagesStageKpisOutputReference <a name="PathpointFlowStagesStageKpisOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpisOutputReference;

new PathpointFlowStagesStageKpisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuery` <a name="putQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery"></a>

```java
public void putQuery(PathpointFlowStagesStageKpisQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.metricQuery">metricQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference">PathpointFlowStagesStageKpisQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.queryInput">queryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricQuery`<sup>Required</sup> <a name="metricQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.metricQuery"></a>

```java
public java.lang.String getMetricQuery();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.query"></a>

```java
public PathpointFlowStagesStageKpisQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference">PathpointFlowStagesStageKpisQueryOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.queryInput"></a>

```java
public PathpointFlowStagesStageKpisQuery getQueryInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.internalValue"></a>

```java
public IResolvable|PathpointFlowStagesStageKpis getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>

---


### PathpointFlowStagesStageKpisQueryOutputReference <a name="PathpointFlowStagesStageKpisQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpisQueryOutputReference;

new PathpointFlowStagesStageKpisQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect">putSelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelect` <a name="putSelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect"></a>

```java
public void putSelect(PathpointFlowStagesStageKpisQuerySelect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow"></a>

```java
public void putTimeWindow(PathpointFlowStagesStageKpisQueryTimeWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetTimeWindow"></a>

```java
public void resetTimeWindow()
```

##### `resetWhere` <a name="resetWhere" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetWhere"></a>

```java
public void resetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference">PathpointFlowStagesStageKpisQuerySelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.selectInput">selectInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.whereInput">whereInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.where">where</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.select"></a>

```java
public PathpointFlowStagesStageKpisQuerySelectOutputReference getSelect();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference">PathpointFlowStagesStageKpisQuerySelectOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindow"></a>

```java
public PathpointFlowStagesStageKpisQueryTimeWindowOutputReference getTimeWindow();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.selectInput"></a>

```java
public PathpointFlowStagesStageKpisQuerySelect getSelectInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindowInput"></a>

```java
public PathpointFlowStagesStageKpisQueryTimeWindow getTimeWindowInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.whereInput"></a>

```java
public java.lang.String getWhereInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.internalValue"></a>

```java
public PathpointFlowStagesStageKpisQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---


### PathpointFlowStagesStageKpisQuerySelectOutputReference <a name="PathpointFlowStagesStageKpisQuerySelectOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpisQuerySelectOutputReference;

new PathpointFlowStagesStageKpisQuerySelectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationTypeInput">aggregationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationType">aggregationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationTypeInput`<sup>Optional</sup> <a name="aggregationTypeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationTypeInput"></a>

```java
public java.lang.String getAggregationTypeInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationType"></a>

```java
public java.lang.String getAggregationType();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.internalValue"></a>

```java
public PathpointFlowStagesStageKpisQuerySelect getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---


### PathpointFlowStagesStageKpisQueryTimeWindowOutputReference <a name="PathpointFlowStagesStageKpisQueryTimeWindowOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference;

new PathpointFlowStagesStageKpisQueryTimeWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange">putRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetCustomRange">resetCustomRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetRelativeRange">resetRelativeRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRelativeRange` <a name="putRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange"></a>

```java
public void putRelativeRange(PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---

##### `resetCustomRange` <a name="resetCustomRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetCustomRange"></a>

```java
public void resetCustomRange()
```

##### `resetRelativeRange` <a name="resetRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetRelativeRange"></a>

```java
public void resetRelativeRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRange">relativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRangeInput">customRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRangeInput">relativeRangeInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRange">customRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relativeRange`<sup>Required</sup> <a name="relativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRange"></a>

```java
public PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference getRelativeRange();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference</a>

---

##### `customRangeInput`<sup>Optional</sup> <a name="customRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRangeInput"></a>

```java
public java.lang.String getCustomRangeInput();
```

- *Type:* java.lang.String

---

##### `relativeRangeInput`<sup>Optional</sup> <a name="relativeRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRangeInput"></a>

```java
public PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange getRelativeRangeInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---

##### `customRange`<sup>Required</sup> <a name="customRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRange"></a>

```java
public java.lang.String getCustomRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.internalValue"></a>

```java
public PathpointFlowStagesStageKpisQueryTimeWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---


### PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference <a name="PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.pathpoint_flow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference;

new PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst">resetCompareAgainst</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompareAgainst` <a name="resetCompareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst"></a>

```java
public void resetCompareAgainst()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput">compareAgainstInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput">sinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst">compareAgainst</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.since">since</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compareAgainstInput`<sup>Optional</sup> <a name="compareAgainstInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput"></a>

```java
public java.lang.String getCompareAgainstInput();
```

- *Type:* java.lang.String

---

##### `sinceInput`<sup>Optional</sup> <a name="sinceInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput"></a>

```java
public java.lang.String getSinceInput();
```

- *Type:* java.lang.String

---

##### `compareAgainst`<sup>Required</sup> <a name="compareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst"></a>

```java
public java.lang.String getCompareAgainst();
```

- *Type:* java.lang.String

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.since"></a>

```java
public java.lang.String getSince();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue"></a>

```java
public PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---



