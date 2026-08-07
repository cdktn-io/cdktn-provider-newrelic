# `alertCompoundCondition` Submodule <a name="`alertCompoundCondition` Submodule" id="@cdktn/provider-newrelic.alertCompoundCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertCompoundCondition <a name="AlertCompoundCondition" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition newrelic_alert_compound_condition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new AlertCompoundCondition(Construct Scope, string Id, AlertCompoundConditionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig">AlertCompoundConditionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig">AlertCompoundConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions">PutComponentConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetFacetMatchingBehavior">ResetFacetMatchingBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetRunbookUrl">ResetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetThresholdDuration">ResetThresholdDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponentConditions` <a name="PutComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions"></a>

```csharp
private void PutComponentConditions(IResolvable|AlertCompoundConditionComponentConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts"></a>

```csharp
private void PutTimeouts(AlertCompoundConditionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetFacetMatchingBehavior` <a name="ResetFacetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetFacetMatchingBehavior"></a>

```csharp
private void ResetFacetMatchingBehavior()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRunbookUrl` <a name="ResetRunbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetRunbookUrl"></a>

```csharp
private void ResetRunbookUrl()
```

##### `ResetThresholdDuration` <a name="ResetThresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetThresholdDuration"></a>

```csharp
private void ResetThresholdDuration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

AlertCompoundCondition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

AlertCompoundCondition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

AlertCompoundCondition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

AlertCompoundCondition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlertCompoundCondition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlertCompoundCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AlertCompoundCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditions">ComponentConditions</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList">AlertCompoundConditionComponentConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.entityGuid">EntityGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference">AlertCompoundConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditionsInput">ComponentConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehaviorInput">FacetMatchingBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyIdInput">PolicyIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrlInput">RunbookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDurationInput">ThresholdDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpressionInput">TriggerExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehavior">FacetMatchingBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyId">PolicyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrl">RunbookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDuration">ThresholdDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpression">TriggerExpression</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ComponentConditions`<sup>Required</sup> <a name="ComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditions"></a>

```csharp
public AlertCompoundConditionComponentConditionsList ComponentConditions { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList">AlertCompoundConditionComponentConditionsList</a>

---

##### `EntityGuid`<sup>Required</sup> <a name="EntityGuid" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.entityGuid"></a>

```csharp
public string EntityGuid { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeouts"></a>

```csharp
public AlertCompoundConditionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference">AlertCompoundConditionTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `ComponentConditionsInput`<sup>Optional</sup> <a name="ComponentConditionsInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditionsInput"></a>

```csharp
public IResolvable|AlertCompoundConditionComponentConditions[] ComponentConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FacetMatchingBehaviorInput`<sup>Optional</sup> <a name="FacetMatchingBehaviorInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehaviorInput"></a>

```csharp
public string FacetMatchingBehaviorInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyIdInput"></a>

```csharp
public double PolicyIdInput { get; }
```

- *Type:* double

---

##### `RunbookUrlInput`<sup>Optional</sup> <a name="RunbookUrlInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrlInput"></a>

```csharp
public string RunbookUrlInput { get; }
```

- *Type:* string

---

##### `ThresholdDurationInput`<sup>Optional</sup> <a name="ThresholdDurationInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDurationInput"></a>

```csharp
public double ThresholdDurationInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeoutsInput"></a>

```csharp
public IResolvable|AlertCompoundConditionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---

##### `TriggerExpressionInput`<sup>Optional</sup> <a name="TriggerExpressionInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpressionInput"></a>

```csharp
public string TriggerExpressionInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FacetMatchingBehavior`<sup>Required</sup> <a name="FacetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehavior"></a>

```csharp
public string FacetMatchingBehavior { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyId"></a>

```csharp
public double PolicyId { get; }
```

- *Type:* double

---

##### `RunbookUrl`<sup>Required</sup> <a name="RunbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrl"></a>

```csharp
public string RunbookUrl { get; }
```

- *Type:* string

---

##### `ThresholdDuration`<sup>Required</sup> <a name="ThresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDuration"></a>

```csharp
public double ThresholdDuration { get; }
```

- *Type:* double

---

##### `TriggerExpression`<sup>Required</sup> <a name="TriggerExpression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpression"></a>

```csharp
public string TriggerExpression { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertCompoundConditionComponentConditions <a name="AlertCompoundConditionComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new AlertCompoundConditionComponentConditions {
    string Alias,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.alias">Alias</a></code> | <code>string</code> | The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C'). |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.id">Id</a></code> | <code>string</code> | The ID of the existing alert condition to use as a component. |

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#alias AlertCompoundCondition#alias}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the existing alert condition to use as a component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AlertCompoundConditionConfig <a name="AlertCompoundConditionConfig" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new AlertCompoundConditionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|AlertCompoundConditionComponentConditions[] ComponentConditions,
    bool|IResolvable Enabled,
    string Name,
    double PolicyId,
    string TriggerExpression,
    double AccountId = null,
    string FacetMatchingBehavior = null,
    string Id = null,
    string RunbookUrl = null,
    double ThresholdDuration = null,
    AlertCompoundConditionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.componentConditions">ComponentConditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]</code> | component_conditions block. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.name">Name</a></code> | <code>string</code> | The title of the compound alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.policyId">PolicyId</a></code> | <code>double</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.triggerExpression">TriggerExpression</a></code> | <code>string</code> | Expression that defines how component condition evaluations are combined. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID for managing your compound alert conditions. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.facetMatchingBehavior">FacetMatchingBehavior</a></code> | <code>string</code> | How the compound condition will take into account the component conditions' facets during evaluation. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.runbookUrl">RunbookUrl</a></code> | <code>string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.thresholdDuration">ThresholdDuration</a></code> | <code>double</code> | The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ComponentConditions`<sup>Required</sup> <a name="ComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.componentConditions"></a>

```csharp
public IResolvable|AlertCompoundConditionComponentConditions[] ComponentConditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]

component_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#component_conditions AlertCompoundCondition#component_conditions}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#enabled AlertCompoundCondition#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The title of the compound alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#name AlertCompoundCondition#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.policyId"></a>

```csharp
public double PolicyId { get; set; }
```

- *Type:* double

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#policy_id AlertCompoundCondition#policy_id}

---

##### `TriggerExpression`<sup>Required</sup> <a name="TriggerExpression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.triggerExpression"></a>

```csharp
public string TriggerExpression { get; set; }
```

- *Type:* string

Expression that defines how component condition evaluations are combined.

Valid operators are 'AND', 'OR', 'NOT'. For more complex expressions, use parentheses. Simple example: 'A AND B'. Complex example: 'A AND (B OR C) AND NOT D'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#trigger_expression AlertCompoundCondition#trigger_expression}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID for managing your compound alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#account_id AlertCompoundCondition#account_id}

---

##### `FacetMatchingBehavior`<sup>Optional</sup> <a name="FacetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.facetMatchingBehavior"></a>

```csharp
public string FacetMatchingBehavior { get; set; }
```

- *Type:* string

How the compound condition will take into account the component conditions' facets during evaluation.

Valid values: 'FACETS_IGNORED' (default) - facets are not taken into consideration when determining when the compound alert condition activates; 'FACETS_MATCH' - the compound alert condition will activate only when shared facets have matching values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#facet_matching_behavior AlertCompoundCondition#facet_matching_behavior}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RunbookUrl`<sup>Optional</sup> <a name="RunbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.runbookUrl"></a>

```csharp
public string RunbookUrl { get; set; }
```

- *Type:* string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#runbook_url AlertCompoundCondition#runbook_url}

---

##### `ThresholdDuration`<sup>Optional</sup> <a name="ThresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.thresholdDuration"></a>

```csharp
public double ThresholdDuration { get; set; }
```

- *Type:* double

The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate.

Between 30-86400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#threshold_duration AlertCompoundCondition#threshold_duration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.timeouts"></a>

```csharp
public AlertCompoundConditionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#timeouts AlertCompoundCondition#timeouts}

---

### AlertCompoundConditionTimeouts <a name="AlertCompoundConditionTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new AlertCompoundConditionTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertCompoundConditionComponentConditionsList <a name="AlertCompoundConditionComponentConditionsList" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new AlertCompoundConditionComponentConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get"></a>

```csharp
private AlertCompoundConditionComponentConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.internalValue"></a>

```csharp
public IResolvable|AlertCompoundConditionComponentConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]

---


### AlertCompoundConditionComponentConditionsOutputReference <a name="AlertCompoundConditionComponentConditionsOutputReference" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new AlertCompoundConditionComponentConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AlertCompoundConditionComponentConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>

---


### AlertCompoundConditionTimeoutsOutputReference <a name="AlertCompoundConditionTimeoutsOutputReference" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new AlertCompoundConditionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AlertCompoundConditionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---



