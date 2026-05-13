# `fleetConfiguration` Submodule <a name="`fleetConfiguration` Submodule" id="@cdktn/provider-newrelic.fleetConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetConfiguration <a name="FleetConfiguration" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration newrelic_fleet_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FleetConfiguration(Construct Scope, string Id, FleetConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig">FleetConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig">FleetConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.putVersion">PutVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutVersion` <a name="PutVersion" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.putVersion"></a>

```csharp
private void PutVersion(IResolvable|FleetConfigurationVersion[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.putVersion.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOrganizationId"></a>

```csharp
private void ResetOrganizationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FleetConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

FleetConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

FleetConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

FleetConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

FleetConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FleetConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FleetConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FleetConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FleetConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionEntityId">LatestVersionEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionNumber">LatestVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.totalVersions">TotalVersions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.version">Version</a></code> | <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList">FleetConfigurationVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentTypeInput">AgentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityTypeInput">ManagedEntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.versionInput">VersionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentType">AgentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityType">ManagedEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `LatestVersionEntityId`<sup>Required</sup> <a name="LatestVersionEntityId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionEntityId"></a>

```csharp
public string LatestVersionEntityId { get; }
```

- *Type:* string

---

##### `LatestVersionNumber`<sup>Required</sup> <a name="LatestVersionNumber" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionNumber"></a>

```csharp
public double LatestVersionNumber { get; }
```

- *Type:* double

---

##### `TotalVersions`<sup>Required</sup> <a name="TotalVersions" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.totalVersions"></a>

```csharp
public double TotalVersions { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.version"></a>

```csharp
public FleetConfigurationVersionList Version { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList">FleetConfigurationVersionList</a>

---

##### `AgentTypeInput`<sup>Optional</sup> <a name="AgentTypeInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentTypeInput"></a>

```csharp
public string AgentTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedEntityTypeInput`<sup>Optional</sup> <a name="ManagedEntityTypeInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityTypeInput"></a>

```csharp
public string ManagedEntityTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.versionInput"></a>

```csharp
public IResolvable|FleetConfigurationVersion[] VersionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]

---

##### `AgentType`<sup>Required</sup> <a name="AgentType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentType"></a>

```csharp
public string AgentType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedEntityType`<sup>Required</sup> <a name="ManagedEntityType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityType"></a>

```csharp
public string ManagedEntityType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetConfigurationConfig <a name="FleetConfigurationConfig" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FleetConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentType,
    string ManagedEntityType,
    string Name,
    IResolvable|FleetConfigurationVersion[] Version,
    string Id = null,
    string OperatingSystem = null,
    string OrganizationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.agentType">AgentType</a></code> | <code>string</code> | The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.managedEntityType">ManagedEntityType</a></code> | <code>string</code> | The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.name">Name</a></code> | <code>string</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.version">Version</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]</code> | version block. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration#id FleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | The operating system this configuration targets. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.organizationId">OrganizationId</a></code> | <code>string</code> | The organization ID. Auto-fetched from the account if not provided. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentType`<sup>Required</sup> <a name="AgentType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.agentType"></a>

```csharp
public string AgentType { get; set; }
```

- *Type:* string

The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration#agent_type FleetConfiguration#agent_type}

---

##### `ManagedEntityType`<sup>Required</sup> <a name="ManagedEntityType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.managedEntityType"></a>

```csharp
public string ManagedEntityType { get; set; }
```

- *Type:* string

The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration#managed_entity_type FleetConfiguration#managed_entity_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration#name FleetConfiguration#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.version"></a>

```csharp
public IResolvable|FleetConfigurationVersion[] Version { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration#version FleetConfiguration#version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration#id FleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

The operating system this configuration targets.

Required for HOST configurations. Allowed values: LINUX, WINDOWS. Must not be set for KUBERNETESCLUSTER configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration#operating_system FleetConfiguration#operating_system}

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

The organization ID. Auto-fetched from the account if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration#organization_id FleetConfiguration#organization_id}

---

### FleetConfigurationVersion <a name="FleetConfigurationVersion" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FleetConfigurationVersion {
    string ConfigurationContent
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion.property.configurationContent">ConfigurationContent</a></code> | <code>string</code> | Configuration content for this version (YAML or JSON). |

---

##### `ConfigurationContent`<sup>Required</sup> <a name="ConfigurationContent" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion.property.configurationContent"></a>

```csharp
public string ConfigurationContent { get; set; }
```

- *Type:* string

Configuration content for this version (YAML or JSON).

Content must be unique across version blocks. Use file() to load from a file: file("${path.module}/config.yaml").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.3/docs/resources/fleet_configuration#configuration_content FleetConfiguration#configuration_content}

---

## Classes <a name="Classes" id="Classes"></a>

### FleetConfigurationVersionList <a name="FleetConfigurationVersionList" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FleetConfigurationVersionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.get"></a>

```csharp
private FleetConfigurationVersionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.internalValue"></a>

```csharp
public IResolvable|FleetConfigurationVersion[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]

---


### FleetConfigurationVersionOutputReference <a name="FleetConfigurationVersionOutputReference" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FleetConfigurationVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionEntityId">VersionEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContentInput">ConfigurationContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContent">ConfigurationContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VersionEntityId`<sup>Required</sup> <a name="VersionEntityId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionEntityId"></a>

```csharp
public string VersionEntityId { get; }
```

- *Type:* string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionNumber"></a>

```csharp
public double VersionNumber { get; }
```

- *Type:* double

---

##### `ConfigurationContentInput`<sup>Optional</sup> <a name="ConfigurationContentInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContentInput"></a>

```csharp
public string ConfigurationContentInput { get; }
```

- *Type:* string

---

##### `ConfigurationContent`<sup>Required</sup> <a name="ConfigurationContent" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContent"></a>

```csharp
public string ConfigurationContent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FleetConfigurationVersion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>

---



