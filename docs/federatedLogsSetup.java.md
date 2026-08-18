# `federatedLogsSetup` Submodule <a name="`federatedLogsSetup` Submodule" id="@cdktn/provider-newrelic.federatedLogsSetup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedLogsSetup <a name="FederatedLogsSetup" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup newrelic_federated_logs_setup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetup;

FederatedLogsSetup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultPartition(FederatedLogsSetupDefaultPartition)
    .name(java.lang.String)
    .storage(FederatedLogsSetupStorage)
//  .accountId(java.lang.Number)
//  .active(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .forwarder(FederatedLogsSetupForwarder)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.defaultPartition">defaultPartition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | default_partition block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where the federated logs setup will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the setup is active. When false, log routing to this setup is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.forwarder">forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | forwarder block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultPartition`<sup>Required</sup> <a name="defaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.defaultPartition"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

default_partition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#default_partition FederatedLogsSetup#default_partition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#name FederatedLogsSetup#name}

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID where the federated logs setup will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#account_id FederatedLogsSetup#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the setup is active. When false, log routing to this setup is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#active FederatedLogsSetup#active}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#description FederatedLogsSetup#description}

---

##### `forwarder`<sup>Optional</sup> <a name="forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.forwarder"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#forwarder FederatedLogsSetup#forwarder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition">putDefaultPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder">putForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetForwarder">resetForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultPartition` <a name="putDefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition"></a>

```java
public void putDefaultPartition(FederatedLogsSetupDefaultPartition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---

##### `putForwarder` <a name="putForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder"></a>

```java
public void putForwarder(FederatedLogsSetupForwarder value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage"></a>

```java
public void putStorage(FederatedLogsSetupStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetActive` <a name="resetActive" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetActive"></a>

```java
public void resetActive()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetForwarder` <a name="resetForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetForwarder"></a>

```java
public void resetForwarder()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FederatedLogsSetup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetup;

FederatedLogsSetup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetup;

FederatedLogsSetup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetup;

FederatedLogsSetup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetup;

FederatedLogsSetup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FederatedLogsSetup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FederatedLogsSetup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FederatedLogsSetup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FederatedLogsSetup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FederatedLogsSetup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartition">defaultPartition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference">FederatedLogsSetupDefaultPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionId">defaultPartitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarder">forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference">FederatedLogsSetupForwarderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList">FederatedLogsSetupHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycleStatus">lifecycleStatus</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList">FederatedLogsSetupLifecycleStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference">FederatedLogsSetupStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionInput">defaultPartitionInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarderInput">forwarderInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storageInput">storageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `defaultPartition`<sup>Required</sup> <a name="defaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartition"></a>

```java
public FederatedLogsSetupDefaultPartitionOutputReference getDefaultPartition();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference">FederatedLogsSetupDefaultPartitionOutputReference</a>

---

##### `defaultPartitionId`<sup>Required</sup> <a name="defaultPartitionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionId"></a>

```java
public java.lang.String getDefaultPartitionId();
```

- *Type:* java.lang.String

---

##### `forwarder`<sup>Required</sup> <a name="forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarder"></a>

```java
public FederatedLogsSetupForwarderOutputReference getForwarder();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference">FederatedLogsSetupForwarderOutputReference</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.healthCheck"></a>

```java
public FederatedLogsSetupHealthCheckList getHealthCheck();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList">FederatedLogsSetupHealthCheckList</a>

---

##### `lifecycleStatus`<sup>Required</sup> <a name="lifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycleStatus"></a>

```java
public FederatedLogsSetupLifecycleStatusList getLifecycleStatus();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList">FederatedLogsSetupLifecycleStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storage"></a>

```java
public FederatedLogsSetupStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference">FederatedLogsSetupStorageOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.activeInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultPartitionInput`<sup>Optional</sup> <a name="defaultPartitionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionInput"></a>

```java
public FederatedLogsSetupDefaultPartition getDefaultPartitionInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `forwarderInput`<sup>Optional</sup> <a name="forwarderInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarderInput"></a>

```java
public FederatedLogsSetupForwarder getForwarderInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storageInput"></a>

```java
public FederatedLogsSetupStorage getStorageInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedLogsSetupConfig <a name="FederatedLogsSetupConfig" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupConfig;

FederatedLogsSetupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultPartition(FederatedLogsSetupDefaultPartition)
    .name(java.lang.String)
    .storage(FederatedLogsSetupStorage)
//  .accountId(java.lang.Number)
//  .active(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .forwarder(FederatedLogsSetupForwarder)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.defaultPartition">defaultPartition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | default_partition block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where the federated logs setup will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the setup is active. When false, log routing to this setup is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forwarder">forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | forwarder block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultPartition`<sup>Required</sup> <a name="defaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.defaultPartition"></a>

```java
public FederatedLogsSetupDefaultPartition getDefaultPartition();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

default_partition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#default_partition FederatedLogsSetup#default_partition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#name FederatedLogsSetup#name}

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.storage"></a>

```java
public FederatedLogsSetupStorage getStorage();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID where the federated logs setup will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#account_id FederatedLogsSetup#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the setup is active. When false, log routing to this setup is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#active FederatedLogsSetup#active}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#description FederatedLogsSetup#description}

---

##### `forwarder`<sup>Optional</sup> <a name="forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forwarder"></a>

```java
public FederatedLogsSetupForwarder getForwarder();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#forwarder FederatedLogsSetup#forwarder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FederatedLogsSetupDefaultPartition <a name="FederatedLogsSetupDefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupDefaultPartition;

FederatedLogsSetupDefaultPartition.builder()
    .storage(FederatedLogsSetupDefaultPartitionStorage)
//  .dataRetentionPolicy(FederatedLogsSetupDefaultPartitionDataRetentionPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.dataRetentionPolicy">dataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.storage"></a>

```java
public FederatedLogsSetupDefaultPartitionStorage getStorage();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `dataRetentionPolicy`<sup>Optional</sup> <a name="dataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.dataRetentionPolicy"></a>

```java
public FederatedLogsSetupDefaultPartitionDataRetentionPolicy getDataRetentionPolicy();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#data_retention_policy FederatedLogsSetup#data_retention_policy}

---

### FederatedLogsSetupDefaultPartitionDataRetentionPolicy <a name="FederatedLogsSetupDefaultPartitionDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy;

FederatedLogsSetupDefaultPartitionDataRetentionPolicy.builder()
    .duration(java.lang.Number)
    .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.duration">duration</a></code> | <code>java.lang.Number</code> | The duration value for retention. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.unit">unit</a></code> | <code>java.lang.String</code> | The time unit for the retention duration. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#duration FederatedLogsSetup#duration}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#unit FederatedLogsSetup#unit}

---

### FederatedLogsSetupDefaultPartitionStorage <a name="FederatedLogsSetupDefaultPartitionStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupDefaultPartitionStorage;

FederatedLogsSetupDefaultPartitionStorage.builder()
    .dataLocationUri(java.lang.String)
    .table(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.dataLocationUri">dataLocationUri</a></code> | <code>java.lang.String</code> | The URI location of the partition in object storage. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.table">table</a></code> | <code>java.lang.String</code> | The table name associated with the default partition. |

---

##### `dataLocationUri`<sup>Required</sup> <a name="dataLocationUri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.dataLocationUri"></a>

```java
public java.lang.String getDataLocationUri();
```

- *Type:* java.lang.String

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#data_location_uri FederatedLogsSetup#data_location_uri}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

The table name associated with the default partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#table FederatedLogsSetup#table}

---

### FederatedLogsSetupForwarder <a name="FederatedLogsSetupForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupForwarder;

FederatedLogsSetupForwarder.builder()
    .type(java.lang.String)
//  .pipelineControl(FederatedLogsSetupForwarderPipelineControl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.type">type</a></code> | <code>java.lang.String</code> | The type of forwarder. Currently only PIPELINE_CONTROL is supported. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.pipelineControl">pipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | pipeline_control block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of forwarder. Currently only PIPELINE_CONTROL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#type FederatedLogsSetup#type}

---

##### `pipelineControl`<sup>Optional</sup> <a name="pipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.pipelineControl"></a>

```java
public FederatedLogsSetupForwarderPipelineControl getPipelineControl();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#pipeline_control FederatedLogsSetup#pipeline_control}

---

### FederatedLogsSetupForwarderPipelineControl <a name="FederatedLogsSetupForwarderPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupForwarderPipelineControl;

FederatedLogsSetupForwarderPipelineControl.builder()
    .fleetId(java.lang.String)
//  .routingRule(FederatedLogsSetupForwarderPipelineControlRoutingRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | The fleet entity GUID used for deploying the pipeline configuration. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.routingRule">routingRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | routing_rule block. |

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

The fleet entity GUID used for deploying the pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#fleet_id FederatedLogsSetup#fleet_id}

---

##### `routingRule`<sup>Optional</sup> <a name="routingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.routingRule"></a>

```java
public FederatedLogsSetupForwarderPipelineControlRoutingRule getRoutingRule();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#routing_rule FederatedLogsSetup#routing_rule}

---

### FederatedLogsSetupForwarderPipelineControlRoutingRule <a name="FederatedLogsSetupForwarderPipelineControlRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupForwarderPipelineControlRoutingRule;

FederatedLogsSetupForwarderPipelineControlRoutingRule.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.property.expression">expression</a></code> | <code>java.lang.String</code> | OTTL expression for routing logs to this setup. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

OTTL expression for routing logs to this setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#expression FederatedLogsSetup#expression}

---

### FederatedLogsSetupHealthCheck <a name="FederatedLogsSetupHealthCheck" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupHealthCheck;

FederatedLogsSetupHealthCheck.builder()
    .build();
```


### FederatedLogsSetupHealthCheckEnd2EndDataFlow <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupHealthCheckEnd2EndDataFlow;

FederatedLogsSetupHealthCheckEnd2EndDataFlow.builder()
    .build();
```


### FederatedLogsSetupHealthCheckQueryConnection <a name="FederatedLogsSetupHealthCheckQueryConnection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupHealthCheckQueryConnection;

FederatedLogsSetupHealthCheckQueryConnection.builder()
    .build();
```


### FederatedLogsSetupLifecycleStatus <a name="FederatedLogsSetupLifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupLifecycleStatus;

FederatedLogsSetupLifecycleStatus.builder()
    .build();
```


### FederatedLogsSetupStorage <a name="FederatedLogsSetupStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupStorage;

FederatedLogsSetupStorage.builder()
    .cloudProviderConfiguration(FederatedLogsSetupStorageCloudProviderConfiguration)
    .database(java.lang.String)
    .dataIngestConnectionId(java.lang.String)
    .dataLocationBucket(java.lang.String)
    .queryConnectionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.cloudProviderConfiguration">cloudProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | cloud_provider_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.database">database</a></code> | <code>java.lang.String</code> | The database name associated with the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataIngestConnectionId">dataIngestConnectionId</a></code> | <code>java.lang.String</code> | The connection manager entity GUID used for writing data. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataLocationBucket">dataLocationBucket</a></code> | <code>java.lang.String</code> | The object storage bucket where log data is stored. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.queryConnectionId">queryConnectionId</a></code> | <code>java.lang.String</code> | The connection manager entity GUID used by query workers for reading data. |

---

##### `cloudProviderConfiguration`<sup>Required</sup> <a name="cloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.cloudProviderConfiguration"></a>

```java
public FederatedLogsSetupStorageCloudProviderConfiguration getCloudProviderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

cloud_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#cloud_provider_configuration FederatedLogsSetup#cloud_provider_configuration}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database name associated with the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#database FederatedLogsSetup#database}

---

##### `dataIngestConnectionId`<sup>Required</sup> <a name="dataIngestConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataIngestConnectionId"></a>

```java
public java.lang.String getDataIngestConnectionId();
```

- *Type:* java.lang.String

The connection manager entity GUID used for writing data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#data_ingest_connection_id FederatedLogsSetup#data_ingest_connection_id}

---

##### `dataLocationBucket`<sup>Required</sup> <a name="dataLocationBucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataLocationBucket"></a>

```java
public java.lang.String getDataLocationBucket();
```

- *Type:* java.lang.String

The object storage bucket where log data is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#data_location_bucket FederatedLogsSetup#data_location_bucket}

---

##### `queryConnectionId`<sup>Required</sup> <a name="queryConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.queryConnectionId"></a>

```java
public java.lang.String getQueryConnectionId();
```

- *Type:* java.lang.String

The connection manager entity GUID used by query workers for reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#query_connection_id FederatedLogsSetup#query_connection_id}

---

### FederatedLogsSetupStorageCloudProviderConfiguration <a name="FederatedLogsSetupStorageCloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupStorageCloudProviderConfiguration;

FederatedLogsSetupStorageCloudProviderConfiguration.builder()
    .provider(java.lang.String)
    .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.provider">provider</a></code> | <code>java.lang.String</code> | The cloud provider. Currently only AWS is supported. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | The cloud provider region. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

The cloud provider. Currently only AWS is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#provider FederatedLogsSetup#provider}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The cloud provider region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.3/docs/resources/federated_logs_setup#region FederatedLogsSetup#region}

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference <a name="FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference;

new FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupDefaultPartitionDataRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---


### FederatedLogsSetupDefaultPartitionOutputReference <a name="FederatedLogsSetupDefaultPartitionOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupDefaultPartitionOutputReference;

new FederatedLogsSetupDefaultPartitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy">putDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resetDataRetentionPolicy">resetDataRetentionPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataRetentionPolicy` <a name="putDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy"></a>

```java
public void putDataRetentionPolicy(FederatedLogsSetupDefaultPartitionDataRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage"></a>

```java
public void putStorage(FederatedLogsSetupDefaultPartitionStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---

##### `resetDataRetentionPolicy` <a name="resetDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resetDataRetentionPolicy"></a>

```java
public void resetDataRetentionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicy">dataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference">FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference">FederatedLogsSetupDefaultPartitionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicyInput">dataRetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storageInput">storageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataRetentionPolicy`<sup>Required</sup> <a name="dataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicy"></a>

```java
public FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference getDataRetentionPolicy();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference">FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storage"></a>

```java
public FederatedLogsSetupDefaultPartitionStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference">FederatedLogsSetupDefaultPartitionStorageOutputReference</a>

---

##### `dataRetentionPolicyInput`<sup>Optional</sup> <a name="dataRetentionPolicyInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicyInput"></a>

```java
public FederatedLogsSetupDefaultPartitionDataRetentionPolicy getDataRetentionPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storageInput"></a>

```java
public FederatedLogsSetupDefaultPartitionStorage getStorageInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupDefaultPartition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---


### FederatedLogsSetupDefaultPartitionStorageOutputReference <a name="FederatedLogsSetupDefaultPartitionStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupDefaultPartitionStorageOutputReference;

new FederatedLogsSetupDefaultPartitionStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUriInput">dataLocationUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUri">dataLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataLocationUriInput`<sup>Optional</sup> <a name="dataLocationUriInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUriInput"></a>

```java
public java.lang.String getDataLocationUriInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `dataLocationUri`<sup>Required</sup> <a name="dataLocationUri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUri"></a>

```java
public java.lang.String getDataLocationUri();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupDefaultPartitionStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---


### FederatedLogsSetupForwarderOutputReference <a name="FederatedLogsSetupForwarderOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupForwarderOutputReference;

new FederatedLogsSetupForwarderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl">putPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resetPipelineControl">resetPipelineControl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPipelineControl` <a name="putPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl"></a>

```java
public void putPipelineControl(FederatedLogsSetupForwarderPipelineControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---

##### `resetPipelineControl` <a name="resetPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resetPipelineControl"></a>

```java
public void resetPipelineControl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControl">pipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference">FederatedLogsSetupForwarderPipelineControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControlInput">pipelineControlInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pipelineControl`<sup>Required</sup> <a name="pipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControl"></a>

```java
public FederatedLogsSetupForwarderPipelineControlOutputReference getPipelineControl();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference">FederatedLogsSetupForwarderPipelineControlOutputReference</a>

---

##### `pipelineControlInput`<sup>Optional</sup> <a name="pipelineControlInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControlInput"></a>

```java
public FederatedLogsSetupForwarderPipelineControl getPipelineControlInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupForwarder getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---


### FederatedLogsSetupForwarderPipelineControlOutputReference <a name="FederatedLogsSetupForwarderPipelineControlOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupForwarderPipelineControlOutputReference;

new FederatedLogsSetupForwarderPipelineControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule">putRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resetRoutingRule">resetRoutingRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoutingRule` <a name="putRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule"></a>

```java
public void putRoutingRule(FederatedLogsSetupForwarderPipelineControlRoutingRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---

##### `resetRoutingRule` <a name="resetRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resetRoutingRule"></a>

```java
public void resetRoutingRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRule">routingRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference">FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetIdInput">fleetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRuleInput">routingRuleInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `routingRule`<sup>Required</sup> <a name="routingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRule"></a>

```java
public FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference getRoutingRule();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference">FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference</a>

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetIdInput"></a>

```java
public java.lang.String getFleetIdInput();
```

- *Type:* java.lang.String

---

##### `routingRuleInput`<sup>Optional</sup> <a name="routingRuleInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRuleInput"></a>

```java
public FederatedLogsSetupForwarderPipelineControlRoutingRule getRoutingRuleInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupForwarderPipelineControl getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---


### FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference <a name="FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference;

new FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupForwarderPipelineControlRoutingRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---


### FederatedLogsSetupHealthCheckEnd2EndDataFlowList <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlowList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList;

new FederatedLogsSetupHealthCheckEnd2EndDataFlowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get"></a>

```java
public FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference;

new FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow">FederatedLogsSetupHealthCheckEnd2EndDataFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupHealthCheckEnd2EndDataFlow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow">FederatedLogsSetupHealthCheckEnd2EndDataFlow</a>

---


### FederatedLogsSetupHealthCheckList <a name="FederatedLogsSetupHealthCheckList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupHealthCheckList;

new FederatedLogsSetupHealthCheckList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get"></a>

```java
public FederatedLogsSetupHealthCheckOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FederatedLogsSetupHealthCheckOutputReference <a name="FederatedLogsSetupHealthCheckOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupHealthCheckOutputReference;

new FederatedLogsSetupHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.end2EndDataFlow">end2EndDataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList">FederatedLogsSetupHealthCheckEnd2EndDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.queryConnection">queryConnection</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList">FederatedLogsSetupHealthCheckQueryConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck">FederatedLogsSetupHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `end2EndDataFlow`<sup>Required</sup> <a name="end2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.end2EndDataFlow"></a>

```java
public FederatedLogsSetupHealthCheckEnd2EndDataFlowList getEnd2EndDataFlow();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList">FederatedLogsSetupHealthCheckEnd2EndDataFlowList</a>

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `queryConnection`<sup>Required</sup> <a name="queryConnection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.queryConnection"></a>

```java
public FederatedLogsSetupHealthCheckQueryConnectionList getQueryConnection();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList">FederatedLogsSetupHealthCheckQueryConnectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck">FederatedLogsSetupHealthCheck</a>

---


### FederatedLogsSetupHealthCheckQueryConnectionList <a name="FederatedLogsSetupHealthCheckQueryConnectionList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupHealthCheckQueryConnectionList;

new FederatedLogsSetupHealthCheckQueryConnectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get"></a>

```java
public FederatedLogsSetupHealthCheckQueryConnectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FederatedLogsSetupHealthCheckQueryConnectionOutputReference <a name="FederatedLogsSetupHealthCheckQueryConnectionOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference;

new FederatedLogsSetupHealthCheckQueryConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection">FederatedLogsSetupHealthCheckQueryConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupHealthCheckQueryConnection getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection">FederatedLogsSetupHealthCheckQueryConnection</a>

---


### FederatedLogsSetupLifecycleStatusList <a name="FederatedLogsSetupLifecycleStatusList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupLifecycleStatusList;

new FederatedLogsSetupLifecycleStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get"></a>

```java
public FederatedLogsSetupLifecycleStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FederatedLogsSetupLifecycleStatusOutputReference <a name="FederatedLogsSetupLifecycleStatusOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupLifecycleStatusOutputReference;

new FederatedLogsSetupLifecycleStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus">FederatedLogsSetupLifecycleStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupLifecycleStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus">FederatedLogsSetupLifecycleStatus</a>

---


### FederatedLogsSetupStorageCloudProviderConfigurationOutputReference <a name="FederatedLogsSetupStorageCloudProviderConfigurationOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference;

new FederatedLogsSetupStorageCloudProviderConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.providerInput">providerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.providerInput"></a>

```java
public java.lang.String getProviderInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupStorageCloudProviderConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---


### FederatedLogsSetupStorageOutputReference <a name="FederatedLogsSetupStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_setup.FederatedLogsSetupStorageOutputReference;

new FederatedLogsSetupStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration">putCloudProviderConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudProviderConfiguration` <a name="putCloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration"></a>

```java
public void putCloudProviderConfiguration(FederatedLogsSetupStorageCloudProviderConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfiguration">cloudProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference">FederatedLogsSetupStorageCloudProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfigurationInput">cloudProviderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionIdInput">dataIngestConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucketInput">dataLocationBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionIdInput">queryConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionId">dataIngestConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucket">dataLocationBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionId">queryConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudProviderConfiguration`<sup>Required</sup> <a name="cloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfiguration"></a>

```java
public FederatedLogsSetupStorageCloudProviderConfigurationOutputReference getCloudProviderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference">FederatedLogsSetupStorageCloudProviderConfigurationOutputReference</a>

---

##### `cloudProviderConfigurationInput`<sup>Optional</sup> <a name="cloudProviderConfigurationInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfigurationInput"></a>

```java
public FederatedLogsSetupStorageCloudProviderConfiguration getCloudProviderConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `dataIngestConnectionIdInput`<sup>Optional</sup> <a name="dataIngestConnectionIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionIdInput"></a>

```java
public java.lang.String getDataIngestConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `dataLocationBucketInput`<sup>Optional</sup> <a name="dataLocationBucketInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucketInput"></a>

```java
public java.lang.String getDataLocationBucketInput();
```

- *Type:* java.lang.String

---

##### `queryConnectionIdInput`<sup>Optional</sup> <a name="queryConnectionIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionIdInput"></a>

```java
public java.lang.String getQueryConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `dataIngestConnectionId`<sup>Required</sup> <a name="dataIngestConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionId"></a>

```java
public java.lang.String getDataIngestConnectionId();
```

- *Type:* java.lang.String

---

##### `dataLocationBucket`<sup>Required</sup> <a name="dataLocationBucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucket"></a>

```java
public java.lang.String getDataLocationBucket();
```

- *Type:* java.lang.String

---

##### `queryConnectionId`<sup>Required</sup> <a name="queryConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionId"></a>

```java
public java.lang.String getQueryConnectionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.internalValue"></a>

```java
public FederatedLogsSetupStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---



