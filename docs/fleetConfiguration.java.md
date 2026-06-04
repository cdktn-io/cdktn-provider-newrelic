# `fleetConfiguration` Submodule <a name="`fleetConfiguration` Submodule" id="@cdktn/provider-newrelic.fleetConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetConfiguration <a name="FleetConfiguration" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration newrelic_fleet_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer"></a>

```java
import io.cdktn.providers.newrelic.fleet_configuration.FleetConfiguration;

FleetConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentType(java.lang.String)
    .managedEntityType(java.lang.String)
    .name(java.lang.String)
    .version(IResolvable|java.util.List<FleetConfigurationVersion>)
//  .id(java.lang.String)
//  .operatingSystem(java.lang.String)
//  .organizationId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.agentType">agentType</a></code> | <code>java.lang.String</code> | The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.managedEntityType">managedEntityType</a></code> | <code>java.lang.String</code> | The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.version">version</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>></code> | version block. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#id FleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | The operating system this configuration targets. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.organizationId">organizationId</a></code> | <code>java.lang.String</code> | The organization ID. Auto-fetched from the account if not provided. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentType`<sup>Required</sup> <a name="agentType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.agentType"></a>

- *Type:* java.lang.String

The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#agent_type FleetConfiguration#agent_type}

---

##### `managedEntityType`<sup>Required</sup> <a name="managedEntityType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.managedEntityType"></a>

- *Type:* java.lang.String

The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#managed_entity_type FleetConfiguration#managed_entity_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#name FleetConfiguration#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.version"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>>

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#version FleetConfiguration#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#id FleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.operatingSystem"></a>

- *Type:* java.lang.String

The operating system this configuration targets.

Required for HOST configurations. Allowed values: LINUX, WINDOWS. Must not be set for KUBERNETESCLUSTER configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#operating_system FleetConfiguration#operating_system}

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.organizationId"></a>

- *Type:* java.lang.String

The organization ID. Auto-fetched from the account if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#organization_id FleetConfiguration#organization_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.putVersion">putVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVersion` <a name="putVersion" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.putVersion"></a>

```java
public void putVersion(IResolvable|java.util.List<FleetConfigurationVersion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.putVersion.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOperatingSystem"></a>

```java
public void resetOperatingSystem()
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOrganizationId"></a>

```java
public void resetOrganizationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FleetConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.fleet_configuration.FleetConfiguration;

FleetConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.fleet_configuration.FleetConfiguration;

FleetConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.newrelic.fleet_configuration.FleetConfiguration;

FleetConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.fleet_configuration.FleetConfiguration;

FleetConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FleetConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FleetConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FleetConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FleetConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FleetConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionEntityId">latestVersionEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionNumber">latestVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.totalVersions">totalVersions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.version">version</a></code> | <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList">FleetConfigurationVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentTypeInput">agentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityTypeInput">managedEntityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystemInput">operatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationIdInput">organizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.versionInput">versionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentType">agentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityType">managedEntityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

---

##### `latestVersionEntityId`<sup>Required</sup> <a name="latestVersionEntityId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionEntityId"></a>

```java
public java.lang.String getLatestVersionEntityId();
```

- *Type:* java.lang.String

---

##### `latestVersionNumber`<sup>Required</sup> <a name="latestVersionNumber" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionNumber"></a>

```java
public java.lang.Number getLatestVersionNumber();
```

- *Type:* java.lang.Number

---

##### `totalVersions`<sup>Required</sup> <a name="totalVersions" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.totalVersions"></a>

```java
public java.lang.Number getTotalVersions();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.version"></a>

```java
public FleetConfigurationVersionList getVersion();
```

- *Type:* <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList">FleetConfigurationVersionList</a>

---

##### `agentTypeInput`<sup>Optional</sup> <a name="agentTypeInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentTypeInput"></a>

```java
public java.lang.String getAgentTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedEntityTypeInput`<sup>Optional</sup> <a name="managedEntityTypeInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityTypeInput"></a>

```java
public java.lang.String getManagedEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystemInput"></a>

```java
public java.lang.String getOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationIdInput"></a>

```java
public java.lang.String getOrganizationIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.versionInput"></a>

```java
public IResolvable|java.util.List<FleetConfigurationVersion> getVersionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>>

---

##### `agentType`<sup>Required</sup> <a name="agentType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentType"></a>

```java
public java.lang.String getAgentType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedEntityType`<sup>Required</sup> <a name="managedEntityType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityType"></a>

```java
public java.lang.String getManagedEntityType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FleetConfigurationConfig <a name="FleetConfigurationConfig" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.fleet_configuration.FleetConfigurationConfig;

FleetConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentType(java.lang.String)
    .managedEntityType(java.lang.String)
    .name(java.lang.String)
    .version(IResolvable|java.util.List<FleetConfigurationVersion>)
//  .id(java.lang.String)
//  .operatingSystem(java.lang.String)
//  .organizationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.agentType">agentType</a></code> | <code>java.lang.String</code> | The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.managedEntityType">managedEntityType</a></code> | <code>java.lang.String</code> | The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.version">version</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>></code> | version block. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#id FleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | The operating system this configuration targets. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | The organization ID. Auto-fetched from the account if not provided. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentType`<sup>Required</sup> <a name="agentType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.agentType"></a>

```java
public java.lang.String getAgentType();
```

- *Type:* java.lang.String

The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#agent_type FleetConfiguration#agent_type}

---

##### `managedEntityType`<sup>Required</sup> <a name="managedEntityType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.managedEntityType"></a>

```java
public java.lang.String getManagedEntityType();
```

- *Type:* java.lang.String

The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#managed_entity_type FleetConfiguration#managed_entity_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#name FleetConfiguration#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.version"></a>

```java
public IResolvable|java.util.List<FleetConfigurationVersion> getVersion();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>>

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#version FleetConfiguration#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#id FleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

The operating system this configuration targets.

Required for HOST configurations. Allowed values: LINUX, WINDOWS. Must not be set for KUBERNETESCLUSTER configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#operating_system FleetConfiguration#operating_system}

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

The organization ID. Auto-fetched from the account if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#organization_id FleetConfiguration#organization_id}

---

### FleetConfigurationVersion <a name="FleetConfigurationVersion" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion.Initializer"></a>

```java
import io.cdktn.providers.newrelic.fleet_configuration.FleetConfigurationVersion;

FleetConfigurationVersion.builder()
    .configurationContent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion.property.configurationContent">configurationContent</a></code> | <code>java.lang.String</code> | Configuration content for this version (YAML or JSON). |

---

##### `configurationContent`<sup>Required</sup> <a name="configurationContent" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion.property.configurationContent"></a>

```java
public java.lang.String getConfigurationContent();
```

- *Type:* java.lang.String

Configuration content for this version (YAML or JSON).

Content must be unique across version blocks. Use file() to load from a file: file("${path.module}/config.yaml").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#configuration_content FleetConfiguration#configuration_content}

---

## Classes <a name="Classes" id="Classes"></a>

### FleetConfigurationVersionList <a name="FleetConfigurationVersionList" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.fleet_configuration.FleetConfigurationVersionList;

new FleetConfigurationVersionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.get"></a>

```java
public FleetConfigurationVersionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FleetConfigurationVersion> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>>

---


### FleetConfigurationVersionOutputReference <a name="FleetConfigurationVersionOutputReference" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.fleet_configuration.FleetConfigurationVersionOutputReference;

new FleetConfigurationVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionEntityId">versionEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContentInput">configurationContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContent">configurationContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `versionEntityId`<sup>Required</sup> <a name="versionEntityId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionEntityId"></a>

```java
public java.lang.String getVersionEntityId();
```

- *Type:* java.lang.String

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionNumber"></a>

```java
public java.lang.Number getVersionNumber();
```

- *Type:* java.lang.Number

---

##### `configurationContentInput`<sup>Optional</sup> <a name="configurationContentInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContentInput"></a>

```java
public java.lang.String getConfigurationContentInput();
```

- *Type:* java.lang.String

---

##### `configurationContent`<sup>Required</sup> <a name="configurationContent" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContent"></a>

```java
public java.lang.String getConfigurationContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.internalValue"></a>

```java
public IResolvable|FleetConfigurationVersion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>

---



