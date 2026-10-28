# `teamsOrganizationSettings` Submodule <a name="`teamsOrganizationSettings` Submodule" id="@cdktn/provider-newrelic.teamsOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsOrganizationSettings <a name="TeamsOrganizationSettings" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings newrelic_teams_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new TeamsOrganizationSettings(Construct Scope, string Id, TeamsOrganizationSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig">TeamsOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig">TeamsOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels">PutHierarchyLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules">PutSyncGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryEnabled">ResetDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryTagKeys">ResetDiscoveryTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetHierarchyLevels">ResetHierarchyLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupRules">ResetSyncGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupsEnabled">ResetSyncGroupsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHierarchyLevels` <a name="PutHierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels"></a>

```csharp
private void PutHierarchyLevels(IResolvable|TeamsOrganizationSettingsHierarchyLevels[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]

---

##### `PutSyncGroupRules` <a name="PutSyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules"></a>

```csharp
private void PutSyncGroupRules(TeamsOrganizationSettingsSyncGroupRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---

##### `ResetDiscoveryEnabled` <a name="ResetDiscoveryEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryEnabled"></a>

```csharp
private void ResetDiscoveryEnabled()
```

##### `ResetDiscoveryTagKeys` <a name="ResetDiscoveryTagKeys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryTagKeys"></a>

```csharp
private void ResetDiscoveryTagKeys()
```

##### `ResetHierarchyLevels` <a name="ResetHierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetHierarchyLevels"></a>

```csharp
private void ResetHierarchyLevels()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSyncGroupRules` <a name="ResetSyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupRules"></a>

```csharp
private void ResetSyncGroupRules()
```

##### `ResetSyncGroupsEnabled` <a name="ResetSyncGroupsEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupsEnabled"></a>

```csharp
private void ResetSyncGroupsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TeamsOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

TeamsOrganizationSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

TeamsOrganizationSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

TeamsOrganizationSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

TeamsOrganizationSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TeamsOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamsOrganizationSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamsOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TeamsOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevels">HierarchyLevels</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList">TeamsOrganizationSettingsHierarchyLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRules">SyncGroupRules</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference">TeamsOrganizationSettingsSyncGroupRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabledInput">DiscoveryEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeysInput">DiscoveryTagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevelsInput">HierarchyLevelsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRulesInput">SyncGroupRulesInput</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabledInput">SyncGroupsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabled">DiscoveryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeys">DiscoveryTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabled">SyncGroupsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HierarchyLevels`<sup>Required</sup> <a name="HierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevels"></a>

```csharp
public TeamsOrganizationSettingsHierarchyLevelsList HierarchyLevels { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList">TeamsOrganizationSettingsHierarchyLevelsList</a>

---

##### `SyncGroupRules`<sup>Required</sup> <a name="SyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRules"></a>

```csharp
public TeamsOrganizationSettingsSyncGroupRulesOutputReference SyncGroupRules { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference">TeamsOrganizationSettingsSyncGroupRulesOutputReference</a>

---

##### `DiscoveryEnabledInput`<sup>Optional</sup> <a name="DiscoveryEnabledInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabledInput"></a>

```csharp
public bool|IResolvable DiscoveryEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DiscoveryTagKeysInput`<sup>Optional</sup> <a name="DiscoveryTagKeysInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeysInput"></a>

```csharp
public string[] DiscoveryTagKeysInput { get; }
```

- *Type:* string[]

---

##### `HierarchyLevelsInput`<sup>Optional</sup> <a name="HierarchyLevelsInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevelsInput"></a>

```csharp
public IResolvable|TeamsOrganizationSettingsHierarchyLevels[] HierarchyLevelsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SyncGroupRulesInput`<sup>Optional</sup> <a name="SyncGroupRulesInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRulesInput"></a>

```csharp
public TeamsOrganizationSettingsSyncGroupRules SyncGroupRulesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---

##### `SyncGroupsEnabledInput`<sup>Optional</sup> <a name="SyncGroupsEnabledInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabledInput"></a>

```csharp
public bool|IResolvable SyncGroupsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DiscoveryEnabled`<sup>Required</sup> <a name="DiscoveryEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabled"></a>

```csharp
public bool|IResolvable DiscoveryEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DiscoveryTagKeys`<sup>Required</sup> <a name="DiscoveryTagKeys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeys"></a>

```csharp
public string[] DiscoveryTagKeys { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SyncGroupsEnabled`<sup>Required</sup> <a name="SyncGroupsEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabled"></a>

```csharp
public bool|IResolvable SyncGroupsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsOrganizationSettingsConfig <a name="TeamsOrganizationSettingsConfig" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new TeamsOrganizationSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable DiscoveryEnabled = null,
    string[] DiscoveryTagKeys = null,
    IResolvable|TeamsOrganizationSettingsHierarchyLevels[] HierarchyLevels = null,
    string Id = null,
    TeamsOrganizationSettingsSyncGroupRules SyncGroupRules = null,
    bool|IResolvable SyncGroupsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryEnabled">DiscoveryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryTagKeys">DiscoveryTagKeys</a></code> | <code>string[]</code> | Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.hierarchyLevels">HierarchyLevels</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]</code> | hierarchy_levels block. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupRules">SyncGroupRules</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | sync_group_rules block. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupsEnabled">SyncGroupsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether automatic team creation from IdP groups is enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DiscoveryEnabled`<sup>Optional</sup> <a name="DiscoveryEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryEnabled"></a>

```csharp
public bool|IResolvable DiscoveryEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#discovery_enabled TeamsOrganizationSettings#discovery_enabled}

---

##### `DiscoveryTagKeys`<sup>Optional</sup> <a name="DiscoveryTagKeys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryTagKeys"></a>

```csharp
public string[] DiscoveryTagKeys { get; set; }
```

- *Type:* string[]

Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#discovery_tag_keys TeamsOrganizationSettings#discovery_tag_keys}

---

##### `HierarchyLevels`<sup>Optional</sup> <a name="HierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.hierarchyLevels"></a>

```csharp
public IResolvable|TeamsOrganizationSettingsHierarchyLevels[] HierarchyLevels { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]

hierarchy_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#hierarchy_levels TeamsOrganizationSettings#hierarchy_levels}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SyncGroupRules`<sup>Optional</sup> <a name="SyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupRules"></a>

```csharp
public TeamsOrganizationSettingsSyncGroupRules SyncGroupRules { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

sync_group_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#sync_group_rules TeamsOrganizationSettings#sync_group_rules}

---

##### `SyncGroupsEnabled`<sup>Optional</sup> <a name="SyncGroupsEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupsEnabled"></a>

```csharp
public bool|IResolvable SyncGroupsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether automatic team creation from IdP groups is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#sync_groups_enabled TeamsOrganizationSettings#sync_groups_enabled}

---

### TeamsOrganizationSettingsHierarchyLevels <a name="TeamsOrganizationSettingsHierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new TeamsOrganizationSettingsHierarchyLevels {
    string Id,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.id">Id</a></code> | <code>string</code> | GUID of the hierarchy level entity. Obtain from the newrelic_teams_hierarchy_levels data source. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.name">Name</a></code> | <code>string</code> | Display name of this hierarchy level (e.g. 'Division', 'Squad'). Renaming here updates the entity in the API. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

GUID of the hierarchy level entity. Obtain from the newrelic_teams_hierarchy_levels data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Display name of this hierarchy level (e.g. 'Division', 'Squad'). Renaming here updates the entity in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#name TeamsOrganizationSettings#name}

---

### TeamsOrganizationSettingsSyncGroupRules <a name="TeamsOrganizationSettingsSyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new TeamsOrganizationSettingsSyncGroupRules {
    IResolvable|TeamsOrganizationSettingsSyncGroupRulesConditions[] Conditions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]</code> | conditions block. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.property.conditions"></a>

```csharp
public IResolvable|TeamsOrganizationSettingsSyncGroupRulesConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#conditions TeamsOrganizationSettings#conditions}

---

### TeamsOrganizationSettingsSyncGroupRulesConditions <a name="TeamsOrganizationSettingsSyncGroupRulesConditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new TeamsOrganizationSettingsSyncGroupRulesConditions {
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.type">Type</a></code> | <code>string</code> | Match type: STARTS_WITH, ENDS_WITH, or CONTAINS. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.value">Value</a></code> | <code>string</code> | The string to match against the group name. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Match type: STARTS_WITH, ENDS_WITH, or CONTAINS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#type TeamsOrganizationSettings#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The string to match against the group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#value TeamsOrganizationSettings#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsOrganizationSettingsHierarchyLevelsList <a name="TeamsOrganizationSettingsHierarchyLevelsList" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new TeamsOrganizationSettingsHierarchyLevelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get"></a>

```csharp
private TeamsOrganizationSettingsHierarchyLevelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.internalValue"></a>

```csharp
public IResolvable|TeamsOrganizationSettingsHierarchyLevels[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]

---


### TeamsOrganizationSettingsHierarchyLevelsOutputReference <a name="TeamsOrganizationSettingsHierarchyLevelsOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new TeamsOrganizationSettingsHierarchyLevelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TeamsOrganizationSettingsHierarchyLevels InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>

---


### TeamsOrganizationSettingsSyncGroupRulesConditionsList <a name="TeamsOrganizationSettingsSyncGroupRulesConditionsList" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new TeamsOrganizationSettingsSyncGroupRulesConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get"></a>

```csharp
private TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.internalValue"></a>

```csharp
public IResolvable|TeamsOrganizationSettingsSyncGroupRulesConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]

---


### TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference <a name="TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TeamsOrganizationSettingsSyncGroupRulesConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>

---


### TeamsOrganizationSettingsSyncGroupRulesOutputReference <a name="TeamsOrganizationSettingsSyncGroupRulesOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new TeamsOrganizationSettingsSyncGroupRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|TeamsOrganizationSettingsSyncGroupRulesConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList">TeamsOrganizationSettingsSyncGroupRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditions"></a>

```csharp
public TeamsOrganizationSettingsSyncGroupRulesConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList">TeamsOrganizationSettingsSyncGroupRulesConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|TeamsOrganizationSettingsSyncGroupRulesConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.internalValue"></a>

```csharp
public TeamsOrganizationSettingsSyncGroupRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---



