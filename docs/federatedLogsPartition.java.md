# `federatedLogsPartition` Submodule <a name="`federatedLogsPartition` Submodule" id="@cdktn/provider-newrelic.federatedLogsPartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedLogsPartition <a name="FederatedLogsPartition" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition newrelic_federated_logs_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartition;

FederatedLogsPartition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .setupId(java.lang.String)
    .storage(FederatedLogsPartitionStorage)
//  .accountId(java.lang.Number)
//  .active(java.lang.Boolean|IResolvable)
//  .dataRetentionPolicy(FederatedLogsPartitionDataRetentionPolicy)
//  .description(java.lang.String)
//  .forwarderConfiguration(FederatedLogsPartitionForwarderConfiguration)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.setupId">setupId</a></code> | <code>java.lang.String</code> | The ID of the federated log setup this partition belongs to. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where the federated logs partition will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the partition is active. When false, log routing to this partition is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.dataRetentionPolicy">dataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.forwarderConfiguration">forwarderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | forwarder_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#name FederatedLogsPartition#name}

---

##### `setupId`<sup>Required</sup> <a name="setupId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.setupId"></a>

- *Type:* java.lang.String

The ID of the federated log setup this partition belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#setup_id FederatedLogsPartition#setup_id}

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#storage FederatedLogsPartition#storage}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID where the federated logs partition will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#account_id FederatedLogsPartition#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the partition is active. When false, log routing to this partition is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#active FederatedLogsPartition#active}

---

##### `dataRetentionPolicy`<sup>Optional</sup> <a name="dataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.dataRetentionPolicy"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#data_retention_policy FederatedLogsPartition#data_retention_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#description FederatedLogsPartition#description}

---

##### `forwarderConfiguration`<sup>Optional</sup> <a name="forwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.forwarderConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

forwarder_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#forwarder_configuration FederatedLogsPartition#forwarder_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy">putDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration">putForwarderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDataRetentionPolicy">resetDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetForwarderConfiguration">resetForwarderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataRetentionPolicy` <a name="putDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy"></a>

```java
public void putDataRetentionPolicy(FederatedLogsPartitionDataRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---

##### `putForwarderConfiguration` <a name="putForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration"></a>

```java
public void putForwarderConfiguration(FederatedLogsPartitionForwarderConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage"></a>

```java
public void putStorage(FederatedLogsPartitionStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetActive` <a name="resetActive" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetActive"></a>

```java
public void resetActive()
```

##### `resetDataRetentionPolicy` <a name="resetDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDataRetentionPolicy"></a>

```java
public void resetDataRetentionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetForwarderConfiguration` <a name="resetForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetForwarderConfiguration"></a>

```java
public void resetForwarderConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FederatedLogsPartition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartition;

FederatedLogsPartition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartition;

FederatedLogsPartition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartition;

FederatedLogsPartition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartition;

FederatedLogsPartition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FederatedLogsPartition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FederatedLogsPartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FederatedLogsPartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FederatedLogsPartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FederatedLogsPartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicy">dataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference">FederatedLogsPartitionDataRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfiguration">forwarderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference">FederatedLogsPartitionForwarderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList">FederatedLogsPartitionHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycleStatus">lifecycleStatus</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList">FederatedLogsPartitionLifecycleStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference">FederatedLogsPartitionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicyInput">dataRetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfigurationInput">forwarderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupIdInput">setupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storageInput">storageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupId">setupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dataRetentionPolicy`<sup>Required</sup> <a name="dataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicy"></a>

```java
public FederatedLogsPartitionDataRetentionPolicyOutputReference getDataRetentionPolicy();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference">FederatedLogsPartitionDataRetentionPolicyOutputReference</a>

---

##### `forwarderConfiguration`<sup>Required</sup> <a name="forwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfiguration"></a>

```java
public FederatedLogsPartitionForwarderConfigurationOutputReference getForwarderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference">FederatedLogsPartitionForwarderConfigurationOutputReference</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.healthCheck"></a>

```java
public FederatedLogsPartitionHealthCheckList getHealthCheck();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList">FederatedLogsPartitionHealthCheckList</a>

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lifecycleStatus`<sup>Required</sup> <a name="lifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycleStatus"></a>

```java
public FederatedLogsPartitionLifecycleStatusList getLifecycleStatus();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList">FederatedLogsPartitionLifecycleStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storage"></a>

```java
public FederatedLogsPartitionStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference">FederatedLogsPartitionStorageOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.activeInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataRetentionPolicyInput`<sup>Optional</sup> <a name="dataRetentionPolicyInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicyInput"></a>

```java
public FederatedLogsPartitionDataRetentionPolicy getDataRetentionPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `forwarderConfigurationInput`<sup>Optional</sup> <a name="forwarderConfigurationInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfigurationInput"></a>

```java
public FederatedLogsPartitionForwarderConfiguration getForwarderConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `setupIdInput`<sup>Optional</sup> <a name="setupIdInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupIdInput"></a>

```java
public java.lang.String getSetupIdInput();
```

- *Type:* java.lang.String

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storageInput"></a>

```java
public FederatedLogsPartitionStorage getStorageInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `setupId`<sup>Required</sup> <a name="setupId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupId"></a>

```java
public java.lang.String getSetupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedLogsPartitionConfig <a name="FederatedLogsPartitionConfig" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionConfig;

FederatedLogsPartitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .setupId(java.lang.String)
    .storage(FederatedLogsPartitionStorage)
//  .accountId(java.lang.Number)
//  .active(java.lang.Boolean|IResolvable)
//  .dataRetentionPolicy(FederatedLogsPartitionDataRetentionPolicy)
//  .description(java.lang.String)
//  .forwarderConfiguration(FederatedLogsPartitionForwarderConfiguration)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.setupId">setupId</a></code> | <code>java.lang.String</code> | The ID of the federated log setup this partition belongs to. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where the federated logs partition will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the partition is active. When false, log routing to this partition is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dataRetentionPolicy">dataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forwarderConfiguration">forwarderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | forwarder_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#name FederatedLogsPartition#name}

---

##### `setupId`<sup>Required</sup> <a name="setupId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.setupId"></a>

```java
public java.lang.String getSetupId();
```

- *Type:* java.lang.String

The ID of the federated log setup this partition belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#setup_id FederatedLogsPartition#setup_id}

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.storage"></a>

```java
public FederatedLogsPartitionStorage getStorage();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#storage FederatedLogsPartition#storage}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID where the federated logs partition will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#account_id FederatedLogsPartition#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the partition is active. When false, log routing to this partition is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#active FederatedLogsPartition#active}

---

##### `dataRetentionPolicy`<sup>Optional</sup> <a name="dataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dataRetentionPolicy"></a>

```java
public FederatedLogsPartitionDataRetentionPolicy getDataRetentionPolicy();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#data_retention_policy FederatedLogsPartition#data_retention_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#description FederatedLogsPartition#description}

---

##### `forwarderConfiguration`<sup>Optional</sup> <a name="forwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forwarderConfiguration"></a>

```java
public FederatedLogsPartitionForwarderConfiguration getForwarderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

forwarder_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#forwarder_configuration FederatedLogsPartition#forwarder_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FederatedLogsPartitionDataRetentionPolicy <a name="FederatedLogsPartitionDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionDataRetentionPolicy;

FederatedLogsPartitionDataRetentionPolicy.builder()
    .duration(java.lang.Number)
    .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.duration">duration</a></code> | <code>java.lang.Number</code> | The duration value for retention. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.unit">unit</a></code> | <code>java.lang.String</code> | The time unit for the retention duration. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#duration FederatedLogsPartition#duration}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#unit FederatedLogsPartition#unit}

---

### FederatedLogsPartitionForwarderConfiguration <a name="FederatedLogsPartitionForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionForwarderConfiguration;

FederatedLogsPartitionForwarderConfiguration.builder()
    .type(java.lang.String)
//  .pipelineControl(FederatedLogsPartitionForwarderConfigurationPipelineControl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | The type of forwarder. Must match the parent setup's forwarder type. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.pipelineControl">pipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | pipeline_control block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of forwarder. Must match the parent setup's forwarder type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#type FederatedLogsPartition#type}

---

##### `pipelineControl`<sup>Optional</sup> <a name="pipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.pipelineControl"></a>

```java
public FederatedLogsPartitionForwarderConfigurationPipelineControl getPipelineControl();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#pipeline_control FederatedLogsPartition#pipeline_control}

---

### FederatedLogsPartitionForwarderConfigurationPipelineControl <a name="FederatedLogsPartitionForwarderConfigurationPipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionForwarderConfigurationPipelineControl;

FederatedLogsPartitionForwarderConfigurationPipelineControl.builder()
//  .partitionRule(FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.property.partitionRule">partitionRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | partition_rule block. |

---

##### `partitionRule`<sup>Optional</sup> <a name="partitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.property.partitionRule"></a>

```java
public FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule getPartitionRule();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

partition_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#partition_rule FederatedLogsPartition#partition_rule}

---

### FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule;

FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.property.expression">expression</a></code> | <code>java.lang.String</code> | OTTL expression for routing logs to this partition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

OTTL expression for routing logs to this partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#expression FederatedLogsPartition#expression}

---

### FederatedLogsPartitionHealthCheck <a name="FederatedLogsPartitionHealthCheck" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionHealthCheck;

FederatedLogsPartitionHealthCheck.builder()
    .build();
```


### FederatedLogsPartitionHealthCheckEnd2EndDataFlow <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow;

FederatedLogsPartitionHealthCheckEnd2EndDataFlow.builder()
    .build();
```


### FederatedLogsPartitionHealthCheckQueryConnection <a name="FederatedLogsPartitionHealthCheckQueryConnection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionHealthCheckQueryConnection;

FederatedLogsPartitionHealthCheckQueryConnection.builder()
    .build();
```


### FederatedLogsPartitionLifecycleStatus <a name="FederatedLogsPartitionLifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionLifecycleStatus;

FederatedLogsPartitionLifecycleStatus.builder()
    .build();
```


### FederatedLogsPartitionStorage <a name="FederatedLogsPartitionStorage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionStorage;

FederatedLogsPartitionStorage.builder()
    .dataLocationUri(java.lang.String)
    .table(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.dataLocationUri">dataLocationUri</a></code> | <code>java.lang.String</code> | The URI location of the partition in object storage. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.table">table</a></code> | <code>java.lang.String</code> | The table name associated with the partition. |

---

##### `dataLocationUri`<sup>Required</sup> <a name="dataLocationUri" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.dataLocationUri"></a>

```java
public java.lang.String getDataLocationUri();
```

- *Type:* java.lang.String

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#data_location_uri FederatedLogsPartition#data_location_uri}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

The table name associated with the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#table FederatedLogsPartition#table}

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedLogsPartitionDataRetentionPolicyOutputReference <a name="FederatedLogsPartitionDataRetentionPolicyOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionDataRetentionPolicyOutputReference;

new FederatedLogsPartitionDataRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.internalValue"></a>

```java
public FederatedLogsPartitionDataRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---


### FederatedLogsPartitionForwarderConfigurationOutputReference <a name="FederatedLogsPartitionForwarderConfigurationOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionForwarderConfigurationOutputReference;

new FederatedLogsPartitionForwarderConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl">putPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resetPipelineControl">resetPipelineControl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPipelineControl` <a name="putPipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl"></a>

```java
public void putPipelineControl(FederatedLogsPartitionForwarderConfigurationPipelineControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---

##### `resetPipelineControl` <a name="resetPipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resetPipelineControl"></a>

```java
public void resetPipelineControl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControl">pipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControlInput">pipelineControlInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pipelineControl`<sup>Required</sup> <a name="pipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControl"></a>

```java
public FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference getPipelineControl();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference</a>

---

##### `pipelineControlInput`<sup>Optional</sup> <a name="pipelineControlInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControlInput"></a>

```java
public FederatedLogsPartitionForwarderConfigurationPipelineControl getPipelineControlInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.internalValue"></a>

```java
public FederatedLogsPartitionForwarderConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---


### FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference;

new FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule">putPartitionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resetPartitionRule">resetPartitionRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionRule` <a name="putPartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule"></a>

```java
public void putPartitionRule(FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---

##### `resetPartitionRule` <a name="resetPartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resetPartitionRule"></a>

```java
public void resetPartitionRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRule">partitionRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRuleInput">partitionRuleInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionRule`<sup>Required</sup> <a name="partitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRule"></a>

```java
public FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference getPartitionRule();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference</a>

---

##### `partitionRuleInput`<sup>Optional</sup> <a name="partitionRuleInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRuleInput"></a>

```java
public FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule getPartitionRuleInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.internalValue"></a>

```java
public FederatedLogsPartitionForwarderConfigurationPipelineControl getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---


### FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference;

new FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.internalValue"></a>

```java
public FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---


### FederatedLogsPartitionHealthCheckEnd2EndDataFlowList <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlowList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList;

new FederatedLogsPartitionHealthCheckEnd2EndDataFlowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get"></a>

```java
public FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference;

new FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow">FederatedLogsPartitionHealthCheckEnd2EndDataFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.internalValue"></a>

```java
public FederatedLogsPartitionHealthCheckEnd2EndDataFlow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow">FederatedLogsPartitionHealthCheckEnd2EndDataFlow</a>

---


### FederatedLogsPartitionHealthCheckList <a name="FederatedLogsPartitionHealthCheckList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionHealthCheckList;

new FederatedLogsPartitionHealthCheckList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get"></a>

```java
public FederatedLogsPartitionHealthCheckOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FederatedLogsPartitionHealthCheckOutputReference <a name="FederatedLogsPartitionHealthCheckOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionHealthCheckOutputReference;

new FederatedLogsPartitionHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.end2EndDataFlow">end2EndDataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList">FederatedLogsPartitionHealthCheckEnd2EndDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.queryConnection">queryConnection</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList">FederatedLogsPartitionHealthCheckQueryConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck">FederatedLogsPartitionHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `end2EndDataFlow`<sup>Required</sup> <a name="end2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.end2EndDataFlow"></a>

```java
public FederatedLogsPartitionHealthCheckEnd2EndDataFlowList getEnd2EndDataFlow();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList">FederatedLogsPartitionHealthCheckEnd2EndDataFlowList</a>

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `queryConnection`<sup>Required</sup> <a name="queryConnection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.queryConnection"></a>

```java
public FederatedLogsPartitionHealthCheckQueryConnectionList getQueryConnection();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList">FederatedLogsPartitionHealthCheckQueryConnectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.internalValue"></a>

```java
public FederatedLogsPartitionHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck">FederatedLogsPartitionHealthCheck</a>

---


### FederatedLogsPartitionHealthCheckQueryConnectionList <a name="FederatedLogsPartitionHealthCheckQueryConnectionList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionHealthCheckQueryConnectionList;

new FederatedLogsPartitionHealthCheckQueryConnectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get"></a>

```java
public FederatedLogsPartitionHealthCheckQueryConnectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FederatedLogsPartitionHealthCheckQueryConnectionOutputReference <a name="FederatedLogsPartitionHealthCheckQueryConnectionOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference;

new FederatedLogsPartitionHealthCheckQueryConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection">FederatedLogsPartitionHealthCheckQueryConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.internalValue"></a>

```java
public FederatedLogsPartitionHealthCheckQueryConnection getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection">FederatedLogsPartitionHealthCheckQueryConnection</a>

---


### FederatedLogsPartitionLifecycleStatusList <a name="FederatedLogsPartitionLifecycleStatusList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionLifecycleStatusList;

new FederatedLogsPartitionLifecycleStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get"></a>

```java
public FederatedLogsPartitionLifecycleStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FederatedLogsPartitionLifecycleStatusOutputReference <a name="FederatedLogsPartitionLifecycleStatusOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionLifecycleStatusOutputReference;

new FederatedLogsPartitionLifecycleStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus">FederatedLogsPartitionLifecycleStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.internalValue"></a>

```java
public FederatedLogsPartitionLifecycleStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus">FederatedLogsPartitionLifecycleStatus</a>

---


### FederatedLogsPartitionStorageOutputReference <a name="FederatedLogsPartitionStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.federated_logs_partition.FederatedLogsPartitionStorageOutputReference;

new FederatedLogsPartitionStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUriInput">dataLocationUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUri">dataLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataLocationUriInput`<sup>Optional</sup> <a name="dataLocationUriInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUriInput"></a>

```java
public java.lang.String getDataLocationUriInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `dataLocationUri`<sup>Required</sup> <a name="dataLocationUri" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUri"></a>

```java
public java.lang.String getDataLocationUri();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.internalValue"></a>

```java
public FederatedLogsPartitionStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---



