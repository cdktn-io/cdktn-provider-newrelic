# `dataNewrelicFleetConfiguration` Submodule <a name="`dataNewrelicFleetConfiguration` Submodule" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicFleetConfiguration <a name="DataNewrelicFleetConfiguration" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration newrelic_fleet_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_fleet_configuration.DataNewrelicFleetConfiguration;

DataNewrelicFleetConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .configurationId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .organizationId(java.lang.String)
//  .versionEntityId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.configurationId">configurationId</a></code> | <code>java.lang.String</code> | The GUID of the fleet configuration entity. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.organizationId">organizationId</a></code> | <code>java.lang.String</code> | The organization ID. Resolved automatically from the provider when omitted. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.versionEntityId">versionEntityId</a></code> | <code>java.lang.String</code> | The GUID of a specific configuration version entity. Returns the content of that exact version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.configurationId"></a>

- *Type:* java.lang.String

The GUID of the fleet configuration entity.

Returns the content of the latest version. Populated automatically when looking up by version_entity_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#configuration_id DataNewrelicFleetConfiguration#configuration_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#name DataNewrelicFleetConfiguration#name}

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.organizationId"></a>

- *Type:* java.lang.String

The organization ID. Resolved automatically from the provider when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#organization_id DataNewrelicFleetConfiguration#organization_id}

---

##### `versionEntityId`<sup>Optional</sup> <a name="versionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.versionEntityId"></a>

- *Type:* java.lang.String

The GUID of a specific configuration version entity. Returns the content of that exact version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#version_entity_id DataNewrelicFleetConfiguration#version_entity_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetVersionEntityId">resetVersionEntityId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetConfigurationId` <a name="resetConfigurationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetConfigurationId"></a>

```java
public void resetConfigurationId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetName"></a>

```java
public void resetName()
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOrganizationId"></a>

```java
public void resetOrganizationId()
```

##### `resetVersionEntityId` <a name="resetVersionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetVersionEntityId"></a>

```java
public void resetVersionEntityId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicFleetConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_fleet_configuration.DataNewrelicFleetConfiguration;

DataNewrelicFleetConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_fleet_configuration.DataNewrelicFleetConfiguration;

DataNewrelicFleetConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_fleet_configuration.DataNewrelicFleetConfiguration;

DataNewrelicFleetConfiguration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_fleet_configuration.DataNewrelicFleetConfiguration;

DataNewrelicFleetConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataNewrelicFleetConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataNewrelicFleetConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataNewrelicFleetConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataNewrelicFleetConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicFleetConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationContent">configurationContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.latestVersionEntityId">latestVersionEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIds">versionEntityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationIdInput">configurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationIdInput">organizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIdInput">versionEntityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityId">versionEntityId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `configurationContent`<sup>Required</sup> <a name="configurationContent" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationContent"></a>

```java
public java.lang.String getConfigurationContent();
```

- *Type:* java.lang.String

---

##### `latestVersionEntityId`<sup>Required</sup> <a name="latestVersionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.latestVersionEntityId"></a>

```java
public java.lang.String getLatestVersionEntityId();
```

- *Type:* java.lang.String

---

##### `versionEntityIds`<sup>Required</sup> <a name="versionEntityIds" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIds"></a>

```java
public java.util.List<java.lang.String> getVersionEntityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationIdInput"></a>

```java
public java.lang.String getConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationIdInput"></a>

```java
public java.lang.String getOrganizationIdInput();
```

- *Type:* java.lang.String

---

##### `versionEntityIdInput`<sup>Optional</sup> <a name="versionEntityIdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIdInput"></a>

```java
public java.lang.String getVersionEntityIdInput();
```

- *Type:* java.lang.String

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `versionEntityId`<sup>Required</sup> <a name="versionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityId"></a>

```java
public java.lang.String getVersionEntityId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicFleetConfigurationConfig <a name="DataNewrelicFleetConfigurationConfig" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_fleet_configuration.DataNewrelicFleetConfigurationConfig;

DataNewrelicFleetConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .configurationId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .organizationId(java.lang.String)
//  .versionEntityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | The GUID of the fleet configuration entity. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | The organization ID. Resolved automatically from the provider when omitted. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.versionEntityId">versionEntityId</a></code> | <code>java.lang.String</code> | The GUID of a specific configuration version entity. Returns the content of that exact version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

The GUID of the fleet configuration entity.

Returns the content of the latest version. Populated automatically when looking up by version_entity_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#configuration_id DataNewrelicFleetConfiguration#configuration_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#name DataNewrelicFleetConfiguration#name}

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

The organization ID. Resolved automatically from the provider when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#organization_id DataNewrelicFleetConfiguration#organization_id}

---

##### `versionEntityId`<sup>Optional</sup> <a name="versionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.versionEntityId"></a>

```java
public java.lang.String getVersionEntityId();
```

- *Type:* java.lang.String

The GUID of a specific configuration version entity. Returns the content of that exact version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/fleet_configuration#version_entity_id DataNewrelicFleetConfiguration#version_entity_id}

---



