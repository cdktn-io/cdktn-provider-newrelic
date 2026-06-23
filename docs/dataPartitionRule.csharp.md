# `dataPartitionRule` Submodule <a name="`dataPartitionRule` Submodule" id="@cdktn/provider-newrelic.dataPartitionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPartitionRule <a name="DataPartitionRule" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule newrelic_data_partition_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataPartitionRule(Construct Scope, string Id, DataPartitionRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig">DataPartitionRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig">DataPartitionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.putTimeouts"></a>

```csharp
private void PutTimeouts(DataPartitionRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts">DataPartitionRuleTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataPartitionRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataPartitionRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataPartitionRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataPartitionRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataPartitionRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataPartitionRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPartitionRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPartitionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataPartitionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.deleted">Deleted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference">DataPartitionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.nrqlInput">NrqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.targetDataPartitionInput">TargetDataPartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts">DataPartitionRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.nrql">Nrql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.retentionPolicy">RetentionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.targetDataPartition">TargetDataPartition</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.deleted"></a>

```csharp
public IResolvable Deleted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.timeouts"></a>

```csharp
public DataPartitionRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference">DataPartitionRuleTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NrqlInput`<sup>Optional</sup> <a name="NrqlInput" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.nrqlInput"></a>

```csharp
public string NrqlInput { get; }
```

- *Type:* string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.retentionPolicyInput"></a>

```csharp
public string RetentionPolicyInput { get; }
```

- *Type:* string

---

##### `TargetDataPartitionInput`<sup>Optional</sup> <a name="TargetDataPartitionInput" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.targetDataPartitionInput"></a>

```csharp
public string TargetDataPartitionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.timeoutsInput"></a>

```csharp
public IResolvable|DataPartitionRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts">DataPartitionRuleTimeouts</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Nrql`<sup>Required</sup> <a name="Nrql" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.nrql"></a>

```csharp
public string Nrql { get; }
```

- *Type:* string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.retentionPolicy"></a>

```csharp
public string RetentionPolicy { get; }
```

- *Type:* string

---

##### `TargetDataPartition`<sup>Required</sup> <a name="TargetDataPartition" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.targetDataPartition"></a>

```csharp
public string TargetDataPartition { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPartitionRuleConfig <a name="DataPartitionRuleConfig" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataPartitionRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable Enabled,
    string Nrql,
    string RetentionPolicy,
    string TargetDataPartition,
    double AccountId = null,
    string Description = null,
    string Id = null,
    DataPartitionRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not this data partition rule is enabled. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.nrql">Nrql</a></code> | <code>string</code> | The NRQL to match events for this data partition rule. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.retentionPolicy">RetentionPolicy</a></code> | <code>string</code> | The retention policy of the data partition data. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.targetDataPartition">TargetDataPartition</a></code> | <code>string</code> | The name of the data partition where logs will be allocated once the rule is enabled. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.accountId">AccountId</a></code> | <code>double</code> | The account id associated with the data partition rule. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.description">Description</a></code> | <code>string</code> | The description of the data partition rule. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#id DataPartitionRule#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts">DataPartitionRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not this data partition rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#enabled DataPartitionRule#enabled}

---

##### `Nrql`<sup>Required</sup> <a name="Nrql" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.nrql"></a>

```csharp
public string Nrql { get; set; }
```

- *Type:* string

The NRQL to match events for this data partition rule.

Logs matching this criteria will be routed to the specified data partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#nrql DataPartitionRule#nrql}

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.retentionPolicy"></a>

```csharp
public string RetentionPolicy { get; set; }
```

- *Type:* string

The retention policy of the data partition data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#retention_policy DataPartitionRule#retention_policy}

---

##### `TargetDataPartition`<sup>Required</sup> <a name="TargetDataPartition" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.targetDataPartition"></a>

```csharp
public string TargetDataPartition { get; set; }
```

- *Type:* string

The name of the data partition where logs will be allocated once the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#target_data_partition DataPartitionRule#target_data_partition}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id associated with the data partition rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#account_id DataPartitionRule#account_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the data partition rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#description DataPartitionRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#id DataPartitionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleConfig.property.timeouts"></a>

```csharp
public DataPartitionRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts">DataPartitionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#timeouts DataPartitionRule#timeouts}

---

### DataPartitionRuleTimeouts <a name="DataPartitionRuleTimeouts" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataPartitionRuleTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#create DataPartitionRule#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.2/docs/resources/data_partition_rule#create DataPartitionRule#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataPartitionRuleTimeoutsOutputReference <a name="DataPartitionRuleTimeoutsOutputReference" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataPartitionRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts">DataPartitionRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataPartitionRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-newrelic.dataPartitionRule.DataPartitionRuleTimeouts">DataPartitionRuleTimeouts</a>

---



