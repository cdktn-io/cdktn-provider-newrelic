# `scorecardRule` Submodule <a name="`scorecardRule` Submodule" id="@cdktn/provider-newrelic.scorecardRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScorecardRule <a name="ScorecardRule" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule newrelic_scorecard_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ScorecardRule(Construct Scope, string Id, ScorecardRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig">ScorecardRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig">ScorecardRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine">PutNrqlEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetImpactWeight">ResetImpactWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetProgressLevel">ResetProgressLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetRunInterval">ResetRunInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNrqlEngine` <a name="PutNrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine"></a>

```csharp
private void PutNrqlEngine(ScorecardRuleNrqlEngine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags"></a>

```csharp
private void PutTags(IResolvable|ScorecardRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ScorecardRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImpactWeight` <a name="ResetImpactWeight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetImpactWeight"></a>

```csharp
private void ResetImpactWeight()
```

##### `ResetProgressLevel` <a name="ResetProgressLevel" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetProgressLevel"></a>

```csharp
private void ResetProgressLevel()
```

##### `ResetRunInterval` <a name="ResetRunInterval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetRunInterval"></a>

```csharp
private void ResetRunInterval()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ScorecardRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

ScorecardRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

ScorecardRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

ScorecardRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

ScorecardRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ScorecardRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ScorecardRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ScorecardRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ScorecardRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngine">NrqlEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference">ScorecardRuleNrqlEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList">ScorecardRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference">ScorecardRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeightInput">ImpactWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngineInput">NrqlEngineInput</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevelInput">ProgressLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runIntervalInput">RunIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeight">ImpactWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevel">ProgressLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runInterval">RunInterval</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NrqlEngine`<sup>Required</sup> <a name="NrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngine"></a>

```csharp
public ScorecardRuleNrqlEngineOutputReference NrqlEngine { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference">ScorecardRuleNrqlEngineOutputReference</a>

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tags"></a>

```csharp
public ScorecardRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList">ScorecardRuleTagsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeouts"></a>

```csharp
public ScorecardRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference">ScorecardRuleTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImpactWeightInput`<sup>Optional</sup> <a name="ImpactWeightInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeightInput"></a>

```csharp
public double ImpactWeightInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NrqlEngineInput`<sup>Optional</sup> <a name="NrqlEngineInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngineInput"></a>

```csharp
public ScorecardRuleNrqlEngine NrqlEngineInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---

##### `ProgressLevelInput`<sup>Optional</sup> <a name="ProgressLevelInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevelInput"></a>

```csharp
public string ProgressLevelInput { get; }
```

- *Type:* string

---

##### `RunIntervalInput`<sup>Optional</sup> <a name="RunIntervalInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runIntervalInput"></a>

```csharp
public double RunIntervalInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tagsInput"></a>

```csharp
public IResolvable|ScorecardRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeoutsInput"></a>

```csharp
public IResolvable|ScorecardRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImpactWeight`<sup>Required</sup> <a name="ImpactWeight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeight"></a>

```csharp
public double ImpactWeight { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProgressLevel`<sup>Required</sup> <a name="ProgressLevel" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevel"></a>

```csharp
public string ProgressLevel { get; }
```

- *Type:* string

---

##### `RunInterval`<sup>Required</sup> <a name="RunInterval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runInterval"></a>

```csharp
public double RunInterval { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ScorecardRuleConfig <a name="ScorecardRuleConfig" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ScorecardRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable Enabled,
    string Name,
    ScorecardRuleNrqlEngine NrqlEngine,
    string Description = null,
    string Id = null,
    double ImpactWeight = null,
    string ProgressLevel = null,
    double RunInterval = null,
    IResolvable|ScorecardRuleTags[] Tags = null,
    ScorecardRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this rule is active. Set to false to pause evaluation without deleting the rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the scorecard rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.nrqlEngine">NrqlEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | nrql_engine block. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.description">Description</a></code> | <code>string</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#id ScorecardRule#id}. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.impactWeight">ImpactWeight</a></code> | <code>double</code> | Relative weight of this rule's contribution to the overall scorecard score. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.progressLevel">ProgressLevel</a></code> | <code>string</code> | The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.runInterval">RunInterval</a></code> | <code>double</code> | Evaluation frequency in minutes. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]</code> | tags block. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this rule is active. Set to false to pause evaluation without deleting the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#enabled ScorecardRule#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the scorecard rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#name ScorecardRule#name}

---

##### `NrqlEngine`<sup>Required</sup> <a name="NrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.nrqlEngine"></a>

```csharp
public ScorecardRuleNrqlEngine NrqlEngine { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

nrql_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#nrql_engine ScorecardRule#nrql_engine}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#description ScorecardRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#id ScorecardRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImpactWeight`<sup>Optional</sup> <a name="ImpactWeight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.impactWeight"></a>

```csharp
public double ImpactWeight { get; set; }
```

- *Type:* double

Relative weight of this rule's contribution to the overall scorecard score.

Must be a non-negative integer. Omit for equal weighting across all rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#impact_weight ScorecardRule#impact_weight}

---

##### `ProgressLevel`<sup>Optional</sup> <a name="ProgressLevel" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.progressLevel"></a>

```csharp
public string ProgressLevel { get; set; }
```

- *Type:* string

The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#progress_level ScorecardRule#progress_level}

---

##### `RunInterval`<sup>Optional</sup> <a name="RunInterval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.runInterval"></a>

```csharp
public double RunInterval { get; set; }
```

- *Type:* double

Evaluation frequency in minutes.

Must be one of: 60 (hourly), 360 (6h), 720 (12h), 1440 (daily). Omit to use the API default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#run_interval ScorecardRule#run_interval}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.tags"></a>

```csharp
public IResolvable|ScorecardRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#tags ScorecardRule#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.timeouts"></a>

```csharp
public ScorecardRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#timeouts ScorecardRule#timeouts}

---

### ScorecardRuleNrqlEngine <a name="ScorecardRuleNrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ScorecardRuleNrqlEngine {
    double[] Accounts,
    string Query,
    double[] JoinAccounts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.accounts">Accounts</a></code> | <code>double[]</code> | Account IDs where this rule runs. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.query">Query</a></code> | <code>string</code> | The NRQL query. Must be FACET-ed and alias the result as 'score'. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.joinAccounts">JoinAccounts</a></code> | <code>double[]</code> | Additional account IDs to join with the query accounts. |

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.accounts"></a>

```csharp
public double[] Accounts { get; set; }
```

- *Type:* double[]

Account IDs where this rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#accounts ScorecardRule#accounts}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query. Must be FACET-ed and alias the result as 'score'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#query ScorecardRule#query}

---

##### `JoinAccounts`<sup>Optional</sup> <a name="JoinAccounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.joinAccounts"></a>

```csharp
public double[] JoinAccounts { get; set; }
```

- *Type:* double[]

Additional account IDs to join with the query accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#join_accounts ScorecardRule#join_accounts}

---

### ScorecardRuleTags <a name="ScorecardRuleTags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ScorecardRuleTags {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.values">Values</a></code> | <code>string[]</code> | The tag values. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#key ScorecardRule#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#values ScorecardRule#values}

---

### ScorecardRuleTimeouts <a name="ScorecardRuleTimeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ScorecardRuleTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#create ScorecardRule#create}. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#update ScorecardRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#create ScorecardRule#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#update ScorecardRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScorecardRuleNrqlEngineOutputReference <a name="ScorecardRuleNrqlEngineOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ScorecardRuleNrqlEngineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resetJoinAccounts">ResetJoinAccounts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJoinAccounts` <a name="ResetJoinAccounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resetJoinAccounts"></a>

```csharp
private void ResetJoinAccounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accountsInput">AccountsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccountsInput">JoinAccountsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accounts">Accounts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccounts">JoinAccounts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accountsInput"></a>

```csharp
public double[] AccountsInput { get; }
```

- *Type:* double[]

---

##### `JoinAccountsInput`<sup>Optional</sup> <a name="JoinAccountsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccountsInput"></a>

```csharp
public double[] JoinAccountsInput { get; }
```

- *Type:* double[]

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accounts"></a>

```csharp
public double[] Accounts { get; }
```

- *Type:* double[]

---

##### `JoinAccounts`<sup>Required</sup> <a name="JoinAccounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccounts"></a>

```csharp
public double[] JoinAccounts { get; }
```

- *Type:* double[]

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.internalValue"></a>

```csharp
public ScorecardRuleNrqlEngine InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---


### ScorecardRuleTagsList <a name="ScorecardRuleTagsList" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ScorecardRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get"></a>

```csharp
private ScorecardRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|ScorecardRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]

---


### ScorecardRuleTagsOutputReference <a name="ScorecardRuleTagsOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ScorecardRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScorecardRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>

---


### ScorecardRuleTimeoutsOutputReference <a name="ScorecardRuleTimeoutsOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ScorecardRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScorecardRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

---



