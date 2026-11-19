# `maintenanceWindow` Submodule <a name="`maintenanceWindow` Submodule" id="@cdktn/provider-newrelic.maintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceWindow <a name="MaintenanceWindow" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window newrelic_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer"></a>

```java
import io.cdktn.providers.newrelic.maintenance_window.MaintenanceWindow;

MaintenanceWindow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .affectedEntities(java.util.List<java.lang.String>)
    .affectedEntityType(java.lang.String)
    .duration(java.lang.String)
    .name(java.lang.String)
    .scope(MaintenanceWindowScope)
    .startTime(java.lang.String)
    .timezone(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .rrule(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.affectedEntities">affectedEntities</a></code> | <code>java.util.List<java.lang.String></code> | The list of entity IDs affected by the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.affectedEntityType">affectedEntityType</a></code> | <code>java.lang.String</code> | The type of the entities affected by the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.duration">duration</a></code> | <code>java.lang.String</code> | The duration of the maintenance window, in ISO 8601 duration format (e.g. PT1H for one hour). Capped at 24 hours when `rrule` is set. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | The start time of the maintenance window, as an ISO 8601 date-time without a time zone (e.g. 2026-11-05T21:00:00). |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | The timezone in which the maintenance window is scheduled (e.g. America/Los_Angeles). |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.rrule">rrule</a></code> | <code>java.lang.String</code> | The recurrence rule of the maintenance window, in RRULE format, for recurring maintenance windows. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `affectedEntities`<sup>Required</sup> <a name="affectedEntities" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.affectedEntities"></a>

- *Type:* java.util.List<java.lang.String>

The list of entity IDs affected by the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#affected_entities MaintenanceWindow#affected_entities}

---

##### `affectedEntityType`<sup>Required</sup> <a name="affectedEntityType" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.affectedEntityType"></a>

- *Type:* java.lang.String

The type of the entities affected by the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#affected_entity_type MaintenanceWindow#affected_entity_type}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.duration"></a>

- *Type:* java.lang.String

The duration of the maintenance window, in ISO 8601 duration format (e.g. PT1H for one hour). Capped at 24 hours when `rrule` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#duration MaintenanceWindow#duration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#name MaintenanceWindow#name}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#scope MaintenanceWindow#scope}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

The start time of the maintenance window, as an ISO 8601 date-time without a time zone (e.g. 2026-11-05T21:00:00).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#start_time MaintenanceWindow#start_time}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

The timezone in which the maintenance window is scheduled (e.g. America/Los_Angeles).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#timezone MaintenanceWindow#timezone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#description MaintenanceWindow#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.Initializer.parameter.rrule"></a>

- *Type:* java.lang.String

The recurrence rule of the maintenance window, in RRULE format, for recurring maintenance windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#rrule MaintenanceWindow#rrule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetRrule">resetRrule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScope` <a name="putScope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.putScope"></a>

```java
public void putScope(MaintenanceWindowScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetId"></a>

```java
public void resetId()
```

##### `resetRrule` <a name="resetRrule" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.resetRrule"></a>

```java
public void resetRrule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MaintenanceWindow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.maintenance_window.MaintenanceWindow;

MaintenanceWindow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.maintenance_window.MaintenanceWindow;

MaintenanceWindow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformResource"></a>

```java
import io.cdktn.providers.newrelic.maintenance_window.MaintenanceWindow;

MaintenanceWindow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.maintenance_window.MaintenanceWindow;

MaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MaintenanceWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference">MaintenanceWindowScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntitiesInput">affectedEntitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntityTypeInput">affectedEntityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.rruleInput">rruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntities">affectedEntities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntityType">affectedEntityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.rrule">rrule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.scope"></a>

```java
public MaintenanceWindowScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference">MaintenanceWindowScopeOutputReference</a>

---

##### `affectedEntitiesInput`<sup>Optional</sup> <a name="affectedEntitiesInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntitiesInput"></a>

```java
public java.util.List<java.lang.String> getAffectedEntitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedEntityTypeInput`<sup>Optional</sup> <a name="affectedEntityTypeInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntityTypeInput"></a>

```java
public java.lang.String getAffectedEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rruleInput`<sup>Optional</sup> <a name="rruleInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.rruleInput"></a>

```java
public java.lang.String getRruleInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.scopeInput"></a>

```java
public MaintenanceWindowScope getScopeInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `affectedEntities`<sup>Required</sup> <a name="affectedEntities" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntities"></a>

```java
public java.util.List<java.lang.String> getAffectedEntities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedEntityType`<sup>Required</sup> <a name="affectedEntityType" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.affectedEntityType"></a>

```java
public java.lang.String getAffectedEntityType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.rrule"></a>

```java
public java.lang.String getRrule();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceWindowConfig <a name="MaintenanceWindowConfig" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.maintenance_window.MaintenanceWindowConfig;

MaintenanceWindowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .affectedEntities(java.util.List<java.lang.String>)
    .affectedEntityType(java.lang.String)
    .duration(java.lang.String)
    .name(java.lang.String)
    .scope(MaintenanceWindowScope)
    .startTime(java.lang.String)
    .timezone(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .rrule(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.affectedEntities">affectedEntities</a></code> | <code>java.util.List<java.lang.String></code> | The list of entity IDs affected by the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.affectedEntityType">affectedEntityType</a></code> | <code>java.lang.String</code> | The type of the entities affected by the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration of the maintenance window, in ISO 8601 duration format (e.g. PT1H for one hour). Capped at 24 hours when `rrule` is set. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The start time of the maintenance window, as an ISO 8601 date-time without a time zone (e.g. 2026-11-05T21:00:00). |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | The timezone in which the maintenance window is scheduled (e.g. America/Los_Angeles). |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the maintenance window. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.rrule">rrule</a></code> | <code>java.lang.String</code> | The recurrence rule of the maintenance window, in RRULE format, for recurring maintenance windows. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `affectedEntities`<sup>Required</sup> <a name="affectedEntities" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.affectedEntities"></a>

```java
public java.util.List<java.lang.String> getAffectedEntities();
```

- *Type:* java.util.List<java.lang.String>

The list of entity IDs affected by the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#affected_entities MaintenanceWindow#affected_entities}

---

##### `affectedEntityType`<sup>Required</sup> <a name="affectedEntityType" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.affectedEntityType"></a>

```java
public java.lang.String getAffectedEntityType();
```

- *Type:* java.lang.String

The type of the entities affected by the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#affected_entity_type MaintenanceWindow#affected_entity_type}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration of the maintenance window, in ISO 8601 duration format (e.g. PT1H for one hour). Capped at 24 hours when `rrule` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#duration MaintenanceWindow#duration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#name MaintenanceWindow#name}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.scope"></a>

```java
public MaintenanceWindowScope getScope();
```

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#scope MaintenanceWindow#scope}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The start time of the maintenance window, as an ISO 8601 date-time without a time zone (e.g. 2026-11-05T21:00:00).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#start_time MaintenanceWindow#start_time}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

The timezone in which the maintenance window is scheduled (e.g. America/Los_Angeles).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#timezone MaintenanceWindow#timezone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#description MaintenanceWindow#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowConfig.property.rrule"></a>

```java
public java.lang.String getRrule();
```

- *Type:* java.lang.String

The recurrence rule of the maintenance window, in RRULE format, for recurring maintenance windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#rrule MaintenanceWindow#rrule}

---

### MaintenanceWindowScope <a name="MaintenanceWindowScope" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope.Initializer"></a>

```java
import io.cdktn.providers.newrelic.maintenance_window.MaintenanceWindowScope;

MaintenanceWindowScope.builder()
    .id(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope.property.id">id</a></code> | <code>java.lang.String</code> | The unique identifier of the object within the given scope (e.g. an account ID). |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope.property.type">type</a></code> | <code>java.lang.String</code> | The kind of scope `id` refers to. Valid values are `ACCOUNT` and `ORGANIZATION`. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique identifier of the object within the given scope (e.g. an account ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#id MaintenanceWindow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The kind of scope `id` refers to. Valid values are `ACCOUNT` and `ORGANIZATION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.102.1/docs/resources/maintenance_window#type MaintenanceWindow#type}

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceWindowScopeOutputReference <a name="MaintenanceWindowScopeOutputReference" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.maintenance_window.MaintenanceWindowScopeOutputReference;

new MaintenanceWindowScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScopeOutputReference.property.internalValue"></a>

```java
public MaintenanceWindowScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.maintenanceWindow.MaintenanceWindowScope">MaintenanceWindowScope</a>

---



