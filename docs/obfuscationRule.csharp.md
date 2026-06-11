# `obfuscationRule` Submodule <a name="`obfuscationRule` Submodule" id="@cdktn/provider-newrelic.obfuscationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObfuscationRule <a name="ObfuscationRule" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule newrelic_obfuscation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ObfuscationRule(Construct Scope, string Id, ObfuscationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig">ObfuscationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig">ObfuscationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.putAction"></a>

```csharp
private void PutAction(IResolvable|ObfuscationRuleAction[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.putAction.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObfuscationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

ObfuscationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

ObfuscationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

ObfuscationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

ObfuscationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ObfuscationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObfuscationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObfuscationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ObfuscationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList">ObfuscationRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.action"></a>

```csharp
public ObfuscationRuleActionList Action { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList">ObfuscationRuleActionList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.actionInput"></a>

```csharp
public IResolvable|ObfuscationRuleAction[] ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObfuscationRuleAction <a name="ObfuscationRuleAction" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ObfuscationRuleAction {
    string[] Attribute,
    string ExpressionId,
    string Method
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.attribute">Attribute</a></code> | <code>string[]</code> | Attribute names for action. An empty list applies the action to all the attributes. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.expressionId">ExpressionId</a></code> | <code>string</code> | Expression Id for action. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.method">Method</a></code> | <code>string</code> | Obfuscation method to use. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.attribute"></a>

```csharp
public string[] Attribute { get; set; }
```

- *Type:* string[]

Attribute names for action. An empty list applies the action to all the attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#attribute ObfuscationRule#attribute}

---

##### `ExpressionId`<sup>Required</sup> <a name="ExpressionId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.expressionId"></a>

```csharp
public string ExpressionId { get; set; }
```

- *Type:* string

Expression Id for action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#expression_id ObfuscationRule#expression_id}

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Obfuscation method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#method ObfuscationRule#method}

---

### ObfuscationRuleConfig <a name="ObfuscationRuleConfig" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ObfuscationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ObfuscationRuleAction[] Action,
    bool|IResolvable Enabled,
    string Filter,
    string Name,
    double AccountId = null,
    string Description = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.action">Action</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]</code> | action block. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the rule should be applied or not to incoming data. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.filter">Filter</a></code> | <code>string</code> | NRQL for determining whether a given log record should have obfuscation actions applied. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.name">Name</a></code> | <code>string</code> | Name of rule. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.accountId">AccountId</a></code> | <code>double</code> | The account id associated with the obfuscation rule. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.description">Description</a></code> | <code>string</code> | Description of rule. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#id ObfuscationRule#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.action"></a>

```csharp
public IResolvable|ObfuscationRuleAction[] Action { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#action ObfuscationRule#action}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the rule should be applied or not to incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#enabled ObfuscationRule#enabled}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

NRQL for determining whether a given log record should have obfuscation actions applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#filter ObfuscationRule#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#name ObfuscationRule#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id associated with the obfuscation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#account_id ObfuscationRule#account_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#description ObfuscationRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/obfuscation_rule#id ObfuscationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ObfuscationRuleActionList <a name="ObfuscationRuleActionList" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ObfuscationRuleActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.get"></a>

```csharp
private ObfuscationRuleActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.internalValue"></a>

```csharp
public IResolvable|ObfuscationRuleAction[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]

---


### ObfuscationRuleActionOutputReference <a name="ObfuscationRuleActionOutputReference" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new ObfuscationRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.expressionIdInput">ExpressionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.attribute">Attribute</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.expressionId">ExpressionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.attributeInput"></a>

```csharp
public string[] AttributeInput { get; }
```

- *Type:* string[]

---

##### `ExpressionIdInput`<sup>Optional</sup> <a name="ExpressionIdInput" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.expressionIdInput"></a>

```csharp
public string ExpressionIdInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.attribute"></a>

```csharp
public string[] Attribute { get; }
```

- *Type:* string[]

---

##### `ExpressionId`<sup>Required</sup> <a name="ExpressionId" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.expressionId"></a>

```csharp
public string ExpressionId { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObfuscationRuleAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>

---



