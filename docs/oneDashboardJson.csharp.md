# `oneDashboardJson` Submodule <a name="`oneDashboardJson` Submodule" id="@cdktn/provider-newrelic.oneDashboardJson"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OneDashboardJson <a name="OneDashboardJson" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json newrelic_one_dashboard_json}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new OneDashboardJson(Construct Scope, string Id, OneDashboardJsonConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig">OneDashboardJsonConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig">OneDashboardJsonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.putTimeouts"></a>

```csharp
private void PutTimeouts(OneDashboardJsonTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts">OneDashboardJsonTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OneDashboardJson resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

OneDashboardJson.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

OneDashboardJson.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

OneDashboardJson.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

OneDashboardJson.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OneDashboardJson resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OneDashboardJson to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OneDashboardJson that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OneDashboardJson to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.permalink">Permalink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference">OneDashboardJsonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.jsonInput">JsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts">OneDashboardJsonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.json">Json</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `Permalink`<sup>Required</sup> <a name="Permalink" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.permalink"></a>

```csharp
public string Permalink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.timeouts"></a>

```csharp
public OneDashboardJsonTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference">OneDashboardJsonTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.jsonInput"></a>

```csharp
public string JsonInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.timeoutsInput"></a>

```csharp
public IResolvable|OneDashboardJsonTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts">OneDashboardJsonTimeouts</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJson.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OneDashboardJsonConfig <a name="OneDashboardJsonConfig" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new OneDashboardJsonConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Json,
    double AccountId = null,
    string Id = null,
    OneDashboardJsonTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.json">Json</a></code> | <code>string</code> | The dashboard's json. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID where you want to create the dashboard. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json#id OneDashboardJson#id}. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts">OneDashboardJsonTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.json"></a>

```csharp
public string Json { get; set; }
```

- *Type:* string

The dashboard's json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json#json OneDashboardJson#json}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json#account_id OneDashboardJson#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json#id OneDashboardJson#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonConfig.property.timeouts"></a>

```csharp
public OneDashboardJsonTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts">OneDashboardJsonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json#timeouts OneDashboardJson#timeouts}

---

### OneDashboardJsonTimeouts <a name="OneDashboardJsonTimeouts" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new OneDashboardJsonTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json#create OneDashboardJson#create}. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json#update OneDashboardJson#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json#create OneDashboardJson#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/one_dashboard_json#update OneDashboardJson#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OneDashboardJsonTimeoutsOutputReference <a name="OneDashboardJsonTimeoutsOutputReference" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new OneDashboardJsonTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts">OneDashboardJsonTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OneDashboardJsonTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.oneDashboardJson.OneDashboardJsonTimeouts">OneDashboardJsonTimeouts</a>

---



